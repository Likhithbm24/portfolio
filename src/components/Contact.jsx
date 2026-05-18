import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, MessageSquare, AlertCircle, Loader2 } from 'lucide-react';

// ─── EmailJS Configuration ───────────────────────────────────────────────────
// Sign up free at https://www.emailjs.com and replace these with your own IDs
const EMAILJS_SERVICE_ID  = 'service_xe9pn69';
const EMAILJS_TEMPLATE_ID = 'template_2jrspvj';
const EMAILJS_PUBLIC_KEY  = 'IFAES9ILU0k1EecQZ';
// ─────────────────────────────────────────────────────────────────────────────

const socialLinks = [
  { icon: Github,   label: 'GitHub',    href: 'https://github.com/Likhithbm24',                  value: 'github.com/Likhithbm24',        color: 'hover:border-gray-400/50 hover:text-white' },
  { icon: Linkedin, label: 'LinkedIn',  href: 'https://linkedin.com/in/likhith-bm-687996250',     value: 'linkedin.com/in/likhith-bm',    color: 'hover:border-blue-400/50 hover:text-blue-400' },
  { icon: Mail,     label: 'Email',     href: 'https://mail.google.com/mail/?view=cm&to=likhithbm04@gmail.com',  value: 'likhithbm04@gmail.com',         color: 'hover:border-purple-400/50 hover:text-purple-400' },
  { icon: Phone,    label: 'Phone',     href: 'tel:+918317421583',                                value: '+91 83174 21583',                color: 'hover:border-green-400/50 hover:text-green-400' },
];

const STATUS = { IDLE: 'idle', SENDING: 'sending', SUCCESS: 'success', ERROR: 'error' };

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(STATUS.IDLE);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus(STATUS.SENDING);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus(STATUS.SUCCESS);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(STATUS.IDLE), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus(STATUS.ERROR);
      setTimeout(() => setStatus(STATUS.IDLE), 5000);
    }
  };

  // Button appearance based on status
  const btnConfig = {
    [STATUS.IDLE]:    { text: 'Send Message',    icon: <Send className="w-4 h-4" />,                                              cls: 'bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90 hover:scale-[1.02] shadow-lg shadow-purple-500/30' },
    [STATUS.SENDING]: { text: 'Sending…',         icon: <Loader2 className="w-4 h-4 animate-spin" />,                             cls: 'bg-gradient-to-r from-purple-600/60 to-cyan-500/60 cursor-wait' },
    [STATUS.SUCCESS]: { text: 'Message Sent! ✨', icon: <CheckCircle className="w-4 h-4" />,                                      cls: 'bg-green-500/20 border border-green-500/30 text-green-400' },
    [STATUS.ERROR]:   { text: 'Failed – Try Again', icon: <AlertCircle className="w-4 h-4" />,                                   cls: 'bg-red-500/20 border border-red-500/30 text-red-400' },
  }[status];

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="bg-blob w-80 h-80 bg-purple-600/15 bottom-0 left-0" />
      <div className="bg-blob w-64 h-64 bg-cyan-500/10 top-0 right-0" />

      <div className="section-container">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-1">Let's Talk</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-purple-600/40 to-transparent ml-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left – Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's build something <span className="gradient-text">amazing</span> together
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I'm actively looking for opportunities where I can contribute, grow, and continue to develop my skills.
                Whether you have a question, project idea, or just want to say hi — my inbox is always open!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3">
              {socialLinks.map(({ icon: Icon, label, href, value, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 glass rounded-xl border border-white/5 ${color} transition-all duration-300 group`}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">{label}</p>
                    <p className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors">{value}</p>
                  </div>
                </a>
              ))}

              <div className="flex items-center gap-4 p-4 glass rounded-xl border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Location</p>
                  <p className="text-sm text-gray-300 font-medium">Bengaluru, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right – Form */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-white/5 space-y-5">
              <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 font-medium mb-1.5 block" htmlFor="contact-name">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/60 focus:bg-purple-500/5 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 font-medium mb-1.5 block" htmlFor="contact-email">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/60 focus:bg-purple-500/5 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block" htmlFor="contact-subject">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Job Opportunity / Project Collaboration"
                  className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/60 focus:bg-purple-500/5 transition-all duration-300"
                />
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/60 focus:bg-purple-500/5 transition-all duration-300 resize-none"
                />
              </div>

              {/* Status messages */}
              {status === STATUS.SUCCESS && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  Your message was sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === STATUS.ERROR && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  Oops! Something went wrong. Please email me directly at{' '}
                  <a href="https://mail.google.com/mail/?view=cm&to=likhithbm04@gmail.com" target="_blank" rel="noopener noreferrer" className="underline">likhithbm04@gmail.com</a>
                </div>
              )}

              <button
                type="submit"
                disabled={status === STATUS.SENDING || status === STATUS.SUCCESS}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 text-white ${btnConfig.cls}`}
              >
                {btnConfig.icon}
                {btnConfig.text}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
