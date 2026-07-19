import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-[1120px] flex-col items-start px-6 py-[120px]">
      <p className="font-mono text-[13px] uppercase tracking-[1.5px] text-muted">
        404
      </p>
      <h1 className="pt-4 font-heading text-[clamp(40px,6vw,88px)] font-bold tracking-tight text-text">
        Page not found
      </h1>
      <p className="max-w-[520px] pt-6 text-[17px] leading-[1.7] text-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex h-[45px] items-center justify-center rounded-full bg-accent px-6 text-[14px] font-semibold text-accent-ink shadow-[0_0_8px_rgba(47,229,140,0.2)] transition-colors hover:bg-accent-hover"
      >
        Back to Home
      </Link>
    </main>
  );
}
