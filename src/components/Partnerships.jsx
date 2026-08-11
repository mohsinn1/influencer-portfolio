import Reveal from './Reveal.jsx'
import { StaggerGroup, StaggerItem } from './Stagger.jsx'
import { partners } from '../data.js'
import './Partnerships.css'

export default function Partnerships() {
  return (
    <section id="partners">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <div className="eyebrow">Previous partnerships</div>
          <h2 className="display">Brands I've fed content to</h2>
        </Reveal>
        <StaggerGroup as="div" className="partner-wall" staggerDelay={0.05}>
          {partners.map((name) => (
            <StaggerItem as="div" key={name} className="partner-chip" whileHover={{ scale: 1.05 }}>
              {name}
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
