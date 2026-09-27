import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "CorsiaPay — African payments, simplified", description: "CorsiaPay is building a simpler payment infrastructure for Africa. Join the early access list." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }