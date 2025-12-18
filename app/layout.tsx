import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import ThemeProvider from "@/components/theme-provider";

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
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
