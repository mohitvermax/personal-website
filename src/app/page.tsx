
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
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
    
     <main className="flex min-h-screen flex-col items-center  p-10">
      <Navbar />
      <Intro />
      <SkillsSection />
      <Projects/>
      <Contact />
      <div className='footer-home w-full'>
        <Footer/>
      </div>
      </main>
      
    
  );
}
