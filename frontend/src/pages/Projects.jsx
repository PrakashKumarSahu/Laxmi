import React, { useEffect, useState } from 'react';
import { Cpu, GraduationCap, PlusCircle, Check } from 'lucide-react';
import { fetchProjects, fetchComponents } from '../api';
import ProjectModal from '../components/ProjectModal';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [components, setComponents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetchProjects().then(setProjects);
    fetchComponents().then(setComponents);
  }, []);

  const openModal = (project = null) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <div className="container" style={{ padding: '3rem 0' }}>
      <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
        <span className="badge badge-purple" style={{ marginBottom: '1rem' }}>Arduino & IoT Support</span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
          Student Electronics Projects & Components
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
          Final year engineering, diploma, and school science DIY projects. Get complete kits, genuine components, and hands-on assembly guidance in Raipur.
        </p>
        <button className="btn-primary" style={{ marginTop: '1.5rem', background: 'linear-gradient(135deg, #818cf8, #4f46e5)' }} onClick={() => openModal()}>
          <GraduationCap size={18} /> Request Custom Project Assistance
        </button>
      </div>

      {/* Featured Projects Grid */}
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#ffffff' }}>Featured Project Kits</h2>
      <div className="card-grid" style={{ marginBottom: '4rem' }}>
        {projects.map(proj => (
          <div key={proj.id} className="interactive-card">
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span className="badge badge-purple">{proj.category}</span>
              <span className="badge badge-blue">{proj.difficulty}</span>
            </div>

            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{proj.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
              {proj.description}
            </p>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.85rem', borderRadius: '10px', marginBottom: '1.25rem', fontSize: '0.8rem' }}>
              <strong style={{ color: '#a5b4fc', display: 'block', marginBottom: '0.25rem' }}>Components Included:</strong>
              <span style={{ color: 'var(--text-muted)' }}>{proj.components_included}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', display: 'block' }}>EST. KIT PRICE</span>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#34d399' }}>₹{proj.estimated_price}</span>
              </div>
              <button className="btn-primary btn-sm" style={{ background: '#4f46e5' }} onClick={() => openModal(proj)}>
                Get Project Kit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Components Inventory Table */}
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#ffffff' }}>Electronic Components In Stock</h2>
      <div className="glass-panel" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-muted)', borderBottom: '1px solid var(--border-color)' }}>
                <th style={{ padding: '1rem 1.5rem' }}>Component Name</th>
                <th style={{ padding: '1rem 1.5rem' }}>Category</th>
                <th style={{ padding: '1rem 1.5rem' }}>Unit Price</th>
                <th style={{ padding: '1rem 1.5rem' }}>Stock Status</th>
                <th style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {components.map(comp => (
                <tr key={comp.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: 600, color: '#ffffff' }}>{comp.name}</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)' }}>{comp.category}</td>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: 700, color: '#34d399' }}>₹{comp.price}</td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <span className="badge badge-green"><Check size={12} /> Available ({comp.stock_quantity} pcs)</span>
                  </td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                    <button className="btn-secondary btn-sm" onClick={() => openModal({ title: comp.name })}>
                      Enquire Stock
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedProject={selectedProject}
      />
    </div>
  );
}
