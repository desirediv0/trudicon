"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileSearch,
  Users,
  Briefcase,
  Radar,
  ClipboardList,
  UserCog,
  Search,
  Scale,
  FileCheck2,
  Lock,
  ArrowRight,
  BookOpen,
  CheckCircle,
  FileText,
  Globe
} from "lucide-react";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import Link from "next/link";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const framework = [
  { icon: UserCog, label: "Identity authentication", desc: "Verifying individual credentials and background history." },
  { icon: FileCheck2, label: "Civil record validation", desc: "Validating legal, financial, and regulatory registry data." },
  { icon: Briefcase, label: "Employment verification", desc: "Confirming professional tenure, credentials, and track records." },
  { icon: Users, label: "Reference verification", desc: "Gathering peer assessments and compliance history." },
  { icon: Radar, label: "Ground-level intelligence gathering", desc: "Localized physical verification and operational reports." },
  { icon: Search, label: "Field investigations", desc: "Detailed discreet investigative compliance mapping." },
];

const steps = [
  { n: "01", icon: ClipboardList, title: "Requirement Assessment", desc: "Evaluating specific parameters and objectives" },
  { n: "02", icon: UserCog, title: "Specialist Case Allocation", desc: "Assigning cases to field and subject experts" },
  { n: "03", icon: FileSearch, title: "Verification & Intelligence", desc: "Conducting inquiries and ground investigations" },
  { n: "04", icon: Scale, title: "Risk Evaluation", desc: "Analyzing information integrity and risk indices" },
  { n: "05", icon: FileCheck2, title: "Secure Report Delivery", desc: "Transmitting final reports via encrypted channels" },
];

