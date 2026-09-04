import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Menu Digital - Restaurante",
  description: "Desenvolvido no curso de Next.js"
}

export default function RootLayout({ children }) {
return (
<html lang="pt-br">
<body className="bg-gray-50 antialiased">
<Navbar />
{children}
</body>
</html>
);
}

