import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "About", "Projects", "Contact"];

const PROJECTS = [
  {
    title: "Dolce Vita",
    description: "A elegant frontend website crafted for an ice cream café in Germany, featuring a warm and inviting design that reflects the brand's Italian-inspired identity.",
    tags: ["React", "Frontend", "Vercel"],
    emoji: "🍦",
    link: "https://dolce-vita-nine.vercel.app/",
  },
  {
    title: "Fuk-Tech",
    description: "A modern frontend website with an integrated CMS, built for a gardening machinery business to manage and showcase their product catalogue seamlessly.",
    tags: ["React", "CMS", "Vercel"],
    emoji: "🌿",
    link: "https://fuk-tech.vercel.app/",
  },
  {
    title: "SmartSpend",
    description: "An Android budgeting app developed collaboratively during an internship at Shortcut Balkans, designed to help users track and manage their personal finances.",
    tags: ["Android", "Kotlin", "Internship"],
    emoji: "💸",
    link: "https://github.com/artianRika/smartspend-android",
  },
  {
    title: "Fleet Management",
    description: "A full-stack fleet management web application enabling businesses to monitor and coordinate their vehicle operations efficiently.",
    tags: ["Java", "React", "SQL"],
    emoji: "🚛",
    link: "https://github.com/Meti27/Fleet-Management",
  },
  {
    title: "MechTrack",
    description: "A mechanic management system that empowers workshops to manage client records while giving customers real-time visibility into their vehicle's repair status.",
    tags: ["Web App", "Real-time", "Management"],
    emoji: "🔧",
    link: "https://github.com/Meti27/MechTrack",
  },
  {
    title: "AIBetting",
    description: "A fun Python side project that aggregates data from multiple football APIs to generate betting statistics, value insights, and match predictions.",
    tags: ["Python", "API", "Data"],
    emoji: "⚽",
    link: "https://github.com/Meti27/AIBetting",
  },
];

