export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface">
      <div className="h-8 w-8 animate-pulse rounded-full bg-emerald" />
      <p className="mt-4 text-sm text-text-muted">Loading...</p>
    </div>
  )
}
