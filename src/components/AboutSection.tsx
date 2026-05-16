'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' as const },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
}

const statCards = [
  { number: '2+', label: 'Years Experience' },
  { number: '3', label: 'Projects Shipped' },
  { number: 'AI', label: 'AI-Powered Workflow' },
  { number: 'KLA', label: 'Based in Kampala' },
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-surface-secondary px-6 py-9 md:py-9">
      <div className="mx-auto max-w-[1200px]">
        <motion.p
          className="text-xs font-semibold uppercase tracking-widest text-emerald"
          {...fadeUp}
        >
          About
        </motion.p>
        <motion.h2
          className="mt-2 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink md:text-5xl"
          {...fadeUp}
        >
          Who I Am
        </motion.h2>
        <motion.p
          className="mt-4 max-w-[65ch] text-lg leading-[1.7] text-text-body"
          {...fadeUp}
        >
          I&apos;m a Next.js developer and creative builder based in Kampala, Uganda. I love turning ideas into
          real, working web applications — especially ones that serve my community. Whether it&apos;s a tool for
          local entrepreneurs, a Bible quiz for church youth, or a choir management app, I build with purpose,
          faith, and a whole lot of heart. I integrate AI into my workflows to ship faster and smarter.
        </motion.p>

        <motion.div
          className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            animate: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {statCards.map((stat) => (
            <motion.div
              key={stat.label}
              className="rounded-md bg-surface-secondary p-5"
              variants={{
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <p className="text-3xl font-extrabold text-ink">{stat.number}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-text-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
