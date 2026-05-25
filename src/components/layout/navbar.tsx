import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../../data';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ background: isScrolled ? 'rgba(10,10,10,0.96)' : 'transparent', backdropFilter: isScrolled ? 'blur(12px)' : 'none', borderBottom: isScrolled ? '1px solid #1a1a1a' : 'none' }}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between" style={{ height: '72px' }}>
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2" style={{ textDecoration: 'none' }}>
            <span className="flex items-center justify-center rounded-lg" style={{ width: '36px', height: '36px', background: '#f97316' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM17 17a4 4 0 100-8 4 4 0 000 8z" fill="white" fillOpacity="0.9"/></svg>
            </span>
            <span className="font-display font-bold text-white" style={{ fontSize: '1.1rem' }}>Your Logo</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button key={item.label} onClick={() => scrollTo(item.href)}
                className="text-sm font-medium transition-colors cursor-pointer"
                style={{ color: '#9ca3af', background: 'none', border: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}>
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <a href="#faq" className="hidden md:inline-flex items-center font-semibold text-sm text-white rounded-full transition-all duration-200"
            style={{ background: '#f97316', padding: '0.6rem 1.5rem' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#ea6c0a')}
            onMouseLeave={e => (e.currentTarget.style.background = '#f97316')}>
            Let's Talk
          </a>

          <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center gap-8"
        style={{ background: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(20px)', opacity: mobileOpen ? 1 : 0, pointerEvents: mobileOpen ? 'auto' : 'none', transition: 'opacity 0.3s' }}>
        {navItems.map(item => (
          <button key={item.label} onClick={() => scrollTo(item.href)}
            className="font-display font-bold text-3xl text-white" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            {item.label}
          </button>
        ))}
        <a href="#faq" className="font-semibold text-white rounded-full px-8 py-3" style={{ background: '#f97316' }} onClick={() => setMobileOpen(false)}>
          Let's Talk
        </a>
      </div>
    </>
  );
};
export default Navbar;
