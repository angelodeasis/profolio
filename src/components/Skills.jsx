import { FadeIn } from "../hooks/useFadeIn";
import { SKILLS } from "../data/skills";

export default function Skills() {
  return (
    <section id="Skills" style={{ padding: "100px 24px", borderTop: "1px solid #0e1e33" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <p className="section-label">What I work with</p>
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
            Skills & Tech
          </h2>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 32,
          }}
        >
          {Object.entries(SKILLS).map(([category, items], i) => (
            <FadeIn key={category} delay={i * 0.08}>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 16,
                  }}
                >
                  <span className="glow-dot" />
                  <span style={{ fontWeight: 600, fontSize: 14, color: "#7fb3e8" }}>
                    {category}
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {items.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
