"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What is Pearl Gro?",
    answer:
      "Pearl Gro is Sri Lanka's most advanced greenhouse cultivation venture, combining controlled-environment farming, renewable energy infrastructure, and expert agricultural management to deliver consistent, export-grade produce. We are currently developing our Phase 1 project in Malsiripura across 10 acres with 5 high-demand crops.",
  },
  {
    question: "How does the investment work?",
    answer:
      "This answer is coming soon. In the meantime, reach out to our team directly with any questions about the investment process.",
  },
  {
    question: "Is there a dashboard or investor login?",
    answer:
      "This answer is coming soon. In the meantime, reach out to our team directly with any questions about investor access.",
  },
  {
    question: "How do I get more information?",
    answer:
      "Reach out through the Contact or Invest pages, and a representative will follow up with more information.",
  },
];

function AccordionPanel({ answer }: { answer: string }) {
  const panelRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const el = panelRef.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
      );
    },
    { scope: panelRef },
  );

  return (
    <p ref={panelRef} className="pb-6 text-[15px] leading-[1.75] text-gray-600">
      {answer}
    </p>
  );
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
  isLast,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}) {
  return (
    <div className={`faq-item w-full ${!isLast ? "border-b border-gray-200" : ""}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-[17px] font-medium text-gray-900">
          {item.question}
        </span>
        <span className="text-2xl font-light text-teal-700 shrink-0">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && <AccordionPanel answer={item.answer} />}
    </div>
  );
}

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(-1);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Heading animation
      gsap.fromTo(
        ".faq-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".faq-heading",
            start: "top 85%",
          },
        },
      );

      // Staggered row animations
      gsap.fromTo(
        ".faq-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".faq-item",
            start: "top 88%",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full  px-6 py-16 md:px-16 lg:px-24"
    >
      <h2 className="faq-heading mb-10 font-heading text-4xl font-bold text-gray-900 md:text-5xl">
        Frequently Asked Questions
      </h2>

      <div className="w-full border-t border-gray-200">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={item.question}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            isLast={index === faqItems.length - 1}
          />
        ))}
      </div>
    </section>
  );
}