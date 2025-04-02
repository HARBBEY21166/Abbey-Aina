"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Html5,
  Css3,
  Javascript,
  ReactLogo,
  Nextjs,
  Typescript,
  Tailwind,
  Git,
  Figma,
  Framer,
} from "@/components/tech-icons"

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { name: "HTML5", icon: <Html5 className="h-8 w-8" />, level: 95 },
    { name: "CSS3", icon: <Css3 className="h-8 w-8" />, level: 90 },
    { name: "JavaScript", icon: <Javascript className="h-8 w-8" />, level: 90 },
    { name: "TypeScript", icon: <Typescript className="h-8 w-8" />, level: 85 },
    { name: "React", icon: <ReactLogo className="h-8 w-8" />, level: 90 },
    { name: "Next.js", icon: <Nextjs className="h-8 w-8" />, level: 85 },
    { name: "Tailwind CSS", icon: <Tailwind className="h-8 w-8" />, level: 90 },
    { name: "Git", icon: <Git className="h-8 w-8" />, level: 80 },
    { name: "Figma", icon: <Figma className="h-8 w-8" />, level: 75 },
    { name: "Framer Motion", icon: <Framer className="h-8 w-8" />, level: 70 },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Skills & Expertise</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Technical Toolkit</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            I've worked with a variety of technologies in the web development world. Here are the main tools and
            languages I use daily.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center p-4 bg-background rounded-xl shadow-sm border"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-3">{skill.icon}</div>
              <h3 className="font-medium">{skill.name}</h3>
              <div className="w-full bg-muted rounded-full h-2 mt-2">
                <motion.div
                  className="bg-primary h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

