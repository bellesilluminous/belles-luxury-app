export default function Home() {
  const categories = [
    {
      title: "New Arrivals",
      image:
        "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Jar Candles",
      image:
        "https://images.unsplash.com/photo-1630585308572-f53438fc684f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Dessert Candles",
      image:
        "https://images.unsplash.com/photo-1608181831718-15fcd74bceaa?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Floral Candles",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Gift Collection",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Buddha Candles",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Tealight Candles",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Candles in Wooden Bowls",
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main
      style={{
        background: "#f8f3ed",
        minHeight: "100vh",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          height: "100vh",
          backgroundImage:
            "url('/images/ChatGPT Image May 10, 2026, 06_57_32 PM.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
          }}
        ></div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            color: "#f6e7c8",
            padding: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "110px",
              fontWeight: "bold",
              fontFamily: "cursive",
              marginBottom: "20px",
              textShadow: "0 4px 20px rgba(0,0,0,0.4)",
            }}
          >
            Belles Illuminous
          </h1>

          <p
            style={{
              fontSize: "26px",
              letterSpacing: "4px",
              marginBottom: "12px",
            }}
          >
            LUXURY HANDMADE CANDLES
          </p>

          <p
            style={{
              fontSize: "22px",
              letterSpacing: "3px",
              marginBottom: "40px",
            }}
          >
            CRAFTED TO TRANSFORM EVERY MOMENT
          </p>

          <button
            style={{
              padding: "18px 50px",
              border: "2px solid #f6d27a",
              background: "transparent",
              color: "#f6e7c8",
              fontSize: "20px",
              letterSpacing: "3px",
              cursor: "pointer",
            }}
          >
            SHOP CANDLES
          </button>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "80px 40px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "52px",
            marginBottom: "70px",
            color: "#3e3129",
            fontFamily: "Georgia, serif",
          }}
        >
          Collections
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
          }}
        >
          {categories.map((category) => (
            <div
              key={category.title}
              style={{
                background: "white",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                transition: "0.3s",
              }}
            >
              <img
                src={category.image}
                alt={category.title}
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontSize: "28px",
                    color: "#3e3129",
                    marginBottom: "20px",
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
                    cursor: "pointer",
                    letterSpacing: "2px",
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
