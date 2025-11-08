import { Users, CalendarRange, Briefcase, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Alumni Directory",
    desc: "Search by batch, department, expertise or location.",
  },
  {
    icon: CalendarRange,
    title: "Events & Meetups",
    desc: "Discover upcoming events and register instantly.",
  },
  {
    icon: Briefcase,
    title: "Jobs & Mentorship",
    desc: "Find opportunities and connect with mentors.",
  },
  {
    icon: MessageSquare,
    title: "Messages & Forum",
    desc: "Real-time chat and academic discussions.",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-14 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-[#002366]">Core Features</h3>
        <p className="text-blue-900/70 mt-1">Designed for DSCE students, alumni and faculty.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-[#002366] text-[#FFD700] grid place-items-center shadow">
                <f.icon size={20} />
              </div>
              <h4 className="mt-4 font-semibold text-[#002366]">{f.title}</h4>
              <p className="text-sm text-blue-900/70 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
