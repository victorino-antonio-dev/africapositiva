import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Header, Footer, WhatsAppButton } from "@/components/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  metadataBase: new URL("https://africapositiva.onrender.com"),
  title: { default: "África Positiva — Viagens, documentos e comunidade", template: "%s | África Positiva" },
  description: "Apoio em viagens, vistos, legalização, documentação e integração para a comunidade africana.",
  openGraph: { title: "África Positiva", description: "Ligamos sonhos, viagens e oportunidades.", type: "website", locale: "pt_PT" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt">
      <body className={`${inter.variable} ${sora.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async />
      </body>
    </html>
  );
}
