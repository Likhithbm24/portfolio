import { useRef } from 'react';
import { Code, Terminal, Globe, Database, Lightbulb, GitBranch, Wrench, Rocket, Award, Star, Briefcase, Zap } from 'lucide-react';

const skillCategories = [
  { title: 'Programming Languages', Icon: Terminal, color: 'from-purple-600 to-violet-700', glow: 'shadow-purple-500/20', skills: ['Python', 'Java', 'C', 'C++'] },
  { title: 'Web Technologies',       Icon: Globe,    color: 'from-cyan-600 to-blue-600',   glow: 'shadow-cyan-500/20',   skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS'] },
  { title: 'Database Management',    Icon: Database, color: 'from-emerald-600 to-teal-700',glow: 'shadow-emerald-500/20',skills: ['MySQL', 'MongoDB'] },
  { title: 'Soft Skills',            Icon: Lightbulb,color: 'from-pink-600 to-rose-600',   glow: 'shadow-pink-500/20',   skills: ['Debugging', 'Problem Solving', 'Communication', 'Team Collaboration'] },
  { title: 'Dev Practices',          Icon: GitBranch,color: 'from-amber-600 to-orange-600',glow: 'shadow-amber-500/20',  skills: ['Scrum', 'SDLC', 'Agile', 'REST APIs'] },
  { title: 'Tools & IDEs',           Icon: Wrench,   color: 'from-indigo-600 to-purple-600',glow:'shadow-indigo-500/20', skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Android Studio', 'Firebase'] },
];

const pillColors = [
  'bg-purple-500/10 border-purple-500/25 text-purple-300 hover:bg-purple-500/20',
  'bg-cyan-500/10 border-cyan-500/25 text-cyan-300 hover:bg-cyan-500/20',
  'bg-emerald-500/10 border-emerald-500/25 text-emerald-300 hover:bg-emerald-500/20',
  'bg-pink-500/10 border-pink-500/25 text-pink-300 hover:bg-pink-500/20',
  'bg-amber-500/10 border-amber-500/25 text-amber-300 hover:bg-amber-500/20',
  'bg-indigo-500/10 border-indigo-500/25 text-indigo-300 hover:bg-indigo-500/20',
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="bg-blob w-80 h-80 bg-cyan-600/10 bottom-0 left-0" />

      <div className="section-container reveal">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <Code className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-1">What I know</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Tools</h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-600/40 to-transparent ml-4" />
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 border border-white/5 card-hover group"
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-lg ${cat.glow} group-hover:scale-110 transition-transform duration-300`}>
                  <cat.Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-white text-sm">{cat.title}</h3>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    className={`skill-pill border ${pillColors[i]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: '3+',  label: 'Projects Built', Icon: Rocket,   color: 'from-purple-600 to-violet-700' },
            { num: '5+',  label: 'Certifications', Icon: Award,    color: 'from-amber-500 to-orange-600'  },
            { num: '8.5', label: 'CGPA (B.Tech)',  Icon: Star,     color: 'from-cyan-500 to-blue-600'     },
            { num: '5mo', label: 'Internship',     Icon: Briefcase,color: 'from-emerald-500 to-teal-600'  },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-2xl p-6 border border-white/5 text-center card-hover group">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <stat.Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-black gradient-text mb-1">{stat.num}</div>
              <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
