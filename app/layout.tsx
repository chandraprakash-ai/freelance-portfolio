import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chandraprakash Prajapati — Premium Frontend & Business Websites",
  description: "Chandraprakash Prajapati builds fast, conversion-focused 3–4 page websites for small businesses. Design, lead capture, SEO, and WhatsApp automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={clsx(
          inter.variable,
          playfair.variable,
          "bg-beige text-charcoal font-sans antialiased min-h-screen flex flex-col"
        )}
      >
        {children}
      </body>
    </html>
  );
}
