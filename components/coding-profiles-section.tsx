"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Linkedin, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const profiles = [
  {
    name: "GitHub",
    username: "@siddhtyagi18",
    description: "Open source contributions and projects",
    icon: Github,
    link: "https://github.com/siddhtyagi18",
  },
  {
    name: "LinkedIn",
    username: "Siddh Tyagi",
    description: "Professional network and experience",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/siddhtyagi18/",
  },
  {
    name: "LeetCode",
    username: "@siddhtyagi18",
    description: "Problem solving and DSA practice",
    icon: Code2,
    link: "https://leetcode.com/u/siddhtyagi18/",
  },
]

export function CodingProfilesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Profiles
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold mt-4">
            Find me online
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 text-center animated-card"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary mb-4 group-hover:bg-accent/10 transition-colors">
                <profile.icon className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-semibold mb-1">{profile.name}</h3>
              <p className="text-sm text-accent mb-2">{profile.username}</p>
              <p className="text-xs text-muted-foreground">
                {profile.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
