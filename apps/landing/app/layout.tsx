import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Lumenwake Studio",
  description: "Game development studio",
  keywords: ["gamedev", "development", "games", "studio", "lumen", "lumenwake", "company", "spacebac"],
  openGraph: {
    images: "https://lumenwake.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspacebac-preview.c8beb6de.png&w=1920&q=75"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
