import { FadeInSection } from "./fade-in-section"
import { GoldDividerSimple } from "./gold-divider"

export function FooterDedication() {
  return (
    <footer className="px-6 py-16 text-center md:py-24" role="contentinfo">
      <FadeInSection>
        <GoldDividerSimple className="mb-10" />
      </FadeInSection>

      <FadeInSection delay={200}>
        <p
          className="mx-auto max-w-lg font-serif text-xl leading-relaxed text-brown-light italic md:text-2xl"
          style={{ fontFamily: "var(--font-great-vibes)" }}
        >
          Con amor y gratitud hacia mis padres, que me motivaron a alcanzar mis
          sueños.
        </p>
      </FadeInSection>

      <FadeInSection delay={400}>
        <GoldDividerSimple className="mt-10" />
      </FadeInSection>
    </footer>
  )
}
