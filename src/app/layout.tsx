import type { Metadata } from "next";
import localFont from "next/font/local";
import {Inter} from "next/font/google";
import "./globals.css";
import Navigation from '@/components/navigation';

const generalSans = localFont({
  src: './fonts/GeneralSans-Regular.woff',
  variable: '--font-general-sans',
  weight: '100 900',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})



export const metadata: Metadata = {
  title: "Cybersec",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${generalSans.variable} ${inter.variable}  antialiased overflow-x-hidden`}
      >
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
