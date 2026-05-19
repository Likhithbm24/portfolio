import { useState } from 'react';
import { ExternalLink, Github, Layers, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'Crop Recommendation System',
    emoji: '🌾',
    description:
      'Created a machine learning-based crop prediction model in Python using Scikit-learn, incorporating preprocessing, feature selection, and hyperparameter tuning. Achieved 94% accuracy on real-world agricultural datasets.',
    longDesc: 'Delivered a farmer-friendly AI web app for crop suggestions aimed at yield optimization.',
    tags: ['Python', 'Scikit-learn', 'Machine Learning', 'Web App'],
    color: 'from-slate-700 to-slate-800',
    borderHover: 'hover:border-slate-500/40',
    accent: 'text-slate-400',
    bg: 'bg-slate-800/30',
    liveLink: 'https://crop-recommendation-ou1f.onrender.com/',
    githubLink: null,
    metrics: [{ label: 'Accuracy', value: '94%' }, { label: 'Algorithm', value: 'ML' }],
    category: 'Machine Learning',
  },
  {
    title: 'Student Dropout Prediction System',
    emoji: '🎓',
    description:
      'Developed a real-time student retention system using React.js, Spring Boot, MongoDB, and Machine Learning to identify students at risk of dropping out through predictive analytics.',
    longDesc: 'Analyzed attendance, academic performance, assignment submissions, and engagement data using Random Forest algorithm to generate dropout risk predictions and personalized lecture recommendations. Implemented REST APIs and role-based dashboards.',
    tags: ['React.js', 'Spring Boot', 'MongoDB', 'Random Forest', 'REST APIs'],
    color: 'from-slate-700 to-slate-800',
    borderHover: 'hover:border-slate-500/40',
    accent: 'text-slate-400',
    bg: 'bg-slate-800/30',
    liveLink: null,
    githubLink: 'https://github.com/SaiSatvikGootyKase/student-retention-system',
    metrics: [{ label: 'Stack', value: 'Full Stack' }, { label: 'Model', value: 'Random Forest' }],
    category: 'Full Stack + ML',
  },
  {
    title: 'Medical Lab Report Analyzer',
    emoji: '🩺',
    description:
      'Built a full-stack web application using React (frontend) and FastAPI (backend) to upload, extract, and analyze real-world lab reports in PDF format.',
    longDesc: 'Used PyMuPDF and custom rules to parse test results and generate medical insights in real time with a clean, centered UI.',
    tags: ['React', 'FastAPI', 'PyMuPDF', 'PDF Processing', 'Python'],
    color: 'from-slate-700 to-slate-800',
    borderHover: 'hover:border-slate-500/40',
    accent: 'text-slate-400',
    bg: 'bg-slate-800/30',
    liveLink: 'http://medical-lab-report-analyzer.vercel.app/',
    githubLink: null,
    metrics: [{ label: 'Backend', value: 'FastAPI' }, { label: 'Parser', value: 'PyMuPDF' }],
    category: 'Full Stack',
  },
];

const categories = ['All', 'Machine Learning', 'Full Stack', 'Full Stack + ML'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter || p.category.includes(filter));

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="section-container reveal">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg">
            <Layers className="w-5 h-5 text-slate-300" />
          </div>
          <div>
            <p className="text-slate-400 text-sm font-medium tracking-widest uppercase mb-1">What I've built</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
          </div>
          <div className="flex-1 h-px bg-slate-800 ml-4" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-slate-200 text-slate-900 shadow-lg'
                  : 'glass border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={i}
              className={`glass rounded-2xl border border-white/5 ${project.borderHover} card-hover overflow-hidden flex flex-col transition-all duration-300 group`}
            >
              {/* Card Top */}
              <div className={`relative p-6 pb-4 ${project.bg}`}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} border border-slate-600 flex items-center justify-center text-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {project.emoji}
                </div>

                {/* Category badge */}
                <span className={`absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full border border-slate-700 bg-slate-800 text-slate-300 font-medium`}>
                  {project.category}
                </span>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Long desc */}
              <div className="px-6 py-3 border-t border-slate-800/50">
                <p className="text-slate-500 text-xs leading-relaxed flex items-start gap-2">
                  <ChevronRight className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${project.accent}`} />
                  {project.longDesc}
                </p>
              </div>

              {/* Metrics */}
              <div className="px-6 py-3 flex gap-4 border-t border-slate-800/50">
                {project.metrics.map((m, j) => (
                  <div key={j}>
                    <p className="text-xs text-slate-500">{m.label}</p>
                    <p className={`text-sm font-bold ${project.accent}`}>{m.value}</p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="px-6 py-3 flex flex-wrap gap-1.5 border-t border-slate-800/50">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-auto px-6 py-4 flex gap-3 border-t border-slate-800/50">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 text-xs font-bold ${project.accent} hover:text-white transition-colors`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-white transition-colors ml-auto"
                  >
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View all on GitHub */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Likhithbm24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-slate-700 bg-slate-900 text-white font-semibold text-sm hover:border-slate-500 hover:bg-slate-800 transition-all duration-300"
          >
            <Github className="w-4 h-4" /> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
