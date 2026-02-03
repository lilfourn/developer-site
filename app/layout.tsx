import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lukefournier.com"),
  title: {
    default: "Luke Fournier | Software Engineer",
    template: "%s | Luke Fournier",
  },
  description:
    "Luke Fournier is an Austin software engineer and developer at UT Austin building AI-powered products.",
  keywords: [
    "Luke Fournier",
    "Austin software engineer",
    "Austin software developer",
    "Austin developers",
    "Software Engineer",
    "Austin",
    "UT Austin software engineer",
    "UT Austin",
    "AI Engineer",
    "Full Stack Developer",
  ],
  authors: [{ name: "Luke Fournier" }],
  creator: "Luke Fournier",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Luke Fournier",
    title: "Luke Fournier | Software Engineer",
    description:
      "Luke Fournier is an Austin software engineer and developer at UT Austin building AI-powered products.",
    images: ["/app-icon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luke Fournier | Software Engineer",
    description:
      "Austin software engineer and developer at UT Austin building AI-powered products.",
    creator: "@lilfourn",
    images: ["/app-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Luke Fournier",
  url: "https://lukefournier.com",
  image: "https://lukefournier.com/profile-picture.svg",
  jobTitle: "Software Engineer",
  description:
    "Austin software engineer and developer at UT Austin building AI-powered products.",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "The University of Texas at Austin",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Austin",
    addressRegion: "TX",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/in/lukefournier711/",
    "https://github.com/lilfourn",
    "https://www.instagram.com/lukefournier711/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${jetbrainsMono.className} antialiased`}
      > 
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[#CCCCCC] focus:text-[#171717] focus:px-3 focus:py-2 focus:rounded-sm focus:shadow"
        >
          Skip to content
        </a>
        <Header />
        {children}
      </body>
    </html>
  );
}
