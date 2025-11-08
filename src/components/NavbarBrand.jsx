import { GraduationCap } from "lucide-react";

export default function NavbarBrand() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-blue-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#002366] to-blue-700 grid place-items-center shadow-md">
            <GraduationCap className="text-[#FFD700]" size={22} />
          </div>
          <div>
            <p className="text-sm tracking-wider text-blue-900/70">Dayananda Sagar Institutions</p>
            <h1 className="text-xl font-bold text-[#002366] leading-tight">DSCE Alumni Connect</h1>
          </div>
        </div>
        <a
          href="#get-app"
          className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-[#002366] text-white px-4 py-2 text-sm font-medium shadow hover:shadow-md transition"
        >
          Get the App
        </a>
      </div>
    </header>
  );
}
