"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  Search,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  MapPinned,
  Building2
} from "lucide-react";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import Link from "next/link";

// FAQ Data with categories
const faqs = [
  {
    q: "What makes Trudicon different from standard background verification companies?",
    a: "Trudicon operates with diplomatic-grade verification protocols focused on high-risk and sensitive verification environments requiring field intelligence, document integrity checks, and structured due diligence.",
    category: "Verification Services"
  },
  {
    q: "Do you provide pan India verification coverage?",
    a: "Yes. We provide nationwide operational coverage including metro cities, Tier-2 locations, rural areas, and remote regions.",
    category: "Coverage & Operations"
  },
  {
    q: "Do you support embassies and consular sections?",
    a: "Yes. Trudicon supports diplomatic missions, consulates, and institutional clients with confidential verification and due diligence assignments.",
    category: "Industry Support"
  },
  {
    q: "What industries do you work with?",
    a: "We work with diplomatic missions, multinational corporations, legal advisory firms, immigration support organizations, and institutional clients.",
    category: "Industry Support"
  },
  {
    q: "How do you maintain confidentiality?",
    a: "We follow strict confidentiality protocols including restricted reporting access, secure archival processes, and controlled information handling systems.",
    category: "Security & Confidentiality"
  },
];

const categories = [
  { name: "All", icon: HelpCircle },
  { name: "Verification Services", icon: FileCheck2 },
  { name: "Security & Confidentiality", icon: ShieldCheck },
  { name: "Coverage & Operations", icon: MapPinned },
  { name: "Industry Support", icon: Building2 },
];

export function FaqClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] select-none z-0">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="faq-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#4B21B8" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#faq-grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
        {/* HERO SECTION */}
        <section className="relative min-h-[70vh] flex flex-col items-center justify-center py-20 text-center border-b border-border">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-semibold text-primary uppercase tracking-wider">
              <HelpCircle className="h-3.5 w-3.5" />
              Support Center
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              Answers to common questions about our due diligence, verification, and intelligence services.
            </p>
          </div>

          {/* Large FAQ Illustration Placeholder */}
          <div className="mt-12 w-full max-w-2xl">
            <ImagePlaceholder
              icon={HelpCircle}
              text="FAQ Illustration"
              aspectRatio="aspect-[21/9]"
              className="shadow-[0_12px_24px_rgba(0,0,0,0.02)]"
              src="/knowledge-base.jpg"
            />
          </div>
        </section>

        {/* CATEGORY & SEARCH SECTION (Sticky container) */}
        <section className="py-12 border-b border-border">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            {/* Left Category Cards */}
            <div className="lg:col-span-8 flex flex-wrap gap-3">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = activeCategory === cat.name;
                return (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs font-bold uppercase tracking-wider transition-all duration-200 ${isSelected
                        ? "bg-primary border-primary text-white shadow-md shadow-primary/10"
                        : "bg-white border-border text-muted-foreground hover:border-primary/20 hover:text-primary"
                      }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {/* Right Search Bar */}
            <div className="lg:col-span-4 relative">
              <div className="relative w-full rounded-full border border-border bg-white p-1 flex items-center shadow-sm focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 transition-all duration-300">
                <Search className="h-4 w-4 text-muted-foreground ml-3.5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent px-3 py-2 text-sm text-foreground focus:outline-none placeholder:text-muted-foreground font-medium"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ACCORDION SECTION */}
        <section className="py-14 md:py-16 border-b border-border">
          <div className="mx-auto max-w-3xl space-y-4">
            <AnimatePresence initial={false}>
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => {
                  const globalIdx = faqs.findIndex((f) => f.q === faq.q);
                  const isOpen = openIndexes.includes(globalIdx);
                  return (
                    <motion.div
                      key={globalIdx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="border border-border rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/20"
                    >
                      <button
                        onClick={() => toggleIndex(globalIdx)}
                        className="w-full flex justify-between items-center text-left"
                      >
                        <span className="text-base font-bold text-foreground tracking-tight pr-4">
                          {faq.q}
                        </span>
                        <span className={`h-8 w-8 flex-none rounded-full bg-primary/5 text-primary flex items-center justify-center font-bold text-lg transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                              open: { opacity: 1, height: "auto", marginTop: 18 },
                              collapsed: { opacity: 0, height: 0, marginTop: 0 }
                            }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="text-sm leading-relaxed text-muted-foreground font-medium border-t border-border/50 pt-4">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })
              ) : (
                <div className="text-center py-12 space-y-3">
                  <p className="text-sm font-semibold text-muted-foreground">
                    No answers matching your search criteria were found.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("All");
                    }}
                    className="text-xs font-bold text-primary uppercase tracking-wider hover:underline"
                  >
                    Clear Filter
                  </button>
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* STILL NEED HELP SECTION */}
        <section className="py-14 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[32px] border border-border bg-white p-8 md:p-16 text-center max-w-4xl mx-auto space-y-8 shadow-[0_12px_36px_rgba(0,0,0,0.03)]"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 text-primary">
              <MessageSquare className="h-6 w-6" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Still Need Help?
              </h2>
              <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                If you have specific verification requirements, regulatory guidelines, or data protection questions not answered here, contact our team.
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
