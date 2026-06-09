import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { ComplianceSecurityClient } from "./ComplianceSecurityClient";

export const metadata: Metadata = {
  title: "Compliance & Security",
  description: "Governance Framework Built on Trust, Accountability & Information Security. ISO 27001 compliance standards and data confidentiality.",
};

export default function ComplianceSecurityPage() {
  return (
    <PageShell>
      <ComplianceSecurityClient />
    </PageShell>
  );
}