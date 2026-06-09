import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Trudicon Consultancy Services — Specialized Due Diligence & Background Verification Across India. Over 8 years of consular support experience.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <AboutClient />
    </PageShell>
  );
}