import React, { useState } from 'react';
import { X, CheckCircle, ShoppingBag, Truck } from 'lucide-react';
import { submitPurchaseEnquiry } from '../api';

export default function PurchaseModal({ isOpen, onClose, selectedProduct }) {
  const [formData, setFormData] = useState({
    customer_name: '',
    phone: '',
    email: '',
    quantity: selectedProduct && selectedProduct.condition === 'WHOLESALE' ? selectedProduct.wholesale_min_qty || 10 : 1,
    delivery_address: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const isWholesale = selectedProduct && selectedProduct.condition === 'WHOLESALE';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await submitPurchaseEnquiry({
      ...formData,
      product: selectedProduct ? selectedProduct.id : null,
      product_name: selectedProduct ? selectedProduct.name : 'Product Purchase',
      is_wholesale: isWholesale
    });

    setLoading(false);
    setSubmitted(true);
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
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Order Request Sent!</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              We have reserved your enquiry for <strong>{selectedProduct ? selectedProduct.name : 'your item'}</strong>. We will contact you at <strong>{formData.phone}</strong> to confirm pricing & pickup/delivery.
            </p>
            <button className="btn-primary" onClick={onClose} style={{ margin: '0 auto' }}>
              Done
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div className="brand-icon" style={{ width: '38px', height: '38px', background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
                <ShoppingBag size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem' }}>
                  {isWholesale ? 'Wholesale Order Enquiry' : 'Buy / Enquire Product'}
                </h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-amber)', fontWeight: 600 }}>
                  {selectedProduct ? selectedProduct.name : 'Item Enquiry'}
                </span>
              </div>
            </div>

            {selectedProduct && (
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.85rem 1rem', borderRadius: '10px', marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Price per unit:</span>
                  <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#34d399' }}>
                    ₹{isWholesale ? selectedProduct.wholesale_price || selectedProduct.price : selectedProduct.price}
                  </span>
                </div>
                {isWholesale && (
                  <span className="badge badge-amber">
                    Min Wholesale Qty: {selectedProduct.wholesale_min_qty || 10} pcs
                  </span>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="e.g. Suresh Kumar"
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
                  <label className="form-label">Quantity *</label>
                  <input
                    type="number"
                    min={isWholesale ? selectedProduct.wholesale_min_qty || 10 : 1}
                    required
                    className="form-input"
                    value={formData.quantity}
                    onChange={e => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Delivery Address / Shop Location</label>
                <textarea
                  rows={2}
                  className="form-textarea"
                  placeholder="Street / Area in Raipur or Chhattisgarh address for bulk shipping..."
                  value={formData.delivery_address}
                  onChange={e => setFormData({ ...formData, delivery_address: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-amber"
                style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
              >
                {loading ? 'Submitting...' : isWholesale ? 'Request Wholesale Quote' : 'Submit Purchase Enquiry'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
