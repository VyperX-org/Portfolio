import dotenv from "dotenv";
import express from "express";
import Order from "../models/contactForm.js";
import { emailQueue } from "../queue/emailQueue.js";

dotenv.config();

import SibApiV3Sdk from 'sib-api-v3-sdk';

const client = SibApiV3Sdk.ApiClient.instance;
const apiKey = client.authentications['api-key'];
apiKey.apiKey = process.env.EMAIL_API_KEY;

const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();

const router = express.Router();

router.post("/connect", async (req, res) => {
  try {
    const { name,
    email,
    phone,
    business,
    businessSector,
    service,
    message,
    plans,
    totalOriginal,
    totalDiscounted } = req.body;    

   const safePlans = Array.isArray(plans) ? plans : [];

    if (!email || !name) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    if (
      typeof totalOriginal !== "number" ||
      typeof totalDiscounted !== "number"
    ) {
      return res.status(400).json({ error: "Invalid totals" });
    }

    const totalSavings = totalOriginal - totalDiscounted;

    const formattedPlans = safePlans.map((p) => ({
      name: p.name,
      tier: p.tier,
      tagline: p.tagline,
      price: p.price,
      discountedPrice: p.discountedPrice,
      period: p.period || null,
      bestFor: Array.isArray(p.bestFor) ? p.bestFor.join(", ") : p.bestFor,
      sections: (p.sections || []).map((s) => {
        if (typeof s === "string") {
        try{
          return JSON.parse(s);
        }
        catch (err) {
          console.error("Invalid section JSON:", s);
          return null;
      }
    }
    return s;
  }).filter(Boolean),
    }));

    const order = await Order.create({
      name,
      email,
      phone,
      business,
      businessSector,
      service: service || "Not Specified",
      message,
      plans: formattedPlans,
      totalOriginal,
      totalDiscounted,
      totalSavings,
      submittedAt: new Date(),
    });

    const validPlans = formattedPlans.filter(
  (p) => Number(p.discountedPrice) > 0
);

const plansListHTML = validPlans
  .map(
    (p) => `<li><b>${p.name}</b> (${p.tier}) - ₹${p.discountedPrice}</li>`
  )
  .join("");

const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

sendSmtpEmail.sender = {
  name: "VyperX",
  email: "welcome@vyperx.in",
};

sendSmtpEmail.to = [
  {
    email: email,
    name: name,
  },
];

sendSmtpEmail.subject = "Welcome to VyperX 🚀";

sendSmtpEmail.textContent = `Hello ${name},

Welcome to VyperX — your growth journey starts now.

We’ve successfully received your request and selected plans. Our team is now preparing a tailored strategy designed specifically for your business.

Here’s what you can expect:
- A customized growth system aligned with your brand
- Execution support from our expert team
- A structured roadmap to scale your revenue and presence

${
  validPlans.length > 0
    ? `Total Investment: ₹${totalDiscounted}
Total Savings: ₹${totalSavings}`
    : ""
}

Our team will connect with you shortly to begin the next steps.

We’re excited to build and scale with you

– Team VyperX`;

sendSmtpEmail.htmlContent = `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    
    <h2 style="color: #6366f1;">🚀 Welcome to VyperX</h2>
    
    <p>Hello <b>${name}</b>,</p>
    
    <p>
      Welcome to <b>VyperX</b> — we’re excited to partner with you in building a powerful and scalable growth system for your brand.
    </p>

    <h3 style="margin-top: 20px;">📦 What You’ll Get</h3>
    <ul>
      <li>✔ A tailored growth strategy aligned with your business goals</li>
      <li>✔ High-converting systems designed to drive revenue</li>
      <li>✔ Dedicated execution and optimization support</li>
      <li>✔ Scalable frameworks to grow your brand sustainably</li>
    </ul>

    ${
      validPlans.length > 0
        ? `
    <h3 style="margin-top: 20px;">📋 Your Selected Plans</h3>
    <ul>${plansListHTML}</ul>

    <div style="margin-top: 20px; padding: 12px; background: #f9fafb; border-radius: 8px;">
      <p><b>Total Original:</b> ₹${totalOriginal}</p>
      <p><b>Total Paid:</b> ₹${totalDiscounted}</p>
      <p style="color: green;"><b>You Saved:</b> ₹${totalSavings}</p>
    </div>
    `
        : ""
    }

    <p style="margin-top: 20px;">
      Our team will reach out shortly to kickstart your onboarding and discuss the execution roadmap.
    </p>

    <p>
      If you have any questions, feel free to reply to this email — we’re here to help.
    </p>

    <p style="margin-top: 30px;">
      Welcome aboard,<br/>
      <b>Team VyperX</b>
    </p>

    <hr style="margin: 30px 0;" />

    <div style="text-align: center;">
      <img src="https://i.ibb.co/r2B8dd9Q/logo.jpg" alt="logo" />
      <p style="font-size: 12px; color: #888;">
        Building brands. Scaling growth.
      </p>
    </div>

  </div>
`;

await emailApi.sendTransacEmail(sendSmtpEmail);

    res.status(201).json({
      message: "Order placed & email sent successfully",
      orderId: order._id,
    });
    await emailQueue.add("sendEmail", {
    email,
    name,
    formattedPlans,
    totalOriginal,
    totalDiscounted,
    totalSavings,
  });

  } catch (err) {
    console.error("Order creation failed:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;