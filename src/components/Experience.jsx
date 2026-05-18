import { Briefcase, Calendar, ChevronRight, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <div className="bg-blob w-64 h-64 bg-purple-600/10 top-10 right-0" />

      <div className="section-container">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-1">Work History</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-purple-600/40 to-transparent ml-4" />
        </div>

        {/* Internship Card */}
        <div className="relative max-w-4xl">
          {/* Glow behind card */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-500/5 rounded-3xl blur-xl" />

          <div className="relative glass rounded-3xl p-8 md:p-10 border border-purple-500/20 card-hover">
            {/* Top badge */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                {/* Company logo placeholder */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-2xl shadow-xl shadow-purple-500/30 animate-float">
                  💼
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Software Engineering Intern</h3>
                  <p className="text-purple-300 font-semibold mt-0.5">Shri Aikyam Solutions Private Limited</p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Calendar className="w-3 h-3 text-cyan-400" /> Jan 2026 – May 2026
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <MapPin className="w-3 h-3 text-purple-400" /> Bengaluru, India
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
                  ✅ Completed
                </span>
                <span className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-medium text-center">
                  Full Stack Dev
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-purple-500/30 via-cyan-500/20 to-transparent mb-8" />

            {/* Responsibilities */}
            <div className="space-y-4">
              {[
                'Worked as a Full Stack Developer Intern contributing to development of web and Android applications.',
                'Built mobile features using Android Studio and integrated Firebase for authentication, real-time database management, and push notifications.',
                'Designed and consumed RESTful APIs, implemented backend logic, and managed data storage using MongoDB.',
                'Collaborated on real-time projects, optimized performance, debugged issues, and delivered scalable, production-ready solutions.',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    <ChevronRight className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{point}</p>
                </div>
              ))}
            </div>

            {/* Tech Stack Used */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-xs text-gray-500 font-medium mb-3 uppercase tracking-widest">Technologies Used</p>
              <div className="flex flex-wrap gap-2">
                {['Android Studio', 'Firebase', 'MongoDB', 'RESTful APIs', 'Spring Boot', 'React.js', 'Java', 'JavaScript'].map(tech => (
                  <span key={tech} className="skill-pill border bg-white/3 border-white/8 text-gray-300 hover:border-purple-500/40 hover:text-purple-300 transition-all duration-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Currently studying message */}
        <div className="mt-8 max-w-4xl glass rounded-2xl p-6 border border-cyan-500/15 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl flex-shrink-0">
            🎓
          </div>
          <div>
            <p className="text-white font-semibold">Currently Pursuing B.Tech – REVA University</p>
            <p className="text-gray-400 text-sm mt-0.5">Computer Science & Information Technology · Expected Graduation 2026 · CGPA: 8.5</p>
          </div>
          <span className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" /> Active
          </span>
        </div>
      </div>
    </section>
  );
}
