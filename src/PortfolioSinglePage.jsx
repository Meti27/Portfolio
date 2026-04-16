export default function PortfolioSinglePage() {
  const projects = [
    {
      title: "Fleet Management Platform",
      description:
        "A logistics dashboard for managing drivers, trucks, assignments, and daily operations with a clean admin interface.",
      tech: ["React", "Tailwind", "Java", "Spring Boot"],
    },
    {
      title: "Recipe Manager App",
      description:
        "A modern recipe app with structured screens, reusable cards, and a smooth mobile-friendly experience.",
      tech: ["Kotlin", "Jetpack Compose", "Room"],
    },
    {
      title: "Room Booking App",
      description:
        "A booking system with room listings, reservation flows, and backend API integration for real-world practice.",
      tech: ["React", "Spring Boot", "SQL Server"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-xl font-bold tracking-wide text-white">
            Meti<span className="text-slate-300">.</span>
          </a>

          <nav className="hidden gap-8 md:flex">
            <a href="#home" className="text-sm font-medium text-slate-200 transition hover:text-white">
              Home
            </a>
            <a href="#about" className="text-sm font-medium text-slate-200 transition hover:text-white">
              About
            </a>
            <a href="#projects" className="text-sm font-medium text-slate-200 transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-200 transition hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-105"
          >
            Let’s Talk
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.18),transparent_24%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-32">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-300">
                Frontend Developer • Software Engineering Student
              </p>
              <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                I build clean, responsive, and modern web experiences.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                I’m Meti, a developer focused on building practical digital products with modern tools like React,
                Tailwind, and full-stack technologies.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="rounded-full bg-white px-6 py-3 text-center font-semibold text-slate-950 transition hover:-translate-y-0.5"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-slate-400 px-6 py-3 text-center font-semibold text-white transition hover:bg-white hover:text-slate-950"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
                <div className="rounded-2xl bg-white p-6 text-slate-900 shadow-lg">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-950 text-2xl font-bold text-white">
                      M
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Meti Iseni</h2>
                      <p className="text-sm text-slate-600">React • Java • UI Development</p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-slate-100 p-4">
                      <p className="text-sm text-slate-500">Projects</p>
                      <p className="mt-1 text-2xl font-bold">03+</p>
                    </div>
                    <div className="rounded-2xl bg-slate-100 p-4">
                      <p className="text-sm text-slate-500">Focus</p>
                      <p className="mt-1 text-2xl font-bold">Frontend</p>
                    </div>
                    <div className="rounded-2xl bg-slate-100 p-4">
                      <p className="text-sm text-slate-500">Stack</p>
                      <p className="mt-1 text-2xl font-bold">React</p>
                    </div>
                    <div className="rounded-2xl bg-slate-100 p-4">
                      <p className="text-sm text-slate-500">Style</p>
                      <p className="mt-1 text-2xl font-bold">Modern</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-700">About Me</p>
              <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">Who I am</h2>
              <p className="mt-6 text-base leading-8 text-slate-700">
                I am a software engineering student with a strong interest in frontend development, modern UI design,
                and building projects that solve real-world problems. I enjoy creating interfaces that look polished,
                feel smooth, and work well across all screen sizes.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                My current focus is improving my React skills, building full-stack portfolio projects, and growing into
                a professional software engineer with strong product sense.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-950">Frontend</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  React, Tailwind CSS, responsive layouts, reusable components, and user-friendly interfaces.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-white">Backend</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Java, Spring Boot, REST APIs, authentication, and integrating frontend with real backend systems.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-white">Database</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Working with SQL databases for structured data, project logic, and practical application development.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-950">Growth</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Constantly learning through coursework, personal projects, internships, and hands-on practice.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-slate-100 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-700">Projects</p>
              <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">Selected Work</h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                A few projects that reflect my focus on practical development, clean design, and real application use.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 h-2 w-20 rounded-full bg-slate-950" />
                  <h3 className="text-xl font-bold text-slate-950">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl lg:grid-cols-2 lg:p-12">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Contact</p>
              <h2 className="text-3xl font-bold sm:text-4xl">Let’s build something great.</h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-slate-300">
                I’m open to internships, freelance work, collaborations, and new opportunities. Feel free to reach out.
              </p>

              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <p>
                  <span className="font-semibold text-white">Email:</span> yourname@email.com
                </p>
                <p>
                  <span className="font-semibold text-white">Phone:</span> +389 XX XXX XXX
                </p>
                <p>
                  <span className="font-semibold text-white">Location:</span> North Macedonia
                </p>
              </div>
            </div>

            <form className="grid gap-4 rounded-3xl bg-white p-6 text-slate-900 shadow-xl">
              <div>
                <label className="mb-2 block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-center text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 Meti Iseni. All rights reserved.</p>
          <p>Built with React and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
