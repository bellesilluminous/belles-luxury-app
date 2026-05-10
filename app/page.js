import Head from "next/head";

export default function Home() {
  const categories = [
    {
      title: "New Arrivals",
      image:
        "https://bellesilluminous.in/cdn/shop/collections/new-arrivals.jpg",
    },

    {
      title: "Jar Candles",
      image:
        "https://bellesilluminous.in/cdn/shop/collections/jar-candles.jpg",
    },

    {
      title: "Floral Candles",
      image:
        "https://bellesilluminous.in/cdn/shop/collections/floral-candles.jpg",
    },

    {
      title: "Dessert Candles",
      image:
        "https://bellesilluminous.in/cdn/shop/collections/dessert-candles.jpg",
    },

    {
      title: "Gift Collection",
      image:
        "https://bellesilluminous.in/cdn/shop/collections/gift-box.jpg",
    },

    {
      title: "Aroma Wax Melts",
      image:
        "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Artisan Candles",
      image:
        "https://images.unsplash.com/photo-1630602969503-b5e0b6654c0c?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Glass Bowl Candles",
      image:
        "https://images.unsplash.com/photo-1602874801006-e26bcb09689b?q=80&w=1200&auto=format&fit=crop",
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
            height: "100vh",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1602874801006-e26bcb09689b?q=80&w=1800&auto=format&fit=crop')",
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
              background: "rgba(0,0,0,0.45)",
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
                fontSize: "110px",
                color: "#f7e7ce",
                fontWeight: "700",
                marginBottom: "25px",
                lineHeight: "1",
                letterSpacing: "2px",
              }}
            >
              Belles Illuminous
            </h1>

            <p
              style={{
                color: "#f7e7ce",
                fontSize: "26px",
                letterSpacing: "4px",
                marginBottom: "45px",
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
                color: "#f7e7ce",
                fontSize: "18px",
                letterSpacing: "3px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              SHOP CANDLES
            </button>
          </div>
        </div>

        {/* COLLECTION SECTION */}

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "90px 30px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "54px",
              color: "#3e3129",
              marginBottom: "70px",
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
                  background: "white",
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

                <div
                  style={{
                    padding: "26px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "30px",
                      color: "#3e3129",
                      marginBottom: "20px",
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    {category.title}
                  </h3>

                  <button
                    style={{
                      width: "100%",
                      padding: "16px",
                      background: "#3e3129",
                      color: "white",
                      border: "none",
                      borderRadius: "50px",
                      fontSize: "16px",
                      cursor: "pointer",
                      letterSpacing: "2px",
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
