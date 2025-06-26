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
  title: "Woojae Portfolio - Frontend Developer",
  description: "프론트엔드 개발자 우재의 포트폴리오 웹사이트입니다. React, Next.js, TypeScript를 활용한 프로젝트들을 확인해보세요.",
  keywords: ["프론트엔드", "개발자", "React", "Next.js", "TypeScript", "포트폴리오"],
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
    title: "Woojae Portfolio - Frontend Developer",
    description: "프론트엔드 개발자 우재의 포트폴리오 웹사이트입니다.",
    url: 'https://your-domain.vercel.app',
    siteName: 'Woojae Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Woojae Portfolio',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Woojae Portfolio - Frontend Developer",
    description: "프론트엔드 개발자 우재의 포트폴리오 웹사이트입니다.",
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
