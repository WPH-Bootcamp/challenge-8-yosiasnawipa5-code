import React from 'react';
import { processSteps } from '../../data';

const Process: React.FC = () => (
  <section style={{ background:'#0a0a0a', padding:'5rem 0' }}>
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="font-display font-bold text-white mb-2" style={{ fontSize:'clamp(1.5rem,3vw,2.2rem)' }}>Our Process</h2>
      <p style={{ color:'#6b7280', fontSize:'0.9rem', marginBottom:'3.5rem' }}>Clear steps. Smart execution. Results you can count on.</p>

      {/* Zigzag timeline */}
      <div className="relative">
        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block" style={{ background:'linear-gradient(to bottom,transparent,#2a2a2a,#2a2a2a,transparent)' }} />

        {processSteps.map((step, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div key={step.id} className="relative flex items-center mb-8"
              style={{ justifyContent: 'center' }}>
              {/* Left card (odd steps) */}
              <div className="w-5/12 hidden md:flex" style={{ justifyContent: isLeft ? 'flex-end' : 'flex-start', paddingRight: isLeft ? '2rem' : 0, paddingLeft: isLeft ? 0 : '2rem' }}>
                {isLeft && (
                  <div className="text-left rounded-xl p-4" style={{ background:'#141414', border:'1px solid #222', minWidth:'220px', maxWidth:'260px' }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-white text-sm">{step.title}</span>
                      <span style={{ color:'#555', fontSize:'1rem' }}>⌃</span>
                    </div>
                    <p style={{ color:'#6b7280', fontSize:'0.78rem' }}>{step.sub}</p>
                  </div>
                )}
              </div>

              {/* Circle number */}
              <div className="flex-shrink-0 z-10 flex items-center justify-center rounded-full font-bold text-white text-sm"
                style={{ width:'40px', height:'40px', background:'#f97316', fontSize:'0.85rem' }}>
                {step.id}
              </div>

              {/* Right card (even steps) */}
              <div className="w-5/12 hidden md:flex" style={{ justifyContent: isLeft ? 'flex-start' : 'flex-end', paddingLeft: isLeft ? '2rem' : 0, paddingRight: isLeft ? 0 : '2rem' }}>
                {!isLeft && (
                  <div className="text-left rounded-xl p-4" style={{ background:'#141414', border:'1px solid #222', minWidth:'220px', maxWidth:'260px' }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-white text-sm">{step.title}</span>
                      <span style={{ color:'#555', fontSize:'1rem' }}>⌃</span>
                    </div>
                    <p style={{ color:'#6b7280', fontSize:'0.78rem' }}>{step.sub}</p>
                  </div>
                )}
              </div>

              {/* Mobile: full width card */}
              <div className="md:hidden ml-4 text-left flex-1 rounded-xl p-4" style={{ background:'#141414', border:'1px solid #222' }}>
                <span className="font-semibold text-white text-sm">{step.title}</span>
                <p style={{ color:'#6b7280', fontSize:'0.78rem', marginTop:'4px' }}>{step.sub}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
export default Process;
