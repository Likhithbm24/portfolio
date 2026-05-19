import { Award, Calendar, Code2, Globe, Layers, ShieldCheck, BarChart3, Sparkles, Trophy } from 'lucide-react';

const certifications = [
  { title: 'Certificate of Excellence in Python Programming', issuer: 'WhiteHat Jr',             date: 'Dec 2022',  Icon: Code2,      color: 'from-yellow-500 to-amber-600',  glow: 'shadow-yellow-500/20',  badge: 'bg-yellow-500/10 border-yellow-500/25 text-yellow-400'  },
  { title: 'Web Applications Development',                   issuer: 'Skill Development Program', date: 'Feb 2023',  Icon: Globe,      color: 'from-blue-500 to-cyan-600',     glow: 'shadow-blue-500/20',    badge: 'bg-blue-500/10 border-blue-500/25 text-blue-400'        },
  { title: 'Full Stack Development using Python',            issuer: 'Skill Development Program', date: 'June 2023', Icon: Layers,     color: 'from-purple-500 to-violet-600', glow: 'shadow-purple-500/20',  badge: 'bg-purple-500/10 border-purple-500/25 text-purple-400'  },
  { title: 'Introduction to Cybersecurity',                  issuer: 'Cisco Networking Academy', date: 'Feb 2025',  Icon: ShieldCheck,color: 'from-emerald-500 to-teal-600',  glow: 'shadow-emerald-500/20', badge: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400'},
  { title: 'Data Analytics Job Simulation',                  issuer: 'Deloitte',                 date: 'May 2025',  Icon: BarChart3,  color: 'from-rose-500 to-pink-600',     glow: 'shadow-rose-500/20',    badge: 'bg-rose-500/10 border-rose-500/25 text-rose-400'        },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 overflow-hidden">
      <div className="bg-blob w-64 h-64 bg-amber-500/8 top-0 left-1/4" />

      <div className="section-container reveal">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
            <Award className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-1">Credentials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Certifications</h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-amber-600/40 to-transparent ml-4" />
        </div>

        {/* Certs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 border border-white/5 card-hover group flex gap-4 items-start"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg ${cert.glow} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <cert.Icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-sm leading-snug mb-1">{cert.title}</h3>
                <p className="text-gray-500 text-xs mb-3">{cert.issuer}</p>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-gray-600" />
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${cert.badge}`}>
                    {cert.date}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder – more coming */}
          <div className="glass rounded-2xl p-6 border border-dashed border-white/10 flex flex-col items-center justify-center text-center gap-3 min-h-28">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-slate-300" />
            </div>
            <p className="text-gray-500 text-xs font-medium">More certifications coming soon...</p>
          </div>
        </div>

        {/* Summary Banner */}
        <div className="mt-12 glass rounded-2xl p-6 border border-amber-500/15 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-lg">5+ Industry Certifications</p>
              <p className="text-gray-400 text-sm">From WhiteHat Jr, Cisco, Deloitte & more</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-center">
              <p className="text-3xl font-black gradient-text">5+</p>
              <p className="text-xs text-gray-500">Certifications</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black gradient-text">3yrs</p>
              <p className="text-xs text-gray-500">Learning journey</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
