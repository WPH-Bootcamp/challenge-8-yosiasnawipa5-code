import { useState } from "react";
import type { ContactFormData } from "../../types";

const SERVICE_OPTIONS = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Cloud Solutions",
  "Software Development",
  "Other",
];

const ReadyToStartSection = () => {
  const [form, setForm] = useState<ContactFormData>({
    name: "", email: "", message: "", services: [],
  });
  const [submitted, setSubmitted] = useState(false);

  const handleText = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const toggleService = (svc: string) => {
    setForm((p) => ({
      ...p,
      services: p.services.includes(svc)
        ? p.services.filter((s) => s !== svc)
        : [...p.services, svc],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: ganti dengan API call ke backend
    setSubmitted(true);
    setForm({ name: "", email: "", message: "", services: [] });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass = `
    w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-3 text-white text-sm
    placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1
    focus:ring-orange-500/30 transition-colors duration-200
  `;

  return (
    <section id="ready" aria-label="Contact form"
      className="bg-[#0a0a0a] py-20 md:py-24 border-t border-white/5">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        {/* Heading — centered sesuai Figma */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Ready to Start? Let's Talk.
          </h2>
          <p className="text-gray-400 text-base">
            Tell us what you need, and we'll get back to you soon.
          </p>
        </div>

        <form onSubmit={handleSubmit} aria-label="Contact form" noValidate className="space-y-5">

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-white text-sm font-medium mb-2">Name</label>
            <input id="name" name="name" type="text" required autoComplete="name"
              placeholder="Enter your name" value={form.name} onChange={handleText}
              className={inputClass} />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">Email</label>
            <input id="email" name="email" type="email" required autoComplete="email"
              placeholder="Enter your email" value={form.email} onChange={handleText}
              className={inputClass} />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-white text-sm font-medium mb-2">Message</label>
            <textarea id="message" name="message" required rows={5}
              placeholder="Enter your message" value={form.message} onChange={handleText}
              className={`${inputClass} resize-none`} />
          </div>

          {/* Services — checkboxes 2-col sesuai Figma */}
          <div>
            <p className="text-white text-sm font-medium mb-3">Services</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICE_OPTIONS.map((svc) => {
                const checked = form.services.includes(svc);
                return (
                  <label key={svc}
                    className="flex items-center gap-3 cursor-pointer group">
                    <div
                      onClick={() => toggleService(svc)}
                      className={`w-5 h-5 rounded-md border flex items-center justify-center
                        flex-shrink-0 transition-all duration-200 cursor-pointer
                        ${checked
                          ? "bg-orange-500 border-orange-500"
                          : "bg-transparent border-white/20 group-hover:border-orange-500/50"
                        }`}
                      role="checkbox"
                      aria-checked={checked}
                      tabIndex={0}
                      onKeyDown={(e) => e.key === " " && toggleService(svc)}
                      aria-label={svc}
                    >
                      {checked && (
                        <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3" aria-hidden="true">
                          <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-200">
                      {svc}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Submit button — full width, pill, gradient sesuai Figma */}
          <button
            type="submit"
            className="w-full py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600
              text-white font-semibold text-base tracking-wide
              hover:opacity-90 hover:scale-[1.01] active:scale-[0.99]
              transition-all duration-200 shadow-lg shadow-orange-500/25
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
          >
            {submitted ? "Message Sent! ✓" : "Send"}
          </button>

          {submitted && (
            <p role="status" className="text-green-400 text-sm text-center">
              We'll get back to you within 24 hours.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ReadyToStartSection;
