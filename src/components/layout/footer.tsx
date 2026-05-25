import React from 'react';
import { navItems } from '../../data';

const Footer: React.FC = () => (
  <footer style={{ background:'#0a0a0a', padding:'2rem 1.5rem 2.5rem' }}>
    <div className="max-w-5xl mx-auto">
      <div className="rounded-2xl p-8 md:p-10" style={{ background:'#111', border:'1px solid #1e1e1e' }}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <p style={{ color:'#9ca3af', fontSize:'0.7rem', letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:'0.4rem' }}>LET'S DISCUSS</p>
            <h3 className="font-display font-black text-white" style={{ fontSize:'clamp(1.5rem,3vw,2rem)', lineHeight:1.1 }}>YOUR IDEAS</h3>
          </div>
          {/* Logo right */}
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center rounded-lg" style={{ width:'32px', height:'32px', background:'#f97316' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM17 17a4 4 0 100-8 4 4 0 000 8z" fill="white" fillOpacity="0.9"/></svg>
            </span>
            <span className="font-display font-bold text-white text-base">Your Logo</span>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop:'1px solid #1e1e1e', paddingTop:'1.5rem' }} className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Nav links */}
          <nav className="flex flex-wrap gap-6">
            {navItems.map(item => (
              <a key={item.label} href={item.href}
                style={{ color:'#6b7280', fontSize:'0.82rem', textDecoration:'none' }}
                onMouseEnter={e=>(e.currentTarget.style.color='#fff')}
                onMouseLeave={e=>(e.currentTarget.style.color='#6b7280')}>
                {item.label}
              </a>
            ))}
          </nav>
          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { label:'f', path:'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
              { label:'ig', path:'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
              { label:'in', path:'16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
              { label:'tt', path:'19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.28 8.28 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z' },
            ].map(({ label, path }) => (
              <a key={label} href="#"
                className="flex items-center justify-center rounded-full transition-all duration-200"
                style={{ width:'34px', height:'34px', background:'#1a1a1a', border:'1px solid #252525', color:'#6b7280' }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.borderColor='rgba(249,115,22,0.4)'; (e.currentTarget as HTMLElement).style.color='#fff'; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.borderColor='#252525'; (e.currentTarget as HTMLElement).style.color='#6b7280'; }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
