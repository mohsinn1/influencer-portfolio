import { Link, useLocation } from 'react-router-dom'
import './Nav.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#partners', label: 'Partners' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <nav>
      <Link to="/" className="nav-mark"><span className="dot"></span>KINZA MOHSIN</Link>
      <div className="nav-links">
        {links.map((l) => (
          <a key={l.href} href={isHome ? l.href : `/${l.href}`}>{l.label}</a>
        ))}
      </div>
    </nav>
  )
}
