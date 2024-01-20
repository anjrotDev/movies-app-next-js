import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "./components/Header";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "500", "900"] });

export const metadata: Metadata = {
  title: "Movies App",
  description: "Created by Anjrot Dev"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
