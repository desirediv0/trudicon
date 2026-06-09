"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import {
  Radar,
  Search,
  Layers,
  MapPinned,
  Languages,
  FileLock2,
  Building2,
  Landmark,
  Users,
  Plane,
  Scale,
  ShieldCheck,
  Award,
  ArrowRight,
  Sparkles,
  Lock,
  Globe,
  Briefcase
} from "lucide-react";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import Link from "next/link";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const floatVariants = (delay: number) => ({
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
      delay,
    },
  },
});

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const approach = [
  { icon: Radar, title: "Ground Intelligence Verification", desc: "Field inquiries conducted by trained specialists to verify facts at the source." },
  { icon: Search, title: "Field Investigation Protocols", desc: "Strict investigative pathways ensuring structured and auditable factual evidence." },
  { icon: Layers, title: "Multi-Source Authentication Systems", desc: "Triangulating databases, public records, and physical checks for accuracy." },
  { icon: MapPinned, title: "Pan-India Deployment Capability", desc: "Operational reach spanning metro centers, Tier-2 cities, and remote rural locations." },
  { icon: Languages, title: "Local-Language Field Operations", desc: "Bilingual investigators resolving regional variations and local-record intricacies." },
  { icon: FileLock2, title: "Secure Reporting & Confidentiality Processes", desc: "Restricted database access and encrypted channels for client reports." },
];

const industries = [
  { icon: Landmark, title: "Diplomatic Missions & Embassies", desc: "Verification dossiers tailored to visa, consular, and administrative protocols." },
  { icon: Building2, title: "Consulates & Visa Sections", desc: "Authentication services for primary applicant validation." },
  { icon: Users, title: "Corporate HR & Compliance Teams", desc: "Pre-employment verification and corporate governance checks." },
  { icon: Plane, title: "Immigration & Mobility Services", desc: "Regulatory records checks and operational verification pipelines." },
  { icon: Scale, title: "Legal & Risk Advisory Firms", desc: "Due diligence and structured factual support for advisory mandates." },
];

