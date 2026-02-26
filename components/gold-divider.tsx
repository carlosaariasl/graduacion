export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-4 ${className}`}
      role="separator"
      aria-hidden="true"
    >
      <span className="h-px w-16 bg-gold/40 md:w-24" />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="text-gold"
      >
        <path
          d="M12 2L14.09 8.26L20.18 8.26L15.18 12.14L17.09 18.4L12 14.86L6.91 18.4L8.82 12.14L3.82 8.26L9.91 8.26L12 2Z"
          fill="currentColor"
          opacity="0.7"
        />
      </svg>
      <span className="h-px w-16 bg-gold/40 md:w-24" />
    </div>
  )
}

export function GoldDividerSimple({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      role="separator"
      aria-hidden="true"
    >
      <span className="h-px w-12 bg-gold/30 md:w-20" />
      <span className="inline-block h-1.5 w-1.5 rotate-45 bg-gold/50" />
      <span className="h-px w-12 bg-gold/30 md:w-20" />
    </div>
  )
}
