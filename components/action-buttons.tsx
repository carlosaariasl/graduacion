"use client"

import { MapPin, MessageCircle, Calendar } from "lucide-react"
import { FadeInSection } from "./fade-in-section"

function InvitationButton({
  href,
  icon: Icon,
  label,
  ariaLabel,
}: {
  href: string
  icon: typeof MapPin
  label: string
  ariaLabel: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-lg border border-gold/30 bg-card px-6 py-4 text-base font-medium text-foreground transition-all duration-500 hover:border-gold hover:shadow-[0_0_20px_rgba(198,167,94,0.15)] md:text-lg"
    >
      <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(198,167,94,0.08),rgba(212,185,110,0.12),rgba(198,167,94,0.08))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <Icon
        className="relative z-10 h-5 w-5 text-gold transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      />
      <span className="relative z-10">{label}</span>
    </a>
  )
}

export function ActionButtons() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/El+Rinc%C3%B3n+del+Steak+Carretera+a+El+Salvador"

  const whatsappUrl =
    "https://wa.link/uatcsc"

  const calendarUrl = (() => {
    const title = encodeURIComponent(
      "Graduación - Victoria Elizabeth Juárez Mazariegos"
    )
    const details = encodeURIComponent(
      "Cena Formal para Familia y Amigos en El Rincón del Steak"
    )
    const location = encodeURIComponent(
      "El Rincón del Steak, Carretera a El Salvador"
    )
    const startDate = "20260306T180000"
    const endDate = "20260306T220000"
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startDate}/${endDate}`
  })()

  return (
    <section
      className="px-6 py-12 md:py-16"
      aria-label="Acciones de confirmación"
    >
      <FadeInSection>
        <div className="mx-auto flex max-w-md flex-col gap-4">
          <InvitationButton
            href={googleMapsUrl}
            icon={MapPin}
            label="Ver ubicación en Google Maps"
            ariaLabel="Abrir ubicación del restaurante en Google Maps"
          />
          <InvitationButton
            href={whatsappUrl}
            icon={MessageCircle}
            label="Confirmar Asistencia"
            ariaLabel="Confirmar asistencia por WhatsApp"
          />
          <InvitationButton
            href={calendarUrl}
            icon={Calendar}
            label="Agregar a mi calendario"
            ariaLabel="Agregar evento a Google Calendar"
          />
        </div>
      </FadeInSection>
    </section>
  )
}
