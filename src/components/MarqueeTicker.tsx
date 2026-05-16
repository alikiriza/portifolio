export default function MarqueeTicker() {
  const items = [
    'Next.js Development',
    'AI-Powered Apps',
    'Creative Builder',
    'Kampala, Uganda',
    'Web Design',
    'Faith & Community',
  ]

  return (
    <div className="flex h-[52px] w-full items-center overflow-hidden bg-emerald-ticker" aria-hidden="true">
      <div className="flex min-w-full animate-[marquee_30s_linear_infinite] gap-8 whitespace-nowrap">
        {[...Array(3)].map((_, loopIdx) =>
          items.map((item, i) => (
            <span
              key={`${loopIdx}-${i}`}
              className="inline-flex items-center gap-8 text-[15px] font-medium text-emerald-light"
            >
              {item}
              <span className="text-emerald">✦</span>
            </span>
          ))
        )}
      </div>
    </div>
  )
}
