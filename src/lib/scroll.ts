// Custom smooth scroll so the duration is tunable (native `scroll-behavior: smooth`
// has no duration control). 780ms = the ~600ms native feel, +30% per design request.
const DURATION_MS = 780

function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
}

export function smoothScrollTo(top: number) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.scrollTo(0, top)
    return
  }

  const startY = window.scrollY
  const distance = top - startY
  const startTime = performance.now()

  function step(now: number) {
    const t = Math.min((now - startTime) / DURATION_MS, 1)
    window.scrollTo(0, startY + distance * easeInOutQuad(t))
    if (t < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}
