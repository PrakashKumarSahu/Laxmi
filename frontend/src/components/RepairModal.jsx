import React, { useState } from 'react';
import { X, CheckCircle, Wrench, AlertCircle } from 'lucide-react';
import { submitRepairEnquiry } from '../api';

export default function RepairModal({ isOpen, onClose, selectedService }) {
  const [formData, setFormData] = useState({
    customer_name: '',
    phone: '',
    email: '',
    device_type: selectedService ? selectedService.name : 'Mixer / Appliance',
    issue_description: '',
    preferred_date: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await submitRepairEnquiry({
      ...formData,
      device_type: selectedService ? selectedService.name : formData.device_type
    });

    setLoading(false);
    if (res.success) {
      setSubmitted(true);
    } else {
      setError('Could not submit enquiry. Please call us directly.');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <CheckCircle size={54} color="#10b981" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Enquiry Received!</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Thank you, <strong>{formData.customer_name}</strong>. Our technician from Laxmi Electronics Gudhiyari will call you shortly on <strong>{formData.phone}</strong>.
            </p>
            <button className="btn-primary" onClick={onClose} style={{ margin: '0 auto' }}>
              Done
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div className="brand-icon" style={{ width: '38px', height: '38px' }}>
                <Wrench size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem' }}>Book Repair / Get Quote</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)' }}>
                  {selectedService ? selectedService.name : 'Repair Service'}
                </span>
              </div>
            </div>

            {error && (
              <div style={{ background: 'rgba(244, 63, 94, 0.15)', color: '#f43f5e', padding: '0.75rem', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <AlertCircle size={16} /> {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.customer_name}
                  onChange={e => setFormData({ ...formData, customer_name: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="form-input"
                    placeholder="10-digit Mobile"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Preferred Date</label>
                  <input
                    type="date"
                    className="form-input"
                    value={formData.preferred_date}
                    onChange={e => setFormData({ ...formData, preferred_date: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Device & Problem Details *</label>
                <textarea
                  required
                  rows={3}
                  className="form-textarea"
                  placeholder="e.g. Mixer motor not turning on, making burning smell..."
                  value={formData.issue_description}
                  onChange={e => setFormData({ ...formData, issue_description: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
              >
                {loading ? 'Submitting...' : 'Submit Repair Request'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
