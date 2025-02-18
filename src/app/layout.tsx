import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { FC } from "react";
import { RootLayoutProps } from "@/interfaces/RootLayoutProps";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Issue Tracker App",
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
