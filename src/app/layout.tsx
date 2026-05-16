import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/data/site-config'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Alikiriza Carol — Next.js Developer & Creative Builder',
  description: 'I build creative, AI-powered web applications using Next.js. Based in Kampala, Uganda. Open to projects and collaborations.',
  openGraph: {
    title: 'Alikiriza Carol — Next.js Developer',
    description: 'Creative builder. Next.js developer. Based in Kampala, Uganda.',
    images: [siteConfig.avatarUrl],
    locale: 'en_UG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>{children}</body>
    </html>
  )
}
