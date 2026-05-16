'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/skills'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' as const },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
}

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-surface-secondary px-6 py-9 md:py-9">
      <div className="mx-auto max-w-[1200px]">
        <motion.p
          className="text-xs font-semibold uppercase tracking-widest text-emerald"
          {...fadeUp}
        >
          Skills
        </motion.p>
        <motion.h2
          className="mt-2 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink md:text-5xl"
          {...fadeUp}
        >
          My Toolbox
        </motion.h2>

        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ animate: { transition: { staggerChildren: 0.05 } } }}
        >
          {skills.map((skill) => (
            <motion.span
              key={skill.name}
              className="inline-flex items-center gap-2 rounded-pill border border-border bg-surface-tertiary px-4 py-2 text-sm font-medium text-ink-muted"
              variants={{
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <span className="text-base">{skill.icon}</span>
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
