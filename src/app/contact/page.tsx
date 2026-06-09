import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Trudicon Consultancy Services — Secure Verification, Trusted Intelligence, and Diplomatic-Grade Due Diligence. Connect with our team today.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <ContactClient />
    </PageShell>
  );
}