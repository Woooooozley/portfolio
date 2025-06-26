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
  title: "WOOJAE - Frontend Developer",
  description: "Frontend developer specializing in modern web applications. Based in Seoul, working remote. Let's create something extraordinary together.",
  keywords: ["frontend", "developer", "React", "Next.js", "TypeScript", "portfolio", "web applications"],
  authors: [{ name: "Woojae" }],
  creator: "Woojae",
  publisher: "Woojae",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.vercel.app'),
  openGraph: {
    title: "WOOJAE - Frontend Developer",
    description: "Frontend developer specializing in modern web applications. Based in Seoul, working remote.",
    url: 'https://your-domain.vercel.app',
    siteName: 'WOOJAE Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WOOJAE Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "WOOJAE - Frontend Developer",
    description: "Frontend developer specializing in modern web applications. Based in Seoul, working remote.",
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
