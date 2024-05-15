import Navbar from "./components/Navbar";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paul's Blog",
  description: "Created by Paul Kamani",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800 ">
        <Navbar />
        <main className="px-4 md:px-6 prose prose-xl prose-invert mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
