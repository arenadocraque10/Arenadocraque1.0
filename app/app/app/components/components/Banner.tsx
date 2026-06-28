export default function Banner() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "80px 20px",
        background:
          "linear-gradient(180deg, #0d0d0d 0%, #111111 100%)",
      }}
    >
      <h1
        style={{
          color: "#39ff14",
          fontSize: "52px",
          marginBottom: "20px",
        }}
      >
        ARENODOCRAQUE1.0
      </h1>

      <p
        style={{
          color: "#ccc",
          fontSize: "22px",
          marginBottom: "35px",
        }}
      >
        As melhores chuteiras Premium do Brasil
      </p>

      <a
        href="https://wa.me/5574999685378?text=Olá!%20Tenho%20interesse%20em%20uma%20chuteira."
        style={{
          background: "#25D366",
          color: "#fff",
          padding: "16px 30px",
          borderRadius: "10px",
          fontWeight: "bold",
        }}
      >
        Comprar pelo WhatsApp
      </a>
    </section>
  );
}
