
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import SkillsSection from "@/components/Skills";

export const metadata = {
  title: "emvee.",
  description: "Mohit Verma's personal website",
};


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-12">
      <Navbar />
      <Intro />
      <SkillsSection />
      <Projects/>
    </main>
  );
}
