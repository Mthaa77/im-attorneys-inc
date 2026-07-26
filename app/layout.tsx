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
  metadataBase: new URL("https://im-attorneys-inc-eta.vercel.app"),
  title: "IM Attorneys | Personal & Business Legal Counsel in Pretoria",
  description:
    "IM Attorneys is a 100% female black-owned law firm in Menlyn Maine, Pretoria, providing family, criminal, commercial, estate and litigation services.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "IM Attorneys | Personal & Business Legal Counsel in Pretoria",
    description:
      "Purposeful legal counsel for people and businesses from Menlyn Maine, Pretoria.",
    url: "/",
    siteName: "IM Attorneys",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "IM Attorneys — Purposeful legal counsel in Pretoria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IM Attorneys | Legal Counsel in Pretoria",
    description:
      "Purposeful legal counsel for people and businesses from Menlyn Maine, Pretoria.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "IM Attorneys",
  legalName: "Ingrid Mtsweni Attorneys Incorporated",
  url: "https://im-attorneys-inc-eta.vercel.app",
  telephone: "+27 81 248 8048",
  email: "attorneys@iminc.co.za",
  address: {
    "@type": "PostalAddress",
    streetAddress: "210 Amarand Avenue, Pegasus Building",
    addressLocality: "Pretoria",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
  areaServed: "South Africa",
  founder: {
    "@type": "Person",
    name: "Ingrid Mtsweni",
    jobTitle: "Founder and Director",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(legalServiceSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
