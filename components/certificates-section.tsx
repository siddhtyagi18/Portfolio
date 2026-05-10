"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const certificates = [
  { title: "C Programming", src: "/certificates/C.png", issuer: "HackerRank", date: "May 2024", link: "#" },
  { title: "DSA in C", src: "/certificates/DSA-C.png", issuer: "NPTEL", date: "April 2024", link: "#" },
  { title: "Java Programming", src: "/certificates/Java.png", issuer: "Coursera", date: "Jan 2024", link: "#" },
  { title: "Java Collections", src: "/certificates/JavaCollections.png", issuer: "HackerRank", date: "Feb 2024", link: "#" },
  { title: "MySQL", src: "/certificates/MySQL.png", issuer: "HackerRank", date: "Mar 2024", link: "#" },
  { title: "OOPs Concepts", src: "/certificates/Oops.png", issuer: "LinkedIn Learning", date: "Nov 2023", link: "#" },
  { title: "Hackathon Winner", src: "/certificates/hackathon.jpeg", issuer: "Galgotias University", date: "Oct 2023", link: "#" },
]

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-24 container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-sm font-bold tracking-widest text-primary uppercase">Achievements</h3>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Hover over any certificate to view details and verify authenticity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative aspect-[4/3] w-full rounded-xl group cursor-pointer"
            >
              <div className="flip-card">
                <div className="flip-card-inner glass-card">
                  {/* Front: Image */}
                  <div className="flip-card-front overflow-hidden rounded-xl border border-black/5 dark:border-white/5 bg-muted">
                    <Image
                      src={cert.src}
                      alt={cert.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Back: Details */}
                  <div className="flip-card-back flex flex-col items-center justify-center p-6 bg-card border border-black/10 dark:border-white/10 rounded-xl space-y-4 text-center">
                    <h3 className="text-2xl font-bold text-gradient">{cert.title}</h3>
                    <div>
                      <p className="text-foreground font-medium">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">{cert.date}</p>
                    </div>
                    <Button asChild className="mt-4 bg-primary hover:bg-primary/80 text-white rounded-full transition-transform hover:scale-105 shadow-[0_0_20px_-5px_rgba(147,51,234,0.5)]">
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        Verify Credential <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
