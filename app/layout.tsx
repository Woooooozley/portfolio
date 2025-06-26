import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pearl - Branding & Product Design",
  description: "Discover the essence of Pearl, a free Framer template. Let's shape your brand into a masterpiece together.",
  keywords: ["branding", "product design", "UX/UI", "framer template", "portfolio", "design"],
  authors: [{ name: "Dawid Pietrasiak" }],
  creator: "Dawid Pietrasiak",
  publisher: "Dawid Pietrasiak",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.vercel.app'),
  openGraph: {
    title: "Pearl - Branding & Product Design",
    description: "Discover the essence of Pearl, a free Framer template. Let's shape your brand into a masterpiece together.",
    url: 'https://your-domain.vercel.app',
    siteName: 'Pearl Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pearl Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pearl - Branding & Product Design",
    description: "Discover the essence of Pearl, a free Framer template. Let's shape your brand into a masterpiece together.",
    images: ['/og-image.png'],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
