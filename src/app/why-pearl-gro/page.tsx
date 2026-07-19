import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Pearl Gro",
  description:
    "Why invest with Pearl Gro — technology, expert knowledge, and management behind Sri Lankan greenhouse cultivation.",
};

export default function WhyPearlGroPage() {
  return (
    <main className="mx-auto w-full max-w-[1120px] px-6 py-[120px]">
      <p className="font-mono text-[13px] uppercase tracking-[1.5px] text-muted">
        Why Pearl Gro
      </p>
      <h1 className="pt-4 font-heading text-[clamp(40px,6vw,88px)] font-bold tracking-tight text-text">
        Why Pearl Gro
      </h1>
    </main>
  );
}
