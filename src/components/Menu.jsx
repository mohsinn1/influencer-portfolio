import Reveal from './Reveal.jsx'
import { StaggerGroup, StaggerItem } from './Stagger.jsx'
import { menuItems } from '../data.js'
import './Menu.css'

export default function Menu() {
  return (
    <section id="work">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <div className="eyebrow">What I create</div>
          <h2 className="display">The Menu</h2>
        </Reveal>
        <StaggerGroup as="div" className="menu-list">
          {menuItems.map((item, i) => (
            <StaggerItem as="div" key={item.title} className="menu-item" direction={i % 2 === 0 ? 'left' : 'right'}>
              <h3>{item.title}</h3>
              <div className="desc">{item.desc}</div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
