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
        background:
          "linear-gradient(to bottom, #f8f3ef, #f3e5d7, #efe1d3)",
        minHeight: "100vh",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* HERO SECTION */}

      <section
        style={{
          position: "relative",
          height: "100vh",
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* DARK LUXURY OVERLAY */}

        <div
          style={{
            position: "absolute",
            inset: "0",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.7))",
          }}
        />

        {/* HERO CONTENT */}

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
              fontSize: "110px",
              color: "#fff8f0",
              fontWeight: "900",
              letterSpacing: "3px",
              marginBottom: "28px",
              lineHeight: "1",
              fontFamily: "cursive",
              textShadow: "0 8px 35px rgba(0,0,0,0.6)",
            }}
          >
            Belles Illuminous
          </h1>

          <p
            style={{
              fontSize: "26px",
              color: "#f5e9dd",
              lineHeight: "1.8",
              marginBottom: "42px",
            }}
          >
            Luxury handmade candles crafted to transform
            everyday moments into timeless memories.
          </p>

          <button
            style={{
              padding: "18px 46px",
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

      {/* COLLECTIONS */}

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
                borderRadius: "34px",
                overflow: "hidden",
                boxShadow: "0 12px 35px rgba(0,0,0,0.12)",
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
