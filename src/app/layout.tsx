import type { Metadata } from "next";
import localFont from "next/font/local";
// import {Inter} from "next/font/google";
import "./globals.css";
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ThemeContextProvider from '@/context/theme-context';


const generalSans = localFont({
  src: './fonts/GeneralSans-Regular.woff',
  variable: '--font-general-sans',
})

// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
// })



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
        className={`   ${generalSans.className} antialiased overflow-x-hidden relative`}
      >
        <ThemeContextProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  )
}
