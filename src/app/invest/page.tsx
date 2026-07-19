import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invest",
  description:
    "Phase 1 has 10 investor slots. Register your interest in Pearl Gro's greenhouse cultivation project.",
};

export default function InvestPage() {
  return (
    <main className="mx-auto w-full max-w-[1120px] px-6 py-[120px]">
      <p className="font-mono text-[13px] uppercase tracking-[1.5px] text-muted">
        Invest
      </p>
      <h1 className="pt-4 font-heading text-[clamp(40px,6vw,88px)] font-bold tracking-tight text-text">
        Invest
      </h1>
    </main>
  );
}
