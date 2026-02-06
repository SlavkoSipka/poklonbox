import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavigationProgress from "@/components/NavigationProgress";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ScrollToTop from "@/components/ScrollToTop";
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
  metadataBase: new URL('https://poklonbox.rs'),
  title: {
    default: "PoklonBox - Ruže za Dan zaljubljenih | Poklon koji izgleda skupo",
    template: "%s | PoklonBox"
  },
  description:
    "Premium pokloni za Dan zaljubljenih. Elegantni buketi ruža, svetleće večne ruže i medvedići od ruža. Spremno za poklon. Brza dostava širom Srbije.",
  keywords: [
    "pokloni za dan zaljubljenih",
    "ruže za 14 februar",
    "buket ruža",
    "večne ruže",
    "ruža u kupoli",
    "medvedić od ruža",
    "poklon za devojku",
    "poklon za valentinovo",
    "romantični pokloni",
    "poklonbox"
  ],
  authors: [{ name: "PoklonBox" }],
  creator: "PoklonBox",
  publisher: "PoklonBox",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://poklonbox.rs",
    siteName: "PoklonBox",
    title: "PoklonBox - Premium pokloni za Dan zaljubljenih",
    description: "Elegantni buketi ruža, svetleće večne ruže i medvedići od ruža. Poklon koji izgleda skupo. Spremno za poklanjanje.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PoklonBox - Premium pokloni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PoklonBox - Premium pokloni za Dan zaljubljenih",
    description: "Elegantni buketi ruža i svetleće večne ruže. Poklon koji izgleda skupo.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
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
        <GoogleAnalytics />
        <ScrollToTop />
        <CartProvider>
          <NavigationProgress />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 animate-fadeIn">{children}</main>
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
