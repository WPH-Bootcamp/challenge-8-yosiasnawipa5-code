import React from 'react';
import { stats } from '../../data';

const Stats: React.FC = () => (
  <section id="about" style={{ background:'#0a0a0a', padding:'5rem 0' }}>
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="font-display font-bold text-white mb-3" style={{ fontSize:'clamp(1.5rem,3vw,2.2rem)' }}>
        End-to-End IT Solutions That Drive Results
      </h2>
      <p style={{ color:'#6b7280', fontSize:'0.95rem', marginBottom:'3rem' }}>
        From strategy to execution, we deliver solutions that grow your business.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(s => (
          <div key={s.label} className="flex flex-col items-center justify-center"
            style={{ width:'160px', height:'160px', borderRadius:'50%', background:'#141414', border:'1px solid #222', margin:'0 auto' }}>
            <span className="font-display font-black" style={{ fontSize:'2.25rem', color:'#f97316', lineHeight:1 }}>{s.value}</span>
            <span style={{ color:'#9ca3af', fontSize:'0.78rem', marginTop:'0.5rem', textAlign:'center', padding:'0 12px' }}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Stats;
