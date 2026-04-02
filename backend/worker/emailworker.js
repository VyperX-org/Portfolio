import { Worker } from "bullmq";
import IORedis from "ioredis";
import SibApiV3Sdk from "sib-api-v3-sdk";

const connection = new IORedis(process.env.REDIS_URL);

const client = SibApiV3Sdk.ApiClient.instance;
client.authentications["api-key"].apiKey = process.env.EMAIL_API_KEY;

const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();

new Worker(
  "emailQueue",
  async (job) => {
    const {
      email,
      name,
      formattedPlans,
      totalOriginal,
      totalDiscounted,
      totalSavings,
    } = job.data;

    const validPlans = formattedPlans.filter(
      (p) => Number(p.discountedPrice) > 0
    );

    const plansListHTML = validPlans
      .map(
        (p) =>
          `<li><b>${p.name}</b> (${p.tier}) - ₹${p.discountedPrice}</li>`
      )
      .join("");

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.sender = {
      name: "VyperX",
      email: "welcome@vyperx.in",
    };

    sendSmtpEmail.to = [{ email, name }];
    sendSmtpEmail.subject = "Welcome to VyperX 🚀";

    sendSmtpEmail.htmlContent = `
      <h2>Welcome ${name}</h2>
      <p>We’ve received your request.</p>
      ${
        validPlans.length > 0
          ? `<ul>${plansListHTML}</ul>`
          : ""
      }
    `;

    await emailApi.sendTransacEmail(sendSmtpEmail);

    console.log("✅ Email sent to:", email);
  },
  {
    connection,
    attempts: 5, // 🔥 retry 5 times
    backoff: {
      type: "exponential",
      delay: 5000, // 5s → 10s → 20s...
    },
  }
);