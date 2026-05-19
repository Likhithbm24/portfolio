import { useRef } from 'react';
import { Code, Terminal, Globe, Database, Lightbulb, GitBranch, Wrench, Rocket, Award, Star, Briefcase, Zap } from 'lucide-react';

const skillCategories = [
  { title: 'Programming Languages', Icon: Terminal, color: 'from-slate-700 to-slate-800', glow: 'shadow-slate-500/20', skills: ['Python', 'Java', 'C', 'C++'] },
  { title: 'Web Technologies',       Icon: Globe,    color: 'from-slate-700 to-slate-800',   glow: 'shadow-slate-500/20',   skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS'] },
  { title: 'Database Management',    Icon: Database, color: 'from-slate-700 to-slate-800',glow: 'shadow-slate-500/20',skills: ['MySQL', 'MongoDB'] },
  { title: 'Soft Skills',            Icon: Lightbulb,color: 'from-slate-700 to-slate-800',   glow: 'shadow-slate-500/20',   skills: ['Debugging', 'Problem Solving', 'Communication', 'Team Collaboration'] },
  { title: 'Dev Practices',          Icon: GitBranch,color: 'from-slate-700 to-slate-800',glow: 'shadow-slate-500/20',  skills: ['Scrum', 'SDLC', 'Agile', 'REST APIs'] },
  { title: 'Tools & IDEs',           Icon: Wrench,   color: 'from-slate-700 to-slate-800',glow:'shadow-slate-500/20', skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Android Studio', 'Firebase'] },
];

const pillColors = [
  'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white',
  'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white',
  'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white',
  'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white',
  'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white',
  'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white',
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="section-container reveal">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg">
            <Code className="w-5 h-5 text-slate-300" />
          </div>
          <div>
            <p className="text-slate-400 text-sm font-medium tracking-widest uppercase mb-1">What I know</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Tools</h2>
          </div>
          <div className="flex-1 h-px bg-slate-800 ml-4" />
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
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} border border-slate-600 flex items-center justify-center shadow-lg ${cat.glow} group-hover:scale-110 transition-transform duration-300`}>
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
            { num: '3+',  label: 'Projects Built', Icon: Rocket,   color: 'from-slate-700 to-slate-800' },
            { num: '5+',  label: 'Certifications', Icon: Award,    color: 'from-slate-700 to-slate-800' },
            { num: '8.5', label: 'CGPA (B.Tech)',  Icon: Star,     color: 'from-slate-700 to-slate-800' },
            { num: '5mo', label: 'Internship',     Icon: Briefcase,color: 'from-slate-700 to-slate-800' },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-2xl p-6 border border-white/5 text-center card-hover group">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} border border-slate-600 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <stat.Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-black gradient-text mb-1">{stat.num}</div>
              <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
