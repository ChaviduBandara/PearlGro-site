import Hero from "@/components/sections/home/Hero";
import WhoWeAre from "@/components/sections/home/WhoWeAre";
import WhyDifferent from "@/components/sections/home/WhyDifferent";
import ProjectPreview from "@/components/sections/home/ProjectPreview";
import WhereWeOperate from "@/components/sections/home/WhereWeOperate";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <WhyDifferent />
      <ProjectPreview />
      <WhereWeOperate />
    </main>
  );
}
