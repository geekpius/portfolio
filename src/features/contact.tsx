import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    alert("Message sent! I'll get back to you soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'fiifipius@gmail.com',
      href: 'mailto:fiifipius@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+233 542-39-8441',
      href: 'tel:+233542398441',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Accra, Ghana',
      href: 'https://www.google.com/maps/place/Accra/@5.5913738,-0.2621307,12z/data=!3m1!4b1!4m6!3m5!1s0xfdf9084b2b7a773:0xbed14ed8650e2dd3!8m2!3d5.5592846!4d-0.1974306!16zL20vMGZueWM?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D',
    },
  ];

  return (
    <section id="contact" className="relative bg-slate-800/50 py-20">
      <div className="bg-grid-pattern absolute inset-0"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Get In Touch</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-400">
              Ready to start your next project? Let's discuss how we can work together to bring your
              ideas to life.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="mb-6 flex items-center text-2xl font-semibold text-white">
                  <MessageCircle className="mr-3 h-6 w-6 text-purple-400" />
                  Let's work together
                </h3>
                <p className="mb-8 leading-relaxed text-slate-400">
                  I'm always interested in new opportunities and exciting projects. Whether you have
                  a question, want to discuss a potential collaboration, or just want to say hi, I'd
                  love to hear from you!
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                  <Badge className="border-purple-500/30 bg-purple-500/10 text-purple-300">
                    Available for freelance
                  </Badge>
                  <Badge className="border-purple-500/30 bg-purple-500/10 text-purple-300">
                    Open to full-time roles
                  </Badge>
                  <Badge className="border-purple-500/30 bg-purple-500/10 text-purple-300">
                    Consulting available
                  </Badge>
                </div>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="group flex items-center rounded-lg border border-slate-700 bg-slate-800/80 p-4 transition-shadow hover:shadow-md"
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="mr-4 rounded-full bg-purple-500/10 p-3 transition-colors group-hover:bg-purple-500/20">
                      <info.icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{info.label}</p>
                      <p className="text-slate-400">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/*<div className="rounded-lg border border-purple-500/20 bg-purple-500/5 p-6">*/}
              {/*  <div className="mb-3 flex items-center">*/}
              {/*    <Calendar className="mr-2 h-5 w-5 text-purple-400" />*/}
              {/*    <h4 className="font-semibold text-white">Schedule a Call</h4>*/}
              {/*  </div>*/}
              {/*  <p className="mb-4 text-sm text-slate-400">*/}
              {/*    Prefer to talk? Schedule a 30-minute call to discuss your project in detail.*/}
              {/*  </p>*/}
              {/*  <Button className="w-full border-purple-500/30 bg-transparent text-purple-300 hover:bg-purple-500/10">*/}
              {/*    Book a Meeting*/}
              {/*  </Button>*/}
              {/*</div>*/}
            </div>

            {/* Contact Form */}
            <Card className="border-slate-700 bg-slate-800/80 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Send className="mr-2 h-5 w-5" />
                  Send me a message
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Fill out the form below and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Input
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-slate-600 bg-slate-700 text-white placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-slate-600 bg-slate-700 text-white placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-slate-600 bg-slate-700 text-white placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Tell me about your project or question..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="border-slate-600 bg-slate-700 text-white placeholder:text-slate-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full border-0 bg-purple-600 text-white hover:bg-purple-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
