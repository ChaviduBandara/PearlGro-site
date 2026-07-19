import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Learn about protected greenhouse cultivation and modern agri-tech practices with Pearl Gro.",
};

export default function EducationPage() {
  return (
    <main className="mx-auto w-full max-w-[1120px] px-6 py-[120px]">
      <p className="font-mono text-[13px] uppercase tracking-[1.5px] text-muted">
        Education
      </p>
      <h1 className="pt-4 font-heading text-[clamp(40px,6vw,88px)] font-bold tracking-tight text-text">
        Education
      </h1>
    </main>
  );
}
