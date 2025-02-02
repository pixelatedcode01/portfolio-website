import type { Metadata } from "next";
import { Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import "material-symbols";
import NavigationBar from "@/components/ui/navigationbar";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";

const manrope = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naman Rastogi",
  description: "A personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        <NavigationBar />
        <main className="min-h-full h-fit w-full flex justify-center bg-gradient-to-tr from-slate-50 to-cyan-100">
          <div className="lg:w-[50%] w-full h-full flex flex-col pt-20 mb-8 px-8 gap-4">
            {children}
            <SpeedInsights />
          </div>
        </main>
      </body>
    </html>
  );
}
