import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Pearl Gro's greenhouse cultivation project in Malsiripura, Sri Lanka.",
};

export default function GalleryPage() {
  return (
    <main className="mx-auto w-full max-w-[1120px] px-6 py-[120px]">
      <p className="font-mono text-[13px] uppercase tracking-[1.5px] text-muted">
        Gallery
      </p>
      <h1 className="pt-4 font-heading text-[clamp(40px,6vw,88px)] font-bold tracking-tight text-text">
        Gallery
      </h1>
    </main>
  );
}
