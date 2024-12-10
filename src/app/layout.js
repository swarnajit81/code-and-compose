import localFont from "next/font/local";
import "./globals.css";
import {Roboto, Roboto_Flex, Roboto_Mono, Roboto_Serif} from 'next/font/google'
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";

export const metadata = {
  title: "Code and Compose",
  description: "Generated by create next app",
  openGraph: {
    title: "Code and Compose",
    description: "Generated by create next app",
  }
};

export const roboto = Roboto_Flex({
subsets:["latin"],
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"],
  variable: "--font-roboto"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} !font-roboto antialiased bg-white text-accent`}
      >
      <Preloader/>
      <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
