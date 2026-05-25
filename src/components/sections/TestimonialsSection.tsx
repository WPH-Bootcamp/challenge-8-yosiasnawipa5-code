import { useState } from "react";
import { TESTIMONIAL_ITEMS } from "../../data";
import SectionTitle from "../ui/SectionTitle";
import type { TestimonialItem } from "../../types";

// ─── Star Rating ──────────────────────────────────────────────────────────────

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => (
  <div className="flex gap-1" aria-label={`Rating: ${rating} out of 5 stars`} role="img">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        viewBox="0 0 16 16"
        fill="none"
        className="w-4 h-4"
        aria-hidden="true"
      >
        <path
          d="M8 1l1.854 3.754L14 5.545l-3 2.923.708 4.128L8 10.5l-3.708 2.096L5 8.468 2 5.545l4.146-.791L8 1z"
          fill={i < rating ? "#f97316" : "#333"}
        />
      </svg>
    ))}
  </div>
);

// ─── Testimonial Card ─────────────────────────────────────────────────────────

interface TestimonialCardProps {
  item: TestimonialItem;
  isActive: boolean;
}

const TestimonialCard = ({ item, isActive }: TestimonialCardProps) => (
  <article
    aria-label={`Testimonial from ${item.name}`}
    className={`bg-[#111111] border rounded-2xl p-6 md:p-8 transition-all duration-300
      ${isActive
        ? "border-orange-500/30 shadow-lg shadow-orange-500/5"
        : "border-white/5 opacity-60 scale-95"
      }`}
  >
    {/* Quote mark */}
    <div className="text-orange-500/30 text-6xl font-black leading-none mb-4 select-none" aria-hidden="true">
      "
    </div>

    <StarRating rating={item.rating} />

    <blockquote className="text-gray-300 text-sm md:text-base leading-relaxed my-5">
      {item.quote}
    </blockquote>

    {/* Author */}
    <div className="flex items-center gap-3 pt-4 border-t border-white/5">
      {/* Avatar initials */}
      <div
        className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600
          flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
        aria-hidden="true"
      >
        {item.name.split(" ").map((n) => n[0]).join("")}
      </div>
      <div>
        <p className="text-white font-semibold text-sm">{item.name}</p>
        <p className="text-gray-500 text-xs">
          {item.role}, {item.company}
        </p>
      </div>
    </div>
  </article>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handlePrev = (): void => {
    setActiveIndex((prev) =>
      prev === 0 ? TESTIMONIAL_ITEMS.length - 1 : prev - 1
    );
  };

  const handleNext = (): void => {
    setActiveIndex((prev) =>
      prev === TESTIMONIAL_ITEMS.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="testimonials"
      aria-label="Testimonials section"
      className="bg-[#0a0a0a] py-20 md:py-24 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="What Partners Say About Working With Us"
          subtitle="Trusted client experiences. Proven results."
        />

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          role="list"
          aria-label="Client testimonials"
        >
          {TESTIMONIAL_ITEMS.map((item, index) => (
            <div
              key={item.id}
              role="listitem"
              onClick={() => setActiveIndex(index)}
              className="cursor-pointer"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setActiveIndex(index)}
            >
              <TestimonialCard item={item} isActive={index === activeIndex} />
            </div>
          ))}
        </div>

        {/* Pagination dots + arrows */}
        <div className="flex items-center justify-center gap-6 mt-10" role="group" aria-label="Testimonial navigation">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center
              text-gray-400 hover:text-white hover:border-orange-500/40 hover:bg-orange-500/10
              transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex gap-2" role="list" aria-label="Slide indicators">
            {TESTIMONIAL_ITEMS.map((_, index) => (
              <button
                key={index}
                type="button"
                role="listitem"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`rounded-full transition-all duration-300
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
                  ${index === activeIndex
                    ? "w-6 h-2.5 bg-orange-500"
                    : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
                  }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center
              text-gray-400 hover:text-white hover:border-orange-500/40 hover:bg-orange-500/10
              transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
