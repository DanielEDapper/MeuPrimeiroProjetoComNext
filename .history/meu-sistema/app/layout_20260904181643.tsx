import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({subsets: ["latin"], variable: "--font-inter"});
const montserrat = Montserrat({subsets: ["latin"], variable: "--font-monstserrat"})

export const metadata = {
  title: "Menu Digital - Restaurante",
  description: "Desenvolvido no curso de Next.js"
}

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="pt-br">
    <body className="bg-gray-50 antialiased">
      <Navbar />
      {children}
    </body>
    </html>
  );
}

