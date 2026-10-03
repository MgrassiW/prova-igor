import "./globals.css";
import { Montserrat } from "next/font/google";

import Header from "@/components/Header";

import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
});

// Define título e descrição exibidos pelos mecanismos/navegador.
export const metadata: Metadata = {
  title: "TechStore IT - Catálogo de Eletrônicos",
  description: "Atividade prática de Next.js, API REST e TypeScript",
};

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
    
    <body className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
    <Header />
      <div className="flex-1">{children}</div>
    <Footer />
    </body>
    </html>
  );
}


