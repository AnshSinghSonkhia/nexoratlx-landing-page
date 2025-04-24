import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Sora } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
    display: "swap", // optional: helps improve font loading
});  

export const metadata: Metadata = {
  title: "Nexora TLX - The Future of STEAM Education",
  description: "Shaping The Future of STEAM Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
