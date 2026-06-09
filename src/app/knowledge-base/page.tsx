import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { KnowledgeBaseClient } from "./KnowledgeBaseClient";

export const metadata: Metadata = {
  title: "Knowledge Base",
  description: "Diplomatic-Grade Verification Methodologies & Intelligence Standards. Learn about our verification framework and structured process.",
};

export default function KnowledgeBasePage() {
  return (
    <PageShell>
      <KnowledgeBaseClient />
    </PageShell>
  );
}