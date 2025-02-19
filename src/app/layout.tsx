import { FC } from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import { RootLayoutProps } from "@/interfaces/RootLayoutProps";
import Navbar from "@/components/Navbar";

import "@radix-ui/themes/styles.css";
import "@/styles/globals.css";

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
      <body className={`${poppins.variable} antialiased`}>
        <Theme>
          <Navbar />
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
};

export default RootLayout;
