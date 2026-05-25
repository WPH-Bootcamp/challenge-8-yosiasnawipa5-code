export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="rounded-[2rem] bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 p-10 text-white shadow-2xl shadow-slate-950/20 sm:p-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.24em] text-indigo-300">Talk to us</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Send your next project brief and let’s build something remarkable.
            </h2>
            <p className="max-w-xl leading-7 text-slate-300">
              Ready to launch a new website, product, or brand experience? We’re here to help with strategy, design, and development.
            </p>
          </div>
          <div className="space-y-5 rounded-[2rem] bg-slate-950/90 p-8">
            <div>
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <p className="mt-3 text-slate-400">hello@novacorp.design</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Phone</h3>
              <p className="mt-3 text-slate-400">+1 (555) 357-9123</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Location</h3>
              <p className="mt-3 text-slate-400">Remote-first team, available worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
