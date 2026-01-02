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
    "Software Engineer based in Austin, TX. Economics student at UT Austin building AI-powered products.",
  keywords: [
    "Luke Fournier",
    "Software Engineer",
    "Austin",
    "UT Austin",
    "AI Engineer",
    "Full Stack Developer",
  ],
  authors: [{ name: "Luke Fournier" }],
  creator: "Luke Fournier",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lukefournier.com",
    siteName: "Luke Fournier",
    title: "Luke Fournier | Software Engineer",
    description:
      "Software Engineer based in Austin, TX. Economics student at UT Austin building AI-powered products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luke Fournier | Software Engineer",
    description:
      "Software Engineer based in Austin, TX. Building AI-powered products.",
    creator: "@lilfourn",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
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
        className={`${jetbrainsMono.className} antialiased`}
      > 
      <Header />
        {children}
      </body>
    </html>
  );
}
