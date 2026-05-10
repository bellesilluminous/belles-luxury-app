export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f1eb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        flexDirection: "column",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "20px",
          color: "#3e3129",
        }}
      >
        Belles Illuminous
      </h1>

      <p
        style={{
          fontSize: "20px",
          maxWidth: "600px",
          color: "#6c5b50",
          lineHeight: "1.6",
        }}
      >
        Luxury handmade candles crafted to turn moments into memories.
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "15px 30px",
          borderRadius: "50px",
          border: "none",
          background: "#3e3129",
          color: "white",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Shop Collection
      </button>
    </main>
  );
}
