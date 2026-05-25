import type { ButtonHTMLAttributes } from "react"
import type { ButtonVariant } from "../../types"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
  const variantStyles =
    variant === "secondary"
      ? "bg-white text-slate-950 border border-slate-200 hover:bg-slate-100"
      : variant === "outline"
      ? "bg-transparent text-slate-950 border border-slate-950 hover:bg-slate-950 hover:text-white"
      : "bg-slate-950 text-white hover:bg-slate-800"

  return (
    <button className={`${base} ${variantStyles} ${className}`.trim()} {...props}>
      {children}
    </button>
  )
}
