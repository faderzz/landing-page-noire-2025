import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Source_Sans_3, Manrope } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { siteDetails } from '@/data/siteDetails';

import "./globals.css";

const manrope = Manrope({ subsets: ['latin'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  keywords: siteDetails.metadata.keywords,
  authors: [{ name: siteDetails.author }],
  creator: siteDetails.author,
  publisher: siteDetails.company.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteDetails.siteUrl),
  alternates: {
    canonical: siteDetails.siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: siteDetails.locale,
    url: siteDetails.siteUrl,
    siteName: siteDetails.siteName,
    title: siteDetails.metadata.title.default,
    description: siteDetails.metadata.description,
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: `${siteDetails.siteName} - ${siteDetails.company.description}`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: siteDetails.social.twitter,
    creator: siteDetails.social.twitter,
    title: siteDetails.metadata.title.default,
    description: siteDetails.metadata.description,
    images: {
      url: '/opengraph-image.png',
      alt: `${siteDetails.siteName} - ${siteDetails.company.description}`,
    },
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
  verification: {
    google: '', // Add Google Search Console verification meta tag when available
    yandex: '',
    yahoo: '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteDetails.language}>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${manrope.className} ${sourceSans.className} antialiased`}
      >
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
