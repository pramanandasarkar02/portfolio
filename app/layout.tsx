import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import { ThemeProvider } from "./providers";

const font = Outfit({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pramananda Sarkar",
  description: "Portfolio for Pramananda Sarkar",
  keywords: ["portfolio", "Pramananda Sarkar", "developer"],
  openGraph: {
    title: "Pramananda Sarkar",
    description: "Portfolio for Pramananda Sarkar",
    url: "https://your-portfolio-url.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          themes={["light", "dark", "hacker"]}
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}