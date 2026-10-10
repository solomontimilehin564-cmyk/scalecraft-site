import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="logo" onClick={close}>
          <span className="logo-mark">S</span> SCALE CRAFT
        </Link>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
        <nav className={'nav-links' + (open ? ' open' : '')}>
          <Link to="/" onClick={close}>Home</Link>
          <Link to="/#services" onClick={close}>Services</Link>
          <Link to="/pricing" onClick={close}>Pricing</Link>
          <Link to="/#why" onClick={close}>About</Link>
          <Link to="/#contact" onClick={close}>Contact</Link>
          <Link to="/#contact" className="btn btn-primary" onClick={close}>Get Started</Link>
        </nav>
      </div>
    </header>
  )
}