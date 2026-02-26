import { HeroSection } from "@/components/hero-section"
import { GraduateSection } from "@/components/graduate-section"
import { EventSection } from "@/components/event-section"
import { LocationSection } from "@/components/location-section"
import { ActionButtons } from "@/components/action-buttons"
import { CountdownSection } from "@/components/countdown-section"
import { TeEsperamosSection } from "@/components/te-esperamos-section"
import { DressCodeSection } from "@/components/dress-code-section"
import { FooterDedication } from "@/components/footer-dedication"
import { CandleGlow } from "@/components/candle-glow"

export default function Page() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-background"
      style={{
        backgroundImage: "url('/images/parchment-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Parchment overlay for consistent cream tone */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-background/80"
        aria-hidden="true"
      />

      {/* Candle glow decorative element */}
      <CandleGlow />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-2xl">
        <HeroSection />
        <GraduateSection />
        <EventSection />
        <LocationSection />
        <ActionButtons />
        <CountdownSection />
        <TeEsperamosSection />
        <DressCodeSection />
        <FooterDedication />
      </div>
    </main>
  )
}
