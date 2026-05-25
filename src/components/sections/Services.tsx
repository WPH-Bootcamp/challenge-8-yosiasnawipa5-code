import { services } from "../../data/content"

export default function Services() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="space-y-10">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.24em] text-indigo-700">Our Services</p>
          <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">
            Services designed to help your business stand out.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            We combine thoughtful design and technical craftsmanship to deliver digital products that perform and delight.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="text-4xl">{service.icon}</div>
              <h3 className="mt-6 text-xl font-semibold text-slate-950">{service.title}</h3>
              <p className="mt-4 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
