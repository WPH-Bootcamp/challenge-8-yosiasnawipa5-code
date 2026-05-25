import React, { useState } from 'react';
import { faqs } from '../../data';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" style={{ background:'#0a0a0a', padding:'5rem 0' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h2 className="font-display font-bold text-white" style={{ fontSize:'clamp(1.75rem,3.5vw,2.5rem)', lineHeight:'1.15' }}>
              Need Help? Start<br />Here.
            </h2>
          </div>
          <div className="flex items-center">
            <p style={{ color:'#6b7280', fontSize:'0.9rem', lineHeight:'1.7' }}>
              Everything you need to know — all in one place.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Accordion */}
          <div className="md:col-span-2">
            <div style={{ borderTop:'1px solid #1e1e1e' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ borderBottom:'1px solid #1e1e1e' }}>
                  <button
                    className="w-full flex items-center justify-between py-5 text-left transition-colors"
                    style={{ background:'none', border:'none', cursor:'pointer', color: openIndex===i ? '#ffffff' : '#d1d5db' }}
                    onClick={() => setOpenIndex(openIndex===i ? -1 : i)}>
                    <span style={{ fontSize:'0.95rem', fontWeight:500 }}>{faq.q}</span>
                    <span style={{ fontSize:'1.2rem', color:'#f97316', flexShrink:0, marginLeft:'1rem' }}>
                      {openIndex===i ? '−' : '+'}
                    </span>
                  </button>
                  {openIndex===i && (
                    <p style={{ color:'#6b7280', fontSize:'0.85rem', lineHeight:'1.7', paddingBottom:'1.25rem' }}>
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <div className="rounded-2xl overflow-hidden" style={{ background:'#f97316' }}>
            <div className="p-6">
              <h3 className="font-display font-bold text-white mb-2" style={{ fontSize:'1.2rem', lineHeight:'1.3' }}>
                Let's talk it through
              </h3>
              <p style={{ color:'rgba(255,255,255,0.85)', fontSize:'0.82rem', marginBottom:'1rem' }}>
                book a free consultation with our team.
              </p>
            </div>
            <div style={{ height:'140px', overflow:'hidden' }}>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80"
                alt="Consultation" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <button className="w-full font-semibold rounded-full py-3 transition-all duration-200"
                style={{ background:'white', color:'#0a0a0a', fontSize:'0.85rem', border:'none', cursor:'pointer' }}
                onMouseEnter={e=>(e.currentTarget.style.background='#f5f5f5')}
                onMouseLeave={e=>(e.currentTarget.style.background='white')}>
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQ;
