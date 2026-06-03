/**
 * app/loading.tsx
 * Next.js App Router automatic loading UI
 * Shows while the root page is streaming/loading.
 */
export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[200] bg-espresso flex flex-col items-center justify-center gap-8"
      role="status"
      aria-label="Loading Velvet Brew"
    >
      {/* Logo mark */}
      <div className="flex flex-col items-center gap-2">
        <span
          className="font-display text-4xl tracking-widest text-cream"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          VELVET<span style={{ color: '#C4983A' }}> BREW</span>
        </span>
        <span
          className="text-[8px] tracking-[0.5em] uppercase"
          style={{ color: '#6B5040', fontFamily: "'DM Sans', sans-serif" }}
        >
          Café &amp; Restaurant
        </span>
      </div>

      {/* Animated gold progress bar */}
      <div className="w-40 h-px bg-mocha overflow-hidden relative">
        <div
          className="absolute top-0 left-0 h-full"
          style={{
            width: '40%',
            background: 'linear-gradient(90deg, transparent, #C4983A, #E8C97A, #C4983A, transparent)',
            animation: 'loadingBar 1.6s ease-in-out infinite',
          }}
        />
      </div>

      {/* Tagline */}
      <p
        className="text-[10px] tracking-[0.3em] uppercase"
        style={{ color: '#6B5040', fontFamily: "'DM Sans', sans-serif" }}
      >
        Crafting your experience…
      </p>

      <style>{`
        @keyframes loadingBar {
          0%   { left: -40%; }
          100% { left: 140%; }
        }
      `}</style>
    </div>
  )
}
