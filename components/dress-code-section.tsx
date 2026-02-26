import { FadeInSection } from "./fade-in-section"
import { GoldDividerSimple } from "./gold-divider"

function SuitIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Hanger */}
      <path
        d="M60 8 C60 4, 64 2, 64 2 C66 0, 68 2, 66 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M60 8 L30 35 M60 8 L90 35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Jacket shoulders */}
      <path
        d="M30 35 L22 45 L22 170 L50 170 L50 90"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M90 35 L98 45 L98 170 L70 170 L70 90"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Lapels */}
      <path
        d="M50 35 L44 65 L55 85 L60 75"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M70 35 L76 65 L65 85 L60 75"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Tie */}
      <path
        d="M57 42 L60 38 L63 42 L60 80 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      {/* Pocket */}
      <path
        d="M32 90 L46 90"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Buttons */}
      <circle cx="60" cy="100" r="1.8" fill="currentColor" />
      <circle cx="60" cy="120" r="1.8" fill="currentColor" />
      <circle cx="60" cy="140" r="1.8" fill="currentColor" />
      {/* Bottom hem */}
      <path
        d="M22 170 L50 170 M70 170 L98 170"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Pants legs hint */}
      <path
        d="M42 170 L38 198 M58 170 L54 198"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M62 170 L66 198 M78 170 L82 198"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M38 198 L54 198 M66 198 L82 198"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function DressIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Hanger */}
      <path
        d="M70 8 C70 4, 74 2, 74 2 C76 0, 78 2, 76 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M70 8 L40 32 M70 8 L100 32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Bodice - sweetheart neckline */}
      <path
        d="M40 32 L38 36 C38 36, 50 50, 55 42 C58 38, 62 38, 65 42 L70 50 L75 42 C78 38, 82 38, 85 42 C90 50, 102 36, 102 36 L100 32"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Bodice sides */}
      <path
        d="M38 36 L48 80"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M102 36 L92 80"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Waistline */}
      <path
        d="M48 80 C55 76, 85 76, 92 80"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
      />
      {/* Skirt - flowing A-line shape */}
      <path
        d="M48 80 C42 110, 28 150, 18 185"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
      />
      <path
        d="M92 80 C98 110, 112 150, 122 185"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
      />
      {/* Skirt bottom with scalloped hem */}
      <path
        d="M18 185 C28 190, 35 183, 45 188 C55 193, 60 185, 70 190 C80 185, 85 193, 95 188 C105 183, 112 190, 122 185"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Skirt folds */}
      <path
        d="M55 82 C50 120, 38 155, 32 182"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.5"
      />
      <path
        d="M70 80 C70 120, 70 155, 70 188"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.5"
      />
      <path
        d="M85 82 C90 120, 102 155, 108 182"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.5"
      />
    </svg>
  )
}

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
        <div className="mx-auto mt-10 flex items-end justify-center gap-4 text-gold/70 md:gap-8">
          <SuitIllustration className="h-40 w-auto md:h-52" />
          <DressIllustration className="h-44 w-auto md:h-56" />
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
