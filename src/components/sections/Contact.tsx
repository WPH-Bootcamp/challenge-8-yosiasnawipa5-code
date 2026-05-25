import React, { useState } from 'react';

const serviceOptions = ['Web Development','Cloud Solutions','Mobile App Development','Software Development','UI/UX Design','Other'];

const Contact: React.FC = () => {
  const [checked, setChecked] = useState<string[]>(['Web Development']);

  const toggle = (s: string) => setChecked(prev =>
    prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
  );

  return (
    <section style={{ background:'#0a0a0a', padding:'5rem 0' }}>
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-display font-bold text-white mb-2" style={{ fontSize:'clamp(1.5rem,3vw,2.2rem)' }}>
          Ready to Start? Let's Talk.
        </h2>
        <p style={{ color:'#6b7280', fontSize:'0.9rem', marginBottom:'3rem' }}>
          Tell us what you need, and we'll get back to you soon.
        </p>

        <div className="text-left flex flex-col gap-5">
          {/* Name */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">Name</label>
            <input type="text" placeholder="Enter your name" className="w-full rounded-xl px-4 py-3 text-sm transition-all duration-200"
              style={{ background:'#111', border:'1px solid #222', color:'#fff', outline:'none' }}
              onFocus={e=>(e.currentTarget.style.borderColor='rgba(249,115,22,0.5)')}
              onBlur={e=>(e.currentTarget.style.borderColor='#222')} />
          </div>
          {/* Email */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">Email</label>
            <input type="email" placeholder="Enter your email" className="w-full rounded-xl px-4 py-3 text-sm transition-all duration-200"
              style={{ background:'#111', border:'1px solid #222', color:'#fff', outline:'none' }}
              onFocus={e=>(e.currentTarget.style.borderColor='rgba(249,115,22,0.5)')}
              onBlur={e=>(e.currentTarget.style.borderColor='#222')} />
          </div>
          {/* Message */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">Message</label>
            <textarea placeholder="Enter your message" rows={5} className="w-full rounded-xl px-4 py-3 text-sm resize-none transition-all duration-200"
              style={{ background:'#111', border:'1px solid #222', color:'#fff', outline:'none' }}
              onFocus={e=>(e.currentTarget.style.borderColor='rgba(249,115,22,0.5)')}
              onBlur={e=>(e.currentTarget.style.borderColor='#222')} />
          </div>
          {/* Services */}
          <div>
            <label className="block text-white text-sm font-medium mb-3">Services</label>
            <div className="grid grid-cols-2 gap-3">
              {serviceOptions.map(s => (
                <label key={s} className="flex items-center gap-2 cursor-pointer">
                  <div onClick={() => toggle(s)}
                    className="flex items-center justify-center rounded flex-shrink-0 transition-all duration-150"
                    style={{ width:'18px', height:'18px', background: checked.includes(s) ? '#f97316' : 'transparent', border:`1.5px solid ${checked.includes(s) ? '#f97316' : '#444'}`, cursor:'pointer' }}>
                    {checked.includes(s) && <span style={{ color:'white', fontSize:'11px', fontWeight:700, lineHeight:1 }}>✓</span>}
                  </div>
                  <span style={{ color:'#d1d5db', fontSize:'0.83rem' }}>{s}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Submit */}
          <button className="w-full font-semibold text-white rounded-full py-4 transition-all duration-200 mt-2"
            style={{ background:'#f97316', border:'none', cursor:'pointer', fontSize:'0.95rem' }}
            onMouseEnter={e=>(e.currentTarget.style.background='#ea6c0a')}
            onMouseLeave={e=>(e.currentTarget.style.background='#f97316')}>
            Send
          </button>
        </div>
      </div>
    </section>
  );
};
export default Contact;
