import { SERVICE_ITEMS } from "../../data";
import SectionTitle from "../ui/SectionTitle";
import type { ServiceItem } from "../../types";

// ─── Service Card ─────────────────────────────────────────────────────────────

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard = ({ service }: ServiceCardProps) => (
  <article
    aria-label={service.title}
    className="group bg-[#111111] border border-white/5 rounded-2xl p-6
      hover:border-orange-500/25 hover:bg-[#141414]
      transition-all duration-300 cursor-default"
  >
    {/* Icon */}
    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20
      flex items-center justify-center text-2xl mb-4
      group-hover:bg-orange-500/20 group-hover:scale-110 transition-all duration-300"
      aria-hidden="true"
    >
      {service.icon}
    </div>

    {/* Content */}
    <h3 className="text-white font-semibold text-base mb-2 group-hover:text-orange-400 transition-colors duration-200">
      {service.title}
    </h3>
    <p className="text-gray-500 text-sm leading-relaxed">
      {service.description}
    </p>
  </article>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const ServicesSection = () => (
  <section
    id="service"
    aria-label="Services section"
    className="bg-[#0a0a0a] py-20 md:py-24 border-t border-white/5"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        title="Smart IT Solutions That Grow With You"
        subtitle="Trusted by teams at software, fintech, and more — we build what matters."
      />

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        role="list"
        aria-label="List of services"
      >
        {SERVICE_ITEMS.map((service) => (
          <div key={service.id} role="listitem">
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
