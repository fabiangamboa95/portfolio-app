import Intro from "@/components/sections/intro-section";
import SectionDivider from "@/components/sections/section-divider";
import About from "@/components/sections/about-section";
import Skills from "@/components/sections/skills-section";
import Experience from "@/components/sections/experience-section";
import Contact from "@/components/sections/contact-section";

export default function Home() {
  return (
      <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
  );
}
