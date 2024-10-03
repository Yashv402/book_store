import type { Metadata } from "next";
import {Lora} from 'next/font/google';
import localFont from "next/font/local";
import "./globals.css";

const inter = Lora({subsets: ['latin']})

export const metadata: Metadata ={
  title:'Book Store',
  description: 'A book store where you can find many books.'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
