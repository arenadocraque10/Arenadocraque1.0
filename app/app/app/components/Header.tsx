export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "#111",
        borderBottom: "2px solid #39ff14",
      }}
    >
      <h2 style={{ color: "#39ff14" }}>ARENODOCRAQUE1.0</h2>

      <nav style={{ display: "flex", gap: "20px" }}>
        <a href="#" style={{ color: "#fff" }}>Início</a>
        <a href="#" style={{ color: "#fff" }}>Chuteiras</a>
        <a href="#" style={{ color: "#fff" }}>Categorias</a>
      </nav>

      <a
        href="https://wa.me/5574999685378"
        style={{
          background: "#25D366",
          color: "#fff",
          padding: "10px 18px",
          borderRadius: "8px",
          fontWeight: "bold",
        }}
      >
        WhatsApp
      </a>
    </header>
  );
}
