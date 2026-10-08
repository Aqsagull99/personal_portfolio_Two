import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";



export const metadata: Metadata = {
  title: "Aqsa Gull | Full Stack Developer & AI Automation Engineer",
  description: "Portfolio of Aqsa Gull — full stack web apps, ERP systems and AI automation built for real clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
         className="antialiased">
      
        {/* <Header/> */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}



