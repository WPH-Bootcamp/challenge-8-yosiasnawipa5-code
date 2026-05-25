import Button from "../ui/Button";

// ─── Hero Illustration ────────────────────────────────────────────────────────
// SVG illustration menggantikan 3D phone asset dari Figma

const HeroIllustration = () => (
  <div
    className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[560px]"
    aria-hidden="true"
  >
    {/* Glow background */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-orange-500/10 blur-3xl" />
    </div>

    {/* Phone frame */}
    <svg
      viewBox="0 0 420 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full"
    >
      {/* Main phone */}
      <rect x="120" y="60" width="200" height="380" rx="28" fill="#1a1a1a" stroke="#333" strokeWidth="1.5" />
      <rect x="128" y="72" width="184" height="356" rx="20" fill="#111" />

      {/* Screen content rows */}
      {[100, 130, 160, 190, 220, 250, 280, 310].map((y, i) => (
        <g key={i}>
          <circle cx="150" cy={y + 8} r="7" fill="#f97316" opacity={i === 0 || i === 3 ? "0.9" : "0.3"} />
          <rect x="165" y={y + 2} width={60 + (i % 3) * 20} height="6" rx="3" fill="#333" />
          <rect x="165" y={y + 13} width={40 + (i % 2) * 30} height="4" rx="2" fill="#222" />
        </g>
      ))}

      {/* Back card */}
      <rect x="170" y="20" width="200" height="360" rx="20" fill="#161616" stroke="#2a2a2a" strokeWidth="1" />
      <rect x="178" y="28" width="184" height="344" rx="16" fill="#0f0f0f" />
      {[56, 86, 116, 146, 176, 206, 236, 266].map((y, i) => (
        <g key={i}>
          <circle cx="200" cy={y + 8} r="7" fill="#fb923c" opacity={i === 1 || i === 4 ? "0.9" : "0.25"} />
          <rect x="215" y={y + 2} width={50 + (i % 4) * 15} height="6" rx="3" fill="#2a2a2a" />
          <rect x="215" y={y + 13} width={35 + (i % 3) * 20} height="4" rx="2" fill="#1f1f1f" />
        </g>
      ))}

      {/* Floating icons */}
      {/* Cloud */}
      <g transform="translate(300, 40)">
        <ellipse cx="20" cy="22" rx="20" ry="14" fill="#f97316" opacity="0.85" />
        <ellipse cx="10" cy="26" rx="12" ry="10" fill="#f97316" opacity="0.7" />
        <ellipse cx="30" cy="26" rx="12" ry="10" fill="#f97316" opacity="0.7" />
        <rect x="4" y="26" width="32" height="8" rx="2" fill="#f97316" opacity="0.75" />
      </g>

      {/* Code brackets */}
      <g transform="translate(316, 130)">
        <text fontSize="28" fontWeight="bold" fill="#f97316" opacity="0.8" fontFamily="monospace">&lt;/&gt;</text>
      </g>

      {/* Gear */}
      <g transform="translate(82, 300)">
        <circle cx="20" cy="20" r="14" fill="none" stroke="#ca8a04" strokeWidth="3" />
        <circle cx="20" cy="20" r="6" fill="#ca8a04" opacity="0.9" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <rect
            key={i}
            x="18"
            y="2"
            width="4"
            height="7"
            rx="1"
            fill="#ca8a04"
            transform={`rotate(${angle} 20 20)`}
          />
        ))}
      </g>
    </svg>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const HeroSection = () => {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-orange-800/5 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* ── Left: Text Content ── */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black leading-[1.05] tracking-tight mb-6">
              <span className="text-white">Your Tech Partner for </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Smarter Growth
              </span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              We deliver tailored IT solutions to help you scale with speed and confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#contact" size="lg">
                Let's Talk
              </Button>
             {/*<Button href="#projects" variant="outline" size="lg">
                View Our Work
              </Button>*/}
            </div>
          </div>

          {/* ── Right: Illustration ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm md:max-w-md lg:max-w-full">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
