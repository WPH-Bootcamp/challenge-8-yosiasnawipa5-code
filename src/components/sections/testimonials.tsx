import React, { useState } from 'react';
import { testimonials } from '../../data';

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(1);

  return (
    <section id="testimonials" style={{ background:'#0a0a0a', padding:'5rem 0', overflow:'hidden' }}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-display font-bold text-white mb-2" style={{ fontSize:'clamp(1.5rem,3vw,2.2rem)' }}>
          What Partners Say About Working With Us
        </h2>
        <p style={{ color:'#6b7280', fontSize:'0.9rem', marginBottom:'3rem' }}>
          Trusted voices. Real experiences. Proven results.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {testimonials.map((t, i) => {
            const isCenter = i === active;
            return (
              <div key={t.id} onClick={() => setActive(i)}
                className="relative rounded-2xl p-6 transition-all duration-300 cursor-pointer text-left"
                style={{
                  background: isCenter ? '#1a1a1a' : '#0f0f0f',
                  border: `1px solid ${isCenter ? '#2a2a2a' : '#161616'}`,
                  opacity: isCenter ? 1 : 0.55,
                  transform: isCenter ? 'scale(1.02)' : 'scale(0.97)',
                }}>
                {/* Quote mark */}
                <div className="font-display font-black text-5xl leading-none mb-3" style={{ color:'#f97316', opacity:0.7 }}>"</div>

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(s => (
                    <span key={s} style={{ color: s <= t.rating ? '#f97316' : '#2a2a2a', fontSize:'0.9rem' }}>★</span>
                  ))}
                </div>

                <p style={{ color:'#d1d5db', fontSize:'0.85rem', lineHeight:'1.7', marginBottom:'1.5rem' }}>{t.quote}</p>

                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="rounded-full object-cover"
                    style={{ width:'40px', height:'40px', border:'2px solid #2a2a2a' }} />
                  <div>
                    <div className="font-semibold text-white" style={{ fontSize:'0.85rem' }}>{t.name}</div>
                    <div style={{ color:'#f97316', fontSize:'0.75rem' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_,i) => (
            <button key={i} onClick={() => setActive(i)}
              style={{ width: i===active?'24px':'8px', height:'8px', borderRadius:'4px', background: i===active?'#f97316':'#333', border:'none', cursor:'pointer', transition:'all 0.3s' }} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
