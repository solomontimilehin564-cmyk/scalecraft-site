import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot">
          <div><strong>SCALE CRAFT</strong><br />Crafting Strategies. Scaling Growth.</div>
          <div className="foot-links">
            <Link to="/">Home</Link>
            <Link to="/#services">Services</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/#contact">Contact</Link>
          </div>
        </div>
        <div className="copy">© {new Date().getFullYear()} Scale Craft Marketing Agency. All rights reserved.</div>
      </div>
    </footer>
  )
}