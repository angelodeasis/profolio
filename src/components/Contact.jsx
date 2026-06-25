import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FadeIn } from "../hooks/useFadeIn";

export default function Contact() {
  const [state, handleSubmit] = useForm("meebakda");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("angelodeasis18@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="Contact" style={{ padding: "100px 24px", borderTop: "1px solid #0e1e33" }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <FadeIn>
          <p className="section-label">Let's work together</p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 40,
              fontWeight: 800,
              letterSpacing: "-1px",
              marginBottom: 16,
              color: "#e8f0fe",
            }}
          >
            Get in touch
          </h2>
          <p style={{ color: "#4a7aaa", fontSize: 16, lineHeight: 1.7, marginBottom: 48 }}>
            Whether you have a project in mind, a role to fill, or just want to
            connect — my inbox is always open.
          </p>
        </FadeIn>

        {state.succeeded ? (
          <FadeIn>
            <div
              style={{
                padding: 32,
                background: "#090f1e",
                border: "1px solid #1a3050",
                borderRadius: 16,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 12 }}>🎉</div>
              <p style={{ fontSize: 18, fontWeight: 600, color: "#e8f0fe", marginBottom: 8 }}>
                Message sent!
              </p>
              <p style={{ color: "#4a7aaa" }}>I'll get back to you within 24 hours.</p>
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="two-col" style={{ display: "flex", gap: 16 }}>
                <input
                  className="input-field"
                  type="text"
                  name="name"
                  placeholder="Your name"
                />
                <input
                  className="input-field"
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                />
              </div>
              <ValidationError field="email" prefix="Email" errors={state.errors} style={{ color: "#ef4444", fontSize: 13 }} />
              <textarea
                className="input-field"
                name="message"
                placeholder="What's on your mind?"
                rows={5}
                style={{ resize: "vertical" }}
                required
              />
              <ValidationError field="message" prefix="Message" errors={state.errors} style={{ color: "#ef4444", fontSize: 13 }} />
              <div>
                <button className="btn-primary" type="submit" disabled={state.submitting}>
                  {state.submitting ? "Sending..." : "Send message →"}
                </button>
              </div>
            </form>
          </FadeIn>
        )}

        <FadeIn delay={0.2}>
          <div style={{ display: "flex", gap: 16, marginTop: 40, flexWrap: "wrap" }}>
            <button className="btn-outline" onClick={copyEmail}>
              {copiedEmail ? "✓ Copied!" : "Copy email"}
            </button>
            <a href="https://linkedin.com/in/angelo-de-asis" target="_blank" rel="noreferrer">
              <button className="btn-outline">LinkedIn ↗</button>
            </a>
            <a href="https://github.com/angelodeasis" target="_blank" rel="noreferrer">
              <button className="btn-outline">GitHub ↗</button>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}