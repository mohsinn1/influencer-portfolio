import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useScroll, useVelocity, useAnimationFrame, useReducedMotion } from 'framer-motion'
import { tickerBrands } from '../data.js'
import './Ticker.css'

const BASE_SPEED = 3.2 // percent per second

export default function Ticker() {
  const x = useMotionValue(0)
  const xPercent = useTransform(x, (v) => `${v}%`)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const prefersReducedMotion = useReducedMotion()
  const lastTime = useRef(null)

  useAnimationFrame((time) => {
    if (prefersReducedMotion) return
    if (lastTime.current === null) lastTime.current = time
    const delta = (time - lastTime.current) / 1000
    lastTime.current = time

    const boost = Math.min(Math.abs(scrollVelocity.get()) / 900, 4)
    const speed = BASE_SPEED + boost * BASE_SPEED

    let next = x.get() - speed * delta
    if (next <= -50) next += 50
    x.set(next)
  })

  const items = [...tickerBrands, ...tickerBrands]

  return (
    <div className="ticker-band">
      <motion.div className="ticker-track" style={{ x: xPercent }}>
        {items.map((b, i) => (
          <span key={i} style={{ display: 'contents' }}>
            <span className={b.hot ? 'hot' : ''}>{b.name}</span>
            <span>·</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