export function AboutClient() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] select-none z-0">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="about-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#4B21B8" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
        {/* HERO SECTION */}
        <section className="relative min-h-[80vh] flex items-center py-20 lg:py-0 border-b border-border">
          <div className="grid gap-12 lg:grid-cols-12 items-center w-full">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-semibold text-primary uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                About Trudicon
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                About Trudicon Consultancy Services
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                Specialized Due Diligence &amp; Background Verification Across India
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/95 text-white font-semibold text-sm px-6 py-3 rounded-full shadow-lg shadow-primary/10 transition-all duration-200"
                >
                  Request Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-white hover:bg-slate-50 border border-border text-foreground font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200"
                >
                  Contact Team
                </Link>
              </div>

              {/* Floating badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
                {[
                  { text: "08+ Years Exp", icon: Award, delay: 0.1 },
                  { text: "Pan India", icon: MapPinned, delay: 0.3 },
                  { text: "Confidential", icon: Lock, delay: 0.5 },
                  { text: "Diplomatic Grade", icon: ShieldCheck, delay: 0.7 }
                ].map((badge, idx) => {
                  const Icon = badge.icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={floatVariants(badge.delay)}
                      animate="animate"
                      className="p-3 rounded-xl border border-border bg-white shadow-sm flex items-center gap-2"
                    >
                      <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-[10px] font-bold text-foreground uppercase tracking-wider">{badge.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Large Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6"
            >
              <ImagePlaceholder
                icon={Briefcase}
                text="About Company Image"
                aspectRatio="aspect-[4/3]"
                className="shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
                src="/about-trudicon-consultancy-services.jpg"
              />
            </motion.div>
          </div>
        </section>

        {/* SECTION 1: COMPANY OVERVIEW */}
        <section className="py-14 md:py-16 border-b border-border">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-12 lg:grid-cols-12 items-center"
          >
            {/* Left Large Corporate Image Placeholder */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <ImagePlaceholder
                icon={Building2}
                text="Field Investigation Team"
                aspectRatio="aspect-[16/10]"
                className="shadow-sm"
                src="/field-operations-security.jpg"
              />
            </motion.div>

            {/* Right Content */}
            <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Company Overview
              </h2>
              <div className="space-y-6 text-base leading-relaxed text-muted-foreground max-w-2xl font-semibold">
                <p className="text-foreground font-semibold">
                  Trudicon Consultancy Services is a specialized due diligence and background verification firm specializing in consular risk mitigation, delivering secure, confidential, and field-driven verification solutions across India.
                </p>
                <p className="font-medium">
                  For over 08 years, we have supported diplomatic missions, consular offices, multinational corporations, and institutional clients with advanced investigative and verification services.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* SECTION 2: EXPERIENCE HIGHLIGHT (METRICS ROW) */}
        <section className="py-14 md:py-16 border-b border-border bg-[#F8FAFC]/30 rounded-[32px] my-12 px-8">
          <div className="grid gap-8 grid-cols-2 lg:grid-cols-4 text-center">
            {[
              { val: 8, suffix: "+", label: "Years Experience" },
              { val: 100, suffix: "%", label: "Pan India Coverage" },
              { val: 150, suffix: "+", label: "High Trust Organizations" },
              { val: 10, suffix: "+", label: "Diplomatic Verification Standards" },
            ].map((metric, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight">
                  <AnimatedCounter value={metric.val} suffix={metric.suffix} />
                </div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: OPERATIONAL APPROACH */}
        <section className="py-14 md:py-16 border-b border-border">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16"
          >
            <div className="max-w-3xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Operational Approach
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                How we operate
              </h2>
            </div>

            {/* 3-Column operational card grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {approach.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    className="group relative p-8 rounded-[24px] border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_12px_24px_rgba(75,33,184,0.06)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary mb-6 transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5.5 w-5.5 transition-transform duration-300 group-hover:rotate-6" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                    <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      <span>Learn more</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* SECTION 4: OPERATIONS VISUALIZATION SECTION */}
        <section className="py-14 md:py-16 border-b border-border">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-12 lg:grid-cols-12 items-center"
          >
            {/* Left Content */}
            <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-semibold text-primary uppercase tracking-wider">
                Workflow
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Operations Visualization
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed font-semibold">
                An auditable structured verification workflow representing end-to-end operational transparency.
              </p>

              {/* Visual Process List */}
              <div className="relative pl-6 space-y-6 border-l border-border mt-8">
                {[
                  { title: "Intelligence", desc: "Source discovery and case context assembly." },
                  { title: "Verification", desc: "Rigorous checklist validation of data points." },
                  { title: "Investigation", desc: "Discreet ground-level investigation and verification." },
                  { title: "Risk Assessment", desc: "Compilation of reports against security benchmarks." },
                  { title: "Secure Reporting", desc: "Encryption and delivery to authorized stakeholders." }
                ].map((step, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white border border-primary text-[8px] font-bold text-primary shadow-sm">
                      {idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">{step.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{step.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Large Workflow Placeholder */}
            <motion.div variants={itemVariants} className="lg:col-span-6">
              <ImagePlaceholder
                icon={MapPinned}
                text="Pan India Operations"
                aspectRatio="aspect-[4/3]"
                className="shadow-[0_20px_40px_rgba(0,0,0,0.03)]"
                src="/operations-visualization.jpg"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* SECTION 5: INDUSTRIES WE SERVE */}
        <section className="py-14 md:py-16 border-b border-border">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16"
          >
            <div className="max-w-3xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Industries We Serve
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Sectors we support
              </h2>
            </div>

            {/* Luxury Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <motion.div
                    key={ind.title}
                    variants={itemVariants}
                    className="p-8 rounded-[24px] border border-border bg-white shadow-sm flex items-start gap-4 transition-all duration-300 hover:border-primary hover:shadow-[0_12px_24px_rgba(75,33,184,0.06)] group"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground tracking-tight leading-snug">
                        {ind.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                        {ind.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* SECTION 6: WHY ORGANIZATIONS CHOOSE TRUDICON */}
        <section className="py-14 md:py-16 border-b border-border">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16"
          >
            <div className="max-w-3xl space-y-4 text-center mx-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Why Us
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Organizations Choose Trudicon
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {[
                { title: "Confidentiality", desc: "Rigorous standards for restricting document exposure and managing cases privately.", icon: Lock },
                { title: "Reliability", desc: "Delivering factual verification and ground reports that stand up to institutional scrutiny.", icon: ShieldCheck },
                { title: "Pan India Reach", desc: "Operational capabilities covering remote locations, Tier-3 cities, and metro hubs.", icon: Globe },
                { title: "Structured Verification", desc: "Standard operating procedures designed to guarantee audit consistency.", icon: Award },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="p-6 rounded-2xl border border-border bg-white shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-primary"
                  >
                    <div>
                      <div className="h-8 w-8 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-4">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">{card.title}</h3>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* SECTION 7: FINAL CTA */}
        <section className="py-14 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[32px] border border-border bg-white p-8 md:p-16 text-center max-w-4xl mx-auto space-y-8 shadow-[0_12px_36px_rgba(0,0,0,0.03)]"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 text-primary">
              <Award className="h-6 w-6" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Trusted Intelligence. Secure Verification.
              </h2>
              <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Connect with our advisors to configure specialized verification mandates tailored for your diplomatic, visa, or corporate compliance targets.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/95 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-primary/10 transition-all duration-200 hover:scale-[1.02]"
              >
                Request Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white hover:bg-slate-50 border border-border text-foreground font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
