import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";


export function PageShell({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-dvh flex-col bg-background">
            <SiteHeader />
            <main className="flex-1 pt-[90px] md:pt-[126px]">{children}</main>
            <SiteFooter />
        </div>
    );
}

export function PageHero({
    eyebrow,
    title,
    subtitle,
    description,
}: {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    description?: string;
}) {
    return (
        <section className="border-b border-border bg-muted/40">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
                {eyebrow && (
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        {eyebrow}
                    </p>
                )}
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                    {title}
                </h1>
                {subtitle && (
                    <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
                )}
                {description && (
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
}

export function Section({
    children,
    alt = false,
    className = "",
}: {
    children: ReactNode;
    alt?: boolean;
    className?: string;
}) {
    return (
        <section className={`${alt ? "bg-muted/40" : "bg-background"} ${className}`}>
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">{children}</div>
        </section>
    );
}

export function SectionHeader({
    eyebrow,
    title,
    description,
    center = false,
}: {
    eyebrow?: string;
    title: string;
    description?: string;
    center?: boolean;
}) {
    return (
        <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
            {eyebrow && (
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {eyebrow}
                </p>
            )}
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {title}
            </h2>
            {description && (
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
            )}
        </div>
    );
}