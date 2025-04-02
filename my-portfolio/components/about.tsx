"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import Link from "next/link"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-16 md:py-24" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">About Me</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Journey as a Developer</h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12">
          <motion.div
            className="mx-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=450"
                alt="Developer portrait"
                width={450}
                height={600}
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold">Hi, I'm [Your Name]</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate frontend developer with over 5 years of experience creating responsive and
                user-friendly web applications. My journey in web development started when I built my first website in
                college, and I've been hooked ever since.
              </p>
              <p>
                I specialize in modern JavaScript frameworks like React and Next.js, with a strong focus on creating
                accessible, performant, and visually appealing user interfaces. I believe in writing clean, maintainable
                code and staying up-to-date with the latest web technologies and best practices.
              </p>
              <p>
                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects,
                or sharing my knowledge through blog posts and community events.
              </p>
            </div>
            <div className="pt-4">
              <Button asChild>
                <Link href="/resume.pdf" target="_blank">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

