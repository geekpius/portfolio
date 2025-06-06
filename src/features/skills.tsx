import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 85 },
      ],
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 82 },
        { name: 'GraphQL', level: 80 },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: '🛠️',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'Git', level: 95 },
        { name: 'CI/CD', level: 82 },
        { name: 'Linux', level: 88 },
      ],
    },
    {
      title: 'Mobile & Other',
      icon: '📱',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 75 },
        { name: 'Firebase', level: 88 },
        { name: 'WebRTC', level: 70 },
        { name: 'Three.js', level: 65 },
      ],
    },
  ];

  const technologies = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Vue.js',
    'Node.js',
    'Python',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Docker',
    'AWS',
    'Vercel',
    'Git',
    'Tailwind CSS',
    'GraphQL',
    'REST APIs',
    'Jest',
    'Cypress',
    'Figma',
    'React Native',
    'Flutter',
    'Firebase',
    'Supabase',
    'Stripe',
  ];

  return (
    <section id="skills" className="relative bg-slate-900 py-20">
      <div className="bg-grid-pattern absolute inset-0"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Skills & Technologies
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-400">
              A comprehensive toolkit for building modern applications
            </p>
          </div>

          {/* Skill Categories with Progress */}
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="border-slate-700 bg-slate-800/80 transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-white">
                    <span className="mr-3 text-2xl">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-white">{skill.name}</span>
                        <span className="text-slate-400">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-slate-700" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technology Tags */}
          <div className="text-center">
            <h3 className="mb-6 text-xl font-semibold text-white">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  className="border-slate-600 bg-slate-800/50 px-3 py-1 text-sm text-slate-300 transition-colors hover:bg-purple-500 hover:text-white"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
