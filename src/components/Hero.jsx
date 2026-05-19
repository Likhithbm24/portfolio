import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ArrowDown, Sparkles } from 'lucide-react';

const roles = [
  'Full Stack Developer',
  'Python Developer',
  'Machine Learning Enthusiast',
  'Problem Solver',
  'Software Engineer',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const canvasRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  // Particle canvas — desktop only (too heavy for mobile)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Skip on mobile for smooth scrolling
    if (window.innerWidth < 768) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      // Connecting lines — desktop only
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.12 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="section-container relative z-10 pt-24 md:pt-32 pb-16 md:pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">

          {/* ── Photo – shows on MOBILE (top) and DESKTOP (right via order) ── */}
          <div className="flex-shrink-0 order-first lg:order-last">
            <div className="relative mx-auto w-36 h-36 md:w-52 md:h-52 lg:w-72 lg:h-72">
              {/* Classy monochrome border ring */}
              <div className="absolute inset-0 rounded-full border border-slate-700 p-[4px] shadow-2xl">
                <div className="w-full h-full rounded-full bg-slate-900" />
              </div>
              {/* Photo */}
              <img
                src="/likhith-photo.jpg"
                alt="Likhith BM"
                className="absolute inset-[3px] w-[calc(100%-6px)] h-[calc(100%-6px)] rounded-full object-cover object-top"
              />
              {/* Online badge */}
              <div className="absolute bottom-1 right-1 md:bottom-3 md:right-3 flex items-center gap-1.5 bg-slate-900 border border-slate-700 rounded-full px-2.5 py-1 md:px-3 md:py-1 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] text-green-400 font-semibold tracking-wide">Available</span>
              </div>
            </div>
          </div>

          {/* ── Left: Text content ── */}
          <div className="max-w-2xl text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-800 bg-slate-900/50 text-slate-300 text-sm font-medium mb-5 md:mb-8 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-slate-400" />
              <span>Open to Opportunities · Bengaluru, India</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-8xl font-extrabold mb-4 md:mb-6 leading-tight tracking-tight text-white animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Building <span className="text-slate-400 font-medium italic">scalable</span> solutions.
            </h1>

            {/* Typewriter */}
            <div className="flex items-center gap-2 h-10 md:h-12 mb-5 md:mb-8 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <span className="text-xl md:text-3xl font-semibold text-slate-300">{displayed}</span>
              <span className="text-2xl text-slate-500 cursor-blink">|</span>
            </div>

            {/* Summary */}
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mb-7 md:mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Hi, I'm <strong className="text-white font-semibold">Likhith BM</strong>, a detail-oriented software engineer and full stack developer specializing in 
              <span className="text-white font-medium"> Python</span>, modern web frameworks, and data structures. Eager to contribute to impactful projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-8 md:mb-14 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-slate-200 hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full border border-slate-700 bg-slate-900 text-white font-semibold text-sm hover:border-slate-500 hover:bg-slate-800 transition-all duration-300"
              >
                Get In Touch
              </a>
              <a
                href="/Likhith_Resume.pdf"
                download="Likhith_BM_Resume.pdf"
                className="px-6 py-3.5 rounded-full border border-slate-800 text-slate-400 font-medium text-sm hover:text-white hover:bg-slate-800 transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              {[
                { href: 'https://github.com/Likhithbm24', icon: Github, label: 'GitHub' },
                { href: 'https://linkedin.com/in/likhith-bm-687996250', icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://mail.google.com/mail/?view=cm&to=likhithbm04@gmail.com', icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 hover:bg-slate-800 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
              <div className="flex items-center gap-2 ml-2 text-sm text-slate-500 hidden md:flex">
                <MapPin className="w-4 h-4" />
                Bengaluru, India
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-slate-600 hover:text-white transition-colors"
      >
        <ArrowDown className="w-5 h-5 animate-float" />
      </a>
    </section>
  );
}
