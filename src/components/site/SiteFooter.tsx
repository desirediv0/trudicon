"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Lock, ClipboardCheck, Globe, MapPin, Phone, MessageSquare, Mail } from "lucide-react";
import Image from "next/image";

// Trust Strip Cards Data
const trustStrip = [
    {
        icon: Lock,
        label: "Confidential",
        desc: "Controlled need-to-know access controls.",
    },
    {
        icon: ShieldCheck,
        label: "Secure",
        desc: "ISO 27001 aligned protection systems.",
    },
    {
        icon: ClipboardCheck,
        label: "Compliant",
        desc: "Strict adherence to governance protocols.",
    },
    {
        icon: Globe,
        label: "Pan India",
        desc: "Full ground operational network coverage.",
    },
];

// Footer sections
const companyLinks = [
    { href: "/", label: "Home" },
    { href: "/knowledge-base", label: "Knowledge Base" },
    { href: "/compliance-security", label: "Compliance" },
    { href: "/data-protection", label: "Data Protection" },
    { href: "/about", label: "About Us" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
];

const expertiseLinks = [
    { href: "/knowledge-base#diplomatic-verification-framework", label: "Background Verification" },
    { href: "/about#company-overview", label: "Due Diligence" },
    { href: "/knowledge-base#diplomatic-verification-framework", label: "Identity Verification" },
    { href: "/knowledge-base#diplomatic-verification-framework", label: "Document Authentication" },
    { href: "/", label: "Risk Intelligence" },
    { href: "/about#operational-approach", label: "Field Investigations" },
];

const industryLinks = [
    { href: "/about#sectors-we-serve", label: "Diplomatic Missions" },
    { href: "/about#sectors-we-serve", label: "Embassies" },
    { href: "/about#sectors-we-serve", label: "Consulates" },
    { href: "/about#sectors-we-serve", label: "Corporate Compliance Teams" },
    { href: "/about#sectors-we-serve", label: "Immigration Services" },
    { href: "/about#sectors-we-serve", label: "Legal Advisory Firms" },
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

const columnVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

const stripContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06,
        },
    },
};

const stripItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" as const },
    },
};

