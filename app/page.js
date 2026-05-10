export default function Home() {
  const categories = [
    {
      title: "New Arrivals",
      products: [
        {
          name: "Strawberry Dessert Candle",
          price: "₹499",
          image: "/images/dessert-candle.jpg",
        },
        {
          name: "Luxury Floral Jar Candle",
          price: "₹699",
          image: "/images/floral-jar.jpg",
        },
      ],
    },

    {
      title: "Jar Candles",
      products: [
        {
          name: "Rose Jar Candle",
          price: "₹599",
          image: "/images/rose-jar.jpg",
        },
        {
          name: "Vanilla Luxe Jar Candle",
          price: "₹649",
          image: "/images/vanilla-jar.jpg",
        },
      ],
    },

    {
      title: "Floral Candles",
      products: [
        {
          name: "Peony Bloom Candle",
          price: "₹399",
          image: "/images/peony.jpg",
        },
        {
          name: "Tulip Petal Candle",
          price: "₹350",
          image: "/images/tulip.jpg",
        },
      ],
    },

    {
      title: "Dessert Candles",
      products: [
        {
          name: "Berry Dessert Candle",
          price: "₹499",
          image: "/images/berry-dessert.jpg",
        },
        {
          name: "Cream Delight Candle",
          price: "₹599",
          image: "/images/cream.jpg",
        },
      ],
    },

    {
      title: "Gift Collection",
      products: [
        {
          name: "Luxury Gift Box Candle",
          price: "₹999",
          image: "/images/gift-box.jpg",
        },
        {
          name: "Romantic Candle Set",
          price: "₹1299",
          image: "/images/romantic.jpg",
        },
      ],
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
      <div
        style={{
          textAlign: "center",
          marginBottom: "70px",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            color: "#3e3129",
            marginBottom: "20px",
          }}
        >
          Belles Illuminous
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#6c5b50",
          }}
        >
          Luxury handmade candles crafted to turn moments into memories.
        </p>
      </div>

      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        {categories.map((category) => (
          <div
            key={category.title}
            style={{
              marginBottom: "80px",
            }}
          >
            <h2
              style={{
                color: "#3e3129",
                fontSize: "38px",
                marginBottom: "30px",
              }}
            >
              {category.title}
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "30px",
              }}
            >
              {category.products.map((product) => (
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

                  <div
                    style={{
                      padding: "24px",
                    }}
                  >
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
          </div>
        ))}
      </div>
    </main>
  );
}
