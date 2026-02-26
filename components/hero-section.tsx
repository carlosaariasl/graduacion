import { FadeInSection } from "./fade-in-section"
import { GoldDivider } from "./gold-divider"

export function HeroSection() {
  return (
    <section
      className="flex min-h-[85vh] flex-col items-center justify-center px-6 py-20 text-center"
      aria-label="Invitación de graduación"
    >
      <FadeInSection>
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-brown-light md:text-base">
          Con la bendición de Dios
        </p>
      </FadeInSection>

      <FadeInSection delay={200}>
        <h1
          className="font-serif text-4xl leading-tight text-gold md:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-great-vibes)" }}
        >
          Te invito a celebrar
        </h1>
        <h2
          className="mt-2 font-serif text-4xl leading-tight text-gold md:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-great-vibes)" }}
        >
          mi Graduación
        </h2>
      </FadeInSection>

      <FadeInSection delay={400}>
        <GoldDivider className="my-10" />
      </FadeInSection>

      <FadeInSection delay={500}>
        <div className="flex items-center justify-center gap-8 md:gap-12">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/30 bg-cream-dark/50 md:h-24 md:w-24">
            <span className="text-xs font-semibold uppercase tracking-wider text-brown-light">
              UNIS
            </span>
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/30 bg-cream-dark/50 md:h-24 md:w-24">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="text-brown-light"
            >
              <circle
                cx="16"
                cy="16"
                r="14"
                stroke="currentColor"
                strokeWidth="1"
              />
              <circle
                cx="16"
                cy="16"
                r="10"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <path
                d="M16 6V26M6 16H26"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </svg>
          </div>
        </div>
        <p className="mt-4 text-xs tracking-widest text-brown-light/70">
          Universidad del Istmo
        </p>
      </FadeInSection>
    </section>
  )
}
