

import { useState, useEffect } from "react";
import "./App.css";

// ========================
// DATA
// ========================

const skills = {
  Frontend: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "WebSockets"],
  "Database & Tools": ["MongoDB", "SQL", "Git & GitHub", "Postman", "VS Code"],
  "CS Fundamentals": ["OOP", "Data Structures & Algorithms", "Operating Systems", "Computer Networks", "SDLC"],
};

const projects = [
  {
    id: "01",
    title: "Real-Time Chat Application",
    desc: "Full-stack chat app with JWT-based authentication, RESTful APIs for users & messages, and real-time messaging via WebSockets for instant delivery — no page refresh needed.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSockets", "JWT"],
    link: "https://github.com/devesh816867",
    featured: true,
  },
  {
    id: "02",
    title: "Blog Application",
    desc: "A full-featured blogging platform with login-based access control, full CRUD operations on posts, and dynamic React frontend powered by a secure Express + MongoDB backend.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    link: "https://github.com/devesh816867",
  },
  {
    id: "03",
    title: "Weather Dashboard",
    desc: "Real-time weather app that fetches live data by city name from a third-party API, displaying temperature, humidity, and conditions in a clean, responsive interface.",
    tech: ["React.js", "Weather API", "REST"],
    link: "https://github.com/devesh816867",
  },
];

const marqueeItems = [
  "MERN Stack", "React.js", "Node.js", "RESTful APIs",
  "MongoDB", "JWT Auth", "WebSockets", "Cloud Computing",
];

const contactLinks = [
  { label: "Email",    value: "devesh2962002@gmail.com",     icon: "✉", href: "mailto:devesh2962002@gmail.com" },
  { label: "GitHub",   value: "github.com/devesh816867",     icon: "⌥", href: "https://github.com/devesh816867" },
  { label: "LinkedIn", value: "linkedin.com/in/devesh007",   icon: "◈", href: "https://linkedin.com/in/devesh007" },
  { label: "Phone",    value: "+91 6203850783",              icon: "☎", href: "tel:+916203850783" },
];

const navSections = ["about", "skills", "projects", "contact"];

// ========================
// HELPER: smooth scroll
// ========================
const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

// ========================
// APP COMPONENT
// ========================
export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  // Highlight active nav link based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    ["hero", ...navSections].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ======================== NAV ======================== */}
      <nav className="nav">
        <div className="nav-logo">{"<DK />"}</div>
        <ul className="nav-links">
          {navSections.map((section) => (
            <li key={section}>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); scrollTo(section); }}
                style={activeSection === section ? { color: "var(--accent)" } : {}}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ======================== HERO ======================== */}
      <section id="hero" className="hero">
        <div className="hero-grid-bg" />
        <div className="hero-glow" />

        <div className="hero-tag fade-up delay-1">
          Open to opportunities · Final Year CSE Student
        </div>

        <h1 className="hero-name fade-up delay-2">
          <div>Devesh</div>
          <div className="line2">Kumar<span className="accent">.</span></div>
        </h1>

        <p className="hero-desc fade-up delay-3">
          Full Stack Developer specializing in the MERN stack — building secure,
          scalable web apps with clean APIs, real-time features, and thoughtful UX.
          <span className="cursor" />
        </p>

        <div className="hero-cta fade-up delay-4">
          <a
            href="#"
            className="btn-primary"
            onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}
          >
            View Work
          </a>
          <a
            href="#"
            className="btn-secondary"
            onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
          >
            Get in touch →
          </a>
        </div>

        <div className="hero-scroll-hint">scroll</div>
      </section>

      {/* ======================== MARQUEE ======================== */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marquee-item">
              {item}
              <span className="marquee-dot" />
            </span>
          ))}
        </div>
      </div>

      {/* ======================== ABOUT ======================== */}
      <section id="about">
        <div className="section">
          <div className="section-label">About</div>
          <h2 className="section-title">Who I Am</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm <strong>Devesh Kumar</strong>, a final-year Computer Science
                Engineering student at <strong>Chandigarh University</strong> with
                hands-on experience building full-stack web applications using the{" "}
                <strong>MERN stack</strong>.
              </p>
              <p>
                I have a strong foundation in{" "}
                <strong>
                  JavaScript, RESTful API development, authentication mechanisms
                </strong>
                , and database design — comfortable working in structured dev
                environments with version control and documentation practices.
              </p>
              <p>
                I'm actively seeking an entry-level{" "}
                <strong>Software / Full Stack Developer</strong> role where I can
                contribute to scalable, maintainable web applications and grow as
                an engineer.
              </p>
            </div>

            <div className="about-stats">
              {[
                ["6.93", "CGPA at CU"],
                ["3",    "Projects Built"],
                ["3",    "NPTEL Certs"],
                ["2026", "Graduating"],
              ].map(([num, label]) => (
                <div key={label} className="stat-card">
                  <div className="stat-num">{num}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ======================== SKILLS ======================== */}
      <section id="skills" className="skills-bg">
        <div className="section">
          <div className="section-label">Skills</div>
          <h2 className="section-title">Tech Stack</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, tags]) => (
              <div key={category} className="skill-category">
                <div className="skill-cat-title">{category}</div>
                <div className="skill-tags">
                  {tags.map((tag) => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ======================== PROJECTS ======================== */}
      <section id="projects">
        <div className="section">
          <div className="section-label">Projects</div>
          <h2 className="section-title">Selected Work</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`project-card${project.featured ? " project-featured" : ""}`}
              >
                <div className="project-num">Project {project.id}</div>
                <div className="project-title">{project.title}</div>
                <div className="project-desc">{project.desc}</div>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
                  View Project
                  <span className="project-arrow">↗</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ======================== CONTACT ======================== */}
      <section id="contact" className="contact-bg">
        <div className="section">
          <div className="contact-inner">
            <div>
              <div className="section-label">Contact</div>
              <h2 className="contact-big-text">
                <div>Let's</div>
                <div>Build</div>
                <div className="hollow">Together.</div>
              </h2>
              <p className="contact-sub">
                Have a project in mind or want to collaborate? I'm always open
                to interesting conversations and new opportunities.
              </p>
            </div>

            <div className="contact-links">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="contact-link-row"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <span className="contact-link-label">{item.label}</span>
                    <span className="contact-link-value">{item.value}</span>
                  </div>
                  <span className="contact-link-icon">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================== FOOTER ======================== */}
      <footer className="footer">
        <div className="footer-text">
          © 2026 <span>Devesh Kumar</span>. All rights reserved.
        </div>
        <div className="footer-text">
          Designed & Built with <span>♥</span>
        </div>
      </footer>
    </>
  );
}