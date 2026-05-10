import Head from "next/head";

export default function Home() {
  const categories = [
    {
      title: "New Arrivals",
      image:
        "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Jar Candles",
      image:
        "https://images.unsplash.com/photo-1630602969503-b5e0b6654c0c?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Floral Candles",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Dessert Candles",
      image:
        "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Gift Collection",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Aroma Wax Melts",
      image:
        "https://images.unsplash.com/photo-1602874801006-e26bcb09689b?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Artisan Candles",
      image:
        "https://images.unsplash.com/photo-1630602969503-b5e0b6654c0c?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Glass Bowl Candles",
      image:
        "https://images.unsplash.com/photo-1602524813144-f86d9db0f7f5?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Best Sellers",
      image:
        "https://images.unsplash.com/photo-1608181831718-4e2f7b3f6a67?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Buddha Candles",
      image:
        "https://images.unsplash.com/photo-1612196808214-b7e239e5c9e8?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Wooden Bowl Candles",
      image:
        "https://images.unsplash.com/photo-1603204077779-bed963ea7dc2?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Flower & Bouquet Candles",
      image:
        "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Scented Candles",
      image:
        "https://images.unsplash.com/photo-1608181831652-c2b0d3e67d5d?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Tealight Candles",
      image:
        "https://images.unsplash.com/photo-1602524813144-f86d9db0f7f5?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <Head>
        <title>Belles Illuminous</title>

        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main
        style={{
          background: "#f8f3ed",
          minHeight: "100vh",
          fontFamily: "Arial",
        }}
      >
        {/* HERO SECTION */}

        <div
          style={{
            height: "95vh",
            backgroundImage: "url('/images/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.25)",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 2,
              padding: "20px",
            }}
          >
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "120px",
                fontWeight: "700",
                fontStyle: "italic",
                color: "#f5e6c8",
                letterSpacing: "2px",
                textShadow: "0 6px 25px rgba(0,0,0,0.6)",
                lineHeight: "1",
                marginBottom: "20px",
              }}
            >
              Belles Illuminous
            </h1>

            <p
              style={{
                color: "#f5e6c8",
                fontSize: "24px",
                letterSpacing: "4px",
                marginBottom: "45px",
                textShadow: "0 4px 15px rgba(0,0,0,0.5)",
              }}
            >
              LUXURY HANDMADE CANDLES
              <br />
              CRAFTED TO TRANSFORM EVERY MOMENT
            </p>

            <button
              style={{
                padding: "18px 55px",
                background: "transparent",
                border: "2px solid #d4af37",
                color: "#f5e6c8",
                fontSize: "18px",
                letterSpacing: "3px",
                cursor: "pointer",
              }}
            >
              SHOP CANDLES
            </button>
          </div>
        </div>

        {/* COLLECTIONS */}

        <div
          style={{
            maxWidth: "1450px",
            margin: "0 auto",
            padding: "100px 30px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "60px",
              marginBottom: "70px",
              color: "#3e3129",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Our Collections
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "35px",
            }}
          >
            {categories.map((category) => (
              <div
                key={category.title}
                style={{
                  background: "#fff",
                  borderRadius: "22px",
                  overflow: "hidden",
                  boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
                  transition: "0.3s",
                }}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  style={{
                    width: "100%",
                    height: "340px",
                    objectFit: "cover",
                  }}
                />

                <div style={{ padding: "28px" }}>
                  <h3
                    style={{
                      fontSize: "32px",
                      color: "#3e3129",
                      marginBottom: "22px",
                      fontFamily: "'Cormorant Garamond', serif",
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
                      fontSize: "15px",
                      letterSpacing: "2px",
                      cursor: "pointer",
                    }}
                  >
                    EXPLORE COLLECTION
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
