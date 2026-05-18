import { Github, Linkedin, Mail, Heart, Code2, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/5 py-12 overflow-hidden">
      <div className="bg-blob w-64 h-64 bg-purple-800/10 bottom-0 left-1/2 -translate-x-1/2" />

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shadow-lg">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-white">Likhith BM</p>
              <p className="text-xs text-gray-500">Full Stack Developer · Bengaluru</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { href: 'https://github.com/Likhithbm24', icon: Github, label: 'GitHub' },
              { href: 'https://linkedin.com/in/likhith-bm-687996250', icon: Linkedin, label: 'LinkedIn' },
              { href: 'mailto:likhithbm04@gmail.com', icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg glass border border-white/8 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/40 hover:scale-110 transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white hover:scale-110 hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/30"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Likhith BM. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> using React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
