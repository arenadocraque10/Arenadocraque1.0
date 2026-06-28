import ProductCard from "./ProductCard";

const produtos = [
  {
    nome: "Nike Mercurial Vapor 16",
    preco: "R$ 360",
    imagem: "https://picsum.photos/400/300?random=1",
  },
  {
    nome: "Adidas Predator Elite",
    preco: "R$ 360",
    imagem: "https://picsum.photos/400/300?random=2",
  },
  {
    nome: "Mizuno Morelia Neo",
    preco: "R$ 360",
    imagem: "https://picsum.photos/400/300?random=3",
  },
  {
    nome: "Puma Future Ultimate",
    preco: "R$ 360",
    imagem: "https://picsum.photos/400/300?random=4",
  },
];

export default function ProductGrid() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
        gap: "20px",
        padding: "40px",
      }}
    >
      {produtos.map((produto) => (
        <ProductCard
          key={produto.nome}
          nome={produto.nome}
          preco={produto.preco}
          imagem={produto.imagem}
        />
      ))}
    </section>
  );
}
