"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  MapPin,
  FileLock2,
  UserCheck,
  FileCheck2,
  FileSearch,
  Briefcase,
  IdCard,
  Radar,
  ShieldAlert,
  ArrowRight,
  Landmark,
  Building2,
  Users,
  Plane,
  Scale,
  ClipboardList,
  UserCog,
  Search,
  ScaleIcon,
  ChevronRight,
  FileText,
  Quote,
} from "lucide-react";
import { PageShell, Section } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// ----------------------------------------------------------------------
// Reusable Components
// ----------------------------------------------------------------------

// Premium Custom Image Placeholder
function ImagePlaceholder({
  aspectRatio = "aspect-[16/10]",
  borderRadius = "rounded-3xl",
  icon: Icon,
  text,
  className = "",
  src,
}: {
  aspectRatio?: string;
  borderRadius?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  className?: string;
  src?: string;
}) {
  if (src) {
    return (
      <div
        className={`relative w-full ${aspectRatio} ${borderRadius} overflow-hidden group border border-border bg-[#F8FAFC]/50 ${className}`}
      >
        <img
          src={src}
          alt={text}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${aspectRatio} ${borderRadius} border-2 border-dashed border-border bg-[#F8FAFC]/50 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden group transition-all duration-300 hover:border-primary/20 hover:bg-[#F8FAFC] ${className}`}
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:16px_16px]" />

      {Icon && (
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm border border-border text-[#5B6470] transition-transform duration-300 group-hover:scale-105 group-hover:text-primary">
          <Icon className="h-6 w-6" />
        </div>
      )}
      <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground">
        Image Placeholder
      </p>
      <p className="mt-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">
        {text}
      </p>
    </div>
  );
}

// Scroll Triggered Statistics Counter
function Counter({ value, duration = 1.2 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const hasNumeric = /\d/.test(value);
  const numericValue = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/\d/g, "");

  useEffect(() => {
    if (!isInView || !hasNumeric) return;
    let start = 0;
    const end = numericValue;
    if (end === 0) return;
    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);
    return () => clearInterval(timer);
  }, [isInView, numericValue, duration, hasNumeric]);

  if (!hasNumeric) {
    return <span ref={ref}>{value}</span>;
  }

  return <span ref={ref}>{isInView ? `${count}${suffix}` : `0${suffix}`}</span>;
}

// Section Header
function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-4xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
}

// ----------------------------------------------------------------------
// Section Contents Data
// ----------------------------------------------------------------------

const whyTrudicon = [
  {
    icon: ShieldCheck,
    title: "Diplomatic Standards",
    desc: "Protocols modelled on the discretion and rigour expected by embassies and consular sections.",
  },
  {
    icon: Lock,
    title: "Confidential Operations",
    desc: "Controlled access, restricted reporting, and secure archival across every engagement.",
  },
  {
    icon: MapPin,
    title: "Pan India Coverage",
    desc: "Operational coverage across metros, Tier-2 cities, rural areas, and remote regions.",
  },
  {
    icon: FileLock2,
    title: "Secure Reporting",
    desc: "Professionally documented reports delivered through controlled, auditable channels.",
  },
];

const services = [
  {
    icon: UserCheck,
    title: "Background Verification",
    desc: "Identity, address, education, and civil-record validation under controlled protocols.",
  },
  {
    icon: FileCheck2,
    title: "Document Authentication",
    desc: "Integrity checks on official documents, certificates, and supporting paperwork.",
  },
  {
    icon: Briefcase,
    title: "Employment Validation",
    desc: "Verification of employers, tenure, designation, and reference confirmations.",
  },
  {
    icon: IdCard,
    title: "Identity Verification",
    desc: "Multi-source authentication of identity for visa, HR and institutional needs.",
  },
  {
    icon: Radar,
    title: "Field Intelligence",
    desc: "Ground-level inquiries by trained personnel under structured oversight.",
  },
  {
    icon: ShieldAlert,
    title: "Risk Mitigation",
    desc: "Investigations and risk evaluation supporting informed decision-making.",
  },
];

const timelineSteps = [
  { n: "01", icon: ClipboardList, title: "Requirement Assessment", desc: "Evaluating specific parameters and objectives" },
  { n: "02", icon: UserCog, title: "Specialist Case Allocation", desc: "Assigning cases to field and subject experts" },
  { n: "03", icon: Search, title: "Verification & Intelligence Gathering", desc: "Conducting inquiries and ground investigations" },
  { n: "04", icon: ScaleIcon, title: "Risk Evaluation", desc: "Analyzing information integrity and risk indices" },
  { n: "05", icon: FileCheck2, title: "Secure Report Delivery", desc: "Transmitting final reports via encrypted channels" },
];

