import { MapPin, Phone, Instagram, MessageCircle } from "lucide-react"
import { site } from "@/lib/site"
import { Reveal } from "@/components/reveal"

const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.7067194717974!2d-68.33436202421908!3d-34.61157695791333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967907e2cca1b1e9%3A0x9ae8919ee6f4e539!2sOdontologica%20Integral!5e0!3m2!1ses!2sar!4v1780674212634!5m2!1ses!2sar"
const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`

export function Contact() {
  return (
    <section id="contacto" className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left — intro + actions */}
          <Reveal className="lg:col-span-5">
            <p className="mb-8 flex items-center gap-4 text-xs uppercase tracking-[0.45em] text-muted-foreground">
              <span className="h-px w-10 bg-border" />
              Contacto
            </p>
            <h2 className="text-balance font-serif text-4xl font-light leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
              Reservá tu turno o <span className="accent-italic">escribinos</span>.
            </h2>
            <p className="mt-8 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              Estaremos encantados de atenderte. Coordinamos tu visita de manera simple y a tu ritmo.
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
              >
                <MessageCircle className="size-4" />
                <span className="pl-1">Contactar por WhatsApp</span>
              </a>
              <a
                href={`tel:${site.phoneHref}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 text-sm tracking-wide text-foreground transition-colors hover:bg-secondary"
              >
                <Phone className="size-4" />
                <span className="pl-1">Llamar ahora</span>
              </a>
            </div>

            <dl className="mt-14 space-y-8 border-t border-border pt-10">
              <div className="flex items-start gap-5">
                <MapPin className="mt-1 size-5 shrink-0 text-muted-foreground" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Dirección</dt>
                  <dd className="mt-2 text-foreground">{site.address}</dd>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <Phone className="mt-1 size-5 shrink-0 text-muted-foreground" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Teléfono</dt>
                  <dd className="mt-2 text-foreground">
                    <a href={`tel:${site.phoneHref}`} className="hover:underline">
                      {site.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <Instagram className="mt-1 size-5 shrink-0 text-muted-foreground" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Instagram</dt>
                  <dd className="mt-2 text-foreground">
                    <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:underline">
                      {site.instagramHandle}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </Reveal>

          {/* Right — location map */}
          <Reveal delay={120} className="lg:col-span-7">
            <div className="group overflow-hidden rounded-[1.75rem] border border-border">
              <iframe
                title={`Ubicación de ${site.name} en el mapa`}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full transition-all duration-700 sm:h-[460px] lg:h-[600px]"
              />
            </div>
            <a
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              <MapPin className="size-4" />
              Ver cómo llegar en Google Maps
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
