export default function CTASection() {
  return (
    <section id="get-app" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl p-8 bg-gradient-to-r from-[#002366] via-blue-700 to-[#002366] text-white shadow-lg">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Experience the DSCE Alumni Connect Mobile App</h3>
              <p className="mt-2 text-white/80">Crafted with a premium academic aesthetic. Smooth, fast, and built for community.</p>
            </div>
            <div className="flex md:justify-end gap-3">
              <a className="px-4 py-2 rounded-lg bg-[#FFD700] text-[#002366] font-semibold shadow hover:shadow-md" href="#preview">
                Preview UI
              </a>
              <a className="px-4 py-2 rounded-lg bg-white text-[#002366] font-semibold shadow hover:shadow-md" href="#docs">
                Project Roadmap
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
