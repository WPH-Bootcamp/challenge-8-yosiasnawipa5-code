import { useState } from "react";
import { FAQ_ITEMS } from "../../data";
import Button from "../ui/Button";
import type { FaqItem, ContactFormData } from "../../types";

// ─── FAQ Accordion Item ───────────────────────────────────────────────────────

interface FaqItemProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqAccordionItem = ({ item, isOpen, onToggle }: FaqItemProps) => (
  <div className="border-b border-white/5 last:border-b-0">
    <button
      type="button"
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${item.id}`}
      onClick={onToggle}
      className="w-full flex items-center justify-between py-4 text-left gap-4
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-inset rounded-lg"
    >
      <span className="text-white font-medium text-sm md:text-base">{item.question}</span>
      <span
        className={`text-orange-500 text-xl leading-none flex-shrink-0 transition-transform duration-300
          ${isOpen ? "rotate-45" : "rotate-0"}`}
        aria-hidden="true"
      >
        +
      </span>
    </button>
    <div
      id={`faq-answer-${item.id}`}
      role="region"
      aria-label={item.question}
      className={`overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen ? "max-h-48 opacity-100 pb-4" : "max-h-0 opacity-0"}`}
    >
      <p className="text-gray-400 text-sm leading-relaxed">{item.answer}</p>
    </div>
  </div>
);

// ─── Contact Form ─────────────────────────────────────────────────────────────

const SERVICE_OPTIONS = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Cloud Solutions",
  "IT Consulting",
  "Other",
];

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  const inputBaseClass = `
    w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3
    text-white text-sm placeholder-gray-600
    focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30
    transition-colors duration-200
  `;

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Contact form"
      noValidate
      className="space-y-4"
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-gray-400 text-xs font-medium mb-1.5">
          Name <span className="text-orange-500" aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          className={inputBaseClass}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-gray-400 text-xs font-medium mb-1.5">
          Email <span className="text-orange-500" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange}
          className={inputBaseClass}
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-gray-400 text-xs font-medium mb-1.5">
          Service
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={`${inputBaseClass} cursor-pointer`}
        >
          <option value="" disabled>Select a service...</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-gray-400 text-xs font-medium mb-1.5">
          Message <span className="text-orange-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your project..."
          value={formData.message}
          onChange={handleChange}
          className={`${inputBaseClass} resize-none`}
        />
      </div>

      {/* Submit */}
      <Button type="submit" fullWidth size="lg">
        {isSubmitted ? "Message Sent! ✓" : "Send Message"}
      </Button>

      {isSubmitted && (
        <p role="status" className="text-green-400 text-sm text-center">
          We'll get back to you within 24 hours.
        </p>
      )}
    </form>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const ContactSection = () => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const handleFaqToggle = (id: number): void => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-label="FAQ and contact section"
      className="bg-[#0a0a0a] py-20 md:py-24 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              Need Help?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Start Here.
              </span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-gray-400 text-base leading-relaxed">
              Everything you need to know before getting started.
            </p>
          </div>
        </div>

        {/* ── FAQ + Form Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* FAQ Accordion */}
          <div>
            <div
              className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-6"
              role="region"
              aria-label="Frequently asked questions"
            >
              {FAQ_ITEMS.map((item) => (
                <FaqAccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openFaqId === item.id}
                  onToggle={() => handleFaqToggle(item.id)}
                />
              ))}
            </div>
          </div>

          {/* Contact CTA + Form */}
          <div>
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-orange-500/10 to-red-600/5 border border-orange-500/20
              rounded-2xl p-6 mb-6">
              <h3 className="text-white font-bold text-xl mb-2">Let's talk it through</h3>
              <p className="text-gray-400 text-sm mb-4">
                Start a free consultation with our team.
              </p>
              <Button href="#" size="sm">
                Free Consultation
              </Button>
            </div>

            {/* Contact Form */}
            <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-6">
              <h3 className="text-white font-semibold text-base mb-5">Send us a message</h3>
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
