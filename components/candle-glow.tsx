export function CandleGlow() {
  return (
    <div
      className="pointer-events-none fixed right-0 top-0 h-full w-64 opacity-30 md:w-96"
      aria-hidden="true"
    >
      <div
        className="absolute right-0 top-1/4 h-96 w-64 animate-pulse rounded-full md:w-80"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(198, 167, 94, 0.25) 0%, rgba(198, 167, 94, 0.08) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute right-8 top-1/3 h-64 w-48 rounded-full md:w-64"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212, 185, 110, 0.15) 0%, transparent 60%)",
          filter: "blur(30px)",
          animation: "pulse 3s ease-in-out infinite alternate",
        }}
      />
    </div>
  )
}
