"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { FadeInSection } from "./fade-in-section"
import { GoldDividerSimple } from "./gold-divider"

export function RegalosSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = useCallback(() => setIsModalOpen(true), [])
  const closeModal = useCallback(() => setIsModalOpen(false), [])

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isModalOpen])

  useEffect(() => {
    if (!isModalOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [isModalOpen, closeModal])

  return (
    <>
      <section className="px-6 py-14 text-center md:py-20">
        <FadeInSection>
          <GoldDividerSimple className="mb-8" />
        </FadeInSection>

        <FadeInSection delay={200}>
          <h2 className="font-serif text-4xl text-gold md:text-5xl">
            Regalos
          </h2>
        </FadeInSection>

        <FadeInSection delay={400}>
          <p className="mx-auto mt-6 max-w-sm text-lg leading-relaxed text-brown-light md:text-xl">
            {"Lo m\u00e1s importante es tu presencia, pero si deseas hacerme un regalo aqu\u00ed tienes mis datos"}
          </p>
        </FadeInSection>

        <FadeInSection delay={600}>
          <button
            onClick={openModal}
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-gold/80 px-8 py-4 text-base font-semibold tracking-widest text-cream transition-all duration-300 hover:bg-gold hover:shadow-[0_0_20px_rgba(198,167,94,0.3)] md:text-lg"
          >
            VER DATOS BANCARIOS
          </button>
        </FadeInSection>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Datos bancarios"
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-brown/70 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* Modal content */}
          <div className="relative z-10 w-full max-w-sm animate-in zoom-in-95 fade-in duration-300 rounded-xl border border-gold/30 bg-card p-6 shadow-2xl md:p-8">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-brown-light transition-colors hover:bg-cream-dark hover:text-brown"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Bank logo */}
            <div className="mb-6 flex justify-center">
              <Image
                src="/images/gt-continental-logo.png"
                alt="Logo Banco G&T Continental"
                width={180}
                height={80}
                className="object-contain"
              />
            </div>

            {/* Divider */}
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gold/30" />
              <span className="inline-block h-1.5 w-1.5 rotate-45 bg-gold/50" />
              <span className="h-px w-10 bg-gold/30" />
            </div>

            {/* Bank details */}
            <div className="space-y-4 text-center">
              <h3 className="text-lg font-semibold tracking-wide text-brown md:text-xl">
                {"Banco G&T Continental S.A."}
              </h3>

              <div className="space-y-3 text-base text-brown-light">
                <div className="flex items-center justify-between border-b border-gold/15 pb-2">
                  <span className="text-sm font-medium tracking-wider text-brown/60">
                    TIPO
                  </span>
                  <span className="font-medium text-brown">Monetaria</span>
                </div>
                <div className="flex items-center justify-between border-b border-gold/15 pb-2">
                  <span className="text-sm font-medium tracking-wider text-brown/60">
                    MONEDA
                  </span>
                  <span className="font-medium text-brown">Quetzales</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium tracking-wider text-brown/60">
                    {"N\u00daMERO"}
                  </span>
                  <span className="font-semibold tracking-wider text-gold-dark">
                    06400139529
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gold/30" />
              <span className="inline-block h-1.5 w-1.5 rotate-45 bg-gold/50" />
              <span className="h-px w-10 bg-gold/30" />
            </div>

            {/* Close action */}
            <button
              onClick={closeModal}
              className="mt-6 w-full rounded-lg border border-gold/30 py-3 text-sm font-medium tracking-wider text-brown-light transition-all duration-300 hover:border-gold hover:bg-cream-dark hover:text-brown"
            >
              CERRAR
            </button>
          </div>
        </div>
      )}
    </>
  )
}
