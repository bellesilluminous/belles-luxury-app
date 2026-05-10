export const metadata = {
  title: "Belles Illuminous",
  description: "Luxury handmade candles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
