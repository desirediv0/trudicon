import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { FaqClient } from "./FaqClient";

const faqs = [
  {
    q: "What makes Trudicon different from standard background verification companies?",
    a: "Trudicon operates with diplomatic-grade verification protocols focused on high-risk and sensitive verification environments requiring field intelligence, document integrity checks, and structured due diligence.",
  },
  {
    q: "Do you provide pan-India verification coverage?",
    a: "Yes. We provide nationwide operational coverage including metro cities, Tier-2 locations, rural areas, and remote regions.",
  },
  {
    q: "Do you support embassies and consular sections?",
    a: "Yes. Trudicon supports diplomatic missions, consulates, and institutional clients with confidential verification and due diligence assignments.",
  },
  {
    q: "What industries do you work with?",
    a: "We work with diplomatic missions, multinational corporations, legal advisory firms, immigration support organizations, and institutional clients.",
  },
  {
    q: "How do you maintain confidentiality?",
    a: "We follow strict confidentiality protocols including restricted reporting access, secure archival processes, and controlled information handling systems.",
  },
];

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about Trudicon's diplomatic-grade verification, coverage, confidentiality, and industries served.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a,
      },
    })),
  };

  return (
    <PageShell>
      {/* JSON-LD Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqClient />
    </PageShell>
  );
}