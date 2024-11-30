import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/nav/navbar";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: {
    default: "University of Information Technology",
    template: "%s | UIT",
  },
  description: "University of Information Technology, Yangon, Myanmar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-OldSchool antialiased`}
      >
        
        <Navbar />
          <main className="mb-[20px]">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
