import Image from "next/image"
import { FadeInSection } from "./fade-in-section"
import { GoldDividerSimple } from "./gold-divider"

export function DressCodeSection() {
  return (
    <section className="px-6 py-16 text-center md:py-24">
      <FadeInSection>
        <GoldDividerSimple className="mb-12" />
      </FadeInSection>

      <FadeInSection delay={200}>
        <h2 className="text-2xl tracking-[0.25em] font-semibold text-brown md:text-3xl">
          DRESS CODE
        </h2>
      </FadeInSection>

      <FadeInSection delay={400}>
        <div className="mx-auto mt-10 flex items-center justify-center">
          <Image
            src="/images/dress-code-silhouettes.png"
            alt="Vestimenta semi-formal: dama y caballero"
            width={320}
            height={320}
            className="h-52 w-auto object-contain mix-blend-multiply dark:invert md:h-64"
            sizes="(max-width: 768px) 260px, 320px"
          />
        </div>
      </FadeInSection>

      <FadeInSection delay={600}>
        <p className="mt-10 text-xl tracking-widest font-medium text-gold md:text-2xl">
          Semi-formal
        </p>
        <p
          className="mt-3 text-2xl text-brown-light md:text-3xl"
          style={{ fontFamily: "var(--font-great-vibes)" }}
        >
          {'Luce tu mejor look!'}
        </p>
      </FadeInSection>

      <FadeInSection delay={800}>
        <GoldDividerSimple className="mt-12" />
      </FadeInSection>
    </section>
  )
}
