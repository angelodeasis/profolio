import { FadeIn } from "../hooks/useFadeIn";
import { PROJECTS } from "../data/projects";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 16,
        }}
      >
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 20,
            color: "#e8f0fe",
          }}
        >
          {project.title}
        </h3>
        <div style={{ display: "flex", gap: 12 }}>
          <a
            href={project.github}
            style={{ color: "#2a4a70", fontSize: 13, transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.target.style.color = "#7fb3e8")}
            onMouseLeave={(e) => (e.target.style.color = "#2a4a70")}
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <p
        style={{
          fontSize: 14,
          color: "#4a7aaa",
          lineHeight: 1.7,
          marginBottom: 20,
        }}
      >
        {project.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {project.stack.map((tech) => (
          <span key={tech} className="stack-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="Projects" style={{ padding: "100px 24px", borderTop: "1px solid #0e1e33" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <p className="section-label">What I've built</p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 40,
              fontWeight: 800,
              letterSpacing: "-1px",
              marginBottom: 56,
              color: "#e8f0fe",
            }}
          >
            Projects
          </h2>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
