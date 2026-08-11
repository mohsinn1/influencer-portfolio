import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="footer-copy">© 2026 KINZA MOHSIN — FOOD CONTENT CREATOR, LAHORE</div>
      <div className="footer-legal">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <span className="footer-dot">·</span>
        <Link to="/data-deletion">Data Deletion</Link>
      </div>
    </footer>
  )
}
