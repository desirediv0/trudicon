import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Trudicon Consultancy Services",
  description: "Connect with our team to discuss confidential verification requirements, diplomatic support services, or corporate due diligence projects.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
