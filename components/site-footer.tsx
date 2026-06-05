import { navLinks, site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-serif text-3xl font-light leading-none">Odontológica</p>
            <p className="mt-1 text-xs uppercase tracking-[0.45em] text-primary-foreground/60">Integral</p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Atención odontológica integral en un entorno cálido y profesional.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-sm text-primary-foreground/70">
            <p>{site.address}</p>
            <p className="mt-2">{site.phoneDisplay}</p>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="mt-2 inline-block hover:text-primary-foreground">
              {site.instagramHandle}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Odontológica Integral. Todos los derechos reservados.</p>
          <p>San Rafael · Mendoza · Argentina</p>
        </div>
      </div>
    </footer>
  )
}
