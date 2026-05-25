export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.24em] text-indigo-700">About NovaCorp</p>
          <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">
            We create digital products that feel modern, polished, and easy to use.
          </h2>
          <p className="max-w-2xl leading-8 text-slate-600">
            Our team blends strategy, design, and development into seamless brand experiences. Every project is crafted to support measurable business goals and help teams grow.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Brand Strategy</h3>
            <p className="mt-3 text-slate-600">
              Align messaging, visuals, and positioning so your brand feels confident and cohesive.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Product Design</h3>
            <p className="mt-3 text-slate-600">
              Create intuitive interfaces and delightful user experiences on web and mobile.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Web Development</h3>
            <p className="mt-3 text-slate-600">
              Build fast, accessible websites using modern web standards and TailwindCSS.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Ongoing Support</h3>
            <p className="mt-3 text-slate-600">
              Deliver consistent updates, analytics insights, and improvements over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
