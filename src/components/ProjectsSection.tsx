'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/projects'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' as const },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-surface px-6 py-9 md:py-9">
      <div className="mx-auto max-w-[1200px]">
        <motion.p
          className="text-xs font-semibold uppercase tracking-widest text-emerald"
          {...fadeUp}
        >
          Projects
        </motion.p>
        <motion.h2
          className="mt-2 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink md:text-5xl"
          {...fadeUp}
        >
          What I&apos;ve Built
        </motion.h2>

        <motion.div
          className="mt-8 grid gap-6 md:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className="group rounded-lg border border-border bg-surface p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)]"
              variants={{
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <span className="block text-3xl">{project.emoji}</span>
              <h3 className="mt-4 text-lg font-bold text-ink">{project.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-[1.5] text-text-body">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-sm bg-surface-tertiary px-2.5 py-1 text-xs font-medium text-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4 text-sm font-medium text-emerald">
                <span className="inline-flex items-center gap-1 transition-colors hover:text-emerald-dark">
                  View Project
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
