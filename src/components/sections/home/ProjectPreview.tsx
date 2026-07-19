import Image from "next/image";
import Container from "@/components/Container";

export default function ProjectPreview() {
  return (
    <section className="bg-bg-black py-16 lg:pt-20 lg:pb-[160px]">
      <Container>
        <div className="relative aspect-video w-full overflow-hidden rounded-[24px] bg-bg-deep">
          <Image
            src="/home/greenhouse-tomatoes.jpg"
            alt="Pearl Gro Malsiripura project greenhouse interior"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(7,11,9,0.5) 100%)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex size-24 items-center justify-center rounded-full border-2 border-accent bg-[rgba(10,20,16,0.65)] shadow-[0_0_24px_rgba(47,229,140,0.2)]">
              <Image
                src="/home/icons/play.svg"
                alt="Play project video"
                width={32}
                height={32}
                className="ml-1"
              />
            </div>
          </div>
        </div>

        <p className="pt-6 text-center font-mono text-[11px] tracking-[1.98px] text-muted uppercase">
          See Pearl Gro&rsquo;s Malsiripura project take shape.
        </p>
      </Container>
    </section>
  );
}
