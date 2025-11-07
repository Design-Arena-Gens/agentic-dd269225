import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MockTest Guru | SSC & Railway Mock Tests",
  description:
    "Practice bilingual SSC, Railway and foundation mock tests with real exam interface, analytics and instant explanations.",
  openGraph: {
    title: "MockTest Guru",
    description:
      "India's trusted platform for SSC & Railway aspirants with adaptive mock tests and smart analytics.",
    url: "https://agentic-dd269225.vercel.app",
    siteName: "MockTest Guru",
  },
  twitter: {
    card: "summary_large_image",
    title: "MockTest Guru",
    description:
      "Bilingual SSC & Railway mock test platform with powerful analytics.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-950">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