const SKILLS = ["React", "Node.js", "PHP / Laravel", "Java", "Kotlin", "Jetpack Compose", "Python", "SQL", "Docker", "Git"];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((n) => document.getElementById(n.toLowerCase()));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1));
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => s && obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="font-sans bg-white scroll-smooth" style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10,25,60,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 2px 24px rgba(10,25,60,0.18)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-2xl font-black tracking-tight text-white" style={{ letterSpacing: "-0.04em" }}>
            Muhamed<span style={{ color: "#60A5FA" }}>.</span>dev
          </span>
          <ul className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="text-sm font-semibold uppercase transition-colors duration-200"
                  style={{ color: active === link ? "#60A5FA" : "rgba(255,255,255,0.75)", letterSpacing: "0.12em" }}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-0.5 w-6 bg-white transition-all duration-300"
                style={{
                  transform:
                    menuOpen && i === 0 ? "rotate(45deg) translateY(8px)"
                    : menuOpen && i === 2 ? "rotate(-45deg) translateY(-8px)"
                    : menuOpen && i === 1 ? "scaleX(0)" : "none",
                }}
              />
            ))}
          </button>
        </div>
        <div className="md:hidden overflow-hidden transition-all duration-300" style={{ maxHeight: menuOpen ? "280px" : "0" }}>
          <div style={{ background: "rgba(10,25,60,0.98)", padding: "8px 0 16px" }}>
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="block w-full text-left px-8 py-3 text-sm font-semibold uppercase"
                style={{ color: active === link ? "#60A5FA" : "rgba(255,255,255,0.75)", letterSpacing: "0.1em" }}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a1940 0%, #0d2b6b 50%, #0a3d8f 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${180 + i * 80}px`,
                height: `${180 + i * 80}px`,
                border: "1px solid rgba(96,165,250,0.12)",
                top: `${10 + i * 12}%`,
                left: `${5 + i * 14}%`,
                animation: `bgpulse ${3 + i * 0.5}s ease-in-out infinite alternate`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase mb-8"
            style={{ background: "rgba(96,165,250,0.15)", color: "#93C5FD", border: "1px solid rgba(96,165,250,0.3)", letterSpacing: "0.18em" }}
          >
            Available for hire
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-4 leading-none" style={{ letterSpacing: "-0.04em" }}>
            Muhamed<br /><span style={{ color: "#60A5FA" }}>Iseni</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
            Software Engineering Student
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Passionate about cybersecurity, web development, and AI — building things that are both functional and meaningful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("Projects")}
              className="px-8 py-4 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105"
              style={{ background: "#60A5FA", color: "#0a1940", letterSpacing: "0.05em" }}
            >
              View My Work
            </button>
            <button
              onClick={() => scrollTo("Contact")}
              className="px-8 py-4 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105"
              style={{ border: "2px solid rgba(96,165,250,0.5)", color: "#93C5FD", letterSpacing: "0.05em" }}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "rgba(255,255,255,0.35)" }}>
          <span className="text-xs uppercase" style={{ letterSpacing: "0.2em" }}>Scroll</span>
          <div className="w-px h-10 animate-bounce" style={{ background: "rgba(96,165,250,0.4)" }} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <span className="text-xs font-black uppercase" style={{ color: "#60A5FA", letterSpacing: "0.2em" }}>About Me</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2 mb-12" style={{ color: "#0a1940", letterSpacing: "-0.03em" }}>
              Curious mind.<br />Driven builder.
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: bio + stack + stats */}
            <div>
              <FadeIn delay={0.1}>
                <p className="text-lg leading-relaxed mb-6" style={{ color: "#374151" }}>
                  Hi, I'm <strong style={{ color: "#0a1940" }}>Muhamed Iseni</strong> — a software engineering student based in Gostivar, North Macedonia, with a deep passion for cybersecurity, web development, and artificial intelligence.
                </p>
                <p className="text-lg leading-relaxed mb-6" style={{ color: "#374151" }}>
                  I love building products that sit at the intersection of great engineering and real-world impact. Whether it's a polished frontend, a robust backend system, or a data-driven side project, I approach every challenge with curiosity and attention to detail.
                </p>
                <p className="text-lg leading-relaxed mb-10" style={{ color: "#374151" }}>
                  Outside of coding, I'm constantly exploring new technologies, contributing to team projects, and deepening my understanding of how software and security intersect in today's digital landscape.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-xs font-black uppercase mb-4" style={{ color: "#9CA3AF", letterSpacing: "0.18em" }}>Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((skill, i) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105 cursor-default"
                      style={{
                        background: i % 3 === 0 ? "#0a1940" : i % 3 === 1 ? "#EFF6FF" : "#DBEAFE",
                        color: i % 3 === 0 ? "#93C5FD" : "#0a1940",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="grid grid-cols-3 gap-6 mt-10 pt-10" style={{ borderTop: "1px solid #E5E7EB" }}>
                  {[["5+", "Years Exp."], ["40+", "Projects"], ["20+", "Happy Clients"]].map(([num, label]) => (
                    <div key={label}>
                      <div className="text-3xl font-black" style={{ color: "#0a1940" }}>{num}</div>
                      <div className="text-sm mt-1" style={{ color: "#6B7280" }}>{label}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right: interest cards */}
            <FadeIn delay={0.2}>
              <div className="space-y-4">
                {[
                  { icon: "🔐", title: "Cybersecurity", desc: "Fascinated by how systems are attacked and defended — exploring vulnerability analysis, ethical hacking, and secure software design." },
                  { icon: "🌐", title: "Web Development", desc: "Building full-stack applications with modern frameworks, from sleek React frontends to scalable Node.js and Laravel backends." },
                  { icon: "🤖", title: "Artificial Intelligence", desc: "Leveraging Python and data APIs to build intelligent tools that go beyond simple automation — from predictive analytics to smart assistants." },
                  { icon: "📱", title: "Mobile Development", desc: "Crafting native Android experiences using Kotlin and Jetpack Compose, with a focus on clean architecture and intuitive UX." },
                ].map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex gap-4 p-5 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: "#F0F4FF", border: "1px solid #DBEAFE" }}
                  >
                    <div className="text-2xl flex-shrink-0 mt-0.5">{icon}</div>
                    <div>
                      <div className="font-black text-sm mb-1" style={{ color: "#0a1940" }}>{title}</div>
                      <div className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-28 px-6" style={{ background: "#F0F4FF" }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <span className="text-xs font-black uppercase" style={{ color: "#60A5FA", letterSpacing: "0.2em" }}>Projects</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4" style={{ color: "#0a1940", letterSpacing: "-0.03em" }}>
              Things I've built.
            </h2>
            <p className="text-lg mb-14 max-w-xl" style={{ color: "#6B7280" }}>
              A selection of real-world projects — client work, team collaborations, and personal side projects.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <div
                  className="rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "white", boxShadow: "0 4px 24px rgba(10,25,60,0.07)", border: "1px solid rgba(10,25,60,0.06)" }}
                >
                  <div className="text-4xl mb-5 w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "#EFF6FF" }}>
                    {p.emoji}
                  </div>
                  <h3 className="text-lg font-black mb-2" style={{ color: "#0a1940" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "#6B7280" }}>{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-lg text-xs font-bold" style={{ background: "#EFF6FF", color: "#0a3d8f" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-black uppercase flex items-center gap-1 transition-colors duration-200 hover:underline"
                      style={{ color: "#60A5FA", letterSpacing: "0.1em" }}
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <span className="text-xs font-black uppercase" style={{ color: "#60A5FA", letterSpacing: "0.2em" }}>Contact</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4" style={{ color: "#0a1940", letterSpacing: "-0.03em" }}>
              Let's work together.
            </h2>
            <p className="text-lg mb-14 max-w-xl" style={{ color: "#6B7280" }}>
              Have a project in mind, a collaboration idea, or just want to say hi? I'm always open to a good conversation.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-16">
            <FadeIn delay={0.1}>
              <div className="space-y-8">
                {[
                  { icon: "📧", label: "Email", value: "metiseni27@gmail.com", link: "mailto:metiseni27@gmail.com" },
                  { icon: "📞", label: "Phone", value: "+389 70 810 878", link: "tel:+38970810878" },
                  { icon: "📍", label: "Location", value: "Gostivar, North Macedonia", link: null },
                  { icon: "💼", label: "LinkedIn", value: "muhamed-iseni", link: "https://www.linkedin.com/in/muhamed-iseni-9b7a47253/" },
                  { icon: "🐙", label: "GitHub", value: "github.com/Meti27", link: "https://github.com/Meti27" },
                ].map(({ icon, label, value, link }) => (
                  <div key={label} className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: "#EFF6FF" }}>
                      {icon}
                    </div>
                    <div>
                      <div className="text-xs font-black uppercase mb-1" style={{ color: "#9CA3AF", letterSpacing: "0.15em" }}>{label}</div>
                      {link ? (
                        <a
                          href={link}
                          target={link.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="font-semibold transition-colors duration-200 hover:underline"
                          style={{ color: "#0a1940" }}
                        >
                          {value}
                        </a>
                      ) : (
                        <div className="font-semibold" style={{ color: "#0a1940" }}>{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              {sent ? (
                <div
                  className="rounded-2xl p-12 flex flex-col items-center justify-center text-center"
                  style={{ background: "#EFF6FF", border: "2px solid #BFDBFE", minHeight: "360px" }}
                >
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-2xl font-black mb-2" style={{ color: "#0a1940" }}>Message sent!</h3>
                  <p style={{ color: "#6B7280" }}>Thanks for reaching out. I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                    { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
                  ].map(({ name, label, type, placeholder }) => (
                    <div key={name}>
                      <label className="block text-xs font-black uppercase mb-2" style={{ color: "#6B7280", letterSpacing: "0.15em" }}>{label}</label>
                      <input
                        type={type}
                        required
                        placeholder={placeholder}
                        value={formData[name]}
                        onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{ background: "#F9FAFB", border: "2px solid #E5E7EB", color: "#0a1940", fontFamily: "inherit" }}
                        onFocus={(e) => (e.target.style.borderColor = "#60A5FA")}
                        onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-black uppercase mb-2" style={{ color: "#6B7280", letterSpacing: "0.15em" }}>Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project or idea..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                      style={{ background: "#F9FAFB", border: "2px solid #E5E7EB", color: "#0a1940", fontFamily: "inherit" }}
                      onFocus={(e) => (e.target.style.borderColor = "#60A5FA")}
                      onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-black text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    style={{ background: "#0a1940", color: "#60A5FA", letterSpacing: "0.08em" }}
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 text-center" style={{ background: "#0a1940" }}>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
          © 2026 Muhamed Iseni. Built with React & Tailwind CSS.
        </p>
      </footer>

      <style>{`
        @keyframes bgpulse {
          from { opacity: 0.4; transform: scale(1); }
          to { opacity: 0.8; transform: scale(1.04); }
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}
