import Reveal from './Reveal.jsx'
import { StaggerGroup, StaggerItem } from './Stagger.jsx'
import { aboutFacts } from '../data.js'
import './About.css'

export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <Reveal direction="left" className="about-plate">
          <div className="ring"></div>
          <div className="initials">KM</div>
        </Reveal>
        <Reveal direction="right" className="about-copy" delay={0.1}>
          <div className="eyebrow">Meet the creator</div>
          <h2 className="display" style={{ fontSize: 'clamp(2rem,4vw,3rem)', margin: '0.8rem 0 1.6rem' }}>Hello, I'm Kinza</h2>
          <p>I'm a food-first content creator who makes restaurants and food brands the main character of a scroll. Restaurant reviews and on-ground launch event coverage — I shoot and edit everything myself, with an instinct for the shot that actually stops the thumb.</p>
          <p>I'm currently Media Head at University of Home Economics, running content strategy for live events and campaigns — so brand collaborations get the same planning, not just a phone and a plate of food.</p>
          <StaggerGroup as="div" className="about-facts" staggerDelay={0.08}>
            {aboutFacts.map((f) => (
              <StaggerItem as="div" key={f.label} direction="right">
                <span className="label">{f.label}</span><span className="value">{f.value}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>
      </div>
    </section>
  )
}
