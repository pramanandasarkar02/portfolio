import type { Metadata } from "next";
import { Outfit} from "next/font/google";
import "./globals.css";

const font = Outfit({
  
})

export const metadata: Metadata = {
  title: "Pramananda sarkar",
  description: "Portfolio for Pramananda Sarkar", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
