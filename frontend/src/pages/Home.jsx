import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Zap, Tv, Fan, Cpu, ShoppingBag, ShieldCheck, MapPin, ArrowRight, Star, Clock, Phone } from 'lucide-react';
import { fetchServices, fetchProducts } from '../api';
import RepairModal from '../components/RepairModal';
import PurchaseModal from '../components/PurchaseModal';

export default function Home() {
  const [services, setServices] = useState([]);
  const [products, setProducts] = useState([]);
  const [repairModalOpen, setRepairModalOpen] = useState(false);
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchServices().then(data => setServices(data.slice(0, 4)));
    fetchProducts().then(data => setProducts(data.slice(0, 4)));
  }, []);

  const openRepairModal = (service = null) => {
    setSelectedService(service);
    setRepairModalOpen(true);
  };

  const openPurchaseModal = (product) => {
    setSelectedProduct(product);
    setPurchaseModalOpen(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={{ position: 'relative', padding: '5rem 0 4rem', overflow: 'hidden', background: 'radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.15), transparent 70%)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <span className="badge badge-blue" style={{ marginBottom: '1.25rem' }}>
              <ShieldCheck size={14} /> Gudhiyari Raipur's Trusted Repair & Electronics Hub
            </span>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.25rem' }}>
              Expert <span className="gradient-text">Electronics Service</span>, Products & Student Projects
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              From fast mixer & TV repairs to wholesale DTH receivers and student Arduino kits. Affordable, reliable, and verified local expertise right near Durga Chowk.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => openRepairModal()}>
                <Wrench size={18} /> Book Repair Service
              </button>
              <Link to="/products?condition=WHOLESALE" className="btn-amber">
                <ShoppingBag size={18} /> Wholesale DTH Deals
              </Link>
            </div>

            {/* Quick Metrics */}
            <div style={{ display: 'flex', gap: '2.5rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
              <div>
                <span style={{ display: 'block', fontSize: '1.75rem', fontWeight: 800, color: '#60a5fa' }}>15+ Yrs</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Local Shop Trust</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '1.75rem', fontWeight: 800, color: '#34d399' }}>5000+</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Repairs Completed</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '1.75rem', fontWeight: 800, color: '#fbbf24' }}>100%</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Genuine Parts</span>
              </div>
            </div>
          </div>

          {/* Hero Card Visual */}
          <div className="glass-panel glow-box" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-glow)' }}>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Zap color="var(--primary)" /> Popular Services & Wholesale
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '1rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ fontSize: '1rem' }}>Mixer & Grinder Repair</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Coupler fix, Motor rewinding</span>
                </div>
                <span style={{ fontWeight: 700, color: '#34d399' }}>From ₹150</span>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '1rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ fontSize: '1rem' }}>DD Free Dish DTH Receiver</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-amber)' }}>Wholesale Bulk Rates Available</span>
                </div>
                <span style={{ fontWeight: 700, color: '#fbbf24' }}>₹480 (Bulk)</span>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '1rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ fontSize: '1rem' }}>Student IoT & Arduino Kits</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Components & Project Guidance</span>
                </div>
                <span style={{ fontWeight: 700, color: '#60a5fa' }}>Custom Help</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
            <div>
              <span className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>Repair Services</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Fast & Reliable Appliances Repair</h2>
            </div>
            <Link to="/services" className="btn-secondary">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="card-grid">
            {services.map(service => (
              <div key={service.id} className="interactive-card">
                <div className="brand-icon" style={{ marginBottom: '1.25rem' }}>
                  <Wrench size={22} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{service.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                  {service.short_description}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', display: 'block' }}>ESTIMATED PRICE</span>
                    <span style={{ fontWeight: 700, color: '#34d399' }}>{service.price_range}</span>
                  </div>
                  <button className="btn-primary btn-sm" onClick={() => openRepairModal(service)}>
                    Book Repair
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ padding: '4rem 0', background: 'rgba(30, 41, 59, 0.4)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
            <div>
              <span className="badge badge-amber" style={{ marginBottom: '0.5rem' }}>Shop Products</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Featured Products & Wholesale</h2>
            </div>
            <Link to="/products" className="btn-secondary">
              Browse All Products <ArrowRight size={16} />
            </Link>
          </div>

          <div className="card-grid">
            {products.map(product => (
              <div key={product.id} className="interactive-card" style={{ padding: 0 }}>
                <img
                  src={product.image_url}
                  alt={product.name}
                  style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span className={`badge ${product.condition === 'WHOLESALE' ? 'badge-amber' : product.condition === 'REFURBISHED' ? 'badge-purple' : 'badge-green'}`}>
                      {product.condition}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', lineHeight: 1.3 }}>{product.name}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {product.description}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.85rem', borderTop: '1px solid var(--border-color)' }}>
                    <div>
                      <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
                        ₹{product.condition === 'WHOLESALE' ? product.wholesale_price || product.price : product.price}
                      </span>
                    </div>
                    <button className="btn-amber btn-sm" onClick={() => openPurchaseModal(product)}>
                      Enquire / Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Projects Banner */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="glass-panel glow-box" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)', background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95))', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
            <div>
              <span className="badge badge-purple" style={{ marginBottom: '1rem' }}>Engineering & School Support</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1rem' }}>
                Student IoT & Arduino Projects Assistance
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Need help with your final year project or school science model? We provide genuine electronic components (Sensors, Motors, Arduino, ESP8266) plus circuit guidance and assembly help.
              </p>
              <Link to="/projects" className="btn-primary" style={{ background: 'linear-gradient(135deg, #818cf8, #4f46e5)' }}>
                <Cpu size={18} /> Explore Projects & Components
              </Link>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#c084fc' }}>Popular Student Components:</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <li>⚡ Arduino UNO R3 & NodeMCU ESP8266</li>
                <li>⚡ Ultrasonic distance & Soil Moisture Sensors</li>
                <li>⚡ Relay modules, Motor Drivers (L298N) & Servos</li>
                <li>⚡ Custom Project Circuit Assembly & Debugging</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section style={{ padding: '4rem 0', background: 'rgba(15, 23, 42, 0.8)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <span className="badge badge-green" style={{ marginBottom: '1rem' }}>Visit Our Shop</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1rem' }}>
              Located Near Durga Chowk, Gudhiyari
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Walk in anytime during business hours for instant repairs, wholesale DTH purchases, or component pick-up.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <MapPin color="var(--primary)" /> Near Durga Chowk, Gudhiyari, Raipur, CG
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Clock color="var(--accent-amber)" /> Mon - Sat: 9:30 AM - 8:30 PM
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone color="#34d399" /> +91 98261 00000
              </div>
            </div>
          </div>

          <div style={{ height: '320px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
            <iframe
              title="Laxmi Electronics Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14874.123456789!2d81.629!3d21.251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda123456789%3A0x123456789abcdef!2sGudhiyari%2C%20Raipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Modals */}
      <RepairModal
        isOpen={repairModalOpen}
        onClose={() => setRepairModalOpen(false)}
        selectedService={selectedService}
      />
      <PurchaseModal
        isOpen={purchaseModalOpen}
        onClose={() => setPurchaseModalOpen(false)}
        selectedProduct={selectedProduct}
      />
    </div>
  );
}
