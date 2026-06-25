const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

export default function Nav({ activeSection, onNavClick }) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: "blur(16px)",
        background: "rgba(6,11,20,0.88)",
        borderBottom: "1px solid #0e1e33",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 20,
            color: "#e8f0fe",
            letterSpacing: "-0.5px",
          }}
        >
          <span style={{ color: "#2563eb" }}>&lt;</span>
          AD
          <span style={{ color: "#2563eb" }}>/&gt;</span>
        </div>

        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <span
              key={link}
              className={`nav-link${activeSection === link ? " active" : ""}`}
              onClick={() => onNavClick(link)}
            >
              {link}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}
