import React from 'react';
import { ShieldCheck, MapPin, Award, Users, Wrench, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="container" style={{ padding: '3rem 0' }}>
      <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem' }}>
        <span className="badge badge-blue" style={{ marginBottom: '1rem' }}>Local Shop Heritage</span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
          About Laxmi Electronics & Electricals
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
          Serving Gudhiyari & Raipur with integrity, master repairing skills, and wholesale electronics pricing.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1.25rem' }}>
            Our Journey Near Durga Chowk
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Established in Gudhiyari, Raipur, <strong>Laxmi Electronics and Electricals</strong> started as a dedicated repairing workshop for home appliances like mixers, air coolers, ceiling fans, and LED TVs.
          </p>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Over the years, we expanded our business to become one of Raipur's premier wholesale suppliers of DD Free Dish FTA DTH Set Top Boxes while also supporting local engineering students with custom Arduino & IoT project assembly.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span className="badge badge-green"><ShieldCheck size={14} /> 100% Genuine Spare Parts</span>
            <span className="badge badge-amber"><Award size={14} /> Fast Turnaround</span>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: '#60a5fa' }}>Why Customers Choose Us:</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div className="brand-icon" style={{ width: '36px', height: '36px', flexShrink: 0 }}>
                <Wrench size={18} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem' }}>Expert Master Technicians</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>15+ years of experience repairing complex PCB circuit boards, IGBTs, and copper motors.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div className="brand-icon" style={{ width: '36px', height: '36px', flexShrink: 0, background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
                <Zap size={18} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem' }}>Direct Wholesale DTH Rates</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Bulk satellite receivers directly supplied to local dealers and installation technicians.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div className="brand-icon" style={{ width: '36px', height: '36px', flexShrink: 0, background: 'linear-gradient(135deg, #818cf8, #4f46e5)' }}>
                <Users size={18} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem' }}>Student Friendly Guidance</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Affordable electronic sensors & microcontrollers with friendly circuit troubleshooting help.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
