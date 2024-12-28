import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/custom/Navbar/NavBar";
import Footer from "@/components/custom/Home/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pizzamat, Pizza Automat, Pommes Automat für den perfekten Snack",
  description: "Frische Pizza auf Knopfdruck: Pizza Automat liefert Ihnen in Minuten köstliche, heiße Pizzen. Schnell, bequem und authentisch italienisch",
  icons: "./favicon.ico",
  openGraph:{
    title: "Pizzamat, Pizza Automat, Pommes Automat für den perfekten Snack",
    description: "Frische Pizza auf Knopfdruck: Pizza Automat liefert Ihnen in Minuten köstliche, heiße Pizzen. Schnell, bequem und authentisch italienisch",
    images:['./image1.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
       <link rel="icon" href="./favicon.ico" sizes="any" />
       </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full flex flex-col`}
      >
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
