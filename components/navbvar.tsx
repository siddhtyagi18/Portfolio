"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Moon, Sun, Download, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-strong shadow-sm" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="#"
              className="text-lg font-semibold tracking-tight"
              whileHover={{ opacity: 0.7 }}
              transition={{ duration: 0.2 }}
            >
              Siddh.
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-xl"
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              )}

              <Button
                asChild
                className="hidden sm:flex rounded-xl gap-2 glass border-border/50 hover:bg-accent/20"
                variant="outline"
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-xl"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-x-0 top-[72px] z-40 glass-strong border-b border-border/50 md:hidden"
        >
          <nav className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-left text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <Button
              asChild
              className="mt-4 rounded-xl gap-2"
              variant="outline"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </nav>
        </motion.div>
      )}
    </>
  )
}
