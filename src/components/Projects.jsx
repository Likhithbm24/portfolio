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
    color: 'from-emerald-600 to-teal-700',
    glow: 'shadow-emerald-500/20',
    borderHover: 'hover:border-emerald-500/40',
    accent: 'text-emerald-400',
    bg: 'bg-emerald-500/5',
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
    color: 'from-blue-600 to-indigo-700',
    glow: 'shadow-blue-500/20',
    borderHover: 'hover:border-blue-500/40',
    accent: 'text-blue-400',
    bg: 'bg-blue-500/5',
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
    color: 'from-rose-600 to-pink-700',
    glow: 'shadow-rose-500/20',
    borderHover: 'hover:border-rose-500/40',
    accent: 'text-rose-400',
    bg: 'bg-rose-500/5',
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
      <div className="bg-blob w-72 h-72 bg-purple-600/10 bottom-0 right-0" />

      <div className="section-container reveal">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-1">What I've built</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-600/40 to-transparent ml-4" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/30'
                  : 'glass border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
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
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl shadow-xl ${project.glow} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {project.emoji}
                </div>

                {/* Category badge */}
                <span className={`absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full border ${project.bg} border-current ${project.accent} font-medium`}>
                  {project.category}
                </span>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Long desc */}
              <div className="px-6 py-3 border-t border-white/5">
                <p className="text-gray-500 text-xs leading-relaxed flex items-start gap-2">
                  <ChevronRight className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${project.accent}`} />
                  {project.longDesc}
                </p>
              </div>

              {/* Metrics */}
              <div className="px-6 py-3 flex gap-4 border-t border-white/5">
                {project.metrics.map((m, j) => (
                  <div key={j}>
                    <p className="text-xs text-gray-500">{m.label}</p>
                    <p className={`text-sm font-bold ${project.accent}`}>{m.value}</p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="px-6 py-3 flex flex-wrap gap-1.5 border-t border-white/5">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-gray-400 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-auto px-6 py-4 flex gap-3 border-t border-white/5">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 text-xs font-semibold ${project.accent} hover:opacity-80 transition-opacity`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors ml-auto"
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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass border border-white/10 text-white font-semibold text-sm hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300 shimmer-btn"
          >
            <Github className="w-4 h-4" /> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
