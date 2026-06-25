"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mail,
  ShieldCheck,
  Phone,
  Clock,
  Loader2,
  CheckCircle2,
  Send,
  Building2,
  User,
  Briefcase,
  Globe,
  ArrowRight,
  MessageSquare
} from "lucide-react";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";

// Zod Schema
const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name (minimum 2 characters)").max(100),
  organization: z.string().trim().min(2, "Organization is required").max(150),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().min(6, "Please enter a valid phone number").max(30),
  service: z.string().trim().min(2, "Please describe the service required").max(150),
  message: z.string().trim().min(10, "Please share a brief message (minimum 10 characters)").max(2000),
});

type FormValues = z.infer<typeof schema>;

const contactCards = [
  {
    icon: MapPin,
    title: "Office Address",
    value: "422, Level 4, Vipul Trade Tower, Sohna Road, Gurgaon, Haryana, 122018",
    href: "https://maps.google.com/?q=422,+Level+4,+Vipul+Trade+Tower,+Sohna+Road,+Gurgaon,+Haryana,+122018"
  },
  {
    icon: Mail,
    title: "Official Email",
    value: "info@trudicon.co.in",
    href: "mailto:info@trudicon.co.in"
  },
  {
    icon: ShieldCheck,
    title: "Support Email",
    value: "support@trudicon.co.in",
    href: "mailto:support@trudicon.co.in"
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon – Fri · 09:30 – 18:30 IST",
    href: undefined
  },
];

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

