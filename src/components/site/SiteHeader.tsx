"use client";

import { useEffect, useState } from "react";
import {
    Menu,
    X,
    ChevronDown,
    ArrowRight,
    Lock,
    ShieldCheck,
    FileSearch,
    ClipboardList,
    KeyRound,
    Database,
    Building2,
    Landmark,
    Radar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
    href: string;
    label: string;
    mega?: "knowledge" | "compliance" | "about";
}

const nav: readonly NavItem[] = [
    { href: "/", label: "Home" },
    { href: "/knowledge-base", label: "Knowledge Base", mega: "knowledge" },
    { href: "/compliance-security", label: "Compliance & Security", mega: "compliance" },
    { href: "/data-protection", label: "Data Protection" },
    { href: "/about", label: "About Us", mega: "about" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
];

// Mega Menu Cards Content
const megaMenus: Record<
    string,
    {
        icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
        title: string;
        desc: string;
        href: string;
    }[]
> = {
    knowledge: [
        {
            icon: ShieldCheck,
            title: "Diplomatic Standards",
            desc: "Confidentiality and discretion protocols expected in diplomatic environments.",
            href: "/knowledge-base#diplomatic-standards",
        },
        {
            icon: FileSearch,
            title: "Verification Framework",
            desc: "Custom verification systems for diplomatic missions and global groups.",
            href: "/knowledge-base#diplomatic-verification-framework",
        },
        {
            icon: ClipboardList,
            title: "Our Verification Process",
            desc: "Step-by-step assessment, allocation, risk evaluation, and secure delivery.",
            href: "/knowledge-base#our-verification-process",
        },
    ],
    compliance: [
        {
            icon: KeyRound,
            title: "Controlled Access",
            desc: "Information restricted strictly to authorized need-to-know staff.",
            href: "/compliance-security#controlled-access",
        },
        {
            icon: Lock,
            title: "Secure Processes",
            desc: "Discreet operations aligned with ISO 27001 information security principles.",
            href: "/compliance-security#secure-processes",
        },
        {
            icon: Database,
            title: "Governance Standards",
            desc: "Accountability standards promoting privacy and data protection.",
            href: "/compliance-security#governance-standards",
        },
    ],
    about: [
        {
            icon: Landmark,
            title: "Company Overview",
            desc: "Consular risk mitigation and verification solutions across India.",
            href: "/about#company-overview",
        },
        {
            icon: Radar,
            title: "Operational Approach",
            desc: "Ground intelligence, local-language deployment, and multi-source check.",
            href: "/about#operational-approach",
        },
        {
            icon: Building2,
            title: "Sectors We Serve",
            desc: "Supporting embassies, consulates, immigration, and compliance teams.",
            href: "/about#sectors-we-serve",
        },
    ],
};

export function SiteHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 w-full">
            {/* Top Security Bar */}
            <AnimatePresence>
                {!scrolled && (
                    <motion.div
                        initial={{ height: "36px", opacity: 1 }}
                        animate={{ height: "36px", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="hidden w-full bg-[#111827] text-white overflow-hidden md:block"
                    >
                        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 text-[11px] font-medium tracking-wide sm:px-6 lg:px-8">
                            <div className="flex items-center gap-1.5 opacity-90 transition-opacity hover:opacity-100">
                                <span className="text-[10px]">🔒</span>
                                <span>DIPLOMATIC GRADE VERIFICATION STANDARDS</span>
                            </div>
                            <div className="flex items-center gap-1.5 opacity-90 transition-opacity hover:opacity-100">
                                <span className="text-[10px]">🛡</span>
                                <span>SECURE INFORMATION HANDLING FRAMEWORK</span>
                            </div>
                            <div className="flex items-center gap-1.5 opacity-90 transition-opacity hover:opacity-100">
                                <span className="text-[10px]">📍</span>
                                <span>PAN INDIA VERIFICATION COVERAGE</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Header */}
            <header
                className={`w-full bg-white border-b transition-all duration-300 ${scrolled
                    ? "h-[70px] border-border shadow-[0_4px_30px_rgba(17,24,39,0.03)] bg-white/95 backdrop-blur-md"
                    : "h-[90px] border-border"
                    }`}
                onMouseLeave={() => setHoveredMenu(null)}
            >
                <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Logo Left */}
                    <Link href="/" className="flex items-center gap-3 group" aria-label="Trudicon home">
                        <img
                            src="/logo.jpeg"
                            alt="Trudicon Logo"
                            className="h-12 md:h-14 w-auto object-contain bg-primary p-1.5 rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                    </Link>

                    {/* Desktop Navigation Center */}
                    <nav className="hidden h-full items-center gap-4 xl:gap-6 xl:flex" aria-label="Primary">
                        {nav.map((n) => {
                            const isActive = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
                            return (
                                <div
                                    key={n.href}
                                    className="relative flex h-full items-center"
                                    onMouseEnter={() => {
                                        if (n.mega) {
                                            setHoveredMenu(n.mega);
                                        } else {
                                            setHoveredMenu(null);
                                        }
                                    }}
                                >
                                    <Link
                                        href={n.href}
                                        className={`group relative py-2 text-[12px] xl:text-[13.5px] font-semibold tracking-wide uppercase transition-colors duration-200 whitespace-nowrap ${isActive ? "text-primary" : "text-[#5B6470] hover:text-primary"
                                            }`}
                                    >
                                        <span className="flex items-center gap-1">
                                            {n.label}
                                            {n.mega && (
                                                <ChevronDown
                                                    className={`h-3 w-3 transition-transform duration-300 ${hoveredMenu === n.mega ? "rotate-180 text-primary" : ""
                                                        }`}
                                                />
                                            )}
                                        </span>
                                        {/* Animated Underline on Hover (expands from center) */}
                                        {!isActive && (
                                            <span className="absolute bottom-0 left-0 h-[2px] w-full origin-center scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
                                        )}
                                    </Link>
                                    {/* Active indicator dot underneath */}
                                    {isActive && (
                                        <span className="absolute bottom-4 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary" />
                                    )}
                                </div>
                            );
                        })}
                    </nav>

                    {/* CTA Right */}
                    <div className="hidden xl:block">
                        <Button
                            asChild
                            variant="outline"
                            className="border-[#4B21B8] bg-white text-[#4B21B8] hover:bg-[#4B21B8] hover:text-white font-semibold transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_4px_16px_rgba(75,33,184,0.12)] px-5 h-10 rounded-md"
                        >
                            <Link href="/contact">Request Consultation</Link>
                        </Button>
                    </div>

                    {/* Mobile menu trigger */}
                    <button
                        type="button"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground hover:bg-muted/50 transition-colors xl:hidden"
                        aria-label="Toggle menu"
                        onClick={() => setOpen(true)}
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>

                {/* Mega Menu Dropdowns */}
                <AnimatePresence>
                    {hoveredMenu && (
                        <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.99 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.99 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="absolute left-0 right-0 top-full border-b border-border bg-white shadow-[0_16px_40px_rgba(17,24,39,0.08)] z-40"
                            onMouseEnter={() => setHoveredMenu(hoveredMenu)}
                            onMouseLeave={() => setHoveredMenu(null)}
                        >
                            <div className="mx-auto max-w-7xl px-8 py-10">
                                <div className="grid gap-6 md:grid-cols-3">
                                    {megaMenus[hoveredMenu]?.map((item, idx) => {
                                        const IconComponent = item.icon;
                                        return (
                                            <Link
                                                key={idx}
                                                href={item.href}
                                                onClick={() => setHoveredMenu(null)}
                                                className="group/card flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-[0_1px_3px_rgba(0,0,0,0.01)] transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_8px_30px_rgba(75,33,184,0.05)]"
                                            >
                                                <div>
                                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors duration-300 group-hover/card:bg-primary group-hover/card:text-white">
                                                        <IconComponent className="h-5 w-5 transition-transform duration-300 group-hover/card:rotate-6" />
                                                    </div>
                                                    <h3 className="mt-5 text-base font-bold tracking-tight text-foreground transition-colors duration-200 group-hover/card:text-primary">
                                                        {item.title}
                                                    </h3>
                                                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover/card:opacity-100 group-hover/card:translate-x-0">
                                                    <span>Explore Details</span>
                                                    <ArrowRight className="h-3.5 w-3.5" />
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Mobile Drawer (Right side slide panel) */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* Backdrop Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 z-50 bg-[#111827]"
                        />

                        {/* Slide Drawer Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 26, stiffness: 220 }}
                            className="fixed bottom-0 right-0 top-0 z-50 flex w-full max-w-[320px] flex-col justify-between bg-white p-6 shadow-[0_-8px_30px_rgba(0,0,0,0.15)]"
                        >
                            <div>
                                <div className="flex items-center justify-between pb-6 border-b border-border">
                                    <div className="flex items-center gap-2.5">
                                        <img
                                            src="/logo.jpeg"
                                            alt="Trudicon Logo"
                                            className="h-8 w-auto object-contain bg-primary p-1 rounded"
                                        />
                                        <span className="text-[14px] font-bold tracking-[0.1em] text-foreground uppercase">
                                            Trudicon
                                        </span>
                                    </div>
                                    <button
                                        type="button"
                                        className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted transition-colors"
                                        onClick={() => setOpen(false)}
                                    >
                                        <X className="h-5 w-5 text-[#5B6470]" />
                                    </button>
                                </div>

                                <nav className="mt-8 flex flex-col gap-1.5" aria-label="Mobile">
                                    {nav.map((n) => {
                                        const isActive = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
                                        return (
                                            <Link
                                                key={n.href}
                                                href={n.href}
                                                onClick={() => setOpen(false)}
                                                className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold tracking-wide uppercase transition-colors ${isActive
                                                    ? "bg-primary/5 text-primary"
                                                    : "text-[#5B6470] hover:bg-muted/50 hover:text-primary"
                                                    }`}
                                            >
                                                <span>{n.label}</span>
                                                {isActive && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                                            </Link>
                                        );
                                    })}
                                </nav>
                            </div>

                            {/* Fixed CTA at bottom of drawer */}
                            <div className="mt-auto border-t border-border pt-6">
                                <Button
                                    asChild
                                    className="w-full bg-[#4B21B8] hover:bg-[#4B21B8]/95 text-white font-bold h-11"
                                >
                                    <Link href="/contact" onClick={() => setOpen(false)}>
                                        Request Consultation
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}