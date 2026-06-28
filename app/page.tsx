export default function Home() {
  return (
    <main
      style={{
        background: "#0d0d0d",
        color: "#fff",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <h1 style={{ color: "#39ff14", fontSize: "48px" }}>
        ARENODOCRAQUE1.0
      </h1>

      <p>As melhores chuteiras premium.</p>

      <a
        href="https://wa.me/5574999685378"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "15px 30px",
          background: "#25D366",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "10px",
          fontWeight: "bold"
        }}
      >
        Comprar pelo WhatsApp
      </a>
    </main>
  );
}
