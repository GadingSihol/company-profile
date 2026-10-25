import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// @ts-ignore
import "./globals.css";

export const metadata: Metadata = {
  title: "Gading Tech Labs - Company Profile",
  description: "Tugas 4 Praktikum Web Development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}