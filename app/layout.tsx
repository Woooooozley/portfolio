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
  title: "Woojae Lee | Portfolio",
  description: "Hello, I'm Woojae Lee. Welcome to my portfolio showcasing my work in design and development.",
  keywords: ["portfolio", "design", "development", "Woojae Lee", "creative"],
  authors: [{ name: "Woojae Lee" }],
  creator: "Woojae Lee",
  publisher: "Woojae Lee",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.vercel.app'),
  openGraph: {
    title: "Woojae Lee | Portfolio",
    description: "Hello, I'm Woojae Lee. Welcome to my portfolio showcasing my work in design and development.",
    url: 'https://your-domain.vercel.app',
    siteName: 'Woojae Lee Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Woojae Lee Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Woojae Lee | Portfolio",
    description: "Hello, I'm Woojae Lee. Welcome to my portfolio showcasing my work in design and development.",
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
