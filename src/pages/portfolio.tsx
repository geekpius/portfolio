import Header from '@/components/navs/header.tsx';
import Hero from '@/features/hero.tsx';
import About from '@/features/about.tsx';
import Skills from '@/features/skills.tsx';
import Projects from '@/features/projects.tsx';
import Experience from '@/features/experience.tsx';
import Footer from '@/components/navs/footer.tsx';
import Contact from '@/features/contact.tsx';
import ScrollToTop from '@/components/navs/scroll-to-top.tsx';

export default function Portfolio() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