export function SiteFooter() {
    return (
        <footer className="relative border-t border-border bg-white overflow-hidden">
            {/* Premium Background Detail - barely visible mesh grid + logo triangles */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="footer-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#4B21B8" strokeWidth="0.75" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#footer-grid)" />
                    {/* Subtle triangle shapes inspired by logo geometry */}
                    <path
                        d="M 85% 15% L 95% 85% L 75% 85% Z"
                        fill="none"
                        stroke="#4B21B8"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                    />
                    <path
                        d="M 87% 20% L 93% 80% L 81% 80% Z"
                        fill="none"
                        stroke="#4B21B8"
                        strokeWidth="0.75"
                    />
                </svg>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Trust Strip Above Footer */}
                <div className="pt-12 pb-8 border-b border-border">
                    <motion.div
                        variants={stripContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {trustStrip.map((item, idx) => {
                            const IconComp = item.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    variants={stripItemVariants}
                                    className="group/strip rounded-xl border border-border bg-white p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_8px_20px_rgba(75,33,184,0.04)]"
                                >
                                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors duration-300 group-hover/strip:bg-primary group-hover/strip:text-white">
                                        <IconComp className="h-5 w-5 transition-transform duration-300 group-hover/strip:rotate-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold tracking-wider text-foreground uppercase">
                                            {item.label}
                                        </span>
                                        <span className="text-xs text-muted-foreground leading-normal mt-0.5">
                                            {item.desc}
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Luxury Enterprise Footer Columns */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid gap-10 py-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {/* Section 1: Brand Info */}
                    <motion.div variants={columnVariants} className="space-y-5">
                        <Link href="/" className="flex items-center gap-3 group" aria-label="Trudicon home">
                            <Image
                                src="/logo.jpeg"
                                alt="Trudicon Logo"
                                className="h-12 md:h-14 w-auto object-contain"
                                width={100}
                                height={100}
                            />
                        </Link>
                        <p className="text-sm leading-relaxed text-muted-foreground font-medium">
                            Diplomatic-Grade Due Diligence &amp; Verification Services Across India.
                        </p>
                        <p className="text-[13px] leading-relaxed text-muted-foreground/80">
                            Supporting diplomatic missions, multinational corporations, institutional clients, and high-trust organizations through secure verification and intelligence frameworks.
                        </p>
                        <div className="pt-4 border-t border-border/55 space-y-3 text-[13px] font-semibold text-muted-foreground">
                            <div className="flex items-start gap-2.5">
                                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                                <a
                                    href="https://maps.google.com/?q=Level+9,+Spaze+i-Tech+Park,+A1+Tower,+Sohna+Road,+Gurgaon,+Haryana+122018,+India"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition-colors leading-relaxed"
                                >
                                    Level 9, Spaze i-Tech Park, A1 Tower, Sohna Road, Gurgaon, Haryana 122018, India
                                </a>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                                <a href="tel:+9101246768620" className="hover:text-primary transition-colors">
                                    +91-0124-6768620
                                </a>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <MessageSquare className="h-4 w-4 text-primary flex-shrink-0" />
                                <a
                                    href="https://wa.me/919999799250"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition-colors"
                                >
                                    WhatsApp: +91-9999799250
                                </a>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                                <a href="mailto:info@trudicon.co.in" className="hover:text-primary transition-colors">
                                    info@trudicon.co.in
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Section 2: Quick Links */}
                    <motion.div variants={columnVariants}>
                        <h3 className="text-xs font-bold tracking-[0.15em] text-foreground uppercase pb-2 border-b border-border/60">
                            Quick Links
                        </h3>
                        <ul className="mt-5 space-y-3.5 text-[13.5px] font-semibold text-muted-foreground">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="group/link flex items-center gap-1.5 transition-colors duration-200 hover:text-primary"
                                    >
                                        <span>{link.label}</span>
                                        <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1.5 transition-all duration-200 group-hover/link:opacity-100 group-hover/link:translate-x-0 text-primary" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Section 3: Core Expertise */}
                    <motion.div variants={columnVariants}>
                        <h3 className="text-xs font-bold tracking-[0.15em] text-foreground uppercase pb-2 border-b border-border/60">
                            Core Expertise
                        </h3>
                        <ul className="mt-5 space-y-3.5 text-[13.5px] font-semibold text-muted-foreground">
                            {expertiseLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={link.href}
                                        className="group/link flex items-center gap-1.5 transition-colors duration-200 hover:text-primary"
                                    >
                                        <span>{link.label}</span>
                                        <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1.5 transition-all duration-200 group-hover/link:opacity-100 group-hover/link:translate-x-0 text-primary" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Section 4: Industries Served */}
                    <motion.div variants={columnVariants}>
                        <h3 className="text-xs font-bold tracking-[0.15em] text-foreground uppercase pb-2 border-b border-border/60">
                            Industries Served
                        </h3>
                        <ul className="mt-5 space-y-3.5 text-[13.5px] font-semibold text-muted-foreground">
                            {industryLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={link.href}
                                        className="group/link flex items-center gap-1.5 transition-colors duration-200 hover:text-primary"
                                    >
                                        <span>{link.label}</span>
                                        <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1.5 transition-all duration-200 group-hover/link:opacity-100 group-hover/link:translate-x-0 text-primary" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Footer Bottom Strip */}
                <div className="border-t border-border py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-xs text-muted-foreground">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6 font-semibold">
                        <p>© Trudicon Consultancy Services</p>
                        <span className="hidden sm:inline text-border">|</span>
                        <div className="flex gap-4">
                            <Link href="/data-protection" className="hover:text-primary transition-colors">
                                Privacy Policy
                            </Link>
                            <span>·</span>
                            <Link href="/data-protection" className="hover:text-primary transition-colors">
                                Terms
                            </Link>
                            <span>·</span>
                            <Link href="/data-protection" className="hover:text-primary transition-colors">
                                Data Protection
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}