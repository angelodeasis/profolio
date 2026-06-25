import { FadeIn } from "../hooks/useFadeIn";

const STATS = [
  { label: "Internships/Research", value: "4" },
  { label: "Projects", value: "5+" },
  { label: "Years Coding", value: "4+" },
];

export default function Hero({ onScrollTo }) {
  return (
    <section
      id="About"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "100px 24px 80px",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, #0d2a5533 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", position: "relative" }}>
        <FadeIn delay={0}>
          <p className="section-label">Software Engineer</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1
            className="hero-title"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: 72,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              color: "#e8f0fe",
              marginBottom: 24,
            }}
          >
            Angelo De Asis
            <br />
            <span style={{ color: "#2563eb" }}>Full-stack</span>
            <br />
            web developer.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            style={{
              fontSize: 18,
              color: "#6b9bd2",
              maxWidth: 520,
              lineHeight: 1.7,
              marginBottom: 40,
            }}
          >
            "CS graduate building full-stack apps and AI-powered tools. Focused on backend systems, ML applications, and React development. Currently open to new opportunities."
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={() => onScrollTo("Projects")}>
              View my work →
            </button>

            <button className="btn-outline" onClick={() => onScrollTo("Contact")}>
              Get in touch
            </button>

            <a
              href="https://www.linkedin.com/in/angelo-de-asis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-outline">
                LinkedIn
              </button>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div style={{ display: "flex", gap: 32, marginTop: 64, alignItems: "center" }}>
            {STATS.map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: 28,
                    color: "#e8f0fe",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: 12, color: "#2a4a70", marginTop: 2 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}