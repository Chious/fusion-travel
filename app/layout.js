import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fusion",
  description: `Nam constetur elementum neque vitae condimentum. Adenean dignissim,
  turpis, turpis et tincidunt finbus, massa purus melesuada metus, a
  commodo velit magna nec nibh. Donec dictum fringilla tempus. Nunc
  rhoncus sapien lectus, non fermentum neque euismod quis. Phasellus
  sagittis tortor in accumsan.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
