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
  title: "LEEWOOJAE - Product Designer",
  description: "Product designer who has been working as a designer since 2022. Based in Seoul, Korea. Specializing in UX/UI design, branding, and mobile applications.",
  keywords: ["product designer", "UX/UI", "branding", "mobile app", "portfolio", "design", "Seoul"],
  authors: [{ name: "Lee Woojae" }],
  creator: "Lee Woojae",
  publisher: "Lee Woojae",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.vercel.app'),
  openGraph: {
    title: "LEEWOOJAE - Product Designer",
    description: "Product designer who has been working as a designer since 2022. Based in Seoul, Korea.",
    url: 'https://your-domain.vercel.app',
    siteName: 'LEEWOOJAE Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LEEWOOJAE Portfolio',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "LEEWOOJAE - Product Designer",
    description: "Product designer who has been working as a designer since 2022. Based in Seoul, Korea.",
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
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
