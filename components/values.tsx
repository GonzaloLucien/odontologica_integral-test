import { Reveal } from "@/components/reveal"

const values = [
  { title: "Profesionalismo", text: "Cada tratamiento se realiza con precisión, criterio clínico y la dedicación que merece tu salud." },
  { title: "Puntualidad", text: "Respetamos tu tiempo. Los turnos se atienden en el horario acordado, sin esperas innecesarias." },
  { title: "Higiene", text: "Protocolos de limpieza y esterilización rigurosos en un entorno impecable y cuidado." },
  { title: "Trato humano", text: "Explicaciones claras, escucha atenta y un acompañamiento cálido en cada visita." },
]

export function Values() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-44">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <p className="mb-8 flex items-center gap-4 text-xs uppercase tracking-[0.45em] text-muted-foreground">
              <span className="h-px w-10 bg-border" />
              Nuestra filosofía
            </p>
            <h2 className="text-balance font-serif text-4xl font-light leading-[1.08] text-foreground sm:text-5xl">
              Una experiencia <span className="accent-italic">tranquila</span>, pensada para cada paciente.
            </h2>
            <p className="mt-8 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              Creemos que la odontología de calidad nace de la confianza. Por eso cultivamos relaciones a largo plazo,
              basadas en la transparencia y la atención cercana.
            </p>
          </Reveal>

          <div className="grid gap-x-14 gap-y-14 sm:grid-cols-2 lg:col-span-7">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 100} className="border-t border-border pt-7">
                <span className="font-serif text-2xl font-light text-muted-foreground/60">0{i + 1}</span>
                <h3 className="mt-4 font-serif text-2xl font-light text-foreground">{v.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
