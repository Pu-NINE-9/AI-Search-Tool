import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "NINE 的 AI 导航站",
  description: "AI 工具导航网站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={`antialiased h-min-screen w-screen flex bg-transparent`}>
        <div className="w-60 h-screen">
          <NavBar />
        </div>
        <div className="flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}