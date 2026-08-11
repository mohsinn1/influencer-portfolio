import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import MagneticButton from './MagneticButton.jsx'
import './Hero.css'

const rise = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

export default function Hero() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })

  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <header className="hero" ref={heroRef}>
      <motion.div className="wrap hero-inner" style={{ y, opacity }}>
        <motion.div className="eyebrow" custom={0.1} initial="hidden" animate="visible" variants={rise}>
          Food content creator · Lahore
        </motion.div>
        <motion.h1 className="display" custom={0.22} initial="hidden" animate="visible" variants={rise}>
          <span>Kinza</span><br />Mohsin
        </motion.h1>
        <motion.p className="hero-tagline" custom={0.36} initial="hidden" animate="visible" variants={rise}>
          I turn Lahore's food scene into content people actually crave — honest reviews, first-bite reactions, and launch coverage that gets restaurants seen by the people deciding where to eat tonight.
        </motion.p>
        <motion.div className="hero-cta" custom={0.48} initial="hidden" animate="visible" variants={rise}>
          <MagneticButton className="btn btn-solid" href="https://instagram.com/kinza__mohsin" target="_blank" rel="noopener">
            Instagram →
          </MagneticButton>
          <MagneticButton className="btn btn-outline" href="https://wa.me/923297462916" target="_blank" rel="noopener">
            Start a collab
          </MagneticButton>
        </motion.div>
      </motion.div>
    </header>
  )
}
