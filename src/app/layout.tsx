import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/context/SidebarContext";
import LayoutContent from "@/components/LayoutContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VIBYN | Premium Streetwear & Lifestyle Clothing",
  description: "UK-based luxury streetwear and lifestyle clothing brand offering high-quality tees, hoodies, and custom DTF designs.",
  icons: {
    icon: "/OUR.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex bg-white text-black font-sans`}
        suppressHydrationWarning={true}
      >
        <SidebarProvider>
          <LayoutContent children={children} />
        </SidebarProvider>
      </body>
    </html>
  );
}