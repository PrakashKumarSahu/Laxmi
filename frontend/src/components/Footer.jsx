import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#0b1120', borderTop: '1px solid var(--border-color)', paddingTop: '4rem', paddingBottom: '2rem', marginTop: '5rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
        
        {/* Brand info */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div className="brand-icon">
              <Zap size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Laxmi Electronics</h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', display: 'block' }}>& ELECTRICALS</span>
            </div>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
            Your trusted local shop in Raipur for quality electronics repair, wholesale DTH receivers, brand new & refurbished home appliances, and student IoT/Arduino project support.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#34d399', fontSize: '0.85rem' }}>
            <ShieldCheck size={18} /> Verified Local Shop • Genuine Spare Parts
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontSize: '1rem', marginBottom: '1.25rem', color: '#ffffff' }}>Quick Navigation</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <li><Link to="/services" style={{ hover: { color: '#fff' } }}>Mixer, Cooler & TV Repair</Link></li>
            <li><Link to="/projects">Student DIY & Arduino Projects</Link></li>
            <li><Link to="/products?condition=WHOLESALE">Wholesale DTH Receivers</Link></li>
            <li><Link to="/products?condition=NEW">New LED TVs & Appliances</Link></li>
            <li><Link to="/products?condition=REFURBISHED">Refurbished Deals</Link></li>
          </ul>
        </div>

        {/* Shop Address & Hours */}
        <div>
          <h4 style={{ fontSize: '1rem', marginBottom: '1.25rem', color: '#ffffff' }}>Location & Hours</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <div style={{ display: 'flex', gap: '0.65rem' }}>
              <MapPin size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
              <span>Near Durga Chowk, Gudhiyari, Raipur, Chhattisgarh 492009</span>
            </div>
            <div style={{ display: 'flex', gap: '0.65rem' }}>
              <Clock size={20} color="var(--accent-amber)" style={{ flexShrink: 0 }} />
              <span>Mon - Sat: 9:30 AM - 8:30 PM<br />Sunday: 10:00 AM - 4:00 PM</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{ fontSize: '1rem', marginBottom: '1.25rem', color: '#ffffff' }}>Get In Touch</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
              <Phone size={18} color="var(--accent-cyan)" />
              <a href="tel:+919826100000" style={{ color: '#ffffff', fontWeight: 600 }}>+91 98261 00000</a>
            </div>
            <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
              <Mail size={18} color="var(--primary)" />
              <span>laxmielectronics.raipur@gmail.com</span>
            </div>
          </div>
        </div>

      </div>

      <div className="container" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
        <p>© {new Date().getFullYear()} Laxmi Electronics and Electricals. All rights reserved.</p>
        <p>Gudhiyari, Raipur, Chhattisgarh</p>
      </div>
    </footer>
  );
}
