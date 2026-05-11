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
        "https://images.unsplash.com/photo-1630939687530-241a4f9c0b52?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Floral Candles",
      image:
        "https://images.unsplash.com/photo-1612198528636-c3a1ec5d9b63?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Dessert Candles",
      image:
        "https://images.unsplash.com/photo-1608181831718-8f6f4f2f7a5a?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Gift Collection",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Buddha Candles",
      image:
        "https://images.unsplash.com/photo-1602874801006-69c1e5f5f33e?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Candles in Wooden Bowls",
      image:
        "https://images.unsplash.com/photo-1616628182509-6d5d8d3e1e44?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Tealight Candles",
      image:
        "https://images.unsplash.com/photo-1608181831718-8f6f4f2f7a5a?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Artisan Candles",
      image:
        "https://images.unsplash.com/photo-1630939687530-241a4f9c0b52?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Flower & Bouquet Candles",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main
      style={{
        background: "#f7f2eb",
        minHeight: "100vh",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* HERO SECTION */}

      <section
        style={{
          height: "100vh",
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          textAlign: "center",
        }}
      >
        {/* DARK OVERLAY */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
          }}
        />

        {/* CONTENT */}

        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "110px",
              color: "#f5dfb2",
              fontFamily: "cursive",
              fontWeight: "bold",
              marginBottom: "20px",
              textShadow: "0 6px 30px rgba(0,0,0,0.7)",
              lineHeight: "1",
            }}
          >
            Belles Illuminous
          </h1>

          <p
            style={{
              color: "#f8e8c9",
              fontSize: "26px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "45px",
            }}
          >
            Luxury Handmade Candles
            <br />
            Crafted To Transform Every Moment
          </p>

          <button
            style={{
              padding: "18px 55px",
              background: "transparent",
              border: "2px solid #d8b36a",
              color: "#f5dfb2",
              fontSize: "18px",
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
          padding: "100px 50px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "60px",
            color: "#3e3129",
            marginBottom: "70px",
          }}
        >
          Collections
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "35px",
          }}
        >
          {categories.map((category) => (
            <div
              key={category.title}
              style={{
                background: "#fff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
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
                  padding: "24px",
                  background: "#fffdf9",
                }}
              >
                <h3
                  style={{
                    fontSize: "28px",
                    color: "#3e3129",
                    marginBottom: "12px",
                  }}
                >
                  {category.title}
                </h3>

                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#9b6b2f",
                    fontSize: "18px",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
