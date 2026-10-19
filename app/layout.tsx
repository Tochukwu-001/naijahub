import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
<<<<<<< HEAD
=======

>>>>>>> 8c64337db99e1d8526fab381c0d790aac0954196
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Naija Venture Hub Think Big Grow Bigger",
=======
  title: "Naija Venture Hub | Think Big Grow Bigger",
>>>>>>> 8c64337db99e1d8526fab381c0d790aac0954196
  description: "Stack Ideas, Build Ventures, Create Impact",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav/>
        {children}
<<<<<<< HEAD
        </body>
=======
      </body>
>>>>>>> 8c64337db99e1d8526fab381c0d790aac0954196
    </html>
  );
}
