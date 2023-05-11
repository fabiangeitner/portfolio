import Navbar from "@/components/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Contact from "@/sections/Contact";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Fabian Geitner Portfolio | UX-Designer and Front-End Developer",
  description:
    "I'm a UX designer and Front-End Developer available for collaboration. I build meaningful digital experiences, and use human centred design to solve problems.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={montserrat.className}>
          <Navbar />
          {children}
          <Contact />
        </body>
      </html>
    </>
  );
}
