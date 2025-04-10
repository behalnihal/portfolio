import About from "@/components/About";
import Profiles from "@/components/CodingProfiles";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="relative gap-y-4 flex flex-col justify-center overflow-x-hidden">
      <About />
      <Experience />
      <Skills />
      <Project />
      <Profiles />
      <Contact />
    </div>
  );
}
