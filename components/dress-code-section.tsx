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
        <div className="mx-auto mt-8 max-w-sm overflow-hidden rounded-xl border-2 border-gold/30 shadow-lg shadow-gold/10">
          <Image
            src="/images/dress-code.png"
            alt="Dress code: Semi-formal - ilustracion de traje y vestido"
            width={600}
            height={200}
            className="block w-full object-cover"
            sizes="(max-width: 768px) 85vw, 384px"
          />
        </div>
      </FadeInSection>

      <FadeInSection delay={600}>
        <p className="mt-8 text-xl tracking-widest font-medium text-gold md:text-2xl">
          Semi-formal
        </p>
        <p
          className="mt-3 text-2xl text-brown-light md:text-3xl"
          style={{ fontFamily: "var(--font-great-vibes)" }}
        >
          Luce tu mejor look!
        </p>
      </FadeInSection>

      <FadeInSection delay={800}>
        <GoldDividerSimple className="mt-12" />
      </FadeInSection>
    </section>
  )
}
