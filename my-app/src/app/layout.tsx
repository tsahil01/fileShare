import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import "@uploadthing/react/styles.css";

import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner";
import type { Viewport } from 'next'
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Quick Share - Effortlessly Share Your Files Anywhere!", 
  description: "Simplify your file sharing experience with our intuitive platform. Seamlessly upload, share, and access your files anytime, anywhere. Start sharing smarter today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <body className={cn(
          "min-h-screen bg-background font-sans",
          fontSans.variable
        )}>{children}
        <Toaster />
        </body>
    </html>
  );
}
