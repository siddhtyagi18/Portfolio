"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Code2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto space-y-24">
        
        {/* A bit about me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h3 className="text-sm font-bold tracking-widest text-primary uppercase">About</h3>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">A bit about me</h2>
          </div>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            <p>
              I'm a B.Tech CSE (Data Science) student at Galgotias University, passionate about building software that solves real problems. My focus lies at the intersection of clean design and scalable architecture.
            </p>
            <p>
              Currently exploring AI-powered applications and modern web technologies. I believe in writing code that is not just functional, but maintainable and elegant.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Badge variant="outline" className="rounded-full px-4 py-2 border-white/10 bg-white/5 text-sm font-medium">Problem Solver</Badge>
            <Badge variant="outline" className="rounded-full px-4 py-2 border-white/10 bg-white/5 text-sm font-medium">AI Enthusiast</Badge>
            <Badge variant="outline" className="rounded-full px-4 py-2 border-white/10 bg-white/5 text-sm font-medium">Fast Learner</Badge>
          </div>
        </motion.div>



      </div>
    </section>
  )
}
