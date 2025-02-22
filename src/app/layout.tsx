import { FC } from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Container, Theme } from "@radix-ui/themes";
import { RootLayoutProps } from "@/interfaces";
import { Navbar } from "@/components";
import { QueryClientProvider, AuthProvider } from "@/providers";

import "@radix-ui/themes/styles.css";
import "@/styles/theme.config.css";
import "@/styles/globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
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
        <QueryClientProvider>
          <AuthProvider>
            <Theme accentColor="iris" grayColor="slate" radius="large">
              <Navbar />
              <main className="p-5">
                <Container>{children}</Container>
              </main>
            </Theme>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
