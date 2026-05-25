import React from 'react';
import { portfolios } from '../../data';

const Portfolio: React.FC = () => (
  <section id="projects" style={{ background:'#0a0a0a', padding:'5rem 0' }}>
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="font-display font-bold text-white mb-2" style={{ fontSize:'clamp(1.5rem,3vw,2.2rem)' }}>
        From Vision to Launch! Projects We're Proud Of
      </h2>
      <p style={{ color:'#6b7280', fontSize:'0.9rem', marginBottom:'3rem' }}>
        Take a closer look at our recent work powering startups, enterprises, and everything in between.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {portfolios.map(p => (
          <div key={p.id} className="text-left rounded-2xl overflow-hidden transition-all duration-200"
            style={{ background:'#141414', border:'1px solid #1e1e1e', cursor:'pointer' }}
            onMouseEnter={e=>(e.currentTarget.style.borderColor='rgba(249,115,22,0.3)')}
            onMouseLeave={e=>(e.currentTarget.style.borderColor='#1e1e1e')}>
            <div style={{ height:'200px', overflow:'hidden' }}>
              <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500"
                onMouseEnter={e=>(e.currentTarget.style.transform='scale(1.05)')}
                onMouseLeave={e=>(e.currentTarget.style.transform='scale(1)')} />
            </div>
            <div className="p-4">
              <span style={{ color:'#f97316', fontSize:'0.75rem', fontWeight:600 }}>{p.type}</span>
              <h3 className="font-semibold text-white mt-1" style={{ fontSize:'0.95rem' }}>{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Portfolio;
