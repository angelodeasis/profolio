export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #0e1e33", padding: "32px 24px", textAlign: "center" }}>
      <p style={{ color: "#152035", fontSize: 13 }}>
        Designed & built by <span style={{ color: "#2a4a70" }}>Your Name</span> ·{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
