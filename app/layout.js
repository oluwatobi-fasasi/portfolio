import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "TechTalk",
  description: "Portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
