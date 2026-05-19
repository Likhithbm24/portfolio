import { Award, Calendar, Code2, Globe, Layers, ShieldCheck, BarChart3, Sparkles, Trophy } from 'lucide-react';

const certifications = [
  { title: 'Certificate of Excellence in Python Programming', issuer: 'WhiteHat Jr',             date: 'Dec 2022',  Icon: Code2,      color: 'from-slate-700 to-slate-800',  badge: 'bg-slate-800 border-slate-700 text-slate-300'  },
  { title: 'Web Applications Development',                   issuer: 'Skill Development Program', date: 'Feb 2023',  Icon: Globe,      color: 'from-slate-700 to-slate-800',     badge: 'bg-slate-800 border-slate-700 text-slate-300'        },
  { title: 'Full Stack Development using Python',            issuer: 'Skill Development Program', date: 'June 2023', Icon: Layers,     color: 'from-slate-700 to-slate-800',  badge: 'bg-slate-800 border-slate-700 text-slate-300'  },
  { title: 'Introduction to Cybersecurity',                  issuer: 'Cisco Networking Academy', date: 'Feb 2025',  Icon: ShieldCheck,color: 'from-slate-700 to-slate-800',  badge: 'bg-slate-800 border-slate-700 text-slate-300'},
  { title: 'Data Analytics Job Simulation',                  issuer: 'Deloitte',                 date: 'May 2025',  Icon: BarChart3,  color: 'from-slate-700 to-slate-800',     badge: 'bg-slate-800 border-slate-700 text-slate-300'        },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 overflow-hidden">
      <div className="section-container reveal">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg">
            <Award className="w-5 h-5 text-slate-300" />
          </div>
          <div>
            <p className="text-slate-400 text-sm font-medium tracking-widest uppercase mb-1">Credentials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Certifications</h2>
          </div>
          <div className="flex-1 h-px bg-slate-800 ml-4" />
        </div>

        {/* Certs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 border border-white/5 card-hover group flex gap-4 items-start"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} border border-slate-600 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <cert.Icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-sm leading-snug mb-1">{cert.title}</h3>
                <p className="text-slate-400 text-xs mb-3">{cert.issuer}</p>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-slate-500" />
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${cert.badge}`}>
                    {cert.date}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder – more coming */}
          <div className="glass rounded-2xl p-6 border border-dashed border-slate-700 flex flex-col items-center justify-center text-center gap-3 min-h-28">
            <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-slate-400" />
            </div>
            <p className="text-slate-500 text-xs font-medium">More certifications coming soon...</p>
          </div>
        </div>

        {/* Summary Banner */}
        <div className="mt-12 glass rounded-2xl p-6 border border-slate-800 flex flex-wrap items-center justify-between gap-6 card-hover">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg">
              <Trophy className="w-6 h-6 text-slate-300" />
            </div>
            <div>
              <p className="text-white font-bold text-lg">5+ Industry Certifications</p>
              <p className="text-slate-400 text-sm">From WhiteHat Jr, Cisco, Deloitte & more</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-center">
              <p className="text-3xl font-black gradient-text">5+</p>
              <p className="text-xs text-slate-500">Certifications</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black gradient-text">3yrs</p>
              <p className="text-xs text-slate-500">Learning journey</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
