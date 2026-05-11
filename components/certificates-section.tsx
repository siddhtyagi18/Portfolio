"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Zap, X, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import React, { useState, useEffect } from "react"

const certificates = [
  { title: "C Programming", src: "/certificates/C.png", issuer: "HackerRank", date: "May 2024", link: "#", tags: ["C", "Algorithms"] },
  { title: "DSA in C", src: "/certificates/DSA-C.png", issuer: "NPTEL", date: "April 2024", link: "#", tags: ["DSA", "C"] },
  { title: "Java Programming", src: "/certificates/Java.png", issuer: "Coursera", date: "Jan 2024", link: "#", tags: ["Java", "OOP"] },
  { title: "Java Collections", src: "/certificates/JavaCollections.png", issuer: "HackerRank", date: "Feb 2024", link: "#", tags: ["Java", "Collections"] },
  { title: "MySQL", src: "/certificates/MySQL.png", issuer: "HackerRank", date: "Mar 2024", link: "#", tags: ["SQL", "Database"] },
  { title: "OOPs Concepts", src: "/certificates/Oops.png", issuer: "LinkedIn Learning", date: "Nov 2023", link: "#", tags: ["OOP", "Design"] },
  { title: "Hackathon Winner", src: "/certificates/hackathon.jpeg", issuer: "Galgotias University", date: "Oct 2023", link: "#", tags: ["Innovation", "Teamwork"] },
]

