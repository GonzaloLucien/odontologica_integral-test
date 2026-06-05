import { ArrowUpRight, MessageCircle } from "lucide-react"
import { site } from "@/lib/site"
import { Reveal } from "@/components/reveal"

export function Hero() {
  return (
    <section id="inicio" className="relative">
      {/* Cinematic full-bleed image */}
      <div className="relative flex min-h-[92vh] w-full overflow-hidden">
        <img
          src="/hero-clinic.png"
          alt="Interior cálido y minimalista de la clínica Odontológica Integral"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Gradient scrims for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-foreground/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 to-transparent" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-end px-6 pb-20 pt-36 lg:px-10 lg:pb-28 lg:pt-44">
          <div className="animate-fade-up max-w-4xl">
            <p className="mb-8 flex items-center gap-4 text-xs uppercase tracking-[0.45em] text-background/80">
              <span className="h-px w-12 bg-background/50" />
              San Rafael · Mendoza
            </p>
            <h1 className="text-balance font-serif text-5xl font-light leading-[1.04] tracking-[-0.01em] text-background sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              Odontología de <span className="accent-italic">confianza</span>, con atención{" "}
              <span className="accent-italic">humana</span> y profesional.
            </h1>
            <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-background/85">
              Una clínica enfocada en la atención personalizada, los turnos puntuales y la confianza que se construye con
              el tiempo.
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-sm tracking-wide text-foreground transition-opacity hover:opacity-90"
              >
                Solicitar Turno
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-background/40 px-8 py-4 text-sm tracking-wide text-background transition-colors hover:bg-background/10"
              >
                <MessageCircle className="size-4" />
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Calm stats strip below the cinematic hero */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <dl className="grid grid-cols-2 border-b border-border lg:grid-cols-4">
          {[
            { k: "+25", v: "años de trayectoria" },
            { k: "3", v: "profesionales dedicados" },
            { k: "100%", v: "atención personalizada" },
            { k: "Puntual", v: "turnos respetados" },
          ].map((item, i) => (
            <Reveal
              key={item.v}
              delay={i * 90}
              className="border-border py-4 lg:py-8 [&:nth-child(odd)]:border-r [&:nth-child(odd)]:pr-6 [&:nth-child(even)]:pl-6 lg:[&:not(:last-child)]:border-r lg:[&:not(:first-child)]:pl-10 lg:[&:not(:last-child)]:pr-6"
            >
              <dt className="font-serif text-5xl font-light leading-none text-foreground lg:text-6xl">{item.k}</dt>
              <dd className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.v}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
