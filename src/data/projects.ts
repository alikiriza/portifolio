export interface Project {
  id: string
  emoji: string
  title: string
  description: string
  techStack: string[]
  liveUrl: string | null
  githubUrl: string | null
}

export const projects: Project[] = [
  {
    id: 'contact-manager',
    emoji: '📇',
    title: 'Contact Manager',
    description: 'Helps business owners save, organise, and access their contacts in one place. Built for the everyday Ugandan entrepreneur.',
    techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 'bible-quiz-app',
    emoji: '📖',
    title: 'Bible Quiz App',
    description: 'An interactive quiz app for kids and adults during Bible study sessions — making scripture fun and memorable.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'AI'],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 'choir-app',
    emoji: '🎵',
    title: 'Choir App',
    description: 'A music management app for choirs — handles praise & worship songs, order of the mass, and song scheduling.',
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
    liveUrl: null,
    githubUrl: null,
  },
]
