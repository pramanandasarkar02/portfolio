import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], 
});

export const metadata: Metadata = {
  title: "Pramananda | Portfolio",
  description: "Portfolio for Pramananda Sarkar.",
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
        className={`${openSans.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


