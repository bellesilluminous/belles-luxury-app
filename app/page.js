export default function Home() {
  const categories = [
    {
      title: "New Arrivals",
      image: "/images/dessert-candle.jpg",
    },

    {
      title: "Jar Candles",
      image: "/images/rose-jar.jpg",
    },

    {
      title: "Floral Candles",
      image: "/images/peony.jpg",
    },

    {
      title: "Dessert Candles",
      image: "/images/berry-dessert.jpg",
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
          "linear-gradient(to bottom, #f8f1ea, #efe3d7, #f7f1eb)",
        fontFamily: "'Times New Roman', serif",
      }}
    >
      {/* HERO SECTION */}

      <section
        style={{
          position: "relative",
          height: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1800&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* DARK OVERLAY */}

        <div
          style={{
            position: "absolute",
            inset: "0",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.55))",
          }}
        />

        {/* HERO CONTENT */}

        <div
          style={{
            position: "relative",
            zIndex: "2",
            padding: "20px",
            maxWidth: "900px",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "88px",
              fontWeight: "bold",
              marginBottom: "30px",
              letterSpacing: "2px",
              lineHeight: "1.1",
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              textShadow: "0 6px 30px rgba(0,0,0,0.55)",
            }}
          >
            Belles Illuminous
          </h1>

          <p
            style={{
              color: "#f5e9dd",
              fontSize: "24px",
              lineHeight: "1.8",
              marginBottom: "40px",
            }}
          >
            Luxury handmade candles crafted to transform moments into timeless memories.
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

      {/* CATEGORY SECTION */}

      <section
        style={{
          maxWidth: "1350px",
          margin: "0 auto",
          padding: "90px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "54px",
            color: "#3e3129",
            marginBottom: "70px",
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
            gap: "40px",
          }}
        >
          {categories.map((category) => (
            <div
              key={category.title}
              style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(12px)",
                borderRadius: "38px",
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
                  height: "430px",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  padding: "32px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "34px",
                    color: "#3e3129",
                    marginBottom: "25px",
                    fontStyle: "italic",
                  }}
                >
                  {category.title}
                </h3>

                <button
                  style={{
                    width: "100%",
                    padding: "17px",
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
