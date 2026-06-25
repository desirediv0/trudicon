"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  KeyRound,
  Gavel,
  UserCheck,
  Database,
  ClipboardCheck,
  FileLock2,
  Award,
  ArrowRight,
  Shield,
  FileCheck2,
  Activity
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
    y: [0, -8, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
      delay,
    },
  },
});

const highlights = [
  {
    icon: KeyRound,
    title: "Controlled Access",
    desc: "Access to client information is restricted to authorized personnel on a strict need-to-know basis.",
  },
  {
    icon: Lock,
    title: "Secure Processes",
    desc: "Every assignment is conducted with the highest standards of discretion and professional integrity.",
  },
  {
    icon: Gavel,
    title: "Governance Standards",
    desc: "Governance models aligned with internationally recognized information security management systems.",
  },
  {
    icon: UserCheck,
    title: "Professional Accountability",
    desc: "Structured oversight and documented compliance ownership throughout the engagement lifecycle.",
  },
];

const pillars = [
  {
    icon: KeyRound,
    title: "Controlled Access",
    desc: "Information is restricted exclusively to cleared analysts and field specialists.",
  },
  {
    icon: Database,
    title: "Data Integrity",
    desc: "Ensuring all gathered metrics are authentic, unaltered, and securely stored.",
  },
  {
    icon: ClipboardCheck,
    title: "Accountability",
    desc: "Strict adherence to predefined client protocols, audit trails, and review processes.",
  },
  {
    icon: FileLock2,
    title: "Responsible Information Management",
    desc: "Minimizing data exposure risks and implementing secure archival and deletion policies.",
  },
];

