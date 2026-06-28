export const metadata = {
  title: "ARENODOCRAQUE1.0",
  description: "Catálogo Premium de Chuteiras",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          background: "#0d0d0d",
          color: "#fff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
