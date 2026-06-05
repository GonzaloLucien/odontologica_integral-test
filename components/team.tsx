import { Reveal } from "@/components/reveal"

const team = [
  {
    name: "Dr. Claudio Orlando",
    role: "Director · Odontología Integral",
    image: "/team-1.png",
  },
  {
    name: "Dr. Juan Cruz Orlando",
    role: "Implantes y Rehabilitación Oral",
    image: "/team-2.png",
  },
  {
    name: "Dr. Emiliano Sosa",
    role: "Estética Dental",
    image: "/team-3.png",
  },
]

export function Team() {
  return (
    <section id="equipo" className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-44">
        <Reveal className="max-w-2xl">
          <p className="mb-8 flex items-center gap-4 text-xs uppercase tracking-[0.45em] text-muted-foreground">
            <span className="h-px w-10 bg-border" />
            Equipo
          </p>
          <h2 className="text-balance font-serif text-4xl font-light leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            Profesionales <span className="accent-italic">comprometidos</span> con cada paciente.
          </h2>
          <p className="mt-8 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Un equipo que combina experiencia, formación continua y una vocación genuina por el trato cercano.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.name} as="figure" delay={i * 110} className="group">
              <div className="overflow-hidden rounded-[1.75rem]">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={`Retrato de ${member.name}`}
                  className="aspect-[4/5] w-full object-cover saturate-[0.85] transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:saturate-100"
                />
              </div>
              <figcaption className="mt-7 border-t border-border pt-6">
                <h3 className="font-serif text-2xl font-light text-foreground">{member.name}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">{member.role}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
