import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-6">
      <h1 className="text-[120px] font-extrabold leading-none tracking-tight text-ink">
        404
      </h1>
      <p className="mt-4 text-lg text-text-body">
        Oops! This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-pill bg-ink px-7 py-3.5 text-sm font-semibold text-surface transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]"
      >
        <ArrowLeft size={16} />
        Go Home
      </Link>
    </div>
  )
}
