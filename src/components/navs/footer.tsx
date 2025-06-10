import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:alex.johnson@email.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-slate-700 bg-slate-800/80 py-12">
      <div className="bg-grid-pattern absolute inset-0"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 grid gap-8 md:grid-cols-3">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">GeekJS</h3>
              <p className="text-slate-400">
                Software Engineer based in Ghana(West Africa). Passionate about creating exceptional
                digital experiences.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="rounded-full p-2 text-slate-400 transition-colors hover:bg-purple-500/10 hover:text-purple-400"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="cursor-pointer text-left text-slate-400 transition-colors hover:text-purple-400"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Get In Touch</h4>
              <div className="flex flex-col gap-2 text-slate-400">
                <p>Accra, Ghana</p>
                <a target="_blank" href={'mailto:fiifipius@gmail.com'}>
                  fiifipius@gmail.com
                </a>
                <a href={'tel:+233542398441'}>+233 542-39-8441</a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col items-center justify-between border-t border-slate-700 pt-8 md:flex-row">
            <p className="mb-4 text-sm text-slate-400 md:mb-0">
              © {currentYear} GeekJS. All rights reserved.
            </p>
            <p className="flex items-center text-sm text-slate-400">
              Made with <Heart className="mx-1 h-4 w-4 fill-current text-red-400" /> using React &
              Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