export function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [messageCharCount, setMessageCharCount] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to send message.");
      }

      toast.success("Enquiry sent successfully. Our team will be in touch shortly through secure channels.");
      setSubmitted(true);
      reset();
      setMessageCharCount(0);
    } catch (err) {
      console.error(err);
      const errorMessage = err instanceof Error ? err.message : "Failed to send message. Please try again or contact us directly via email.";
      toast.error(errorMessage);
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageCharCount(e.target.value.length);
  };

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] select-none z-0">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="contact-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#4B21B8" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
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
                <Send className="h-3.5 w-3.5" />
                Contact Trudicon
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Secure Verification. Trusted Intelligence.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                Connect with our team to discuss confidential verification requirements, diplomatic support services, or corporate due diligence projects.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/95 text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-primary/10 transition-all duration-200"
                >
                  Request Consultation
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* Right Consultation Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6"
            >
              <ImagePlaceholder
                icon={Mail}
                text="Contact Consultation Image"
                aspectRatio="aspect-[4/3]"
                className="shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
                src="/our-verification.jpg"
              />
            </motion.div>
          </div>
        </section>

        {/* SECTION 1: CONTACT INFORMATION CARDS */}
        <section className="py-14 md:py-16 border-b border-border">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
          >
            {contactCards.map((c) => {
              const Icon = c.icon;
              const CardWrapper = c.href ? "a" : "div";
              return (
                <motion.div
                  key={c.title}
                  variants={itemVariants}
                  className="flex"
                >
                  <CardWrapper
                    {...(c.href ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: c.href.startsWith("http") ? "noopener noreferrer" : undefined } : {})}
                    className={`group w-full rounded-[24px] border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_12px_24px_rgba(75,33,184,0.06)] flex flex-col justify-between ${c.href ? "cursor-pointer" : ""}`}
                  >
                    <div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
                      </div>
                      <p className="mt-5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
                        {c.title}
                      </p>
                    </div>
                    <p className="mt-2 text-sm font-bold text-foreground break-words leading-relaxed">
                      {c.value}
                    </p>
                  </CardWrapper>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* SECTION 2: CONTACT FORM & PLACEHOLDER */}
        <section id="contact-form" className="py-14 md:py-16 border-b border-border">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-12 lg:grid-cols-12 items-start"
          >
            {/* Left side: Form */}
            <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Send us a confidential enquiry
                </h2>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  Share a few details about your verification or due diligence requirement and our team will respond through secure channels.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="rounded-[24px] border border-border bg-white p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-5"
              >
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50/50 p-4 text-sm text-green-800"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-green-600" />
                      <div>
                        <p className="font-bold">Enquiry Received Successfully</p>
                        <p className="text-xs text-green-700 mt-1">
                          Your enquiry has been successfully received. A representative will contact you shortly through secure channels.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-muted-foreground" />
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      autoComplete="name"
                      {...register("fullName")}
                      className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 ${errors.fullName ? "border-red-500 focus:ring-red-100" : "border-border"
                        }`}
                    />
                    {errors.fullName && <p className="text-[11px] font-bold text-red-500">{errors.fullName.message}</p>}
                  </div>

                  {/* Organization */}
                  <div className="space-y-1.5">
                    <label htmlFor="organization" className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
                      Organization
                    </label>
                    <input
                      id="organization"
                      type="text"
                      autoComplete="organization"
                      {...register("organization")}
                      className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 ${errors.organization ? "border-red-500 focus:ring-red-100" : "border-border"
                        }`}
                    />
                    {errors.organization && <p className="text-[11px] font-bold text-red-500">{errors.organization.message}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      {...register("email")}
                      className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 ${errors.email ? "border-red-500 focus:ring-red-100" : "border-border"
                        }`}
                    />
                    {errors.email && <p className="text-[11px] font-bold text-red-500">{errors.email.message}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      {...register("phone")}
                      className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 ${errors.phone ? "border-red-500 focus:ring-red-100" : "border-border"
                        }`}
                    />
                    {errors.phone && <p className="text-[11px] font-bold text-red-500">{errors.phone.message}</p>}
                  </div>

                  {/* Service Requirement */}
                  <div className="sm:col-span-2 space-y-1.5">
                    <label htmlFor="service" className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5 text-muted-foreground" />
                      Service Requirement
                    </label>
                    <input
                      id="service"
                      type="text"
                      placeholder="e.g. Background verification, document authentication, risk mitigation…"
                      {...register("service")}
                      className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 ${errors.service ? "border-red-500 focus:ring-red-100" : "border-border"
                        }`}
                    />
                    {errors.service && <p className="text-[11px] font-bold text-red-500">{errors.service.message}</p>}
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2 space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label htmlFor="message" className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                        <MessageSquare className="h-3.5 w-3.5 text-muted-foreground" />
                        Message
                      </label>
                      <span className="text-[10px] font-bold text-muted-foreground tracking-wider uppercase">
                        {messageCharCount} / 2000
                      </span>
                    </div>
                    <textarea
                      id="message"
                      rows={5}
                      {...register("message")}
                      onChange={(e) => {
                        register("message").onChange(e);
                        handleMessageChange(e);
                      }}
                      className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 resize-none ${errors.message ? "border-red-500 focus:ring-red-100" : "border-border"
                        }`}
                    />
                    {errors.message && <p className="text-[11px] font-bold text-red-500">{errors.message.message}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg shadow-primary/10 transition-all duration-200 hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Sending…</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      <span>Request Confidential Consultation</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Right side: Illustration Placeholder */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <ImagePlaceholder
                icon={ShieldCheck}
                text="Privacy & Security Systems Visual"
                aspectRatio="aspect-[4/5]"
                className="shadow-sm"
                src="/compliance-security-confidentiality.jpg"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* SECTION 3: CONSULTATION PROCESS TIMELINE */}
        <section className="py-14 md:py-16 border-b border-border">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16 animate-reveal"
          >
            <div className="max-w-3xl space-y-4 text-center mx-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Workflow
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Consultation Process
              </h2>
            </div>

            {/* Horizontal / Vertical Timeline */}
            <div className="relative py-12">
              <div className="absolute left-1/10 right-1/10 top-1/2 -translate-y-8 hidden lg:block h-[1.5px] bg-border z-0" />

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 relative z-10">
                {[
                  { n: "1", title: "Submit Request", desc: "Share details through secure channels." },
                  { n: "2", title: "Requirement Review", desc: "Specialist assessment of operational scope." },
                  { n: "3", title: "Expert Consultation", desc: "Direct alignment on guidelines & protocols." },
                  { n: "4", title: "Verification Planning", desc: "Custom framework and mapping allocation." },
                  { n: "5", title: "Secure Engagement", desc: "Execution and auditable secure reports delivery." },
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex flex-col items-center text-center px-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-white text-sm font-bold text-primary shadow-sm z-10">
                      {step.n}
                    </div>
                    <div className="mt-5 p-5 rounded-xl border border-border bg-white shadow-sm w-full flex-1">
                      <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">{step.title}</h4>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 4: OFFICE PRESENCE (MAP PLACEHOLDER) */}
        <section className="py-14 md:py-16 border-b border-border">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            <div className="grid gap-8 lg:grid-cols-12 items-start">
              {/* Map Card */}
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Pan India Verification Coverage
                </h3>
                <ImagePlaceholder
                  icon={Globe}
                  text="Pan India Map Placeholder"
                  aspectRatio="aspect-[16/10]"
                  className="shadow-sm"
                  src="/pan-india-verification-coverage.jpg"
                />
              </div>

              {/* Service Regions list */}
              <div className="lg:col-span-5 space-y-4 pt-12">
                <h4 className="text-xs font-bold text-primary uppercase tracking-widest">Service Regions</h4>
                <div className="grid gap-3 font-semibold text-foreground">
                  {[
                    "North India Operations Desk",
                    "South India Operations Desk",
                    "East India Operations Desk",
                    "West India Operations Desk",
                    "Central India Operations Desk"
                  ].map((region, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-white shadow-sm">
                      <Globe className="h-4.5 w-4.5 text-primary flex-shrink-0" />
                      <span className="text-xs uppercase tracking-wider">{region}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 5: FINAL TRUST CTA */}
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
                Let&apos;s Discuss Your Verification Requirements
              </h2>
              <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Connect with our experts for secure, confidential, and diplomatic-grade verification support.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/95 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-primary/10 transition-all duration-200 hover:scale-[1.02]"
              >
                Schedule Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:info@trudicon.co.in"
                className="inline-flex items-center bg-white hover:bg-slate-50 border border-border text-foreground font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200"
              >
                Send Inquiry
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