const frameworkChips = [
  { icon: IdCard, label: "Identity Authentication" },
  { icon: FileCheck2, label: "Record Validation" },
  { icon: Users, label: "Reference Verification" },
  { icon: Radar, label: "Field Intelligence" },
  { icon: Scale, label: "Risk Analysis" },
];

const metrics = [
  { value: "08+", label: "Years Experience", desc: "Consular & Corporate Background" },
  { value: "100%", label: "Confidentiality Focus", desc: "Strict Need-to-Know Reporting" },
  { value: "Pan India", label: "Coverage", desc: "Nationwide Operations Network" },
  { value: "Diplomatic", label: "Standards", desc: "High-Integrity Verification Framework" },
];

const industries = [
  { icon: Landmark, title: "Diplomatic Missions" },
  { icon: Building2, title: "Embassies" },
  { icon: Building2, title: "Consulates" },
  { icon: ShieldCheck, title: "Corporate Compliance" },
  { icon: Plane, title: "Immigration Services" },
  { icon: Scale, title: "Legal Advisory Firms" },
];

const knowledgeItems = [
  {
    icon: ShieldCheck,
    title: "Diplomatic Grade Standards",
    desc: "Information security standards expected in diplomatic and high-trust environments.",
    href: "/knowledge-base#diplomatic-grade-standards",
  },
  {
    icon: FileText,
    title: "Verification Framework",
    desc: "Structured frameworks designed for embassies, visa offices, and corporations.",
    href: "/knowledge-base#diplomatic-verification-framework",
  },
  {
    icon: Lock,
    title: "Information Security",
    desc: "Information security governance aligned with ISO 27001 control principles.",
    href: "/compliance-security#information-security",
  },
  {
    icon: FileLock2,
    title: "Data Protection",
    desc: "Digital infrastructure and operations designed to safeguard sensitive data.",
    href: "/data-protection#secure-information-handling-framework",
  },
];

