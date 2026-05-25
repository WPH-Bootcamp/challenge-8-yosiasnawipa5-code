import React from 'react';
import { services } from '../../data';

const Services: React.FC = () => (
  <section id="services" style={{ background:'#0a0a0a', padding:'5rem 0' }}>
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="font-display font-bold text-white mb-2" style={{ fontSize:'clamp(1.5rem,3vw,2.2rem)' }}>
        Smart IT Solutions That Grow With You
      </h2>
      <p style={{ color:'#6b7280', fontSize:'0.9rem', marginBottom:'3rem' }}>
        Tailored tech to boost efficiency, security, and results.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(s => (
          <div key={s.id} className="text-left rounded-xl p-5 transition-all duration-200"
            style={{ background:'#141414', border:'1px solid #1e1e1e' }}
            onMouseEnter={e=>(e.currentTarget.style.borderColor='rgba(249,115,22,0.25)')}
            onMouseLeave={e=>(e.currentTarget.style.borderColor='#1e1e1e')}>
            <div style={{ fontSize:'2rem', marginBottom:'0.75rem' }}>{s.icon}</div>
            <h3 className="font-semibold text-white mb-2" style={{ fontSize:'0.95rem' }}>{s.title}</h3>
            <p style={{ color:'#6b7280', fontSize:'0.8rem', lineHeight:'1.6' }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Services;
