import React, { useState } from 'react';
import { industries } from '../../data';

const Industries: React.FC = () => {
  const [active, setActive] = useState('fintech');
  const current = industries.find(i => i.id === active)!;

  return (
    <section style={{ background:'#0a0a0a', padding:'5rem 0' }}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-display font-bold text-white mb-2" style={{ fontSize:'clamp(1.5rem,3vw,2.2rem)' }}>
          Built for Your Industry
        </h2>
        <p style={{ color:'#6b7280', fontSize:'0.9rem', marginBottom:'2.5rem' }}>
          We've helped companies across industries launch smarter, faster, and more securely.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left tabs */}
          <div className="flex flex-col gap-2">
            {industries.map(ind => (
              <button key={ind.id} onClick={() => setActive(ind.id)}
                className="text-left py-3 px-4 transition-all duration-200 rounded-lg"
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  borderLeft: active === ind.id ? '3px solid #f97316' : '3px solid #222',
                  color: active === ind.id ? '#ffffff' : '#6b7280',
                  fontWeight: active === ind.id ? 600 : 400,
                  fontSize:'0.95rem',
                }}>
                {ind.label}
              </button>
            ))}
          </div>

          {/* Right content */}
          <div className="md:col-span-2">
            <p style={{ color:'#9ca3af', fontSize:'0.9rem', lineHeight:'1.7', marginBottom:'1.5rem' }}>{current.description}</p>
            <div className="rounded-2xl overflow-hidden" style={{ height:'280px' }}>
              <img src={current.image} alt={current.label} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Industries;
