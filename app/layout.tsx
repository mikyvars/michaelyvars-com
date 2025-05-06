import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const title = "Michael Yvars | Étudiant développeur web";
const description = "Juste un développeur web chill en quête d'apprentissage.";
const url = "https://michaelyvars.com";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: ["Web Developer", "Frontend Developer", "Next.js Developer"],
  creator: "Michael Yvars",
  openGraph: {
    type: "website",
    title,
    description,
    url,
    siteName: title,
    images: [
      {
        url: "/images/banner-michaelyvars.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@mikyvars",
    images: "/images/banner-michaelyvars.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${interSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
