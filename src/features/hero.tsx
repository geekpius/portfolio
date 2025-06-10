import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, XIcon, ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="bg-grid-pattern absolute inset-0"></div>
      <div className="relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Badge className="mb-6 border-purple-500/30 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20">
            Available for new opportunities & growth
          </Badge>

          <h1 className="mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl lg:text-7xl">
            T.K. Pius
          </h1>

          <h2 className="mb-8 text-xl font-medium text-slate-300 sm:text-2xl lg:text-3xl">
            Software Engineer
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            I craft exceptional digital experiences with modern mobile & web frameworks/libraries.
            Passionate about building scalable solutions that make a real impact.
          </p>

          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="group border-0 bg-purple-600 text-white hover:bg-purple-700"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="border-purple-500/50 bg-transparent text-purple-300 hover:bg-purple-500/10"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/geekpius"
              className="rounded-full p-2 text-slate-400 transition-colors hover:bg-purple-500/10 hover:text-purple-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/pius-tweneboah-koduah-%F0%9F%87%AC%F0%9F%87%AD-190079182/"
              className="rounded-full p-2 text-slate-400 transition-colors hover:bg-purple-500/10 hover:text-purple-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://x.com/FiifiDr"
              className="rounded-full p-2 text-slate-400 transition-colors hover:bg-purple-500/10 hover:text-purple-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <XIcon className="h-6 w-6" />
              <span className="sr-only">X</span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-slate-900 to-transparent"></div>
      <div className="animate-blob absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-purple-500/20 opacity-20 blur-3xl filter"></div>
      <div className="animate-blob animation-delay-2000 absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-pink-500/20 opacity-20 blur-3xl filter"></div>
    </section>
  );
}
