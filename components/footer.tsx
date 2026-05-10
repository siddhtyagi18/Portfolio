export function Footer() {
  return (
    <footer className="py-12 relative z-10 border-t border-white/5 bg-transparent">
      <div className="container mx-auto px-4 flex justify-center">
        <p className="text-sm text-muted-foreground/60 font-medium tracking-wide">
          © {new Date().getFullYear()} Siddh Tyagi
        </p>
      </div>
    </footer>
  )
}
