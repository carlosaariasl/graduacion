"use client"

import { useEffect, useState } from "react"
import { FadeInSection } from "./fade-in-section"
import { GoldDividerSimple } from "./gold-divider"

// March 6, 2026 at 18:00 GMT-6
const EVENT_DATE = new Date("2026-03-06T18:00:00-06:00").getTime()

function getTimeLeft() {
  const now = Date.now()
  const diff = EVENT_DATE - now

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

export function CountdownSection() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { value: time.days, label: "Dias" },
    { value: time.hours, label: "Horas" },
    { value: time.minutes, label: "Min." },
    { value: time.seconds, label: "Seg." },
  ]

  return (
    <section
      className="px-6 py-14 text-center md:py-20"
      aria-label="Cuenta regresiva"
    >
      <FadeInSection>
        <GoldDividerSimple className="mb-8" />
      </FadeInSection>

      {/* Title */}
      <FadeInSection delay={200}>
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-foreground md:text-base">
            Falta poco para
          </p>
          <p className="text-sm uppercase tracking-[0.25em] text-foreground md:text-base">
            el{" "}
            <span
              className="text-lg font-normal normal-case text-gold md:text-xl"
              style={{ fontFamily: "var(--font-great-vibes)" }}
            >
              gran
            </span>{" "}
            dia
          </p>
        </div>
      </FadeInSection>

      {/* Countdown */}
      <FadeInSection delay={400}>
        <div
          className="mx-auto flex max-w-md items-center justify-center gap-2 md:gap-4"
          aria-live="polite"
          aria-atomic="true"
        >
          {units.map((unit, i) => (
            <div key={unit.label} className="flex items-center gap-2 md:gap-4">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-semibold tabular-nums text-foreground md:text-5xl">
                  {pad(unit.value)}
                </span>
                <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-brown-light md:text-xs">
                  {unit.label}
                </span>
              </div>
              {i < units.length - 1 && (
                <span className="mb-4 text-xl text-gold/60 md:text-2xl">
                  &bull;
                </span>
              )}
            </div>
          ))}
        </div>
      </FadeInSection>

      {/* Date */}
      <FadeInSection delay={600}>
        <div className="mt-8 flex flex-col items-center gap-1">
          <p className="text-sm uppercase tracking-[0.3em] text-brown-light md:text-base">
            Marzo
          </p>
          <p
            className="text-6xl font-semibold text-gold md:text-8xl"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            6
          </p>
          <p className="text-lg font-medium tracking-widest text-foreground md:text-xl">
            2026
          </p>
        </div>
      </FadeInSection>

      {/* "Con la bendicion de mis padres" */}
      <FadeInSection delay={800}>
        <p
          className="mx-auto mt-10 max-w-sm font-serif text-xl leading-relaxed text-gold italic md:text-2xl"
          style={{ fontFamily: "var(--font-great-vibes)" }}
        >
          {"Con la bendicion de mis padres"}
        </p>
      </FadeInSection>
    </section>
  )
}
