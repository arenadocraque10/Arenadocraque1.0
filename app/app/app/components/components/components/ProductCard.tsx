type Props = {
  nome: string;
  preco: string;
  imagem: string;
};

export default function ProductCard({
  nome,
  preco,
  imagem,
}: Props) {
  return (
    <div
      style={{
        background: "#151515",
        border: "1px solid #2d2d2d",
        borderRadius: "15px",
        overflow: "hidden",
      }}
    >
      <img
        src={imagem}
        alt={nome}
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "20px" }}>
        <h3>{nome}</h3>

        <p
          style={{
            color: "#39ff14",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          {preco}
        </p>

        <a
          href={`https://wa.me/5574999685378?text=Olá! Tenho interesse na ${nome}`}
          style={{
            display: "block",
            marginTop: "15px",
            background: "#25D366",
            color: "#fff",
            textAlign: "center",
            padding: "12px",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Comprar no WhatsApp
        </a>
      </div>
    </div>
  );
}
