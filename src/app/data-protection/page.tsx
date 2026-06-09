import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { DataProtectionClient } from "./DataProtectionClient";

export const metadata: Metadata = {
  title: "Data Protection & Privacy",
  description: "Protecting Sensitive Information Through Secure Infrastructure & Responsible Operations. Learn about our secure handling framework.",
};

export default function DataProtectionPage() {
  return (
    <PageShell>
      <DataProtectionClient />
    </PageShell>
  );
}