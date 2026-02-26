import { CalendarDays, Clock } from "lucide-react"
import { FadeInSection } from "./fade-in-section"
import { GoldDivider } from "./gold-divider"

export function EventSection() {
  return (
    <section
      className="px-6 py-16 text-center md:py-24"
      aria-label="Detalles del evento"
    >
      <FadeInSection>
        <GoldDivider className="mb-12" />
      </FadeInSection>

      <FadeInSection delay={200}>
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-brown-light">
          Evento
        </p>
        <h2 className="text-2xl font-semibold tracking-wide text-foreground md:text-3xl">
          Cena Formal para Familia y Amigos
        </h2>
      </FadeInSection>

      <FadeInSection delay={400}>
        <div className="mx-auto mt-10 flex max-w-sm flex-col items-center gap-6 md:flex-row md:justify-center md:gap-12">
          <div className="flex items-center gap-3">
            <CalendarDays className="h-5 w-5 text-gold" aria-hidden="true" />
            <span className="text-lg font-medium text-foreground">
              6 de Marzo
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-gold" aria-hidden="true" />
            <span className="text-lg font-medium text-foreground">
              18:00 Horas
            </span>
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}
