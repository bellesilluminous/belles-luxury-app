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
        background: "#f7f1eb",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* HERO SECTION */}

      <div
        style={{
          position: "relative",
          height: "90vh",
          overflow: "hidden",
          marginBottom: "80px",
        }}
      >
        <img
          src="/images/hero.jpg"
          alt="Luxury Candles"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: "0",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.45))",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "78px",
              color: "white",
              marginBottom: "25px",
              letterSpacing: "2px",
              fontFamily: "cursive",
              textShadow: "0 4px 20px rgba(0,0,0,0.4)",
            }}
          >
            Belles Illuminous
          </h1>

          <p
            style={{
              fontSize: "24px",
              color: "#f8ebe1",
              maxWidth: "750px",
              lineHeight: "1.7",
              marginBottom: "35px",
            }}
          >
            Luxury handmade candles crafted to turn moments into memories.
          </p>

          <button
            style={{
              padding: "18px 42px",
              borderRadius: "50px",
              border: "none",
              background: "#f3dfcd",
              color: "#3e3129",
              fontSize: "16px",
              cursor: "pointer",
              letterSpacing: "1px",
              fontWeight: "bold",
            }}
          >
            Explore Collections
          </button>
        </div>
      </div>

      {/* CATEGORY SECTION */}

      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "35px",
          padding: "0 20px 80px",
        }}
      >
        {categories.map((category) => (
          <div
            key={category.title}
            style={{
              background: "white",
              borderRadius: "35px",
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
                padding: "30px",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "34px",
                  color: "#3e3129",
                  marginBottom: "25px",
                }}
              >
                {category.title}
              </h2>

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
                  letterSpacing: "1px",
                }}
              >
                Explore Collection
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
