import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wrench, Phone, MessageSquare, Zap, Layers, ShoppingBag, Info } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className="header-nav">
      <div className="container nav-container">
        <Link to="/" className="brand-logo">
          <div className="brand-icon">
            <Zap size={24} />
          </div>
          <div>
            <span style={{ display: 'block', lineHeight: 1.1 }}>Laxmi</span>
            <span style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--accent-cyan)', letterSpacing: '0.05em' }}>
              ELECTRONICS & ELECTRICALS
            </span>
          </div>
        </Link>

        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/" className={isActive('/')}>Home</Link>
            </li>
            <li>
              <Link to="/services" className={isActive('/services')}>Services & Repairs</Link>
            </li>
            <li>
              <Link to="/projects" className={isActive('/projects')}>Student Projects</Link>
            </li>
            <li>
              <Link to="/products" className={isActive('/products')}>Products & Wholesale</Link>
            </li>
            <li>
              <Link to="/about" className={isActive('/about')}>About Us</Link>
            </li>
            <li>
              <Link to="/contact" className={isActive('/contact')}>Contact</Link>
            </li>
          </ul>
        </nav>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <a
            href="https://wa.me/919826100000?text=Hello%20Laxmi%20Electronics,%20I%20have%20an%20enquiry"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary btn-sm"
            style={{ borderColor: 'rgba(16, 185, 129, 0.4)', color: '#34d399' }}
          >
            <MessageSquare size={16} /> WhatsApp
          </a>
          <a href="tel:+919826100000" className="btn-primary btn-sm">
            <Phone size={16} /> Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
