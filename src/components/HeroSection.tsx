'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail, Phone, Globe, Instagram, Linkedin } from 'lucide-react'
import { siteConfig } from '@/data/site-config'

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease },
}

export default function HeroSection() {
  return (
    <section className="relative overflow-clip bg-surface px-6 py-9 md:py-10">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 md:grid-cols-[55%_45%]">
        <div>
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text-body"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
          >
            Hi everyone 👋 I&apos;m Carol
          </motion.div>

          <motion.h1
            className="text-5xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-[64px]"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
          >
            Alikiriza Carol
          </motion.h1>

          <motion.p
            className="mt-4 max-w-[65ch] text-lg leading-[1.7] text-text-body"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
          >
            Next.js Developer & Creative Builder &mdash; Kampala, Uganda
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap items-center gap-4"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-pill bg-ink px-7 py-3.5 text-sm font-semibold text-surface transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]"
            >
              Get In Touch
              <ArrowRight size={16} />
            </a>
            <a
              href={siteConfig.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-pill border-[1.5px] border-ink bg-transparent px-7 py-3.5 text-sm font-medium text-ink transition-all duration-150 hover:bg-surface-tertiary active:scale-[0.98]"
            >
              Download CV
              <Download size={16} />
            </a>
          </motion.div>

          <motion.div
            className="mt-6 flex items-center gap-4"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.5 }}
          >
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-pill bg-emerald text-surface transition-colors hover:bg-emerald-dark"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="flex h-10 w-10 items-center justify-center rounded-pill bg-emerald text-surface transition-colors hover:bg-emerald-dark"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-pill bg-emerald text-surface transition-colors hover:bg-emerald-dark"
              aria-label="Globe"
            >
              <Globe size={18} />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-pill bg-emerald text-surface transition-colors hover:bg-emerald-dark"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-pill bg-emerald text-surface transition-colors hover:bg-emerald-dark"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </motion.div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <svg
            className="pointer-events-none absolute -right-10 -top-10 h-[300px] w-[300px] opacity-90"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M150 20C210 20 260 50 280 100C300 150 290 200 260 240C230 280 190 300 150 290C110 280 70 260 40 220C10 180 0 130 20 80C40 30 90 20 150 20Z"
              fill="#00C47A"
              opacity="0.9"
            />
          </svg>
          <svg
            className="pointer-events-none absolute -bottom-10 -left-10 h-[200px] w-[200px] opacity-90"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 10C150 10 180 40 190 80C200 120 190 160 160 180C130 200 90 200 60 180C30 160 10 130 0 90C-10 50 20 10 100 10Z"
              fill="#00C47A"
              opacity="0.9"
            />
          </svg>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <Image
              src={siteConfig.avatarUrl}
              alt="Alikiriza Carol — Next.js Developer, Kampala Uganda"
              width={380}
              height={460}
              className="relative rounded-xl object-cover"
              priority
              style={{ aspectRatio: '380/460' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
