'use client'

import { motion } from 'framer-motion'
import { Users, BookOpen, Heart, Church } from 'lucide-react'
import { interests } from '@/data/interests'

const iconMap: Record<string, React.ElementType> = {
  Users,
  BookOpen,
  Heart,
  Church,
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' as const },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
}

export default function InterestsSection() {
  return (
    <section className="bg-surface px-6 py-9 md:py-9">
      <div className="mx-auto max-w-[1200px]">
        <motion.p
          className="text-xs font-semibold uppercase tracking-widest text-emerald"
          {...fadeUp}
        >
          Community
        </motion.p>
        <motion.h2
          className="mt-2 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink md:text-5xl"
          {...fadeUp}
        >
          Beyond the Code
        </motion.h2>
        <motion.p
          className="mt-3 max-w-[65ch] text-lg leading-[1.7] text-text-body"
          {...fadeUp}
        >
          When I&apos;m not building apps, you&apos;ll find me serving in my community and growing in faith.
        </motion.p>

        <motion.div
          className="mt-8 grid gap-6 md:grid-cols-2"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
        >
          {interests.map((interest) => {
            const Icon = iconMap[interest.icon]
            return (
              <motion.article
                key={interest.title}
                className="rounded-xl border border-border bg-surface p-7"
                variants={{
                  initial: { opacity: 0, y: 24 },
                  animate: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
              >
                {Icon && <Icon size={28} className="text-emerald" />}
                <h3 className="mt-4 text-lg font-bold text-ink">{interest.title}</h3>
                <p className="mt-2 text-sm leading-[1.5] text-text-body">
                  {interest.description}
                </p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
