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
        <meta property="og:image" content="https://lumenwake.com/spacebac-preview.png" />
        <meta name="twitter:card" content="lumenwake" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
