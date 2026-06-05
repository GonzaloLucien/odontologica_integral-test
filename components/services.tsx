import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

const services = [
  {
    title: "Odontología General",
    text: "Diagnóstico, prevención y tratamientos de rutina para mantener tu salud bucal en el tiempo.",
  },
  {
    title: "Implantes",
    text: "Soluciones de implantología modernas que devuelven la función y la estética de manera natural.",
  },
  {
    title: "Estética Dental",
    text: "Tratamientos que realzan tu sonrisa con resultados armónicos, sutiles y duraderos.",
  },
  {
    title: "Rehabilitación Oral",
    text: "Restauramos la funcionalidad completa de tu boca con un enfoque integral y planificado.",
  },
  {
    title: "Tratamientos Integrales",
    text: "Planes personalizados que abordan cada necesidad de forma coordinada y a tu ritmo.",
  },
  {
    title: "Atención Personalizada",
    text: "Acompañamiento humano y cercano en cada etapa, con explicaciones claras y honestas.",
  },
]

export function Services() {
  return (
    <section id="servicios">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-44">
        <Reveal className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-8 flex items-center gap-4 text-xs uppercase tracking-[0.45em] text-muted-foreground">
              <span className="h-px w-10 bg-border" />
              Servicios
            </p>
            <h2 className="text-balance font-serif text-4xl font-light leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
              Atención odontológica <span className="accent-italic">integral</span>, en un solo lugar.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-lg leading-relaxed text-muted-foreground">
            Cada servicio se brinda con la misma calidez y precisión que nos define, priorizando tu bienestar a largo
            plazo.
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              as="article"
              delay={(i % 3) * 90}
              className="group relative flex flex-col px-2 py-10 sm:px-8 lg:px-10 lg:py-12"
            >
              {/* hairline top border that animates on hover */}
              <span className="absolute inset-x-2 top-0 h-px bg-border sm:inset-x-8 lg:inset-x-10" />
              <span className="absolute left-2 top-0 h-px w-0 bg-foreground transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-[calc(100%-1rem)] sm:left-8 sm:group-hover:w-[calc(100%-4rem)] lg:left-10 lg:group-hover:w-[calc(100%-5rem)]" />

              <div className="flex items-baseline justify-between">
                <span className="font-serif text-3xl font-light text-muted-foreground/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight className="size-5 -translate-y-1 text-muted-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
              </div>

              <h3 className="mt-12 font-serif text-[1.7rem] font-light leading-snug text-foreground">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
