import { NAV_ITEMS } from "../../data";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FooterColumn {
  title: string;
  links: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Services",
    links: [
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "Cloud Solutions",
      "Cybersecurity",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "Our Process", "Portfolio", "Testimonials", "Careers"],
  },
  {
    title: "Support",
    links: ["FAQ", "Contact Us", "Privacy Policy", "Terms of Service"],
  },
];

interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  { label: "Facebook", href: "#", icon: "f" },
  { label: "Twitter / X", href: "#", icon: "𝕏" },
  { label: "Instagram", href: "#", icon: "in" },
  { label: "LinkedIn", href: "#", icon: "li" },
];

// ─── LogoIcon ─────────────────────────────────────────────────────────────────

const LogoIcon = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-7 h-7"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="17" height="17" rx="4" fill="#f97316" opacity="0.85" />
    <rect x="12" y="12" width="17" height="17" rx="4" fill="#fb923c" />
  </svg>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer aria-label="Site footer" className="bg-[#0a0a0a] border-t border-white/5">

      {/* ── CTA Banner ── */}
      <div className="border-b border-white/5 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest text-orange-500 font-semibold mb-4">
            Ready to Start? Let's Talk.
          </p>
          <p className="text-gray-400 text-base max-w-md mx-auto">
            Tell us what you need, and we'll get back to you soon.
          </p>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a
              href="/"
              className="flex items-center gap-2.5 mb-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg w-fit"
              aria-label="Your Logo - Home"
            >
              <LogoIcon />
              <span className="text-white font-semibold text-base tracking-tight">
                Your Logo
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              We deliver tailored IT solutions to help you scale with speed and confidence.
            </p>
            {/* Social Links */}
            <div className="flex gap-3" role="list" aria-label="Social media links">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center
                    text-gray-400 hover:text-white hover:border-orange-500/50 hover:bg-orange-500/10
                    text-xs font-bold transition-all duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-3" role="list">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-orange-400 text-sm transition-colors duration-200
                        focus-visible:outline-none focus-visible:text-orange-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
          flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} Your Logo. All rights reserved.
          </p>
          <nav aria-label="Footer navigation" className="flex gap-6">
            {NAV_ITEMS.slice(0, 3).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-gray-400 text-sm transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ── LET'S DISCUSS Banner ── */}
      <div className="bg-[#111111] border-t border-white/5 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
          flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
              LET'S DISCUSS
            </p>
            <p className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none
              text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              YOUR IDEAS
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg"
              aria-label="Your Logo"
            >
              <LogoIcon />
              <span className="text-white font-semibold text-base">Your Logo</span>
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
