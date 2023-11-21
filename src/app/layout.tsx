import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SceneBg from "@/components/Scenebg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charmi Personal Portfolio",
  description: "Personal Portfolio developed using reactjs, next app, tailwindcss & react-three/fibre",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + "overflow-y-scroll no-scrollbar"} style={{ backgroundColor: "black" }}>
        <SceneBg />
        <section className="absolute inset-0 z-10">{children}</section>
      </body>
    </html>
  );
}
