import { PORTFOLIO_ITEMS } from "../../data";
import SectionTitle from "../ui/SectionTitle";
import type { PortfolioItem } from "../../types";

// ─── Portfolio Card ───────────────────────────────────────────────────────────

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard = ({ item }: PortfolioCardProps) => (
  <article
    aria-label={`${item.title} — ${item.category}`}
    className="group relative rounded-2xl overflow-hidden border border-white/5
      hover:border-orange-500/25 transition-all duration-300 cursor-pointer"
  >
    {/* Image Area */}
    <div
      className={`relative aspect-[4/3] bg-gradient-to-br ${item.imageGradient} overflow-hidden`}
    >
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

      {/* Mock browser UI */}
      <div className="absolute top-3 left-3 right-3 h-6 bg-black/30 rounded-lg backdrop-blur-sm
        flex items-center gap-1.5 px-3" aria-hidden="true">
        <span className="w-2 h-2 rounded-full bg-red-500/70" />
        <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
        <span className="w-2 h-2 rounded-full bg-green-500/70" />
      </div>

      {/* Project name overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white/20 font-black text-4xl md:text-5xl tracking-tight uppercase">
          {item.title.split(" ")[0]}
        </span>
      </div>

      {/* Arrow on hover */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-orange-500/0 group-hover:bg-orange-500
        flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-hidden="true">
        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-white" aria-hidden="true">
          <path d="M3 13L13 3M13 3H7M13 3V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>

    {/* Card Footer */}
    <div className="p-4 bg-[#111111] group-hover:bg-[#141414] transition-colors duration-300">
      <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">
        {item.label}
      </p>
      <h3 className="text-white font-semibold text-sm group-hover:text-orange-400 transition-colors duration-200">
        {item.title}
      </h3>
      <p className="text-gray-600 text-xs mt-0.5">{item.category}</p>
    </div>
  </article>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const PortfolioSection = () => (
  <section
    id="projects"
    aria-label="Portfolio section"
    className="bg-[#0a0a0a] py-20 md:py-24 border-t border-white/5"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        title="From Vision to Launch! Projects We're Proud Of"
        subtitle="Take a closer look at our recent work spanning startups, enterprises, and everything in between."
        highlightWord="Projects We're Proud Of"
      />

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        role="list"
        aria-label="Portfolio projects"
      >
        {PORTFOLIO_ITEMS.map((item) => (
          <div key={item.id} role="listitem">
            <PortfolioCard item={item} />
          </div>
        ))}
      </div>

      {/* View All CTA */}
      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400
            text-sm font-semibold transition-colors duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg px-2"
        >
          View all projects
          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  </section>
);

export default PortfolioSection;
