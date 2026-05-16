'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Copy, Check, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/data/site-config'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' as const },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="flex h-8 w-8 items-center justify-center rounded-md text-text-muted transition-colors hover:bg-surface-tertiary hover:text-ink"
      aria-label="Copy to clipboard"
    >
      {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
    </button>
  )
}

export default function ContactSection() {
  return (
    <section id="contact" className="bg-surface-secondary px-6 py-9 md:py-9">
      <div className="mx-auto max-w-[1200px]">
        <motion.p
          className="text-xs font-semibold uppercase tracking-widest text-emerald"
          {...fadeUp}
        >
          Contact
        </motion.p>
        <motion.h2
          className="mt-2 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink md:text-5xl"
          {...fadeUp}
        >
          Let&apos;s build something together
        </motion.h2>
        <motion.p
          className="mt-3 max-w-[65ch] text-lg leading-[1.7] text-text-body"
          {...fadeUp}
        >
          I&apos;m always open to new projects, collaborations, and conversations.
        </motion.p>

        <motion.div className="mt-8 space-y-4" {...fadeUp}>
          <div className="flex items-center gap-3 rounded-md border border-border bg-surface px-4 py-3">
            <Mail size={18} className="text-emerald" />
            <span className="flex-1 text-sm text-text-body">{siteConfig.email}</span>
            <CopyButton text={siteConfig.email} />
          </div>
          <div className="flex items-center gap-3 rounded-md border border-border bg-surface px-4 py-3">
            <Phone size={18} className="text-emerald" />
            <span className="flex-1 text-sm text-text-body">{siteConfig.phone}</span>
            <CopyButton text={siteConfig.phone} />
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="rounded-md bg-emerald px-3 py-1.5 text-xs font-semibold text-surface transition-colors hover:bg-emerald-dark"
            >
              Call
            </a>
          </div>
        </motion.div>

        <motion.div className="mt-8" {...fadeUp}>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 rounded-pill bg-ink px-7 py-3.5 text-sm font-semibold text-surface transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]"
          >
            Send me an email
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
