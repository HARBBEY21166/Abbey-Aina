"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout process.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "web",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity application for managing tasks, projects, and team collaboration with real-time updates.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "web",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A weather application that provides current conditions and forecasts based on user location or search.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["JavaScript", "API Integration", "CSS3", "HTML5"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "web",
  },
  {
    id: 4,
    title: "Fitness Tracker Mobile App",
    description:
      "A mobile application for tracking workouts, nutrition, and fitness progress with personalized recommendations.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React Native", "Redux", "Firebase", "Expo"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "mobile",
  },
  {
    id: 5,
    title: "Portfolio Website Template",
    description: "A customizable portfolio template for developers and designers to showcase their work and skills.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "web",
  },
  {
    id: 6,
    title: "Recipe Finder App",
    description:
      "A mobile application that helps users find recipes based on available ingredients and dietary preferences.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React Native", "API Integration", "AsyncStorage"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "mobile",
  },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-16 md:py-24" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">My Work</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Check out some of my recent projects that showcase my skills and expertise.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-8">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
                All Projects
              </TabsTrigger>
              <TabsTrigger value="web" onClick={() => setActiveTab("web")}>
                Web Apps
              </TabsTrigger>
              <TabsTrigger value="mobile" onClick={() => setActiveTab("mobile")}>
                Mobile Apps
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-6">
            <ProjectGrid projects={filteredProjects} isInView={isInView} />
          </TabsContent>
          <TabsContent value="web" className="mt-6">
            <ProjectGrid projects={filteredProjects} isInView={isInView} />
          </TabsContent>
          <TabsContent value="mobile" className="mt-6">
            <ProjectGrid projects={filteredProjects} isInView={isInView} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function ProjectGrid({ projects, isInView }: { projects: typeof projects; isInView: boolean }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
      ))}
    </div>
  )
}

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0]
  index: number
  isInView: boolean
}) {
  return (
    <motion.div
      className="group relative flex flex-col overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={800}
          height={600}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="mt-2 text-muted-foreground line-clamp-3">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          <Button asChild size="sm">
            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

