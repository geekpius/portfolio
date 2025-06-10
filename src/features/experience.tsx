import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, Building, TrendingUp } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description:
        'Lead development of microservices architecture serving 1M+ users. Mentored junior developers and implemented CI/CD pipelines that reduced deployment time by 60%.',
      achievements: [
        'Architected scalable microservices handling 10M+ requests daily',
        'Led team of 5 developers on critical product features',
        'Reduced system downtime by 40% through improved monitoring',
        'Implemented automated testing reducing bugs by 35%',
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL', 'Kubernetes', 'Flutter'],
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2020 - 2022',
      type: 'Full-time',
      description:
        'Built and maintained web applications from concept to deployment. Collaborated with design and product teams to deliver user-centric solutions for a growing startup.',
      achievements: [
        'Developed MVP that secured $2M in Series A funding',
        'Built responsive web app serving 50K+ active users',
        'Optimized application performance improving load times by 50%',
        'Integrated payment systems processing $1M+ monthly',
      ],
      technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'Redis', 'Stripe'],
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'New York, NY',
      period: '2019 - 2020',
      type: 'Full-time',
      description:
        'Developed responsive websites and web applications for various clients. Focused on performance optimization, accessibility, and modern web standards.',
      achievements: [
        'Delivered 20+ client projects with 98% satisfaction rate',
        'Improved website performance scores by average of 40%',
        'Implemented accessibility standards achieving WCAG 2.1 AA compliance',
        'Mentored 3 junior developers on modern frontend practices',
      ],
      technologies: ['JavaScript', 'React', 'SASS', 'Webpack', 'Git', 'Figma'],
    },
    {
      title: 'Junior Developer',
      company: 'CodeCraft Solutions',
      location: 'Austin, TX',
      period: '2018 - 2019',
      type: 'Full-time',
      description:
        'Started my professional journey building web applications and learning industry best practices. Contributed to various client projects and internal tools.',
      achievements: [
        'Contributed to 15+ web development projects',
        'Learned modern development workflows and practices',
        'Built internal tools improving team productivity by 25%',
        'Completed advanced training in React and Node.js',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'MySQL'],
    },
  ];

  return (
    <section id="experience" className="relative bg-slate-900 py-20">
      <div className="bg-grid-pattern absolute inset-0"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Work Experience</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-400">
              My professional journey and the impact I've made along the way
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card
                key={index}
                className="border-slate-700 bg-slate-800/80 transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <CardTitle className="mb-2 flex items-center text-xl text-white">
                        <Building className="mr-2 h-5 w-5 text-purple-400" />
                        {experience.title}
                      </CardTitle>
                      <CardDescription className="mb-2 text-lg font-medium text-purple-400">
                        {experience.company}
                      </CardDescription>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                        <div className="flex items-center">
                          <CalendarDays className="mr-1 h-4 w-4" />
                          {experience.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-1 h-4 w-4" />
                          {experience.location}
                        </div>
                        <Badge className="border-purple-500/30 bg-purple-500/10 text-xs text-purple-300">
                          {experience.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="leading-relaxed text-slate-400">{experience.description}</p>

                  <div>
                    <h4 className="mb-3 flex items-center font-semibold text-white">
                      <TrendingUp className="mr-2 h-4 w-4 text-green-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-purple-400"></span>
                          <span className="text-sm text-slate-400">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold text-white">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className="border-slate-600 bg-slate-700/50 text-xs text-slate-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
