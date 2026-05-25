import type { NavLink, Service } from "../types"

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
]

export const services: Service[] = [
  {
    title: "Digital Strategy",
    description:
      "We build data-driven strategies that help companies grow online and reach the right customers.",
    icon: "🚀",
  },
  {
    title: "Brand Identity",
    description:
      "Create memorable brands with modern visuals, effective messaging, and consistent experiences.",
    icon: "🎨",
  },
  {
    title: "Product Design",
    description:
      "Design user-friendly interfaces and experiences that keep customers engaged and satisfied.",
    icon: "💡",
  },
]
