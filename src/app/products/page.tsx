import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Crops grown in Pearl Gro greenhouses — Scotch Bonnet, Brinjal, Tomato, Capsicum, and Salad Cucumber.",
};

export default function ProductsPage() {
  return (
    <main className="mx-auto w-full max-w-[1120px] px-6 py-[120px]">
      <p className="font-mono text-[13px] uppercase tracking-[1.5px] text-muted">
        Products
      </p>
      <h1 className="pt-4 font-heading text-[clamp(40px,6vw,88px)] font-bold tracking-tight text-text">
        Products
      </h1>
    </main>
  );
}
