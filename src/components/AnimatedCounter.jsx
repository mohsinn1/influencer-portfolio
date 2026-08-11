import { useEffect, useState } from 'react'

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

export default function AnimatedCounter({ target, decimals = 0, suffix = '', divisor = 1, duration = 1.4, active = false }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) {
      setValue(0)
      return
    }
    let raf
    const start = performance.now()
    const tick = (now) => {
      const elapsed = (now - start) / 1000
      const t = Math.min(elapsed / duration, 1)
      setValue(target * easeOutExpo(t))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])

  const display = (value / divisor).toFixed(decimals)

  return <span>{display}{suffix}</span>
}