// ----------------------------------------------------------------------
// Main Page Component
// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <PageShell>
      {/* 1. Hero Section */}
      <section className="relative min-h-[calc(100vh-126px)] flex items-center overflow-hidden border-b border-border bg-white py-16 lg:py-24">
        {/* Subtle Geometry Detail */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <line x1="10%" y1="0" x2="80%" y2="100%" stroke="#6D1A77" strokeWidth="1" />
            <line x1="90%" y1="0" x2="20%" y2="100%" stroke="#6D1A77" strokeWidth="1" strokeDasharray="5 5" />
            <polygon points="100,100 250,350 50,350" fill="none" stroke="#6D1A77" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid gap-16 items-center lg:grid-cols-12">

            {/* Left Content Area */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col justify-center text-left"
            >
              <div className="mb-6 inline-flex self-start items-center gap-2 rounded-full border border-border bg-muted/50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-muted-foreground shadow-sm">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Trusted Verification Partner
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[48px] lg:leading-[1.1]">
                Diplomatic-Grade Due Diligence &amp; Risk Intelligence Partner
              </h1>
              <p className="mt-6 text-base font-semibold text-muted-foreground tracking-wide sm:text-xl">
                Trusted Verification Partner for Diplomatic Missions, Consulates &amp; Global Corporations
              </p>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground max-w-2xl font-medium">
                <p>
                  Trudicon Consultancy Services specializes in high-integrity background
                  verification, document authentication, field intelligence, and
                  diplomatic-grade due diligence solutions across India.
                </p>
                <p>
                  With experience supporting European diplomatic missions and multinational
                  corporations, we provide advanced verification frameworks for long-term visa
                  applicants, employment validation, identity authentication, and risk
                  mitigation investigations.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/95 text-primary-foreground font-semibold px-8 shadow-sm">
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators Row */}
              <div className="mt-14 pt-8 border-t border-border/80">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    { label: "Confidential", emoji: "🔒" },
                    { label: "Secure", emoji: "🛡️" },
                    { label: "Verified", emoji: "📋" },
                    { label: "Pan India", emoji: "🌐" },
                  ].map((ind, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-lg border border-border/60 bg-[#F8FAFC]/50 px-4 py-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.01)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:border-primary/20"
                    >
                      <span className="text-sm">{ind.emoji}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                        {ind.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Hero Image Area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="lg:col-span-5 relative"
            >
              <ImagePlaceholder
                icon={Landmark}
                text="Diplomatic Verification Image"
                aspectRatio="aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11]"
                borderRadius="rounded-[32px]"
                className="shadow-[0_4px_30px_rgba(0,0,0,0.02)]"
                src="/diplomatic-verification.jpg"
              />

              {/* Floating Cards with subtle motion */}
              <div className="absolute inset-0 pointer-events-none select-none">
                {[
                  { label: "Verification", top: "10%", left: "-8%", delay: 0 },
                  { label: "Security", top: "60%", right: "-6%", delay: 0.4 },
                  { label: "Intelligence", bottom: "8%", left: "-4%", delay: 0.2 },
                  { label: "Compliance", top: "35%", right: "-10%", delay: 0.6 },
                ].map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ y: 0 }}
                    animate={{ y: [-5, 5, -5] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: card.delay,
                    }}
                    style={{
                      position: "absolute",
                      top: card.top,
                      bottom: card.bottom,
                      left: card.left,
                      right: card.right,
                    }}
                    className="hidden sm:flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-1.5 shadow-[0_4px_16px_rgba(17,24,39,0.04)]"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#5B6470]">
                      {card.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Why Trudicon Section */}
      <Section className="border-b border-border">
        <div className="grid gap-16 items-center lg:grid-cols-12">
          {/* Left: Square Image Placeholder */}
          <div className="lg:col-span-5">
            <ImagePlaceholder
              icon={ShieldCheck}
              text="Diplomatic Standards Overview"
              aspectRatio="aspect-square"
              borderRadius="rounded-3xl"
              className="shadow-sm"
              src="/diplomatic-standards.jpg"
            />
          </div>

          {/* Right: Content & Feature Grid */}
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Why Trudicon"
              title="Built on diplomatic-grade trust"
              description="A focused practice combining controlled processes, trained field operations, and secure reporting."
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {whyTrudicon.map((w, idx) => (
                <div
                  key={idx}
                  className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_8px_30px_rgba(17,24,39,0.03)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <w.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Service Highlights Section */}
      <Section alt className="border-b border-border">
        <SectionHeader
          eyebrow="Service Highlights"
          title="Verification services we deliver"
          description="A complete due diligence toolkit for diplomatic, corporate, and institutional clients."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="group rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_8px_30px_rgba(17,24,39,0.03)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <s.icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
              </div>
              <h3 className="mt-5 text-base font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                <span>Verification methodology</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Verification Process Section */}
      <Section className="border-b border-border">
        <div className="grid gap-16 items-center lg:grid-cols-12">
          {/* Left Side: Title & Timeline */}
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Verification Process"
              title="Our Verification Process"
              description="Following a structured, multi-layered verification process designed to ensure accuracy, confidentiality, and reliability is essential. Each assignment undergoes requirement assessment, specialist case allocation, comprehensive verification and intelligence gathering, risk evaluation, and delivery of secure professionally documented reports through controlled channels."
            />

            {/* Horizontal timeline on Desktop, Vertical on Mobile */}
            <div className="relative mt-12 pl-4 border-l border-border sm:pl-0 sm:border-l-0">
              <div className="absolute left-6 right-6 top-6 hidden h-[2px] bg-border sm:block" />
              <ol className="grid gap-6 sm:grid-cols-5 relative z-10">
                {timelineSteps.map((step, idx) => {
                  const IconComp = step.icon;
                  return (
                    <li key={idx} className="relative group">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-white text-xs font-bold text-primary shadow-sm">
                        {step.n}
                      </div>
                      <div className="mt-4 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/5 text-primary">
                        <IconComp className="h-4 w-4" />
                      </div>
                      <h4 className="mt-3 text-sm font-bold tracking-tight text-foreground">{step.title}</h4>
                      <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{step.desc}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          {/* Right Side: Process Image Placeholder */}
          <div className="lg:col-span-5">
            <ImagePlaceholder
              icon={ClipboardList}
              text="Verification Operations Process"
              aspectRatio="aspect-square"
              borderRadius="rounded-3xl"
              className="shadow-sm"
              src="/our-verification.jpg"
            />
          </div>
        </div>
      </Section>

      {/* 5. Diplomatic Framework Section */}
      <Section alt className="border-b border-border">
        <div className="grid gap-16 items-center lg:grid-cols-12">
          {/* Left Content Area */}
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Methodology"
              title="Diplomatic Verification Framework"
              description="Diplomatic institutions favour a structured verification framework tailored for high-risk environments."
            />

            <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-2xl font-medium">
              All investigations are conducted by trained personnel under controlled reporting and quality assurance protocols. Our comprehensive methods are visualized as pillars below:
            </p>

            {/* Chips visualization */}
            <div className="mt-8 flex flex-wrap gap-3">
              {frameworkChips.map((chip, idx) => {
                const IconComp = chip.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 rounded-lg border border-border bg-white px-4 py-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.01)] transition-colors hover:border-primary/30"
                  >
                    <IconComp className="h-4.5 w-4.5 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                      {chip.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="lg:col-span-5">
            <ImagePlaceholder
              icon={FileSearch}
              text="Diplomatic Framework Diagram"
              aspectRatio="aspect-square"
              borderRadius="rounded-3xl"
              className="shadow-sm"
              src="/diplomatic-verification-framework.jpg"
            />
          </div>
        </div>
      </Section>

      {/* 6. Trust Metrics Section */}
      <Section className="bg-[#111827] text-white border-b border-border overflow-hidden relative">


        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m, idx) => (
              <div key={idx} className="border-l-2 border-primary pl-6 py-2">
                <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  <Counter value={m.value} />
                </p>
                <p className="mt-2 text-sm font-bold uppercase tracking-widest text-primary">
                  {m.label}
                </p>
                <p className="mt-1 text-xs text-slate-400 font-medium">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 7. Industries We Serve Section */}
      <Section className="border-b border-border">
        <SectionHeader
          eyebrow="Sectors"
          title="Industries We Serve"
          description="Specialized due diligence, background verification, and risk evaluation solutions designed for high-trust environments."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, idx) => {
            const IconComp = ind.icon;
            return (
              <div
                key={idx}
                className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-[0_1px_3px_rgba(0,0,0,0.01)] transition-all duration-300 hover:border-primary hover:shadow-[0_0_24px_rgba(109,26,119,0.04)]"
              >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <IconComp className="h-5 w-5" />
                </div>
                <div className="pt-1.5">
                  <h3 className="text-base font-bold tracking-tight text-foreground leading-snug">
                    {ind.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* 8. Knowledge Preview Section */}
      <Section alt className="border-b border-border">
        <div className="grid gap-16 items-center lg:grid-cols-12">
          {/* Left Content Column */}
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Resources"
              title="Knowledge Base &amp; Intelligence"
              description="Learn about the strict standards, process operations, and legal governance guidelines underlying our verification solutions."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {knowledgeItems.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/5 text-primary">
                      <IconComp className="h-4 w-4" />
                    </div>
                    <h3 className="mt-4 text-sm font-bold tracking-tight text-foreground flex items-center gap-1 group-hover:text-primary transition-colors">
                      <span>{item.title}</span>
                      <ChevronRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Image Placeholder Column */}
          <div className="lg:col-span-5">
            <ImagePlaceholder
              icon={Radar}
              text="Verification Intelligence Platform"
              aspectRatio="aspect-square"
              borderRadius="rounded-3xl"
              className="shadow-sm"
              src="/knowledge-base-intelligence.jpg"
            />
          </div>
        </div>
      </Section>

      {/* 9. Testimonial Style Section */}
      <Section className="border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            eyebrow="Security &amp; Authority"
            title="Trusted By High-Integrity Organizations"
            center
          />

          <div className="mt-12 relative rounded-2xl border border-border bg-[#F8FAFC]/50 px-6 py-12 sm:px-12 sm:py-16">
            <Quote className="h-10 w-10 text-primary/10 mx-auto mb-6 rotate-180" />
            <blockquote className="text-lg font-semibold tracking-wide text-foreground sm:text-xl leading-relaxed">
              &ldquo;Information integrity is the cornerstone of consular decision-making. Trudicon&apos;s diplomatic-grade verification standards provide the trust and confidentiality required for high-security environments.&rdquo;
            </blockquote>
            <cite className="mt-6 block text-xs font-bold uppercase tracking-[0.2em] text-[#5B6470] not-italic">
              High-Trust Consultative Endorsement
            </cite>
          </div>

          {/* Association Memberships */}
          <div className="mt-14 pt-10 border-t border-border/80">
            <div className="grid gap-6 sm:grid-cols-2 justify-center items-center max-w-3xl mx-auto">
              {[
                "Member of the Association of Certified Fraud Examiners",
                "Member of The Indo French Chamber of Commerce and Industries",
              ].map((text, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-white px-6 py-5 text-center select-none text-xs font-bold uppercase tracking-wider text-[#5B6470] shadow-sm transition-all duration-300 hover:border-primary/30 hover:text-primary hover:shadow-md"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 10. Final CTA Section */}
      <Section className="bg-[#F8FAFC]">
        <div className="grid gap-16 items-center lg:grid-cols-12">
          {/* Left Content Section */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary mb-4 animate-pulse">
              🔒 Confidential Inquiry
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Secure Verification. Trusted Intelligence.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground max-w-2xl">
              Discuss your verification, due diligence, compliance, and risk intelligence requirements with our team.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/95 text-primary-foreground font-semibold px-8 shadow-sm">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Right Consultation Image Placeholder */}
          <div className="lg:col-span-5">
            <ImagePlaceholder
              icon={Lock}
              text="Secure Consultation Room"
              aspectRatio="aspect-video sm:aspect-[4/3] lg:aspect-[16/11]"
              borderRadius="rounded-[32px]"
              className="shadow-sm"
              src="/secure-verification-trusted-intelligence.jpg"
            />
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
