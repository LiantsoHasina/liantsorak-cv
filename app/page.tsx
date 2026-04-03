'use client';

import { Navbar } from '@/components/new/Navbar';
import { Hero } from '@/components/new/Hero';
import { About } from '@/components/new/About';
import { Experience } from '@/components/new/Experience';
import { Projects } from '@/components/new/Projects';
import { Skills } from '@/components/new/Skills';
import { Contact } from '@/components/new/Contact';
import { Footer } from '@/components/new/Footer';

export default function Portfolio() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
