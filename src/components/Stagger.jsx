import { motion } from 'framer-motion'

const offsets = {
  up: { y: 24, x: 0 },
  left: { y: 0, x: -30 },
  right: { y: 0, x: 30 },
}

export function StaggerGroup({ children, as = 'div', className, staggerDelay = 0.09, ...rest }) {
  const Tag = motion[as] ?? motion.div
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function StaggerItem({ children, as = 'div', direction = 'up', className, ...rest }) {
  const Tag = motion[as] ?? motion.div
  const { x, y } = offsets[direction] ?? offsets.up
  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, x, y },
        visible: { opacity: 1, x: 0, y: 0, transition: { type: 'spring', stiffness: 100, damping: 16 } },
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
