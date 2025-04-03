import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="gap-y-4 flex flex-col justify-center">
      <About />
      <Experience />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
}
