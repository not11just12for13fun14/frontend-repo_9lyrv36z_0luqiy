import Spline from "@splinetool/react-spline";

export default function HeroShowcase() {
  return (
    <section className="relative h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8Y0T8fF8vC9G3o0S/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl bg-white/70 backdrop-blur p-6 rounded-2xl shadow-lg">
          <p className="text-xs uppercase tracking-widest text-blue-700/80 font-semibold">Premium Alumni Network</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#002366] leading-tight">
            Connect. Mentor. Grow.
          </h2>
          <p className="mt-3 text-blue-900/80">
            A modern, mobile-first experience inspired by DSI brand colors. Explore events, jobs, mentorship and real-time messaging.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href="#features" className="px-4 py-2 rounded-lg bg-[#002366] text-white text-sm font-medium shadow hover:shadow-md">Explore Features</a>
            <a href="#preview" className="px-4 py-2 rounded-lg border border-[#002366] text-[#002366] text-sm font-medium bg-white/80">Live Preview</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white" />
    </section>
  );
}
