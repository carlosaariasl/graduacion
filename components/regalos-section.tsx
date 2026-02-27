"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { X, Gift, Banknote } from "lucide-react"
import { FadeInSection } from "./fade-in-section"
import { GoldDividerSimple } from "./gold-divider"

type ModalType = "bank" | "gift" | null

export function RegalosSection() {
  const [activeModal, setActiveModal] = useState<ModalType>(null)

  const openModal = useCallback((type: ModalType) => setActiveModal(type), [])
  const closeModal = useCallback(() => setActiveModal(null), [])

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [activeModal])

  useEffect(() => {
    if (!activeModal) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [activeModal, closeModal])

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
            {"Lo m\u00e1s importante es tu presencia, pero si deseas hacerme un regalo aqu\u00ed tienes mis opciones"}
          </p>
        </FadeInSection>

        <FadeInSection delay={600}>
          <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={() => openModal("bank")}
              className="flex w-full items-center justify-center gap-3 rounded-lg bg-gold/80 px-6 py-4 text-sm font-semibold tracking-widest text-cream transition-all duration-300 hover:bg-gold hover:shadow-[0_0_20px_rgba(198,167,94,0.3)] sm:w-auto md:text-base"
            >
              <Banknote className="h-5 w-5" />
              DATOS BANCARIOS
            </button>
            <button
              onClick={() => openModal("gift")}
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-gold/40 px-6 py-4 text-sm font-semibold tracking-widest text-gold transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:shadow-[0_0_20px_rgba(198,167,94,0.15)] sm:w-auto md:text-base"
            >
              <Gift className="h-5 w-5" />
              REGALO FISICO
            </button>
          </div>
        </FadeInSection>
      </section>

      {/* Modal Overlay */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeModal === "bank" ? "Datos bancarios" : "Regalo fisico"}
        >
          <div
            className="absolute inset-0 bg-brown/70 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* Bank Modal */}
          {activeModal === "bank" && (
            <div className="relative z-10 w-full max-w-sm animate-in zoom-in-95 fade-in duration-300 rounded-xl border border-gold/30 bg-card p-6 shadow-2xl md:p-8">
              <button
                onClick={closeModal}
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-brown-light transition-colors hover:bg-cream-dark hover:text-brown"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-6 flex justify-center">
                <Image
                  src="/images/gt-continental-logo.png"
                  alt="Logo Banco G&T Continental"
                  width={180}
                  height={80}
                  className="object-contain"
                />
              </div>

              <div className="mb-6 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-gold/30" />
                <span className="inline-block h-1.5 w-1.5 rotate-45 bg-gold/50" />
                <span className="h-px w-10 bg-gold/30" />
              </div>

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
                      {"\u004e\u00daMERO"}
                    </span>
                    <span className="font-semibold tracking-wider text-gold-dark">
                      06400139529
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-gold/30" />
                <span className="inline-block h-1.5 w-1.5 rotate-45 bg-gold/50" />
                <span className="h-px w-10 bg-gold/30" />
              </div>

              <button
                onClick={closeModal}
                className="mt-6 w-full rounded-lg border border-gold/30 py-3 text-sm font-medium tracking-wider text-brown-light transition-all duration-300 hover:border-gold hover:bg-cream-dark hover:text-brown"
              >
                CERRAR
              </button>
            </div>
          )}

          {/* Gift Modal */}
          {activeModal === "gift" && (
            <div className="relative z-10 w-full max-w-sm animate-in zoom-in-95 fade-in duration-300 rounded-xl border border-gold/30 bg-card p-6 shadow-2xl md:p-8">
              <button
                onClick={closeModal}
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-brown-light transition-colors hover:bg-cream-dark hover:text-brown"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-5 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-cream-dark">
                  <Gift className="h-8 w-8 text-gold" />
                </div>
              </div>

              <h3 className="text-center text-lg font-semibold tracking-wide text-brown md:text-xl">
                Regalo Fisico
              </h3>

              <div className="mt-4 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-gold/30" />
                <span className="inline-block h-1.5 w-1.5 rotate-45 bg-gold/50" />
                <span className="h-px w-10 bg-gold/30" />
              </div>

              <p className="mt-5 text-center text-base leading-relaxed text-brown-light">
                {"Si deseas obsequiarme un regalo f\u00edsico, coord\u00ednalo conmigo por WhatsApp para ponernos de acuerdo."}
              </p>

              <a
                href="https://wa.link/6w30ym"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-lg bg-[#25D366] py-3.5 text-sm font-semibold tracking-wider text-white transition-all duration-300 hover:bg-[#1fba59] hover:shadow-[0_0_16px_rgba(37,211,102,0.3)]"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                COORDINAR POR WHATSAPP
              </a>

              <button
                onClick={closeModal}
                className="mt-4 w-full rounded-lg border border-gold/30 py-3 text-sm font-medium tracking-wider text-brown-light transition-all duration-300 hover:border-gold hover:bg-cream-dark hover:text-brown"
              >
                CERRAR
              </button>
            </div>
          )}
        </div>
      )}
    </>
  )
}