export function CertificatesSection() {
  const [isGalaxyOpen, setIsGalaxyOpen] = useState(false)
  const [activeCard, setActiveCard] = useState<typeof certificates[0] | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  // Prevent background scrolling when galaxy is open
  useEffect(() => {
    if (isGalaxyOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => { document.body.style.overflow = "unset" }
  }, [isGalaxyOpen])

  return (
    <section id="certificates" className={`py-24 container mx-auto px-4 relative flex flex-col items-center justify-center min-h-[500px] ${isGalaxyOpen ? "z-50" : "z-10"}`}>
      
      {/* Inline styles for orbital physics */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .orbit-container {
          animation: orbit-spin 60s linear infinite;
        }
        .orbit-item {
          animation: orbit-spin-reverse 60s linear infinite;
        }
      `}} />

      {/* Background Cinematic Overlay */}
      <AnimatePresence>
        {isGalaxyOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)", transition: { delay: 0.2 } }}
            transition={{ duration: 1 }}
            className="fixed inset-0 bg-black/80 z-40"
          >
            {/* Ambient Galaxy Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/30 via-black/80 to-black opacity-60 pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
            
            {/* Close Button */}
            <button 
              onClick={() => setIsGalaxyOpen(false)}
              className="absolute top-8 right-8 z-50 p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-all hover:rotate-90 duration-300 backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`text-center space-y-4 relative z-20 transition-all duration-700 ${isGalaxyOpen ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100 mb-16'}`}>
        <h3 className="text-sm font-bold tracking-widest text-cyan-400 uppercase drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">Achievement Galaxy</h3>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Knowledge Core</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
          Unlock the core to explore a universe of certifications.
        </p>
      </div>

      {/* The Central Orb & Orbital System */}
      <div className="relative w-full flex items-center justify-center z-50">
        
        {/* Orbital System Container */}
        <AnimatePresence>
          {isGalaxyOpen && (
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 z-40"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {certificates.map((cert, i) => {
                const totalCards = certificates.length
                const delaySeconds = -(i / totalCards) * 60 // 60s is the duration
                
                // Radius changes based on screen size: smaller on mobile
                const radius = "min(40vw, 380px)"

                return (
                  <div 
                    key={cert.title}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none orbit-container"
                    style={{ animationPlayState: isPaused ? 'paused' : 'running', animationDelay: `${delaySeconds}s` }}
                  >
                    <div 
                      className="pointer-events-auto"
                      style={{ transform: `translateY(-${radius})` }}
                    >
                      <div 
                        className="orbit-item"
                        style={{ animationPlayState: isPaused ? 'paused' : 'running', animationDelay: `${delaySeconds}s` }}
                      >
                        {/* The Actual Card */}
                        <motion.div
                          onClick={() => setActiveCard(cert)}
                          whileHover={{ scale: 1.15, zIndex: 100 }}
                          className="relative group cursor-pointer w-[220px] sm:w-[260px] aspect-[4/3] rounded-xl glass-card border border-white/20 bg-black/60 backdrop-blur-md overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]"
                        >
                          {/* Inner glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-transparent to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                          
                          <div className="relative w-full h-[60%] border-b border-white/10 overflow-hidden bg-black">
                            <Image 
                              src={cert.src} 
                              alt={cert.title} 
                              fill 
                              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                            />
                            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md rounded-full p-1 border border-white/10">
                              <ShieldCheck className="w-3 h-3 text-cyan-400" />
                            </div>
                          </div>

                          <div className="p-3 h-[40%] flex flex-col justify-between relative z-20 bg-gradient-to-t from-black/90 to-transparent">
                            <div>
                              <h3 className="text-white font-bold text-sm leading-tight truncate">{cert.title}</h3>
                              <div className="flex justify-between items-center mt-1">
                                <span className="text-cyan-400 text-[10px] font-mono">{cert.issuer}</span>
                                <span className="text-white/40 text-[9px] uppercase">{cert.date}</span>
                              </div>
                            </div>
                            <div className="flex gap-1.5 overflow-hidden">
                              {cert.tags?.slice(0, 2).map(tag => (
                                <span key={tag} className="text-[8px] px-1.5 py-0.5 rounded-full border border-white/10 bg-white/5 text-white/60 whitespace-nowrap">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Core Orb Button */}
        <motion.button
          onClick={() => setIsGalaxyOpen(!isGalaxyOpen)}
          animate={isGalaxyOpen ? {
            scale: 0.5,
            y: "-50vh", // moves it slightly up or we can keep it centered. Let's keep it centered.
            opacity: 0,
          } : {
            scale: 1,
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.8, type: "spring" }}
          className={`relative group flex items-center justify-center focus:outline-none ${isGalaxyOpen ? 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none' : ''}`}
        >
          {/* Core Energy Aura */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute inset-0 bg-cyan-500/30 blur-[50px] rounded-full scale-150 pointer-events-none" 
          />
          
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-cyan-900 to-black border border-cyan-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.4)] group-hover:shadow-[0_0_80px_rgba(34,211,238,0.8)] group-hover:border-cyan-300 transition-all duration-700 overflow-hidden">
            {/* Internal rotating core rings */}
            <div className="absolute inset-2 rounded-full border-2 border-dashed border-cyan-400/30 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border-2 border-t-cyan-400 border-r-purple-500 border-b-transparent border-l-transparent animate-[spin_7s_linear_infinite_reverse]" />
            
            <Zap className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,1)] group-hover:scale-110 transition-transform duration-500 relative z-10" />
            
            {/* Center glowing dot */}
            <div className="absolute inset-0 bg-cyan-400/20 mix-blend-overlay rounded-full animate-pulse z-0" />
          </div>
          
          {!isGalaxyOpen && (
            <div className="absolute -bottom-10 text-center whitespace-nowrap">
              <span className="text-cyan-400 text-xs font-mono tracking-[0.3em] uppercase group-hover:text-cyan-200 transition-colors">Open Core</span>
            </div>
          )}
        </motion.button>
      </div>

      {/* Premium Modal Preview */}
      <AnimatePresence>
        {activeCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Modal Backdrop */}
            <div 
              className="absolute inset-0 bg-black/90 backdrop-blur-3xl cursor-pointer"
              onClick={() => setActiveCard(null)}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(34,211,238,0.15)] flex flex-col md:flex-row z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Section */}
              <div className="relative w-full md:w-[65%] aspect-[4/3] md:aspect-auto md:min-h-[500px] bg-black/50">
                <Image 
                  src={activeCard.src} 
                  alt={activeCard.title} 
                  fill 
                  className="object-contain p-4 md:p-8" 
                />
              </div>

              {/* Details Section */}
              <div className="w-full md:w-[35%] p-6 md:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 bg-gradient-to-br from-zinc-900/80 to-black/80 backdrop-blur-xl">
                <div className="space-y-6">
                  <button 
                    onClick={() => setActiveCard(null)}
                    className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/20 rounded-full transition-colors text-white/60 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{activeCard.title}</h2>
                    <p className="text-cyan-400 text-lg font-medium">{activeCard.issuer}</p>
                    <p className="text-white/40 text-sm mt-1">Issued {activeCard.date}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs uppercase tracking-widest text-white/40 font-semibold">Skills Evaluated</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeCard.tags?.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-cyan-50/80 text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <Button asChild className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl h-12 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all">
                    <a href={activeCard.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      Verify Credential <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}

