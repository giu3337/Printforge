import "./globals.css";
import Nav from "@/components/Nav";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google"

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap"
})


const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat-alternates"
  
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <Nav />
        {children}
        
      </body>
    </html>
  );
}