export function KnowledgeBaseClient() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background Graphic Patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] select-none z-0">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="kb-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#4B21B8" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#kb-grid)" />
          {/* Subtle network lines */}
          <path d="M100,200 L300,400 L500,200 M900,100 L1100,300 L1300,100" fill="none" stroke="#4B21B8" strokeWidth="1.5" strokeDasharray="3 3" />
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
                <BookOpen className="h-3.5 w-3.5" />
                Knowledge Framework
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Knowledge Base
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                Diplomatic-Grade Verification Methodologies &amp; Intelligence Standards
              </p>

              {/* Floating Trust Cards */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {[
                  { title: "Verification", desc: "Structured methodologies" },
                  { title: "Authentication", desc: "Official verification standards" },
                  { title: "Intelligence", desc: "Ground-level operations" },
                  { title: "Compliance", desc: "Diplomatic grade oversight" }
                ].map((card, idx) => (
                  <motion.div
                    key={card.title}
                    variants={floatVariants(idx * 0.4)}
                    animate="animate"
                    className="p-4 rounded-xl border border-border bg-white shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between"
                  >
                    <span className="text-sm font-bold text-foreground">{card.title}</span>
                    <span className="text-xs text-muted-foreground mt-1">{card.desc}</span>
                  </motion.div>
                ))}
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
                icon={BookOpen}
                text="Knowledge Framework Image"
                aspectRatio="aspect-[4/3]"
                className="shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
                src="/knowledge-base.jpg"
              />
            </motion.div>
          </div>
        </section>

        {/* SECTION 1: DIPLOMATIC-GRADE STANDARDS */}
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
                  text="Diplomatic Standards Security"
                  aspectRatio="aspect-[16/10]"
                  className="shadow-sm"
                  src="/diplomatic-grade-standards.jpg"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 border border-primary/10 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Diplomatic-Grade Standards
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p className="font-medium text-foreground">
                    Discretion, professionalism, and information security standards expected in diplomatic and high-trust environments.
                  </p>
                  <p>
                    Our approach is founded on confidentiality, controlled access to information, documented accountability, responsible data management, and unwavering respect for client privacy.
                  </p>
                  <p>
                    These principles enable us to deliver reliable verification, due diligence, and investigative services to embassies, corporations, investors, educational institutions, and other organizations requiring the highest levels of trust and confidentiality.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* 4 Feature Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Confidentiality", desc: "Rigorous access control for sensitive intelligence assets.", icon: Lock },
                { title: "Accountability", desc: "Strict adherence to documented operating protocols and audit trails.", icon: CheckCircle },
                { title: "Data Management", desc: "Structured compliance frameworks aligned with GDPR & DPDPA.", icon: FileText },
                { title: "Client Privacy", desc: "Uncompromising protection of client requests and organizational identity.", icon: ShieldCheck },
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

        {/* SECTION 2: DIPLOMATIC VERIFICATION FRAMEWORK */}
        <section className="py-14 md:py-16 border-b border-border">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-16 lg:grid-cols-12 items-center"
          >
            {/* Left Circular Visualization or List */}
            <motion.div variants={itemVariants} className="lg:col-span-6 space-y-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 border border-primary/10 text-primary">
                <FileSearch className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Diplomatic Verification Framework
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Diplomatic institutions favour a structured verification framework tailored for high-risk environments.
                </p>
                <p className="font-semibold text-foreground">Our methodology includes:</p>
              </div>

              {/* Framework Visualization */}
              <div className="relative w-full py-10">
                {/* Desktop Circular Layout */}
                <div className="relative hidden md:block w-[400px] h-[400px] mx-auto">
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                    <circle cx="200" cy="200" r="130" fill="none" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="4 4" />
                    {[0, 60, 120, 180, 240, 300].map((angle, idx) => {
                      const rad = (angle * Math.PI) / 180;
                      const x2 = 200 + 130 * Math.cos(rad);
                      const y2 = 200 + 130 * Math.sin(rad);
                      return (
                        <line
                          key={idx}
                          x1="200"
                          y1="200"
                          x2={x2}
                          y2={y2}
                          stroke="#4B21B8"
                          strokeWidth="1.2"
                          strokeOpacity="0.25"
                          strokeDasharray="2 2"
                        />
                      );
                    })}
                  </svg>

                  {/* Center Node */}
                  <div className="absolute top-[200px] left-[200px] -translate-x-1/2 -translate-y-1/2 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-primary text-white text-center p-3 shadow-md z-20 border border-primary/20">
                    <ShieldCheck className="h-6 w-6 mb-1.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Verification Framework</span>
                  </div>

                  {/* 6 Circular Nodes */}
                  {framework.map((item, idx) => {
                    const angle = idx * 60;
                    const rad = (angle * Math.PI) / 180;
                    // Circle of radius 130
                    const leftPos = 200 + 130 * Math.cos(rad);
                    const topPos = 200 + 130 * Math.sin(rad);
                    const Icon = item.icon;

                    return (
                      <div
                        key={idx}
                        style={{ left: `${leftPos}px`, top: `${topPos}px` }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 rounded-xl border border-border bg-white px-3.5 py-2 shadow-sm z-10 max-w-[170px] transition-all duration-300 hover:border-primary/30 hover:shadow-md"
                      >
                        <div className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-primary/5 text-primary">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-[10px] font-bold text-foreground leading-tight">{item.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Mobile Vertical Cards */}
                <div className="grid gap-3 md:hidden">
                  {framework.map((f, i) => {
                    const Icon = f.icon;
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-3.5 rounded-xl border border-border bg-white p-4 shadow-sm"
                      >
                        <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-primary/5 text-primary">
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">{f.label}</h4>
                          <p className="text-xs text-muted-foreground mt-0.5">{f.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className="text-base leading-relaxed text-muted-foreground border-l-2 border-border pl-4">
                All investigations are conducted by trained personnel under controlled reporting and quality assurance protocols.
              </p>
            </motion.div>

            {/* Right Framework Placeholder */}
            <motion.div variants={itemVariants} className="lg:col-span-6">
              <ImagePlaceholder
                icon={Radar}
                text="Verification Operations Framework Image"
                aspectRatio="aspect-[4/3]"
                className="shadow-[0_20px_40px_rgba(0,0,0,0.03)]"
                src="/diplomatic-verification-framework.jpg"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* SECTION 3: VERIFICATION PROCESS TIMELINE */}
        <section className="py-14 md:py-16 border-b border-border">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16"
          >
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Our Process
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Verification Process
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Following a structured, multi-layered verification process designed to ensure accuracy, confidentiality, and reliability is essential.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                Each assignment undergoes requirement assessment, specialist case allocation, comprehensive verification and intelligence gathering, risk evaluation, and delivery of secure professionally documented reports through controlled channels.
              </p>
            </div>

            {/* Premium Enterprise Timeline */}
            <div className="relative py-12">
              {/* Horizontal Timeline Connector Line for Desktop */}
              <div className="absolute left-1/10 right-1/10 top-1/2 -translate-y-8 hidden lg:block h-[1.5px] bg-border z-0" />

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 relative z-10">
                {steps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.n}
                      variants={itemVariants}
                      className="group relative flex flex-col items-center text-center px-4"
                    >
                      {/* Step Badge */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-white text-sm font-bold text-primary shadow-sm z-10 transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
                        {step.n}
                      </div>

                      {/* Content Card */}
                      <div className="mt-6 p-5 rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md w-full flex-1 flex flex-col items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary mb-4">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-sm font-bold text-foreground tracking-tight uppercase tracking-wider">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground max-w-[200px]">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 4: KNOWLEDGE SUMMARY CTA */}
        <section className="py-14 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[32px] border border-border bg-white p-8 md:p-16 text-center max-w-4xl mx-auto space-y-8 shadow-[0_12px_36px_rgba(0,0,0,0.03)]"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 text-primary">
              <Globe className="h-6 w-6" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to Initiate Verification?
              </h2>
              <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Connect with our coordination desk to discuss your verification specifications, operational scope, and data handling protocols.
              </p>
            </div>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/95 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-primary/10 transition-all duration-200 hover:scale-[1.02]"
              >
                Request Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
