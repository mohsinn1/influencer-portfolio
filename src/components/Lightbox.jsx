import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Lightbox.css'

export default function Lightbox({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="lightbox-card"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 220, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={onClose} aria-label="Close">×</button>
            <span className="proj-tag">{project.tag}</span>
            <h3>{project.title}</h3>
            <p className="lightbox-detail">{project.detail}</p>
            <div className="proj-views">{project.views} <span>{project.viewsLabel}</span></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
