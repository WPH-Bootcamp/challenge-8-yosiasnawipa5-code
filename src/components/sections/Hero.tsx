import Button from "../ui/Button"

export default function Hero() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex rounded-full bg-indigo-950/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-700 ring-1 ring-indigo-950/10">
            Premium agency solutions
          </div>
          <div className="space-y-6">
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Build stronger digital experiences for your brand.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              We help companies craft modern websites, scalable digital products, and effective brand stories that connect with audiences.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button variant="primary">Get Started</Button>
            <Button variant="secondary">See Services</Button>
          </div>
        </div>

        <div className="rounded-[2rem] bg-slate-950/95 p-10 text-white shadow-2xl shadow-slate-950/10 ring-1 ring-white/10 sm:p-12">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-200/80">Trusted by ambitious teams</p>
            <h2 className="text-3xl font-semibold">Fast, polished results for growth-focused businesses</h2>
            <p className="leading-7 text-slate-300">
              From brand strategy to digital execution, we move quickly while keeping every interaction meaningful.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/95 p-5">
                <p className="text-sm text-slate-400">Projects delivered</p>
                <p className="mt-3 text-3xl font-semibold text-white">120+</p>
              </div>
              <div className="rounded-3xl bg-slate-900/95 p-5">
                <p className="text-sm text-slate-400">Client satisfaction</p>
                <p className="mt-3 text-3xl font-semibold text-white">98%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
