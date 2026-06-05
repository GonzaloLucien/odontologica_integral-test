import { Reveal } from "@/components/reveal"

const testimonials = [
  { quote: "Excelente atención, al horario indicado, muy limpio.", author: "Paciente · San Rafael" },
  { quote: "Excelente servicio y atención. Calidad humana!", author: "Paciente · Mendoza" },
  { quote: "Seriedad y compromiso con los pacientes.", author: "Paciente · San Rafael" },
  { quote: "Profesionalismo y trato cálido.", author: "Paciente · San Rafael" },
]

export function Testimonials() {
  return (
    <section id="testimonios">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-44">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-4">
            <p className="mb-8 flex items-center gap-4 text-xs uppercase tracking-[0.45em] text-muted-foreground">
              <span className="h-px w-10 bg-border" />
              Testimonios
            </p>
            <h2 className="text-balance font-serif text-4xl font-light leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
              La voz de quienes nos <span className="accent-italic">eligen</span>.
            </h2>
            <p className="mt-8 text-pretty text-lg leading-relaxed text-muted-foreground">
              La confianza de nuestros pacientes es el mejor reflejo de cómo trabajamos cada día.
            </p>
          </Reveal>

          <div className="columns-1 gap-8 sm:columns-2 lg:col-span-8">
            {testimonials.map((t, i) => (
              <Reveal
                key={t.quote}
                as="figure"
                delay={(i % 2) * 100}
                className="group mb-8 break-inside-avoid rounded-[1.75rem] border border-border bg-card p-10 transition-colors duration-500 hover:bg-secondary"
              >
                <span className="block font-serif text-5xl leading-none text-muted-foreground/40">{"\u201C"}</span>
                <blockquote className="mt-2 font-serif text-2xl font-light leading-snug text-foreground text-pretty">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  <span className="h-px w-6 bg-border transition-all duration-500 group-hover:w-10" />
                  {t.author}
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
