"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, GraduationCap, Calendar } from "lucide-react"

// Sample experience data
const experiences = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "Jan 2022 - Present",
    description:
      "Lead frontend development for multiple projects, implementing modern React architectures and optimizing performance. Mentored junior developers and established coding standards.",
    type: "work",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Digital Solutions Agency",
    location: "New York, NY",
    period: "Mar 2019 - Dec 2021",
    description:
      "Developed responsive web applications using React, Next.js, and TypeScript. Collaborated with designers to implement pixel-perfect UI components and improve user experience.",
    type: "work",
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    company: "Coding Academy",
    location: "Online",
    period: "Sep 2018 - Feb 2019",
    description:
      "Intensive full-stack web development program covering HTML, CSS, JavaScript, React, Node.js, and database technologies. Completed multiple projects including a full-featured e-commerce platform.",
    type: "education",
  },
  {
    id: 4,
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    location: "Austin, TX",
    period: "Jun 2017 - Feb 2019",
    description:
      "Built and maintained company websites and web applications. Implemented responsive designs and integrated third-party APIs for enhanced functionality.",
    type: "work",
  },
  {
    id: 5,
    title: "B.S. Computer Science",
    company: "Tech University",
    location: "Boston, MA",
    period: "Sep 2013 - May 2017",
    description:
      "Graduated with honors. Specialized in web technologies and software engineering. Completed a senior project developing a collaborative task management application.",
    type: "education",
  },
]

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/50" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Experience & Education
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Professional Journey</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            A timeline of my work experience and educational background.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-ml-0.5"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} isInView={isInView} isEven={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({
  item,
  index,
  isInView,
  isEven,
}: {
  item: (typeof experiences)[0]
  index: number
  isInView: boolean
  isEven: boolean
}) {
  return (
    <motion.div
      className={`relative flex md:justify-between ${isEven ? "md:flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-4 h-6 w-6 rounded-full border-4 border-background bg-primary md:left-1/2 md:-ml-3">
        {item.type === "work" ? (
          <Briefcase className="h-4 w-4 text-primary-foreground absolute -left-0.5 -top-0.5" />
        ) : (
          <GraduationCap className="h-4 w-4 text-primary-foreground absolute -left-0.5 -top-0.5" />
        )}
      </div>

      {/* Content */}
      <div className={`ml-12 w-full md:ml-0 md:w-[45%] ${isEven ? "md:text-right" : ""}`}>
        <div className="rounded-lg border bg-background p-4 shadow-sm">
          <h3 className="text-lg font-bold">{item.title}</h3>
          <h4 className="font-medium">{item.company}</h4>
          <p className="text-sm text-muted-foreground">{item.location}</p>
          <div className="mt-2 flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1 h-3 w-3" />
            <span>{item.period}</span>
          </div>
          <p className="mt-3 text-muted-foreground">{item.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

