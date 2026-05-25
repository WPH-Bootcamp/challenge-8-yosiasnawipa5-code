import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { ButtonVariant, ButtonSize } from "../../types";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  href?: string;
  fullWidth?: boolean;
}

// ─── Style Maps ───────────────────────────────────────────────────────────────

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:opacity-90",
  outline:
    "border border-orange-500 text-orange-500 hover:bg-orange-500/10",
  ghost:
    "text-gray-300 hover:text-white hover:bg-white/5",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

// ─── Component ────────────────────────────────────────────────────────────────

const Button = ({
  variant = "primary",
  size = "md",
  children,
  href,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) => {
  const baseClasses = `
    inline-flex items-center justify-center rounded-full font-semibold
    tracking-wide transition-all duration-200
    hover:scale-[1.03] active:scale-[0.97]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400
    disabled:opacity-50 disabled:pointer-events-none
    ${fullWidth ? "w-full" : ""}
    ${VARIANT_CLASSES[variant]}
    ${SIZE_CLASSES[size]}
    ${className}
  `;

  // Render sebagai <a> jika ada prop href
  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
