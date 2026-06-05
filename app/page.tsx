import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Values } from "@/components/values"
import { Services } from "@/components/services"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappFab } from "@/components/whatsapp-fab"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Values />
        <Services />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsappFab />
    </>
  )
}
