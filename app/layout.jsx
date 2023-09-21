import Footer from "./footer/footer";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./navbar/page";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Arthur's Portfolio",
  description: "this is Portfolio website of Arthur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-dark-blue  ${poppins.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
