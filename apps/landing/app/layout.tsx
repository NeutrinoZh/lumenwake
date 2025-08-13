import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Lumenwake Studio",
  description: "Game development studio",
  keywords: ["gamedev", "development", "games", "studio", "lumen", "lumenwake", "company", "spacebac"],
  openGraph: {
    images: "https://lumenwake.com/spacebac-preview.png"
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
