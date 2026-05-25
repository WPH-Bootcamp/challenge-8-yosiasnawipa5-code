import { useState } from "react";
import { INDUSTRY_TABS } from "../../data";
import type { IndustryTab } from "../../types";

// ─── Tab Button ───────────────────────────────────────────────────────────────

interface TabButtonProps {
  tab: IndustryTab;
  isActive: boolean;
  onClick: () => void;
}

const TabButton = ({ tab, isActive, onClick }: TabButtonProps) => (
  <button
    type="button"
    role="tab"
    aria-selected={isActive}
    aria-controls={`panel-${tab.id}`}
    onClick={onClick}
    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
      ${isActive
        ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/20"
        : "text-gray-400 hover:text-white hover:bg-white/5 border border-white/10"
      }`}
  >
    {tab.label}
  </button>
);

// ─── Industry Image Placeholder ───────────────────────────────────────────────

const IndustryImage = ({ label }: { label: string }) => (
  <div
    className="w-full aspect-video bg-gradient-to-br from-[#1a0f00] via-[#2a1500] to-[#0a0a0a]
      rounded-2xl border border-white/5 relative overflow-hidden flex items-center justify-center"
    aria-label={`${label} industry visual`}
  >
    {/* Decorative glow */}
    <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
      <div className="w-40 h-40 rounded-full bg-orange-500/10 blur-3xl" />
    </div>
    {/* Icon */}
    <div className="relative z-10 flex flex-col items-center gap-3">
      <div className="w-16 h-16 rounded-2xl bg-orange-500/20 border border-orange-500/30
        flex items-center justify-center text-3xl" aria-hidden="true">
        {label === "Fintech" ? "💳" : label === "E-commerce" ? "🛒" : "🏥"}
      </div>
      <span className="text-gray-500 text-sm font-medium">{label} Solutions</span>
    </div>
    {/* Corner decorations */}
    <div className="absolute top-4 right-4 w-20 h-1 bg-orange-500/20 rounded-full" aria-hidden="true" />
    <div className="absolute top-7 right-4 w-12 h-1 bg-orange-500/10 rounded-full" aria-hidden="true" />
    <div className="absolute bottom-4 left-4 w-16 h-1 bg-orange-500/20 rounded-full" aria-hidden="true" />
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const IndustrySection = () => {
  const [activeTabId, setActiveTabId] = useState<string>(INDUSTRY_TABS[0].id);

  const activeTab = INDUSTRY_TABS.find((tab) => tab.id === activeTabId) ?? INDUSTRY_TABS[0];

  return (
    <section
      aria-label="Industries we serve"
      className="bg-[#0a0a0a] py-20 md:py-24 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Text ── */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Built for Your Industry
            </h2>
            <p className="text-gray-400 text-base mb-8 leading-relaxed">
              We build complete solutions across industries — from digital wallets to core
              banking systems — tailored to evolving financial needs.
            </p>

            {/* Tab Buttons */}
            <div
              role="tablist"
              aria-label="Industry tabs"
              className="flex flex-wrap gap-3 mb-8"
            >
              {INDUSTRY_TABS.map((tab) => (
                <TabButton
                  key={tab.id}
                  tab={tab}
                  isActive={activeTabId === tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                />
              ))}
            </div>

            {/* Tab Content */}
            {INDUSTRY_TABS.map((tab) => (
              <div
                key={tab.id}
                id={`panel-${tab.id}`}
                role="tabpanel"
                aria-label={tab.label}
                hidden={activeTabId !== tab.id}
                className={`transition-all duration-300
                  ${activeTabId === tab.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
              >
                <p className="text-gray-400 text-base leading-relaxed">{tab.description}</p>
              </div>
            ))}
          </div>

          {/* ── Right: Image ── */}
          <div>
            <IndustryImage label={activeTab.label} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
