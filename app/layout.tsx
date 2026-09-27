import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CorsiaPay | Payment Infrastructure for Africa",
  description: "CorsiaPay is building modern payment infrastructure for African businesses. Join the early access waitlist.",
  keywords: ["CorsiaPay", "payments Africa", "African payments", "payment infrastructure", "fintech Africa", "African fintech"],
  applicationName: "CorsiaPay",
  robots: { index: true, follow: true },
  openGraph: {
    title: "CorsiaPay | Payment Infrastructure for Africa",
    description: "Modern payment infrastructure for the next generation of African commerce. Join the CorsiaPay early access list.",
    type: "website",
    siteName: "CorsiaPay",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CorsiaPay | Payment Infrastructure for Africa",
    description: "Modern payment infrastructure for African businesses. Join the early access list.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
