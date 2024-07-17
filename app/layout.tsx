import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TodosProvider from "@/components/TodosProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <TodosProvider>{children}</TodosProvider>
      </body>
    </html>
  );
}
