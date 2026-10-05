import React, { useEffect, useState } from 'react';
import { Wrench, ShieldCheck, Zap, Fan, Tv, Cpu, Wind, Flame, CheckCircle } from 'lucide-react';
import { fetchServices } from '../api';
import RepairModal from '../components/RepairModal';

export default function Services() {
  const [services, setServices] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    fetchServices().then(setServices);
  }, []);

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Fan': return <Fan size={24} />;
      case 'Tv': return <Tv size={24} />;
      case 'Cpu': return <Cpu size={24} />;
      case 'Wind': return <Wind size={24} />;
      case 'Flame': return <Flame size={24} />;
      default: return <Zap size={24} />;
    }
  };

  return (
    <div className="container" style={{ padding: '3rem 0' }}>
      <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
        <span className="badge badge-blue" style={{ marginBottom: '1rem' }}>Expert Repairs</span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
          Electronics & Appliances Repair Services
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
          Fast diagnosis, genuine spare parts, and transparent pricing for home appliances in Gudhiyari & Raipur.
        </p>
      </div>

      <div className="card-grid">
        {services.map(service => (
          <div key={service.id} className="interactive-card">
            <div className="brand-icon" style={{ marginBottom: '1.25rem' }}>
              {getIcon(service.icon_name)}
            </div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>{service.name}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem', minHeight: '60px' }}>
              {service.full_description || service.short_description}
            </p>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.85rem 1rem', borderRadius: '10px', marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <div>
                <span style={{ color: 'var(--text-dim)', display: 'block' }}>Turnaround</span>
                <span style={{ fontWeight: 600, color: '#60a5fa' }}>{service.turnaround_time}</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ color: 'var(--text-dim)', display: 'block' }}>Est. Price</span>
                <span style={{ fontWeight: 700, color: '#34d399' }}>{service.price_range}</span>
              </div>
            </div>

            <button
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => openModal(service)}
            >
              <Wrench size={16} /> Book Repair / Get Quote
            </button>
          </div>
        ))}
      </div>

      {/* Repair Process Steps */}
      <div style={{ marginTop: '5rem', background: 'var(--bg-card)', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '2.5rem' }}>How Our Repair Service Works</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
          <div>
            <div className="brand-icon" style={{ marginBottom: '1rem', background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa' }}>1</div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Submit Request / Drop In</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Fill the form or bring your faulty item to our Gudhiyari shop.</p>
          </div>
          <div>
            <div className="brand-icon" style={{ marginBottom: '1rem', background: 'rgba(6, 182, 212, 0.2)', color: '#38bdf8' }}>2</div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Free Diagnosis & Quote</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Our senior technician inspects the appliance and gives an accurate quote.</p>
          </div>
          <div>
            <div className="brand-icon" style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.2)', color: '#fbbf24' }}>3</div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Repair & Testing</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>We repair using quality parts and test under load for safety.</p>
          </div>
          <div>
            <div className="brand-icon" style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.2)', color: '#34d399' }}>4</div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Pickup & Warranty</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Collect your working appliance with shop service warranty.</p>
          </div>
        </div>
      </div>

      <RepairModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedService={selectedService}
      />
    </div>
  );
}
