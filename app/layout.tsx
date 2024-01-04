import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Knaughts",
    description: "Knaughts website.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <body className={inter.className + "dark"}>
                <Header></Header>
                {children}
                <Analytics />
                <SpeedInsights />
                <Footer />
            </body>
        </html>
    );
}
