import { motion } from 'framer-motion'

const offsets = {
  up: { y: 28, x: 0 },
  left: { y: 0, x: -36 },
  right: { y: 0, x: 36 },
}

export default function Reveal({ children, as = 'div', direction = 'up', delay = 0, className, ...rest }) {
  const Tag = motion[as] ?? motion.div
  const { x, y } = offsets[direction] ?? offsets.up

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ type: 'spring', stiffness: 90, damping: 18, delay }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
