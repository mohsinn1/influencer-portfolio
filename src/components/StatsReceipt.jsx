import { useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Reveal from './Reveal.jsx'
import AnimatedCounter from './AnimatedCounter.jsx'
import { receiptRows, audienceRows } from '../data.js'
import './StatsReceipt.css'

const rows = [
  ...receiptRows.map((r) => ({ ...r, group: 1 })),
  ...audienceRows.map((r) => ({ ...r, group: 2 })),
]
const N = rows.length
const START = 0.08
const SPAN = 0.72
const STEP = SPAN / N
const FOOT_START = START + SPAN

function rowStart(i) {
  return START + i * STEP
}

function PrintRow({ row, index, progress }) {
  const start = rowStart(index)
  const [printed, setPrinted] = useState(false)

  useMotionValueEvent(progress, 'change', (v) => {
    setPrinted(v >= start)
  })

  return (
    <motion.div
      className="receipt-row"
      initial={false}
      animate={printed ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <span className="k">{row.k}</span>
      <span className="v">
        {row.static ? row.v : (
          <AnimatedCounter
            target={row.count}
            divisor={row.divisor ?? 1}
            decimals={row.decimals ?? 0}
            suffix={row.suffix ?? ''}
            active={printed}
          />
        )}
      </span>
    </motion.div>
  )
}

export default function StatsReceipt() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })
  const [footPrinted, setFootPrinted] = useState(false)

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setFootPrinted(v >= FOOT_START)
  })

  return (
    <section>
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <div className="eyebrow">The numbers</div>
          <h2 className="display">Reach that's actually hungry</h2>
        </Reveal>
      </div>

      <div className="receipt-scroll" ref={containerRef}>
        <div className="receipt-sticky">
          <div className="receipt-wrap">
            <div className="receipt">
              <div className="receipt-title">KINZA'S ORDER SUMMARY</div>
              <div className="receipt-sub">@kinza__mohsin · lahore, pk</div>
              <hr />
              {rows.slice(0, receiptRows.length).map((row, i) => (
                <PrintRow key={row.k} row={row} index={i} progress={scrollYProgress} />
              ))}
              <hr />
              {rows.slice(receiptRows.length).map((row, i) => (
                <PrintRow key={row.k} row={row} index={i + receiptRows.length} progress={scrollYProgress} />
              ))}
              <motion.div
                className="receipt-total"
                initial={false}
                animate={footPrinted ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <span>YOUR BRAND</span><span>SERVED FRESH</span>
              </motion.div>
              <motion.div
                className="receipt-note"
                initial={false}
                animate={footPrinted ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                ** no refunds on cravings **
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