export function ComplianceSecurityClient() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background Graphic Patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] select-none z-0">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="security-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#4B21B8" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#security-grid)" />
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
                <Shield className="h-3.5 w-3.5" />
                Information Security
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Compliance, Security &amp; Confidentiality
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                Governance Framework Built on Trust, Accountability &amp; Information Security
              </p>

              {/* Floating Security Badges */}
              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  { text: "🔒 Need-to-Know Access", color: "bg-green-50 text-green-700 border-green-200" },
                  { text: "🛡️ ISO 27001 Aligned", color: "bg-primary/5 text-primary border-primary/10" },
                  { text: "📋 Secure Audit Trails", color: "bg-slate-50 text-slate-700 border-slate-200" }
                ].map((badge, idx) => (
                  <motion.div
                    key={idx}
                    variants={floatVariants(idx * 0.3)}
                    animate="animate"
                    className={`px-4 py-2 rounded-full border text-xs font-bold tracking-wide uppercase ${badge.color}`}
                  >
                    {badge.text}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Security Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6"
            >
              <ImagePlaceholder
                icon={Lock}
                text="Security Operations Image"
                aspectRatio="aspect-[4/3]"
                className="shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
                src="/compliance-security-confidentiality.jpg"
              />
            </motion.div>
          </div>
        </section>

        {/* SECTION 1: INFORMATION SECURITY */}
        <section className="py-14 md:py-16 border-b border-border">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16"
          >
            <div className="grid gap-12 lg:grid-cols-12 items-start">
              <motion.div variants={itemVariants} className="lg:col-span-5">
                <ImagePlaceholder
                  icon={ShieldCheck}
                  text="Information Security Systems"
                  aspectRatio="aspect-[16/10]"
                  className="shadow-sm"
                  src="/information-security-management.jpg"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 border border-primary/10 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Information Security
                </h2>
                <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Trust is earned through consistent conduct, secure processes, and unwavering respect for confidentiality.
                  </p>
                  <p>
                    Our compliance, security, and governance framework is designed to ensure that client information remains protected throughout every stage of the engagement lifecycle.
                  </p>
                  <p>
                    Access to client information is restricted to authorized personnel on a need-to-know basis, and every assignment is conducted with the highest standards of discretion, integrity, and professional accountability.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Security Principles Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <motion.div
                    key={h.title}
                    variants={itemVariants}
                    className="p-6 rounded-[24px] border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_12px_24px_rgba(75,33,184,0.06)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/5 text-primary mb-5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground tracking-tight">{h.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* SECTION 2: ISO 27001 SECTION */}
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
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Information Security Management
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground border-l-2 border-primary pl-4 font-medium text-foreground">
                <p>
                  As part of our commitment to strengthening information security governance, Trudicon is undertaking the implementation of an Information Security Management System (ISMS) aligned with internationally recognized information security principles, including the framework established under ISO 27001.
                </p>
              </div>

              {/* Certification style card */}
              <div className="mt-6 p-6 rounded-2xl border border-primary/20 bg-primary/[0.01] flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                    Aligned with International Information Security Principles
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Continuous monitoring, secure archival and disposal protocols, systematic risk management policies, and periodic security compliance assessments.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Compliance Placeholder */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <ImagePlaceholder
                icon={FileCheck2}
                text="Security Compliance Placeholder"
                aspectRatio="aspect-[16/10]"
                className="shadow-sm"
                src="/legal-regulatory-awareness.jpg"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* SECTION 3: PILLARS OF CONFIDENTIALITY */}
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
                Pillars of Confidentiality
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Four principles guide every engagement
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Information should be accessed only by authorized personnel, used solely for its intended purpose, protected against unauthorized disclosure or alteration, and managed through secure and accountable processes that respect privacy and organizational sensitivities.
              </p>
            </div>

            {/* 4 Premium Cards Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    variants={itemVariants}
                    className="group p-8 rounded-[24px] border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_12px_24px_rgba(75,33,184,0.06)]"
                  >
                    <span className="text-[10px] font-extrabold tracking-[0.2em] text-primary uppercase">
                      Pillar 0{idx + 1}
                    </span>
                    <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
                    </div>
                    <h3 className="mt-5 text-base font-bold text-foreground tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* SECTION 4: SECURITY FRAMEWORK VISUALIZATION */}
        <section className="py-14 md:py-16 border-b border-border">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Architecture
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Security Framework Visualization
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A structured and audited governance framework ensuring end-to-end data security and compliance ownership.
              </p>
            </div>

            {/* Dashboard style visualization */}
            <div className="max-w-3xl mx-auto w-full">
              {/* Interactive diagram */}
              <div className="w-full rounded-[24px] border border-border bg-[#F8FAFC]/50 p-8 flex flex-col justify-between relative overflow-hidden min-h-[360px]">
                <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:16px_16px]" />

                <div className="flex justify-between items-center relative z-10">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    <Activity className="h-4 w-4 text-primary animate-pulse" />
                    Security Framework
                  </div>
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
                </div>

                {/* Framework Central Node & Branches */}
                <div className="relative w-full h-64 my-auto flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Network Lines */}
                    <line x1="50" y1="50" x2="22" y2="22" stroke="#4B21B8" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="2 2" />
                    <line x1="50" y1="50" x2="78" y2="22" stroke="#4B21B8" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="2 2" />
                    <line x1="50" y1="50" x2="78" y2="78" stroke="#4B21B8" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="2 2" />
                    <line x1="50" y1="50" x2="22" y2="78" stroke="#4B21B8" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="2 2" />
                    <line x1="50" y1="50" x2="50" y2="15" stroke="#4B21B8" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="2 2" />
                  </svg>

                  {/* Center Node */}
                  <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-primary text-white text-center p-2 shadow-md z-20 border border-primary/20">
                    <Shield className="h-5 w-5 mb-1" />
                    <span className="text-[9px] font-extrabold uppercase tracking-wider">ISMS Security</span>
                  </div>

                  {/* 5 Elements */}
                  <div className="absolute top-[22%] left-[22%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 rounded-lg border border-border bg-white px-2.5 py-1.5 shadow-sm z-10 whitespace-nowrap">
                    <Lock className="h-3 w-3 text-primary" />
                    <span className="text-[9px] font-bold text-foreground uppercase tracking-wider">Access Control</span>
                  </div>

                  <div className="absolute top-[22%] left-[78%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 rounded-lg border border-border bg-white px-2.5 py-1.5 shadow-sm z-10 whitespace-nowrap">
                    <ShieldCheck className="h-3 w-3 text-primary" />
                    <span className="text-[9px] font-bold text-foreground uppercase tracking-wider">Confidentiality</span>
                  </div>

                  <div className="absolute top-[15%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 rounded-lg border border-border bg-white px-2.5 py-1.5 shadow-sm z-10 whitespace-nowrap">
                    <Gavel className="h-3 w-3 text-primary" />
                    <span className="text-[9px] font-bold text-foreground uppercase tracking-wider">Governance</span>
                  </div>

                  <div className="absolute top-[78%] left-[78%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 rounded-lg border border-border bg-white px-2.5 py-1.5 shadow-sm z-10 whitespace-nowrap">
                    <UserCheck className="h-3 w-3 text-primary" />
                    <span className="text-[9px] font-bold text-foreground uppercase tracking-wider">Accountability</span>
                  </div>

                  <div className="absolute top-[78%] left-[22%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 rounded-lg border border-border bg-white px-2.5 py-1.5 shadow-sm z-10 whitespace-nowrap">
                    <ClipboardCheck className="h-3 w-3 text-primary" />
                    <span className="text-[9px] font-bold text-foreground uppercase tracking-wider">Secure Reporting</span>
                  </div>
                </div>

                <div className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider flex justify-between items-center relative z-10">
                  <span>Architecture: ISMS Unified Protocol</span>
                  <span>Ver: 2.1</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 5: CTA */}
        <section className="py-14 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[32px] border border-border bg-white p-8 md:p-16 text-center max-w-4xl mx-auto space-y-8 shadow-[0_12px_36px_rgba(0,0,0,0.03)]"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 text-primary">
              <Lock className="h-6 w-6" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Secure Information. Trusted Processes.
              </h2>
              <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                We handle verification mandates with the highest sensitivity, ensuring complete security alignment with diplomatic and enterprise governance expectations.
              </p>
            </div>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/95 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-primary/10 transition-all duration-200 hover:scale-[1.02]"
              >
                Request Confidential Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
