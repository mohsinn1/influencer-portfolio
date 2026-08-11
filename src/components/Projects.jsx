import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Reveal from './Reveal.jsx'
import Lightbox from './Lightbox.jsx'
import { projects, projectFilters } from '../data.js'
import './Projects.css'

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 26 } },
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, amount: 0.15 })

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section>
      <div className="wrap proj-sticky-grid">
        <div className="proj-sticky-col">
          <Reveal as="div" direction="left">
            <div className="eyebrow">Past projects</div>
            <h2 className="display">Proof, not promises</h2>
            <p className="proj-lede">A sample of reviews and launch coverage — filter to see either on its own.</p>
          </Reveal>
          <div className="proj-filters">
            {projectFilters.map((f) => (
              <button
                key={f}
                className={`proj-filter-btn${filter === f ? ' active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="proj-grid" ref={gridRef}>
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                className="proj-card"
                variants={cardVariants}
                initial="hidden"
                animate={gridInView ? 'visible' : 'hidden'}
                exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.2 } }}
                whileHover={{ y: -6 }}
                onClick={() => setSelected(p)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setSelected(p) }}
              >
                <span className="proj-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="proj-views">{p.views} <span>{p.viewsLabel}</span></div>
                <span className="proj-expand">View details →</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Lightbox project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
