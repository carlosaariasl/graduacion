import { FadeInSection } from "./fade-in-section"
import { GoldDividerSimple } from "./gold-divider"

function SuitIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Head */}
      <ellipse cx="80" cy="22" rx="14" ry="17" stroke="currentColor" strokeWidth="1.6" />
      {/* Hair hint */}
      <path
        d="M66 18 C66 8, 80 4, 80 4 C80 4, 94 8, 94 18"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      {/* Neck */}
      <path d="M74 39 L74 48 M86 39 L86 48" stroke="currentColor" strokeWidth="1.4" />
      {/* Collar / shirt collar */}
      <path
        d="M68 52 L74 48 L80 56 L86 48 L92 52"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Tie knot and tie */}
      <path
        d="M77 56 L80 54 L83 56 L81 68 L80 100 L79 68 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Left jacket shoulder and arm */}
      <path
        d="M68 52 C58 54, 40 58, 32 64 C28 67, 26 72, 26 78 L26 160"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Right jacket shoulder and arm */}
      <path
        d="M92 52 C102 54, 120 58, 128 64 C132 67, 134 72, 134 78 L134 160"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Left lapel */}
      <path
        d="M68 52 L62 70 L72 100 L76 92"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Right lapel */}
      <path
        d="M92 52 L98 70 L88 100 L84 92"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Left arm sleeve */}
      <path
        d="M32 64 L20 100 L16 140 L22 142 L30 108"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Left hand hint */}
      <path
        d="M16 140 C14 144, 15 148, 18 148 L22 142"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      {/* Right arm sleeve */}
      <path
        d="M128 64 L140 100 L144 140 L138 142 L130 108"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Right hand hint */}
      <path
        d="M144 140 C146 144, 145 148, 142 148 L138 142"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      {/* Jacket front opening */}
      <path d="M76 92 L72 160" stroke="currentColor" strokeWidth="1.4" />
      <path d="M84 92 L88 160" stroke="currentColor" strokeWidth="1.4" />
      {/* Buttons */}
      <circle cx="80" cy="108" r="2" fill="currentColor" />
      <circle cx="80" cy="126" r="2" fill="currentColor" />
      <circle cx="80" cy="144" r="2" fill="currentColor" />
      {/* Breast pocket */}
      <path d="M90 78 L100 78 L100 88" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      {/* Jacket bottom hem */}
      <path
        d="M26 160 L72 160 M88 160 L134 160"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Belt / waist line */}
      <path
        d="M40 162 L120 162"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Belt buckle */}
      <rect x="74" y="159" width="12" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" />
      {/* Left pant leg */}
      <path
        d="M40 162 L36 230 L56 230 L62 162"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Right pant leg */}
      <path
        d="M98 162 L104 230 L124 230 L120 162"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Pant crease lines */}
      <path d="M46 172 L46 226" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
      <path d="M114 172 L114 226" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
      {/* Shoes */}
      <path
        d="M34 230 C32 230, 30 232, 30 234 C30 238, 34 240, 42 240 L56 240 C58 238, 58 234, 56 230"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      <path
        d="M104 230 C102 230, 100 232, 100 234 C100 238, 104 240, 112 240 L126 240 C128 238, 128 234, 126 230"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
    </svg>
  )
}

function DressIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Head */}
      <ellipse cx="80" cy="20" rx="13" ry="16" stroke="currentColor" strokeWidth="1.6" />
      {/* Hair flowing */}
      <path
        d="M67 16 C65 6, 78 2, 80 2 C82 2, 95 6, 93 16"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      <path
        d="M67 20 C62 28, 58 40, 60 48"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M93 20 C98 28, 102 40, 100 48"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      {/* Neck */}
      <path d="M76 36 L76 44 M84 36 L84 44" stroke="currentColor" strokeWidth="1.4" />
      {/* Shoulder straps */}
      <path
        d="M76 44 L58 52"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M84 44 L102 52"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Sweetheart neckline bodice */}
      <path
        d="M58 52 C58 58, 64 66, 72 64 C76 63, 78 58, 80 58 C82 58, 84 63, 88 64 C96 66, 102 58, 102 52"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Bodice sides - fitted waist */}
      <path
        d="M58 52 L54 68 L52 82 L56 96"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M102 52 L106 68 L108 82 L104 96"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Waist sash / cinch */}
      <path
        d="M56 96 C65 92, 95 92, 104 96"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
      />
      <path
        d="M56 98 C65 102, 95 102, 104 98"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        opacity="0.6"
      />
      {/* Arms */}
      <path
        d="M58 52 C48 58, 38 72, 32 90 C30 96, 28 100, 26 104"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      <path
        d="M26 104 C24 106, 25 108, 28 107"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M102 52 C112 58, 122 72, 128 90 C130 96, 132 100, 134 104"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      <path
        d="M134 104 C136 106, 135 108, 132 107"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      {/* Skirt - flowing A-line */}
      <path
        d="M56 96 C48 120, 30 165, 16 210 C12 222, 10 230, 10 235"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
      />
      <path
        d="M104 96 C112 120, 130 165, 144 210 C148 222, 150 230, 150 235"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
      />
      {/* Scalloped hem */}
      <path
        d="M10 235 C18 240, 24 232, 32 237 C40 242, 46 234, 54 239 C62 244, 68 236, 76 240 C84 236, 90 244, 98 239 C106 234, 112 242, 120 237 C128 232, 134 240, 142 237 C148 234, 150 236, 150 235"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Skirt flow/fold lines */}
      <path d="M68 98 C62 135, 44 180, 30 228" stroke="currentColor" strokeWidth="0.7" opacity="0.35" />
      <path d="M80 96 C80 135, 80 180, 80 238" stroke="currentColor" strokeWidth="0.7" opacity="0.35" />
      <path d="M92 98 C98 135, 116 180, 130 228" stroke="currentColor" strokeWidth="0.7" opacity="0.35" />
      {/* Decorative detail at waist - small bow */}
      <path
        d="M74 96 C70 92, 68 96, 74 98 M86 96 C90 92, 92 96, 86 98"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <circle cx="80" cy="96" r="1.5" fill="currentColor" />
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
        <div className="mx-auto mt-10 flex items-end justify-center gap-6 text-gold/70 md:gap-10">
          <SuitIllustration className="h-48 w-auto md:h-60" />
          <DressIllustration className="h-48 w-auto md:h-60" />
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
