import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import ContactAndFooter from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Gustavo Saavedra – Frontend & Mobile Developer",
  description:
    "Portfolio de Gustavo Saavedra, desarrollador especializado en frontend con React, Next.js y React Native.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-slate-50 antialiased">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
