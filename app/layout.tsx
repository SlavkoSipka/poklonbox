import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pokloni - Ruže za Dan zaljubljenih | Poklon koji izgleda skupo",
  description:
    "Premium pokloni za Dan zaljubljenih. Elegantne ruže u kutijama i svetleće večne ruže u kupoli. Spremno za poklon. Brza dostava.",
  openGraph: {
    title: "Pokloni - Ruže za Dan zaljubljenih",
    description: "Poklon koji izgleda skupo. Spremno za poklanjanje.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 3000,
              style: {
                background: "#fff",
                color: "#1f2937",
                border: "1px solid #fecdd3",
              },
            }}
          />
        </CartProvider>
      </body>
    </html>
  );
}
