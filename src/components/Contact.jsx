import Reveal from './Reveal.jsx'
import MagneticButton from './MagneticButton.jsx'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="wrap">
        <Reveal as="div">
          <h2 className="display">Let's get<br />you <span>served</span>.</h2>
          <p>Have a restaurant, café, or product you want in front of a hungry Lahore audience? Send a message — I usually reply within a day.</p>
          <div className="contact-links">
            <MagneticButton className="btn btn-solid" href="https://wa.me/923297462916" target="_blank" rel="noopener">
              WhatsApp me →
            </MagneticButton>
            <MagneticButton className="btn btn-outline" href="https://instagram.com/kinza__mohsin" target="_blank" rel="noopener">
              DM on Instagram
            </MagneticButton>
          </div>
          <div className="contact-meta">
            <a href="https://wa.me/923297462916" target="_blank" rel="noopener">WhatsApp: +92 329 7462916</a>
            <a href="https://instagram.com/kinza__mohsin" target="_blank" rel="noopener">@kinza__mohsin</a>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
