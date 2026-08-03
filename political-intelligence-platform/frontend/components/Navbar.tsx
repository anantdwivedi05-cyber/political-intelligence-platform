export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#0f172a",
        color: "white",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #334155",
      }}
    >
      <div
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#38bdf8",
        }}
      >
        Political Intelligence Platform
      </div>

      <div
        style={{
          display: "flex",
          gap: "25px",
          fontSize: "16px",
        }}
      >
        <a
          href="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Home
        </a>

        <a
          href="#"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Compare
        </a>

        <a
          href="#"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          About
        </a>

        <a
          href="#"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
