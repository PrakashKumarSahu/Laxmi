import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { submitContactMessage } from '../api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await submitContactMessage(formData);
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="container" style={{ padding: '3rem 0' }}>
      <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
        <span className="badge badge-green" style={{ marginBottom: '1rem' }}>Contact & Location</span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
          Get In Touch With Laxmi Electronics
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
          Have a question about a repair, wholesale bulk order, or student project? Send us a message or call directly.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'flex-start' }}>
        {/* Contact Information & Map */}
        <div>
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#ffffff' }}>Shop Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin color="var(--primary)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: '#ffffff', display: 'block' }}>Address:</strong>
                  <span style={{ color: 'var(--text-muted)' }}>Near Durga Chowk, Gudhiyari, Raipur, Chhattisgarh 492009</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Phone color="#34d399" style={{ marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: '#ffffff', display: 'block' }}>Phone / WhatsApp:</strong>
                  <a href="tel:+919826100000" style={{ color: '#34d399', fontWeight: 700 }}>+91 98261 00000</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Mail color="var(--accent-cyan)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: '#ffffff', display: 'block' }}>Email:</strong>
                  <span style={{ color: 'var(--text-muted)' }}>laxmielectronics.raipur@gmail.com</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Clock color="var(--accent-amber)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: '#ffffff', display: 'block' }}>Business Hours:</strong>
                  <span style={{ color: 'var(--text-muted)' }}>Monday - Saturday: 9:30 AM - 8:30 PM<br />Sunday: 10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)' }}>
              <a
                href="https://wa.me/919826100000?text=Hello%20Laxmi%20Electronics"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center', borderColor: 'rgba(16, 185, 129, 0.4)', color: '#34d399' }}
              >
                <MessageSquare size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-panel" style={{ padding: '2.25rem', borderRadius: 'var(--radius-lg)' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <CheckCircle size={54} color="#10b981" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Message Sent!</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Thank you <strong>{formData.name}</strong>. We have received your message and will respond shortly.
              </p>
            </div>
          ) : (
            <div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem' }}>Send Us A Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. Ramesh Sahu"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="form-input"
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="10-digit Mobile"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. DTH Wholesale Inquiry / Cooler Motor Repair"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message / Details *</label>
                  <textarea
                    required
                    rows={4}
                    className="form-textarea"
                    placeholder="Write your query here..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Send size={18} /> {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
