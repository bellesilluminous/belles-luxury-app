export default function Home() {
  const categories = [
    {
      title: "Aroma Wax Melts",
      image:
        "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Artisan Candles",
      image:
        "https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Artisan Glass Bowl Candles",
      image: "/images/dessert-candle.jpg",
    },

    {
      title: "Best Sellers",
      image:
        "https://images.unsplash.com/photo-1602874801006-79e12f7f7d16?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Buddha Candles",
      image:
        "https://images.unsplash.com/photo-1608181831718-15d2d5cb52b8?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Candles in Wooden Bowls",
      image:
        "https://images.unsplash.com/photo-1612198524045-9c2b0b8f58bd?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Flower & Bouquet Candles",
      image:
        "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Jar Candles",
      image:
        "https://images.unsplash.com/photo-1608181831718-15d2d5cb52b8?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "New Arrivals",
      image:
        "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Scented Candles",
      image:
        "https://images.unsplash.com/photo-1608181831718-15d2d5cb52b8?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Tealight Candles",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Dessert Candles",
      image: "/images/dessert-candle.jpg",
    },

    {
      title: "Gift Collection",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0ff?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Romantic Collection",
      image:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main
      style={{
        background:
          "linear-gradient(to bottom, #f9f4ef, #f3e5d7, #efe1d3)",
        minHeight: "100vh",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* HERO SECTION */}

      <section
        style={{
          position: "relative",
          height: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1602874801006-79e12f7f7d16?q=80&w=1800&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* DARK OVERLAY */}

        <div
          style={{
            position: "absolute",
            inset: "0",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.65))",
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
              fontSize: "95px",
              color: "white",
              fontWeight: "bold",
              letterSpacing: "3px",
              marginBottom: "25px",
              lineHeight: "1.1",
              fontStyle: "italic",
              textShadow: "0 6px 30px rgba(0,0,0,0.5)",
            }}
          >
            Belles Illuminous
          </h1>

          <p
            style={{
              fontSize: "25px",
              color: "#f4e8dc",
              lineHeight: "1.8",
              marginBottom: "40px",
            }}
          >
            Luxury handmade candles crafted to transform
            everyday moments into timeless memories.
          </p>

          <button
            style={{
              padding: "18px 44px",
              borderRadius: "50px",
              border: "none",
              background: "#f1ddca",
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
