import type { Metadata } from "next";
import "./globals.scss";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Lumenwake Studio",
  description: "Game development studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="Lumenwake Studio" />
        <meta property="og:description" content="Game Development Studio" />
        <meta property="og:image" content="https://lumenwake.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspacebac-preview.c8beb6de.png&w=1920&q=75" />
        <meta name="twitter:card" content="lumenwake" />
        <meta property="og:type" content="website"></meta>
        <meta name="keywords" content="gamedev, development, games, studio, lumen, lumenwake, company, spacebac"></meta>
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
