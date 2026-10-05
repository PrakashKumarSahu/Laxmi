import React, { useState } from 'react';
import { X, CheckCircle, Cpu, GraduationCap } from 'lucide-react';
import { submitProjectRequest } from '../api';

export default function ProjectModal({ isOpen, onClose, selectedProject }) {
  const [formData, setFormData] = useState({
    student_name: '',
    phone: '',
    email: '',
    college_or_school: '',
    requirements: selectedProject ? `Assistance with ${selectedProject.title}` : '',
    deadline: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await submitProjectRequest({
      ...formData,
      project: selectedProject ? selectedProject.id : null,
      project_title: selectedProject ? selectedProject.title : 'Custom Student Project'
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
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Project Request Received!</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Awesome! Our project expert will contact <strong>{formData.student_name}</strong> at <strong>{formData.phone}</strong> to discuss circuit diagrams, components, and guidance.
            </p>
            <button className="btn-primary" onClick={onClose} style={{ margin: '0 auto' }}>
              Done
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div className="brand-icon" style={{ width: '38px', height: '38px', background: 'linear-gradient(135deg, #818cf8, #4f46e5)' }}>
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem' }}>Student Project Assistance</h3>
                <span style={{ fontSize: '0.85rem', color: '#a5b4fc' }}>
                  {selectedProject ? selectedProject.title : 'Custom Arduino / IoT Project'}
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Student Name *</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="e.g. Amit Patel"
                  value={formData.student_name}
                  onChange={e => setFormData({ ...formData, student_name: e.target.value })}
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
                  <label className="form-label">College / School</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. NIT Raipur / GEC"
                    value={formData.college_or_school}
                    onChange={e => setFormData({ ...formData, college_or_school: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Project Requirements / Ideas *</label>
                <textarea
                  required
                  rows={3}
                  className="form-textarea"
                  placeholder="Describe your project requirement, needed components, or guidance..."
                  value={formData.requirements}
                  onChange={e => setFormData({ ...formData, requirements: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}
              >
                {loading ? 'Submitting...' : 'Request Project Help / Component Kit'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
