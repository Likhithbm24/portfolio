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

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1,
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
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.15 * (1 - dist / 120)})`;
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

      {/* Background blobs */}
      <div className="bg-blob w-96 h-96 bg-purple-600/20 top-10 -left-20" />
      <div className="bg-blob w-80 h-80 bg-cyan-500/15 bottom-20 right-10" />
      <div className="bg-blob w-64 h-64 bg-purple-800/10 top-1/2 left-1/2" />

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: 'linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="section-container relative z-10 pt-24 md:pt-32 pb-16 md:pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">

          {/* ── Photo – shows on MOBILE (top) and DESKTOP (right via order) ── */}
          <div className="flex-shrink-0 order-first lg:order-last">
            <div className="relative mx-auto w-36 h-36 md:w-52 md:h-52 lg:w-72 lg:h-72">
              {/* Spinning gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 via-cyan-400 to-purple-600 animate-spin-slow p-[3px]">
                <div className="w-full h-full rounded-full bg-[#0a0a0f]" />
              </div>
              {/* Static outer glow ring */}
              <div className="absolute -inset-2 rounded-full border border-purple-500/20" />
              <div className="absolute -inset-4 rounded-full border border-purple-500/10" />
              {/* Photo */}
              <img
                src="/likhith-photo.jpg"
                alt="Likhith BM"
                className="absolute inset-[3px] w-[calc(100%-6px)] h-[calc(100%-6px)] rounded-full object-cover object-top"
              />
              {/* Online badge */}
              <div className="absolute bottom-1 right-1 md:bottom-3 md:right-3 flex items-center gap-1.5 bg-[#0a0a0f]/90 border border-white/10 rounded-full px-2.5 py-1 md:px-3 md:py-1 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] text-green-400 font-semibold tracking-wide">Available</span>
              </div>
            </div>
          </div>

          {/* ── Left: Text content ── */}
          <div className="max-w-2xl text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 text-purple-300 text-sm font-medium mb-5 md:mb-8 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>Open to Opportunities · Bengaluru, India</span>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-8xl font-black mb-3 md:mb-4 leading-none tracking-tight">
              <span className="text-white">Likhith</span>
              <br />
              <span className="gradient-text">BM</span>
            </h1>

            {/* Typewriter */}
            <div className="flex items-center gap-2 h-10 md:h-12 mb-5 md:mb-8 justify-center lg:justify-start">
              <span className="text-xl md:text-3xl font-semibold text-gray-300">{displayed}</span>
              <span className="text-2xl text-purple-400 cursor-blink">|</span>
            </div>

            {/* Summary */}
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mb-7 md:mb-10 leading-relaxed">
              Enthusiastic and detail-oriented individual with a strong foundation in{' '}
              <span className="text-purple-300 font-medium">Python</span>,{' '}
              <span className="text-cyan-300 font-medium">web development</span>, data analysis and DSA algorithms.
              Eager to contribute to impactful projects and continuously grow in the tech industry.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-8 md:mb-14 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/40 animate-pulse-glow"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full glass border border-white/10 text-white font-semibold text-sm hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
              >
                Get In Touch
              </a>
              <a
                href="/Likhith_Resume.pdf"
                download="Likhith_BM_Resume.pdf"
                className="px-7 py-3.5 rounded-full glass border border-white/10 text-gray-300 font-semibold text-sm hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              {[
                { href: 'https://github.com/Likhithbm24', icon: Github, label: 'GitHub' },
                { href: 'https://linkedin.com/in/likhith-bm-687996250', icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://mail.google.com/mail/?view=cm&to=likhithbm04@gmail.com', icon: Mail, label: 'Email' },
                { href: 'tel:+918317421583', icon: Phone, label: 'Phone' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
              <div className="flex items-center gap-2 ml-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4 text-purple-400" />
                Bengaluru, India
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-500 hover:text-purple-400 transition-colors animate-float"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </a>
    </section>
  );
}
