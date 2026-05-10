       export default function Home() {
 const products = [
  {
    name: "Floral Dessert Glass Jar Candle",
    price: "₹500",
    image: "/images/dessert-candle.jpg",
  },
  {
    name: "Honey Bliss Coconut Candle",
    price: "₹350",
    image: "/images/honey-bliss.jpg",
  },
  {
    name: "Tulip Petal Layer Candle",
    price: "₹350",
    image: "/images/tulip.jpg",
  },
  {
    name: "Romantic Swan Candle",
    price: "₹499",
    image: "/images/romantic-swan.jpg",
  },
  {
    name: "Snowflake Glass Candle",
    price: "₹499",
    image: "/images/snowflake.jpg",
  },
  {
    name: "Shell Design Soy Candle",
    price: "₹300",
    image: "/images/shell.jpg",
  },
  {
    name: "Rose Heart Tealight Set",
    price: "₹199",
    image: "/images/rose-heart.jpg",
  },
  {
    name: "Lavender Heart Tealights",
    price: "₹199",
    image: "/images/lavender.jpg",
  },
  {
    name: "Citrus Blossom Tealights",
    price: "₹299",
    image: "/images/citrus.jpg",
  },
];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f1eb",
        padding: "40px 20px",
        fontFamily: "Arial",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1
          style={{
            fontSize: "54px",
            color: "#3e3129",
            marginBottom: "20px",
          }}
        >
          Belles Illuminous
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#6c5b50",
          }}
        >
          Luxury handmade candles crafted to turn moments into memories.
        </p>
      </div>

      <h2
        style={{
          textAlign: "center",
          color: "#3e3129",
          marginBottom: "40px",
          fontSize: "36px",
        }}
      >
        Featured Collection
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {products.map((product) => (
          <div
            key={product.name}
            style={{
              background: "white",
              borderRadius: "35px",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "380px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "24px" }}>
              <h3
                style={{
                  fontSize: "24px",
                  marginBottom: "10px",
                  color: "#3e3129",
                }}
              >
                {product.name}
              </h3>

              <p
                style={{
                  fontSize: "20px",
                  marginBottom: "20px",
                  color: "#6c5b50",
                }}
              >
                {product.price}
              </p>

              <button
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "50px",
                  border: "none",
                  background: "#3e3129",
                  color: "white",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
