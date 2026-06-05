import { MessageCircle } from "lucide-react"
import { site } from "@/lib/site"

export function WhatsappFab() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-foreground/20 transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" />
    </a>
  )
}
