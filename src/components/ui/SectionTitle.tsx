import type { ReactNode } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  children?: ReactNode;
  highlightWord?: string;  // word to highlight in orange
}

// ─── Component ────────────────────────────────────────────────────────────────

const SectionTitle = ({
  title,
  subtitle,
  align = "center",
  highlightWord,
}: SectionTitleProps) => {
  const alignClass: Record<string, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  // Replace the highlight word with an orange-colored span
  const renderTitle = () => {
    if (!highlightWord || !title.includes(highlightWord)) {
      return <span>{title}</span>;
    }
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
          {highlightWord}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`${alignClass[align]} mb-12`}>
      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
