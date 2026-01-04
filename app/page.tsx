import { Navbar } from '@/components/navigation/Navbar';
import { ScrollIndicator } from '@/components/navigation/ScrollIndicator';
import { Hero } from '@/components/sections/Hero';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Achievements } from '@/components/sections/Achievements';
import { Blog } from '@/components/sections/Blog';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="relative">
      <ScrollIndicator />
      <Navbar />

      <main className="relative">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}
