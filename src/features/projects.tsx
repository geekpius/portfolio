import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Star } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern technologies for optimal performance.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop',
      technologies: ['React', 'Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true,
      stars: 124,
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative project management tool with real-time updates, file sharing, and team communication features. Designed for modern teams.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'Material-UI'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true,
      stars: 89,
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description:
        'Advanced analytics platform with machine learning insights, real-time data visualization, and predictive analytics capabilities.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop',
      technologies: ['Vue.js', 'Python', 'TensorFlow', 'D3.js', 'FastAPI', 'Redis'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false,
      stars: 67,
    },
    {
      title: 'Mobile Fitness Tracker',
      description:
        'Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=300&fit=crop',
      technologies: ['React Native', 'Firebase', 'Redux', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false,
      stars: 156,
    },
    {
      title: 'Real-time Chat Application',
      description:
        'Scalable chat application with end-to-end encryption, file sharing, and video calling capabilities.',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=300&fit=crop',
      technologies: ['React', 'WebRTC', 'Socket.io', 'Node.js', 'PostgreSQL'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false,
      stars: 203,
    },
    {
      title: 'Blockchain Voting System',
      description:
        'Secure and transparent voting system built on blockchain technology with smart contracts and decentralized architecture.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=300&fit=crop',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false,
      stars: 78,
    },
  ];

  return (
    <section id="projects" className="relative bg-slate-800/50 py-20">
      <div className="bg-grid-pattern absolute inset-0"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Featured Projects</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-400">
              A showcase of my recent work and contributions to the tech community
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`overflow-hidden border-slate-700 bg-slate-800/80 transition-all duration-300 hover:shadow-xl ${project.featured ? 'ring-2 ring-purple-500/50' : ''}`}
              >
                <div className="group relative h-48 overflow-hidden">
                  <img
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  {project.featured && (
                    <Badge className="absolute top-3 left-3 border-0 bg-purple-600 text-white">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute top-3 right-3 flex items-center rounded-full bg-black/70 px-2 py-1 text-xs text-white">
                    <Star className="mr-1 h-3 w-3 fill-current" />
                    {project.stars}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="border-slate-600 bg-slate-700/50 text-xs text-slate-300 hover:bg-slate-600"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button
                    size="sm"
                    asChild
                    className="flex-1 border-slate-600 bg-transparent text-slate-300 hover:bg-slate-700"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    className="flex-1 border-0 bg-purple-600 text-white hover:bg-purple-700"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
