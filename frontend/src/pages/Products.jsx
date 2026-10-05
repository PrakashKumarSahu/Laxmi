import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShoppingBag, Search, Filter, ShieldCheck, Tag } from 'lucide-react';
import { fetchProducts } from '../api';
import PurchaseModal from '../components/PurchaseModal';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [activeCondition, setActiveCondition] = useState(searchParams.get('condition') || 'ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const handleConditionChange = (condition) => {
    setActiveCondition(condition);
    if (condition === 'ALL') {
      searchParams.delete('condition');
    } else {
      searchParams.set('condition', condition);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = products.filter(product => {
    const matchesCondition = activeCondition === 'ALL' || product.condition === activeCondition;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCondition && matchesSearch;
  });

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <div className="container" style={{ padding: '3rem 0' }}>
      <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem' }}>
        <span className="badge badge-amber" style={{ marginBottom: '1rem' }}>Products Catalog</span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
          New, Refurbished & Wholesale Electronics
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
          Explore our range of DTH receivers, Smart LED TVs, Mixer Grinders, Fans & Induction cookers. Wholesale rates for bulk buyers across Chhattisgarh.
        </p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="glass-panel" style={{ padding: '1.25rem', borderRadius: 'var(--radius-lg)', marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {['ALL', 'WHOLESALE', 'NEW', 'REFURBISHED'].map(cond => (
            <button
              key={cond}
              onClick={() => handleConditionChange(cond)}
              className={activeCondition === cond ? 'btn-amber btn-sm' : 'btn-secondary btn-sm'}
            >
              {cond === 'ALL' ? 'All Products' : cond === 'WHOLESALE' ? '📦 Wholesale DTH' : cond === 'NEW' ? '✨ New Items' : '🔄 Refurbished'}
            </button>
          ))}
        </div>

        <div style={{ position: 'relative', width: '280px' }}>
          <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            className="form-input"
            style={{ paddingLeft: '2.5rem', fontSize: '0.85rem' }}
            placeholder="Search products..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
          <ShoppingBag size={48} style={{ opacity: 0.4, marginBottom: '1rem' }} />
          <h3>No products match your filter criteria</h3>
        </div>
      ) : (
        <div className="card-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="interactive-card" style={{ padding: 0 }}>
              <div style={{ position: 'relative' }}>
                <img
                  src={product.image_url}
                  alt={product.name}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <span
                  className={`badge ${product.condition === 'WHOLESALE' ? 'badge-amber' : product.condition === 'REFURBISHED' ? 'badge-purple' : 'badge-green'}`}
                  style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}
                >
                  {product.condition}
                </span>
              </div>

              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', lineHeight: 1.3 }}>{product.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem', minHeight: '40px' }}>
                  {product.description}
                </p>

                {product.condition === 'WHOLESALE' && (
                  <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '0.6rem 0.85rem', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.8rem', color: '#fbbf24' }}>
                    Wholesale Min Quantity: {product.wholesale_min_qty || 10} units
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.85rem', borderTop: '1px solid var(--border-color)' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', display: 'block' }}>
                      {product.condition === 'WHOLESALE' ? 'WHOLESALE RATE' : 'RETAIL PRICE'}
                    </span>
                    <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#34d399' }}>
                      ₹{product.condition === 'WHOLESALE' ? product.wholesale_price || product.price : product.price}
                    </span>
                  </div>
                  <button className="btn-amber btn-sm" onClick={() => openModal(product)}>
                    Enquire / Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <PurchaseModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedProduct={selectedProduct}
      />
    </div>
  );
}
