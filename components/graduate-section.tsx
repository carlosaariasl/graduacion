import { FadeInSection } from "./fade-in-section"
import { GoldDividerSimple } from "./gold-divider"

export function GraduateSection() {
  return (
    <section
      className="px-6 py-14 text-center md:py-20"
      aria-label="Información de la graduada"
    >
      <FadeInSection>
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-brown-light">
          La graduada
        </p>
      </FadeInSection>

      <FadeInSection delay={200}>
        <h2
          className="font-serif text-5xl leading-tight text-gold md:text-7xl lg:text-8xl"
          style={{ fontFamily: "var(--font-great-vibes)" }}
        >
          Victoria Elizabeth
        </h2>
        <h3
          className="mt-1 font-serif text-4xl leading-tight text-gold md:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-great-vibes)" }}
        >
          Juárez Mazariegos
        </h3>
      </FadeInSection>

      <FadeInSection delay={400}>
        <GoldDividerSimple className="my-10" />
      </FadeInSection>

      <FadeInSection delay={500}>
        <div className="mx-auto flex max-w-md flex-col gap-3">
          <p className="text-lg font-medium tracking-wide text-foreground md:text-xl">
            Lcda. en Administración Educativa
          </p>
          <p className="text-lg font-medium tracking-wide text-foreground md:text-xl">
            Lcda. en Matemáticas y Física
          </p>
          <p className="text-lg font-medium tracking-wide text-foreground md:text-xl">
            Maestra en Liderazgo y Dirección
          </p>
          <p className="text-lg font-medium tracking-wide text-foreground md:text-xl">
            de Centros Educativos
          </p>
        </div>
      </FadeInSection>
    </section>
  )
}
