import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Pearl Gro — Malsiripura, Thambuttegama, Sri Lanka.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-[1120px] px-6 py-[120px]">
      <p className="font-mono text-[13px] uppercase tracking-[1.5px] text-muted">
        Contact
      </p>
      <h1 className="pt-4 font-heading text-[clamp(40px,6vw,88px)] font-bold tracking-tight text-text">
        Contact
      </h1>
    </main>
  );
}
