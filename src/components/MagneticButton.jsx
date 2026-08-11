import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MagneticButton({ children, className, href, ...rest }) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 200, damping: 15, mass: 0.4 })
  const y = useSpring(my, { stiffness: 200, damping: 15, mass: 0.4 })

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    mx.set(relX * 0.3)
    my.set(relY * 0.4)
  }

  function handleMouseLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={{ x, y }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </motion.a>
  )
}
