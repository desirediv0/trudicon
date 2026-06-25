"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  ShieldCheck,
  MapPinned,
  Scale,
  Check,
  CheckCircle2,
  ArrowRight,
  Database,
  Lock,
  RefreshCw,
  FileCheck2
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

const infra = [
  "Controlled access",
  "Data protection",
  "System reliability",
  "Operational continuity",
];

const fieldItems = [
  "Accuracy",
  "Accountability",
  "Responsible Information Handling",
];

export function DataProtectionClient() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background Graphic Patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] select-none z-0">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dp-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#4B21B8" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dp-grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
        {/* HERO SECTION */}
        <section className="relative min-h-[75vh] flex items-center py-20 lg:py-0 border-b border-border">
          <div className="grid gap-12 lg:grid-cols-12 items-center w-full">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-semibold text-primary uppercase tracking-wider">
                <Cloud className="h-3.5 w-3.5" />
                Data Protection
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Data Protection &amp; Privacy
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                Protecting Sensitive Information Through Secure Infrastructure &amp; Responsible Operations
              </p>

            </motion.div>

            {/* Right Large Privacy Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6"
            >
              <ImagePlaceholder
                icon={ShieldCheck}
                text="Data Protection Infrastructure"
                aspectRatio="aspect-[4/3]"
                className="shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
                src="/data-protection-privacy.jpg"
              />
            </motion.div>
          </div>
        </section>

        {/* SECTION 1: SECURE INFORMATION HANDLING FRAMEWORK */}
        <section className="py-14 md:py-16 border-b border-border">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16"
          >
            <div className="grid gap-12 lg:grid-cols-12 items-start">
              <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 border border-primary/10 text-primary">
                  <Cloud className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Secure Information Handling Framework
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p className="font-medium text-foreground">
                    Protecting client information is fundamental to maintaining trust.
                  </p>
                  <p>
                    Trudicon follows a privacy-focused approach designed to safeguard sensitive personal, corporate, and institutional information throughout the engagement lifecycle.
                  </p>
                  <p>
                    Our digital infrastructure is hosted on secure cloud-based systems that provide comprehensive technical safeguards.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="lg:col-span-5">
                <ImagePlaceholder
                  icon={Database}
                  text="Infrastructure Placeholder"
                  aspectRatio="aspect-[16/10]"
                  className="shadow-sm"
                  src="/secure-information-handling-framework.jpg"
                />
              </motion.div>
            </div>

            {/* 4 Protection Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Controlled Access", desc: "Access is restricted to authorized analysts on a strict need-to-know basis.", icon: Lock },
                { title: "Data Protection", desc: "Encrypted data storage and secure information transfer layers.", icon: ShieldCheck },
                { title: "Reliability", desc: "Secure and stable network infrastructure with high uptime guarantees.", icon: CheckCircle2 },
                { title: "Operational Continuity", desc: "Comprehensive system disaster recovery and failover systems.", icon: RefreshCw },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    variants={itemVariants}
                    className="p-6 rounded-[24px] border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_12px_24px_rgba(75,33,184,0.06)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/5 text-primary mb-5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground tracking-tight">{card.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* SECTION 2: SECURE CLOUD INFRASTRUCTURE */}
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
                Cloud Architecture
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Secure Cloud Infrastructure
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Our digital infrastructure is hosted on secure cloud-based systems. This enables the secure management of assignments, documentation, and reporting while maintaining appropriate safeguards against unauthorized access and data loss.
                </p>
              </div>

              {/* original infra checklist */}
              <ul className="grid gap-3 sm:grid-cols-2 mt-4 font-semibold text-foreground">
                {infra.map((i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2.5 text-sm"
                  >
                    <Check className="h-4 w-4 text-primary flex-none" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>

              {/* Interactive Dashboard Mini Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: "Secure Hosting", val: "Encrypted Storage" },
                  { label: "Protected Data", val: "Analyst-Only Access" },
                  { label: "Operational Continuity", val: "Redundant Backups" },
                  { label: "Controlled Access", val: "Clearance Level 2" },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-border bg-[#F8FAFC]/50 flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{item.label}</span>
                    <span className="text-xs font-bold text-primary mt-1">{item.val}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Cloud Infrastructure Placeholder */}
            <motion.div variants={itemVariants} className="lg:col-span-6">
              <ImagePlaceholder
                icon={Cloud}
                text="Cloud Infrastructure Placeholder"
                aspectRatio="aspect-[4/3]"
                className="shadow-[0_20px_40px_rgba(0,0,0,0.03)]"
                src="/information-security-management.jpg"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* SECTION 3: FIELD OPERATIONS SECURITY */}
        <section className="py-14 md:py-16 border-b border-border">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-12 lg:grid-cols-12 items-center"
          >
            {/* Left Field Operations Placeholder */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <ImagePlaceholder
                icon={MapPinned}
                text="Field Operations Placeholder"
                aspectRatio="aspect-[4/3]"
                className="shadow-sm"
                src="/field-operations-security.jpg"
              />
            </motion.div>

            {/* Right Content */}
            <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 border border-primary/10 text-primary">
                <MapPinned className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Field Operations Security
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p className="font-semibold text-foreground">
                  Trained and verified field personnel operate under defined protocols, reporting standards, and quality control measures.
                </p>
                <p>
                  Every field activity is subject to structured oversight to promote operational excellence and security compliance.
                </p>
              </div>

              {/* original field items as badges */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {fieldItems.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 uppercase tracking-wide"
                  >
                    <Check className="h-3.5 w-3.5 text-primary" />
                    {item}
                  </span>
                ))}
              </div>

              {/* 4 Process Cards */}
              <div className="grid gap-4 sm:grid-cols-2 pt-4">
                {[
                  { title: "Trained Personnel", desc: "Rigorous background checks and data privacy training for all agents." },
                  { title: "Reporting Standards", desc: "Structured reporting guidelines ensuring absolute clarity." },
                  { title: "Quality Control", desc: "Multi-layered inspection of field cases before compilation." },
                  { title: "Structured Oversight", desc: "Continuous supervisory audits for all operational files." },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl border border-border bg-white flex flex-col justify-between transition-colors duration-200 hover:border-primary/20">
                    <span className="text-xs font-bold text-foreground uppercase tracking-wider">{item.title}</span>
                    <span className="text-xs text-muted-foreground mt-1">{item.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* SECTION 4: PRIVACY COMMITMENT SECTION */}
        <section className="py-14 md:py-16 border-b border-border">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16"
          >
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Privacy Commitment
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground font-medium max-w-3xl mx-auto">
                Our approach is designed to ensure that information remains protected, accurate, and accessible only to those authorized to use it, supporting the privacy and security expectations of diplomatic missions, corporations, educational institutions, and other high-trust organizations.
              </p>
            </div>

            {/* Surrounding Trust Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {[
                { title: "Protection", desc: "End-to-end encryption protocols securing sensitive documents." },
                { title: "Accuracy", desc: "Double-blind validation models guaranteeing fact correctness." },
                { title: "Authorization", desc: "Documented explicit mandate consent prior to audits." },
                { title: "Security", desc: "Constant alignment with international information security frameworks." },
              ].map((card) => (
                <div
                  key={card.title}
                  className="p-6 rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary"
                >
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">{card.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SECTION 5: LEGAL & REGULATORY AWARENESS */}
        <section className="py-14 md:py-16 border-b border-border">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-12 lg:grid-cols-12 items-center"
          >
            {/* Left Content */}
            <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 border border-primary/10 text-primary">
                <Scale className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Legal &amp; Regulatory Awareness
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Trudicon monitors applicable data protection, privacy, and regulatory requirements and incorporates relevant controls into its operational processes.
                </p>
              </div>

              {/* Compliance Cards */}
              <div className="grid gap-4 sm:grid-cols-2 pt-2">
                {[
                  { label: "DPDPA Alignment", desc: "Continuous monitoring of India's Digital Personal Data Protection Act compliance requirements." },
                  { label: "Secure Auditable Trails", desc: "Maintains clear log protocols to confirm regulatory compliance throughout mandates." },
                ].map((item) => (
                  <div key={item.label} className="p-5 rounded-xl border border-border bg-white flex flex-col justify-between">
                    <span className="text-xs font-bold text-foreground uppercase tracking-wider">{item.label}</span>
                    <span className="text-xs text-muted-foreground mt-2 leading-relaxed">{item.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Compliance Placeholder */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <ImagePlaceholder
                icon={FileCheck2}
                text="Privacy & Governance Visual"
                aspectRatio="aspect-[16/10]"
                className="shadow-sm"
                src="/legal-regulatory-awareness.jpg"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* SECTION 6: FINAL CTA */}
        <section className="py-14 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[32px] border border-border bg-white p-8 md:p-16 text-center max-w-4xl mx-auto space-y-8 shadow-[0_12px_36px_rgba(0,0,0,0.03)]"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Protecting Information Through Responsible Governance
              </h2>
              <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Connect with our team to configure verification pathways aligned with your compliance, privacy, and statutory data guidelines.
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
                Contact Team
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
