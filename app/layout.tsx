import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tinotendadzawi.com"),
  title: "Tinotenda Dzawi — Product Engineer & AI Solutions Builder",
  description: "Product engineer combining design, software, and practical AI to turn business friction into useful digital products.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Tinotenda Dzawi — Product Engineer & AI Solutions Builder",
    description: "Business problems shaped into useful digital products.",
    type: "website",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Tinotenda Dzawi — Product Engineer and AI Solutions Builder" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
