import { useState, useEffect } from "react";
import { NAV_ITEMS } from "../../data";
import Button from "../ui/Button";

// ─── Sub-components ───────────────────────────────────────────────────────────

const LogoIcon = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="17" height="17" rx="4" fill="#f97316" opacity="0.85" />
    <rect x="12" y="12" width="17" height="17" rx="4" fill="#fb923c" />
  </svg>
);

interface HamburgerIconProps {
  isOpen: boolean;
}

const HamburgerIcon = ({ isOpen }: HamburgerIconProps) => (
  <span className="flex flex-col gap-[5px] w-[22px]" aria-hidden="true">
    <span
      className={`block h-[2px] bg-gray-300 rounded-sm transition-all duration-300 origin-center
        ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}
    />
    <span
      className={`block h-[2px] bg-gray-300 rounded-sm transition-all duration-300
        ${isOpen ? "opacity-0 scale-x-0" : ""}`}
    />
    <span
      className={`block h-[2px] bg-gray-300 rounded-sm transition-all duration-300 origin-center
        ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
    />
  </span>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = (): void => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = (): void => setIsMobileMenuOpen(false);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/5"
          : "bg-transparent"
        }`}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* ── Top Row ── */}
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg"
            aria-label="Your Logo - Home"
          >
            <LogoIcon />
            <span className="text-white font-semibold text-[17px] tracking-tight">
              Your Logo
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-10" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="relative text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200
                    focus-visible:outline-none focus-visible:text-white
                    after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0
                    after:bg-gradient-to-r after:from-orange-500 after:to-red-500 after:rounded-full
                    after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button href="#contact" size="md" className="hidden md:inline-flex">
              Let's Talk
            </Button>

            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              <HamburgerIcon isOpen={isMobileMenuOpen} />
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
          aria-hidden={!isMobileMenuOpen}
          className={`md:hidden border-t border-white/5 overflow-hidden transition-all duration-300 ease-in-out
            ${isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <ul className="flex flex-col gap-1 py-3" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5
                    text-sm font-medium rounded-xl transition-all duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-inset"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4">
            <Button href="#contact" fullWidth onClick={closeMobileMenu}>
              Let's Talk
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
