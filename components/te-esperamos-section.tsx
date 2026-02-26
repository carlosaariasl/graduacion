import Image from "next/image"
import { FadeInSection } from "./fade-in-section"
import { GoldDividerSimple } from "./gold-divider"

export function TeEsperamosSection() {
  return (
    <section className="px-6 py-16 text-center md:py-24">
      <FadeInSection>
        <GoldDividerSimple className="mb-12" />
      </FadeInSection>

      {/* Photos stacked like the reference */}
      <div className="mx-auto flex max-w-md flex-col items-center gap-5">
        <FadeInSection delay={200}>
          <div className="overflow-hidden rounded-lg border-2 border-gold/30 shadow-lg shadow-gold/10">
            <Image
              src="/images/teesperamos2.jpg"
              alt="Victoria Elizabeth en su graduacion - cuerpo completo"
              width={450}
              height={600}
              className="block object-cover"
              sizes="(max-width: 768px) 85vw, 450px"
            />
          </div>
        </FadeInSection>

        <FadeInSection delay={400}>
          <div className="overflow-hidden rounded-lg border-2 border-gold/30 shadow-lg shadow-gold/10">
            <Image
              src="/images/teesperamo1.jpg"
              alt="Victoria Elizabeth en su graduacion - primer plano"
              width={450}
              height={600}
              className="block object-cover"
              sizes="(max-width: 768px) 85vw, 450px"
            />
          </div>
        </FadeInSection>
      </div>

      {/* Text below photos */}
      <FadeInSection delay={600}>
        <div className="mt-12 flex flex-col items-center gap-2">
          <h2 className="text-2xl tracking-[0.25em] font-semibold text-brown md:text-3xl">
            TE ESPERAMOS
          </h2>
          <p
            className="mt-1 text-4xl text-gold md:text-5xl"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            Victoria Juárez
          </p>
        </div>
      </FadeInSection>

      <FadeInSection delay={800}>
        <GoldDividerSimple className="mt-12" />
      </FadeInSection>
    </section>
  )
}
