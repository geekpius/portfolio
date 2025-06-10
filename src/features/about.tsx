import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Lightbulb, Users, Zap, Coffee, Heart } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description:
        'Writing maintainable, scalable, and efficient code that stands the test of time',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Creative solutions to complex technical challenges with innovative approaches',
    },
    {
      icon: Users,
      title: 'Team Player',
      description:
        'Strong collaboration skills with excellent communication and mentoring abilities',
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description:
        'Quick to adapt to new technologies and frameworks in the ever-evolving tech landscape',
    },
  ];

  const interests = [
    'Mobile & Web Architecture',
    'Frameworks/Libraries',
    'Open Source',
    'Finance',
    'Reading',
    'Family',
  ];

  return (
    <section id="about" className="relative bg-slate-800/50 py-20">
      <div className="bg-grid-pattern absolute inset-0"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">About Me</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-400">
              Software Engineer based in Ghana(West Africa). Passionate about creating digital
              solutions that make a difference.
            </p>
          </div>

          <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 flex items-center text-2xl font-semibold text-white">
                  <Coffee className="mr-2 h-6 w-6 text-purple-400" />
                  My Journey
                </h3>
                <p className="mb-4 text-slate-400">
                  I'm a passionate software engineer with years of experience building mobile & web
                  applications and contributing to community packages. I love turning complex
                  problems into simple, beautiful, and intuitive solutions.
                </p>
                <p className="mb-4 text-slate-400">
                  When I'm not coding, you can find me exploring new technologies, reading financial
                  books and talking to new people about new tech stuff.
                </p>
                <p className="text-slate-400">
                  I believe in writing clean, maintainable code and creating exceptional user
                  experiences that make a real difference in people's lives.
                </p>
              </div>

              <div>
                <h4 className="mb-3 flex items-center font-semibold text-white">
                  <Heart className="mr-2 h-5 w-5 text-red-400" />
                  Interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <Badge
                      key={index}
                      className="border-purple-500/30 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/20 to-pink-500/10">
                <div className="absolute text-8xl opacity-20">💻</div>
                <div className="z-10 text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="border-slate-700 bg-slate-800/80 text-center transition-shadow hover:shadow-lg"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-purple-500/10 p-3">
                      <highlight.icon className="h-8 w-8 text-purple-400" />
                    </div>
                  </div>
                  <h3 className="mb-2 font-semibold text-white">{highlight.title}</h3>
                  <p className="text-sm text-slate-400">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
