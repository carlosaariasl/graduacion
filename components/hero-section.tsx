import Image from "next/image"
import { FadeInSection } from "./fade-in-section"
import { GoldDivider } from "./gold-divider"

export function HeroSection() {
  return (
    <section
      className="flex min-h-[85vh] flex-col items-center justify-center px-6 py-20 text-center"
      aria-label="Invitación de graduación"
    >
      <FadeInSection>
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-brown md:text-base">
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
        <div className="flex items-center justify-center gap-8 md:gap-14">
          <div className="relative h-24 w-24 overflow-hidden md:h-28 md:w-28">
            <Image
              src="/images/logounis.png"
              alt="Escudo de la Universidad del Istmo - UNIS"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 96px, 112px"
              priority
            />
          </div>
          <div className="relative h-24 w-24 overflow-hidden md:h-28 md:w-28">
            <Image
              src="/images/logousac.png"
              alt="Escudo de la Universidad de San Carlos de Guatemala - USAC"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 96px, 112px"
              priority
            />
          </div>
        </div>
        <p className="mt-4 text-xs tracking-widest text-brown-light/70">
          Universidad del Istmo &bull; Universidad de San Carlos de Guatemala
        </p>
      </FadeInSection>
    </section>
  )
}
