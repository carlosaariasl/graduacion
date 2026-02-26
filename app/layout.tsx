import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Great_Vibes } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
})

export const metadata: Metadata = {
  title: 'Graduación - Victoria Elizabeth Juárez Mazariegos',
  description:
    'Te invitamos a celebrar la graduación de Victoria Elizabeth Juárez Mazariegos. Cena formal el 6 de Marzo a las 18:00 horas en El Rincón del Steak.',
  generator: 'v0.app',
  openGraph: {
    title: 'Graduación - Victoria Elizabeth Juárez Mazariegos',
    description:
      'Te invitamos a celebrar la graduación de Victoria Elizabeth Juárez Mazariegos.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#C6A75E',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${greatVibes.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
