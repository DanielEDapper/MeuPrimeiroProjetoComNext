import { Inter, Montserrat, Playfair, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({subsets: ["latin"], variable: "--font-inter"});
const montserrat = Montserrat({subsets: ["latin"], variable: "--font-monstserrat"});
const playfair = Playfair_Display({subsets: ["latin"], variable: ""})

export const metadata = {
  title: "Menu Digital - Restaurante",
  description: "Desenvolvido no curso de Next.js"
}

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="pt-br" className={`${inter.variable}${montserrat.variable}`}>
    <body className="bg-gray-50 antialiased">
      <Navbar/>
      {children}
      <Footer/>
    </body>
    </html>
  );
}

