export interface Skill {
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'tools' | 'ai'
}

export const skills: Skill[] = [
  { name: 'Next.js', icon: '⚡', category: 'frontend' },
  { name: 'React', icon: '⚛️', category: 'frontend' },
  { name: 'TypeScript', icon: '📘', category: 'frontend' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'frontend' },
  { name: 'Prisma', icon: '🗄️', category: 'backend' },
  { name: 'PostgreSQL', icon: '🐘', category: 'backend' },
  { name: 'AI Tools', icon: '🤖', category: 'ai' },
  { name: 'Git', icon: '🔀', category: 'tools' },
]
