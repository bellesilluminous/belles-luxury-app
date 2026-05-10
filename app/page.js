export default function Home() {
  const categories = [
    {
      title: "New Arrivals",
      image: "/images/new-arrivals.jpg",
    },

    {
      title: "Jar Candles",
      image: "/images/jar-candles.jpg",
    },

    {
      title: "Dessert Candles",
      image: "/images/dessert-candle.jpg",
    },

    {
      title: "Floral Candles",
      image: "/images/floral-candles.jpg",
    },

    {
      title: "Scented Candles",
      image: "/images/scented-candles.jpg",
    },

    {
      title: "Artisan Candles",
      image: "/images/artisan-candles.jpg",
    },

    {
      title: "Artisan Glass Bowl Candles",
      image: "/images/glass-bowl.jpg",
    },

    {
      title: "Candles in Wooden Bowls",
      image: "/images/wooden-bowl.jpg",
    },

    {
      title: "Buddha Candles",
      image: "/images/buddha-candles.jpg",
    },

    {
      title: "Flower & Bouquet Candles",
      image: "/images/flower-bouquet.jpg",
    },

    {
      title: "Best Sellers",
      image: "/images/best-sellers.jpg",
    },

    {
      title: "Aroma Wax Melts",
      image: "/images/aroma-wax.jpg",
    },

    {
      title: "Tealight Candles",
      image: "/images/tealight.jpg",
    },

    {
      title: "Gift Collection",
      image: "/images/gift-box.jpg",
    },

    {
      title: "Romantic Collection",
      image: "/images/romantic.jpg",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, #f8f3ee, #f3e6d8, #efe1d2)",
        fontFamily: "'Times New Roman', serif",
      }}
    >
      {/* HERO SECTION */}

      <section
        style={{
          position: "relative",
          height: "100vh",
          backgroundImage:
            "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* OVERLAY */}

        <div
          style={{
            position: "absolute",
            inset: "0",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.65))",
          }}
        />

        {/* CONTENT */}

        <div
          style={{
            position: "relative",
            zIndex: "2",
            padding: "20px",
            maxWidth: "950px",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "92px",
              fontWeight: "700",
              marginBottom: "28px",
              letterSpacing: "2px",
              lineHeight: "1.1",
              fontStyle: "italic",
              textShadow: "0 6px 30px rgba(0,0,0,0.6)",
            }}
          >
            Belles Illuminous
          </h1>

          <p
            style={{
              color: "#f5e9dd",
              fontSize: "25px",
              lineHeight: "1.8",
              marginBottom: "42px",
            }}
          >
            Luxury handmade candles crafted to transform moments
            into timeless memories.
          </p>

          <button
            style={{
              padding: "18px 42px",
              borderRadius: "50px",
              border: "none",
              background: "#f3dfcd",
              color: "#3e3129",
              fontSize: "16px",
              fontWeight: "bold",
              letterSpacing: "1px",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            }}
          >
            Explore Collections
          </button>
        </div>
      </section>

      {/* COLLECTION SECTION */}

      <section
        style={{
          maxWidth: "1450px",
          margin: "0 auto",
          padding: "90px 25px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "58px",
            color: "#3e3129",
            marginBottom: "75px",
            fontStyle: "italic",
            letterSpacing: "1px",
          }}
        >
          Luxury Collections
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "38px",
          }}
        >
          {categories.map((category) => (
            <div
              key={category.title}
              style={{
                background: "rgba(255,255,255,0.82)",
                backdropFilter: "blur(10px)",
                borderRadius: "34px",
                overflow: "hidden",
                boxShadow: "0 12px 35px rgba(0,0,0,0.12)",
                transition: "0.3s ease",
              }}
            >
              <img
                src={category.image}
                alt={category.title}
                style={{
                  width: "100%",
                  height: "420px",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  padding: "30px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "30px",
                    color: "#3e3129",
                    marginBottom: "24px",
                    fontStyle: "italic",
                    lineHeight: "1.4",
                  }}
                >
                  {category.title}
                </h3>

                <button
                  style={{
                    width: "100%",
                    padding: "16px",
                    borderRadius: "50px",
                    border: "none",
                    background: "#3e3129",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    cursor: "pointer",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  }}
                >
                  Explore Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
