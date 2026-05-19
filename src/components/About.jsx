import { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, Star, Award, User, BookOpen, School, Shield, Trophy } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech – Computer Science & Information Technology',
    institution: 'REVA University, Bengaluru',
    period: '2022 – Present',
    grade: 'CGPA: 8.5',
    Icon: GraduationCap,
    color: 'from-purple-600 to-cyan-500',
  },
  {
    degree: '12th PUC – Physics, Chemistry, Mathematics, Computer Science',
    institution: 'Sri Vidya Mandir Independent PU College, Bengaluru',
    period: '2020 – 2022',
    grade: 'CGPA: 6.8',
    Icon: BookOpen,
    color: 'from-blue-600 to-indigo-600',
  },
  {
    degree: '10th Standard SSLC',
    institution: 'Sri Vidya Mandir Education Society, Bengaluru',
    period: '2019 – 2020',
    grade: 'CGPA: 9.5',
    Icon: School,
    color: 'from-emerald-500 to-teal-600',
  },
];

const achievements = [
  { Icon: Shield, color: 'from-orange-500 to-red-600', text: 'Represented at Open National Level in Taekwondo', sub: 'Discipline, Agility & Competitive Spirit' },
  { Icon: Trophy, color: 'from-cyan-500 to-blue-600', text: 'Played Basketball at District Level', sub: 'Teamwork, Leadership & Athleticism' },
];

function useIntersectionObserver(ref, options) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, options);
    const elements = ref.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function About() {
  const sectionRef = useRef(null);
  useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section id="about" ref={sectionRef} className="relative py-28 overflow-hidden">
      <div className="bg-blob w-72 h-72 bg-purple-700/10 top-0 right-0" />

      <div className="section-container">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16 reveal" style={{ '--delay': '0ms' }}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
            <User className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-1">Get to know me</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-purple-600/40 to-transparent ml-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left – Summary + Achievements */}
          <div className="space-y-8">
            <div className="reveal glass rounded-2xl p-8 border border-white/5 card-hover">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" /> Professional Summary
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I'm a passionate <span className="text-purple-300 font-medium">Computer Science & IT student</span> at
                REVA University with hands-on experience in full-stack development, machine learning, and mobile application development.
              </p>
              <p className="text-gray-400 leading-relaxed mt-3">
                During my internship at <span className="text-cyan-300 font-medium">Shri Aikyam Solutions</span>, I worked as a
                Full Stack Developer Intern building web and Android applications, integrating Firebase, designing RESTful APIs,
                and managing MongoDB databases.
              </p>
              <p className="text-gray-400 leading-relaxed mt-3">
                I'm driven by the challenge of turning complex problems into elegant, scalable solutions and am always eager
                to learn and adapt to new technologies.
              </p>
            </div>

            {/* Achievements */}
            <div className="reveal glass rounded-2xl p-8 border border-white/5 card-hover">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" /> Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((a, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/3 border border-white/5 hover:border-purple-500/30 transition-all duration-300 group">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${a.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <a.Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{a.text}</p>
                      <p className="text-gray-500 text-xs mt-1">{a.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right – Education */}
          <div className="reveal space-y-0">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-purple-400" /> Education
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-purple-600 via-cyan-500 to-transparent" />

              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div key={i} className="relative flex gap-6">
                    {/* Timeline dot */}
                    <div className="relative flex-shrink-0">
                      <div className={`timeline-dot w-12 h-12 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg shadow-purple-500/20 z-10`}>
                        <edu.Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="glass rounded-2xl p-5 border border-white/5 card-hover flex-1 mb-2">
                      <div className="flex items-start justify-between gap-2 flex-wrap mb-2">
                        <h4 className="text-white font-semibold text-sm leading-snug">{edu.degree}</h4>
                        <span className="flex-shrink-0 text-xs px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-semibold">
                          {edu.grade}
                        </span>
                      </div>
                      <p className="text-gray-400 text-xs mb-3">{edu.institution}</p>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Calendar className="w-3 h-3 text-purple-400" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.is-visible { opacity: 1; transform: translateY(0); }
        .reveal:nth-child(2) { transition-delay: 0.1s; }
        .reveal:nth-child(3) { transition-delay: 0.2s; }
        .reveal:nth-child(4) { transition-delay: 0.3s; }
      `}</style>
    </section>
  );
}
