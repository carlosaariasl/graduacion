import { MapPin } from "lucide-react"
import { FadeInSection } from "./fade-in-section"

export function LocationSection() {
  return (
    <section
      className="px-6 py-16 text-center md:py-20"
      aria-label="Ubicación del evento"
    >
      <FadeInSection>
        <MapPin
          className="mx-auto mb-4 h-6 w-6 text-gold"
          aria-hidden="true"
        />
        <p className="mb-2 text-sm uppercase tracking-[0.25em] text-brown-light">
          Lugar
        </p>
      </FadeInSection>

      <FadeInSection delay={200}>
        <h2
          className="font-serif text-3xl text-gold md:text-4xl"
          style={{ fontFamily: "var(--font-great-vibes)" }}
        >
          {"El Rincón del Steak"}
        </h2>
        <p className="mt-3 text-base text-brown-light md:text-lg">
          Carretera a El Salvador
        </p>
      </FadeInSection>
    </section>
  )
}
