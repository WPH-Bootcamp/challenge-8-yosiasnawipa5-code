import { useState } from "react";
import { BRAND_ITEMS, STAT_ITEMS, PROCESS_STEPS } from "../../data";
import SectionTitle from "../ui/SectionTitle";
import type { ProcessStep } from "../../types";

// ─── Brand Logos Strip ────────────────────────────────────────────────────────

const BrandsStrip = () => (
  <div className="py-12 border-y border-white/5">
    <p className="text-center text-gray-500 text-sm mb-8 tracking-wide">
      Trusted by Global Innovators &amp; Leading Brands
    </p>
    <div
      className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
      role="list"
      aria-label="Partner brands"
    >
      {BRAND_ITEMS.map((brand) => (
        <span
          key={brand.name}
          role="listitem"
          className="text-gray-600 hover:text-gray-400 font-semibold text-sm md:text-base
            tracking-widest uppercase transition-colors duration-200 cursor-default"
        >
          {brand.name}
        </span>
      ))}
    </div>
  </div>
);

// ─── Stats Grid ───────────────────────────────────────────────────────────────

const StatsGrid = () => (
  <div className="py-20">
    <SectionTitle
      title="End-to-End IT Solutions That Drive Results"
      subtitle="From strategy to execution, we deliver solutions that power your business forward."
    />
    <div
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
      role="list"
      aria-label="Company statistics"
    >
      {STAT_ITEMS.map((stat) => (
        <div
          key={stat.label}
          role="listitem"
          className="bg-[#111111] border border-white/5 rounded-2xl p-6 md:p-8 text-center
            hover:border-orange-500/20 hover:bg-[#151515] transition-all duration-300 group"
        >
          <p className="text-3xl md:text-4xl font-black text-transparent bg-clip-text
            bg-gradient-to-r from-orange-400 to-red-500 mb-2 group-hover:scale-110 transition-transform duration-300">
            {stat.value}
          </p>
          <p className="text-gray-500 text-xs md:text-sm font-medium leading-tight">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  </div>
);

// ─── Process Accordion Item ───────────────────────────────────────────────────

interface ProcessItemProps {
  step: ProcessStep;
  isOpen: boolean;
  onToggle: () => void;
  stepNumber: string;
}

const ProcessItem = ({ step, isOpen, onToggle, stepNumber }: ProcessItemProps) => (
  <div className="border border-white/5 rounded-xl overflow-hidden transition-colors duration-200
    hover:border-orange-500/20">
    <button
      type="button"
      aria-expanded={isOpen}
      aria-controls={`process-${step.id}`}
      onClick={onToggle}
      className="w-full flex items-center justify-between px-5 py-4 text-left
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-inset
        bg-[#111111] hover:bg-[#151515] transition-colors duration-200"
    >
      <div className="flex items-center gap-4">
        <span className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600
          flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
          {stepNumber}
        </span>
        <span className="text-white font-semibold text-sm md:text-base">{step.title}</span>
      </div>
      <span
        className={`text-orange-500 transition-transform duration-300 text-xl leading-none flex-shrink-0
          ${isOpen ? "rotate-45" : "rotate-0"}`}
        aria-hidden="true"
      >
        +
      </span>
    </button>
    <div
      id={`process-${step.id}`}
      role="region"
      aria-label={step.title}
      className={`overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
    >
      <p className="px-5 py-4 text-gray-400 text-sm leading-relaxed border-t border-white/5 bg-[#0f0f0f]">
        {step.description}
      </p>
    </div>
  </div>
);

// ─── Process Section ──────────────────────────────────────────────────────────

const ProcessAccordion = () => {
  const [openStepId, setOpenStepId] = useState<number | null>(1);

  const handleToggle = (id: number): void => {
    setOpenStepId((prev) => (prev === id ? null : id));
  };

  const leftSteps = PROCESS_STEPS.filter((_, i) => i % 2 === 0);
  const rightSteps = PROCESS_STEPS.filter((_, i) => i % 2 !== 0);

  return (
    <div className="py-20 border-t border-white/5">
      <SectionTitle
        title="Our Process"
        subtitle="Clear steps. Simple communication. Results you can count on."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left column */}
        <div className="flex flex-col gap-3">
          {leftSteps.map((step) => (
            <ProcessItem
              key={step.id}
              step={step}
              isOpen={openStepId === step.id}
              onToggle={() => handleToggle(step.id)}
              stepNumber={String(step.id).padStart(2, "0")}
            />
          ))}
        </div>
        {/* Right column */}
        <div className="flex flex-col gap-3">
          {rightSteps.map((step) => (
            <ProcessItem
              key={step.id}
              step={step}
              isOpen={openStepId === step.id}
              onToggle={() => handleToggle(step.id)}
              stepNumber={String(step.id).padStart(2, "0")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const AboutSection = () => (
  <section id="about" aria-label="About section" className="bg-[#0a0a0a]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <BrandsStrip />
      <StatsGrid />
      <ProcessAccordion />
    </div>
  </section>
);

export default AboutSection;
