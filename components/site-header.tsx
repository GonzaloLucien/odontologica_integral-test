"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { navLinks, site } from "@/lib/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex ml-[5vw] max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#inicio" className="relative block w-[180px]">
          <img
            src={scrolled ? "/logo-negro.png" : "/logo-blanco.png"}
            alt="Odontológica Integral"
            className="absolute top-1/2 -translate-y-1/3 h-15 w-auto transition-all duration-300"
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm tracking-wide transition-colors",
                scrolled
                  ? "text-foreground/75 hover:text-foreground"
                  : "text-background/80 hover:text-background",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <a
            href="#contacto"
            className={cn(
              "rounded-full px-6 py-2.5 text-sm tracking-wide transition-colors",
              scrolled
                ? "bg-primary text-primary-foreground hover:opacity-90"
                : "bg-background text-foreground hover:bg-background/90",
            )}
          >
            Solicitar Turno
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex size-10 items-center justify-center rounded-full transition-colors lg:hidden",
            scrolled || open ? "text-foreground" : "text-background",
          )}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-primary px-6 py-3 text-center text-sm tracking-wide text-primary-foreground"
            >
              Solicitar Turno
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
