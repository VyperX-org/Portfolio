import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, TrendingUp, Sparkles, ExternalLink } from "lucide-react";

import canerClinicImg from "@/assets/clients/caner-clinic.jpeg";
import dmsImg from "@/assets/clients/dms.jpeg";
import mountviewImg from "@/assets/clients/mountview.jpeg";
import naturesImg from "@/assets/clients/natures.jpeg";
import srinitasImg from "@/assets/clients/srinitas.jpeg";

interface Client {
  id: string;
  name: string;
  displayName: string;
  industry: string;
  metric: string;
  metricLabel: string;
  service: string;
  image: string;
  quote: string;
  tag: string;
}

const clients: Client[] = [
  {
    id: "dms",
    name: "Devaki Memorial School",
    displayName: "Devaki Memorial School",
    industry: "School & Education",
    metric: "98.5%",
    metricLabel: "Parent Satisfaction",
    service: "Educational Website & Digital Communication",
    image: dmsImg,
    quote: "VyperX helped us establish a professional and accessible digital presence for our school. The improved website experience makes it easier for parents to explore our programs, access information, and connect with our institution.",
    tag: "School & Education",
  },
  {
    id: "srinitas",
    name: "Srinita's Fashion & Clothing",
    displayName: "Srinitas Fashion & Clothing",
    industry: "Fashion, Apparel & Lifestyle",
    metric: "+320%",
    metricLabel: "Lead Engagement",
    service: "Fashion UGC Videos & Social Media Strategy",
    image: srinitasImg,
    quote: "VyperX transformed how we showcase our collections and connect with fashion-conscious audiences. Authentic UGC videos and creative campaigns helped strengthen our brand presence and customer engagement.",
    tag: "Fashion & Clothing",
  },
  {
    id: "natures",
    name: "Nature's Narrative Travel",
    displayName: "Nature's Narrative Travel",
    industry: "Travel, Tourism & Experiences",
    metric: "4.2x",
    metricLabel: "Travel Enquiries",
    service: "Travel Website & Destination Marketing",
    image: naturesImg,
    quote: "VyperX helped us bring destinations to life through compelling visuals and targeted digital campaigns. Our enhanced online presence makes it easier for travellers to discover experiences and plan their next journey.",
    tag: "Travel & Tourism",
  },
  {
    id: "mountview",
    name: "Mountview - Tour and Travels",
    displayName: "Mountview Tours & Travels",
    industry: "Tours, Travels & Holiday Packages",
    metric: "+280%",
    metricLabel: "Booking Inquiries",
    service: "Travel Brand Strategy & Digital Marketing",
    image: mountviewImg,
    quote: "VyperX helped us showcase our tours and travel experiences through an engaging digital presence. Their creative approach made our destinations more appealing and helped us connect with travellers looking for memorable journeys.",
    tag: "Tours & Travels",
  },
  {
      id: "caner-clinic",
      name: "Cancer Clinic",
      displayName: "Cancer Clinic & Specialist Care",
      industry: "Specialized Healthcare & Oncology",
      metric: "5.4x",
      metricLabel: "Consultation Inquiries",
      service: "Healthcare Website & Patient Engagement",
      image: canerClinicImg,
      quote: "VyperX understood the importance of trust, empathy, and clear communication in specialized healthcare. Their digital strategy helped us present our services professionally and make essential information more accessible to patients and their families.",
      tag: "Specialist Clinic",
  },
  ];

const ClientsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Auto-slide effect every 4 seconds when not hovered/paused
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };

  const currentClient = clients[currentIndex];

  return (
    <>
    {/* <style>
      @media (max-width: 992px) {
        .mobile-button{
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    </style> */}
    <section id="clients" ref={ref} className="section-padding relative overflow-hidden bg-background">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[800px] h-[350px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-4 font-body">
            <Sparkles size={13} className="text-primary" />
            Client Case Studies
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Brands We've Scaled with <span className="text-gradient">Growth Systems</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg font-body">
            Explore the clients, medical centers, and brands partnering with VyperX for high-converting websites, UGC campaigns, and performance growth.
          </p>
        </motion.div>

        {/* Continuous Auto-Sliding Logo Ticker / Marquee */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/70 text-center mb-6 font-body">
            TRUSTED BY FORWARD-THINKING BRANDS & CLINICS
          </p>
          <div
            className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex w-max gap-8 py-3 animate-marquee hover:[animation-play-state:paused]">
              {[...clients, ...clients, ...clients, ...clients].map((client, idx) => (
                <div
                  key={`${client.id}-${idx}`}
                  className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-secondary/40 border border-border/70 hover:border-primary/40 hover:bg-secondary/70 transition-all duration-300 backdrop-blur-sm cursor-pointer"
                  onClick={() => setCurrentIndex(idx % clients.length)}
                >
                  <div className="w-8 h-8 rounded-lg overflow-hidden bg-background/50 border border-border/60 shrink-0 flex items-center justify-center">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-display font-bold text-foreground/90 tracking-wide text-sm sm:text-base">
                    {client.name}
                  </span>
                  <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-primary/10 text-primary font-body">
                    {client.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Client Auto-Slider Showcase */}
        <div
          className="relative rounded-2xl border border-border bg-gradient-to-br from-card via-card/90 to-primary/[0.03] p-6 sm:p-8 md:p-12 shadow-2xl backdrop-blur-sm"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slide Navigation Controls */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-border/80">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold font-body">
                Client Spotlight {currentIndex + 1} of {clients.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous client"
                className="w-10 h-10 rounded-lg border border-border bg-secondary/40 hover:bg-primary/10 hover:border-primary/40 text-foreground hover:text-primary transition-all flex items-center justify-center cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next client"
                className="w-10 h-10 rounded-lg border border-border bg-secondary/40 hover:bg-primary/10 hover:border-primary/40 text-foreground hover:text-primary transition-all flex items-center justify-center cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Slide Content */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Image Showcase */}
            <div className="lg:col-span-5 relative group">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] rounded-xl overflow-hidden border border-border/80 bg-secondary/30 shadow-lg">
                <img
                  src={currentClient.image}
                  alt={`${currentClient.name} client brand`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />

                {/* Overlaid Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-background/80 backdrop-blur-md border border-border text-foreground font-body">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {currentClient.tag}
                  </span>
                </div>

                {/* Overlaid Result Highlight */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-background/90 backdrop-blur-md border border-border/80 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-body">Verified Outcome</p>
                    <p className="text-xl sm:text-2xl font-display font-extrabold text-primary">{currentClient.metric}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-body">Key Focus</p>
                    <p className="text-xs font-semibold text-foreground font-body">{currentClient.metricLabel}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Details & Quote Content */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-primary/30 bg-secondary/50 shrink-0">
                    <img
                      src={currentClient.image}
                      alt={currentClient.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground">
                      {currentClient.displayName}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground font-body">
                      {currentClient.industry}
                    </p>
                  </div>
                </div>

                {/* Service Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/80 border border-border text-xs text-primary font-medium font-body mb-6">
                  <TrendingUp size={14} className="text-primary shrink-0" />
                  Service Delivered: {currentClient.service}
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-1 text-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="text-primary" />
                  ))}
                  <span className="text-xs text-muted-foreground ml-2 font-body font-medium">5.0 Client Rating</span>
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-base sm:text-lg md:text-xl font-body text-secondary-foreground leading-relaxed italic border-l-2 border-primary/60 pl-4 py-1 mb-8">
                  "{currentClient.quote}"
                </blockquote>
              </div>

              {/* Bottom Metrics Bar & CTAs */}
              <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground font-body">Primary Impact</p>
                    <p className="text-lg font-bold font-display text-gradient">{currentClient.metric}</p>
                  </div>
                  <div className="w-px h-8 bg-border" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground font-body">System</p>
                    <p className="text-sm font-semibold text-foreground font-body">{currentClient.tag}</p>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/30 transition-all text-xs sm:text-sm font-semibold font-body cursor-pointer mobile-button" >
                  Scale Your Brand Like This
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Pagination Dots with Progress Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-border/40">
            {clients.map((client, idx) => (
              <button
                key={client.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to client slide ${idx + 1}: ${client.name}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? "w-8 h-2 bg-primary"
                    : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ClientsSection;
