import React from 'react';
import { brands } from '../../data';

const Hero: React.FC = () => (
  <section id="home" className="relative overflow-hidden pt-20" style={{ background: '#0a0a0a', minHeight: '100vh' }}>
    {/* Radial glow behind 3D illustration */}
    <div className="absolute inset-0 pointer-events-none">
      <div style={{ position:'absolute', top:'10%', right:'5%', width:'500px', height:'500px', background:'radial-gradient(circle, rgba(180,60,0,0.35) 0%, transparent 65%)', borderRadius:'50%' }} />
    </div>

    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <div style={{ border:'1.5px solid #f97316', borderRadius:'4px', padding:'1.25rem 1.5rem', display:'inline-block', maxWidth:'480px' }}>
            <h1 className="font-display font-bold text-white leading-tight" style={{ fontSize:'clamp(1.9rem,3.5vw,2.75rem)' }}>
              Your Tech Partner for<br />
              <span style={{ color:'#f97316' }}>Smarter Growth</span>
            </h1>
          </div>
          <p style={{ color:'#9ca3af', fontSize:'0.95rem', lineHeight:'1.7', maxWidth:'420px' }}>
            We deliver tailored IT solutions to help you scale with speed and confidence.
          </p>
          <div>
            <a href="#faq" className="inline-flex items-center font-semibold text-white rounded-full transition-all duration-200"
              style={{ background:'#f97316', padding:'0.75rem 2rem', fontSize:'0.9rem' }}
              onMouseEnter={e=>(e.currentTarget.style.background='#ea6c0a')}
              onMouseLeave={e=>(e.currentTarget.style.background='#f97316')}>
              Let's Talk
            </a>
          </div>
        </div>

        {/* Right — 3D illustration placeholder */}
        <div className="relative flex items-center justify-center">
          <div className="relative" style={{ width:'100%', maxWidth:'460px', height:'360px' }}>
            {/* Phone body */}
            <div className="absolute" style={{ left:'50%', top:'50%', transform:'translate(-50%,-50%) perspective(600px) rotateY(-12deg) rotateX(5deg)', width:'180px', height:'300px', background:'linear-gradient(160deg,#1a1a1a,#0d0d0d)', borderRadius:'24px', border:'1.5px solid #2a2a2a', boxShadow:'0 20px 60px rgba(0,0,0,0.6)' }}>
              {/* Screen glow */}
              <div style={{ position:'absolute', inset:'8px', borderRadius:'16px', background:'linear-gradient(135deg,rgba(249,115,22,0.15),rgba(249,80,0,0.05))', overflow:'hidden' }}>
                {[0,1,2,3].map(i=>(
                  <div key={i} style={{ margin:'12px 8px 0', height:'14px', borderRadius:'6px', background:`rgba(249,115,22,${0.25-i*0.04})`, width:`${90-i*8}%` }} />
                ))}
              </div>
            </div>
            {/* Floating cards */}
            {[
              { top:'8%', left:'55%', w:'120px' },
              { top:'30%', left:'58%', w:'100px' },
              { top:'52%', left:'56%', w:'110px' },
            ].map((pos,i)=>(
              <div key={i} className="absolute" style={{ top:pos.top, left:pos.left, width:pos.w, background:'rgba(249,115,22,0.08)', border:'1px solid rgba(249,115,22,0.2)', borderRadius:'10px', padding:'10px', backdropFilter:'blur(4px)' }}>
                {[0,1].map(j=><div key={j} style={{ height:'8px', borderRadius:'4px', background:`rgba(249,115,22,${0.35-j*0.1})`, width:`${80-j*20}%`, marginBottom:j===0?'6px':0 }} />)}
              </div>
            ))}
            {/* Gear icon */}
            <div style={{ position:'absolute', bottom:'12%', left:'20%', fontSize:'2.5rem', filter:'drop-shadow(0 0 12px rgba(249,115,22,0.6))' }}>⚙️</div>
            {/* Cloud icon */}
            <div style={{ position:'absolute', top:'5%', right:'10%', fontSize:'2.2rem', filter:'drop-shadow(0 0 10px rgba(249,115,22,0.5))' }}>☁️</div>
            {/* Code brackets */}
            <div style={{ position:'absolute', top:'40%', right:'5%', fontFamily:'monospace', fontWeight:900, fontSize:'1.8rem', color:'#f97316', opacity:0.7 }}>{'</>'}</div>
          </div>
        </div>
      </div>

      {/* Trusted brands */}
      <div className="mt-16 md:mt-20 text-center">
        <p className="font-semibold text-white mb-6" style={{ fontSize:'0.9rem' }}>Trusted by Global Innovators &amp; Leading Brands</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map(b=>(
            <span key={b} className="font-bold" style={{ color:'#4b5563', fontSize:'1rem', letterSpacing:'-0.02em' }}>{b}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);
export default Hero;
