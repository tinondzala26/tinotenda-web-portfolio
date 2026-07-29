import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tinotendadzawi.com"),
  title: "Tinotenda Dzawi — Web, Software & AI",
  description: "Web and software designer helping startups turn ideas into distinctive digital products and practical AI solutions.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Tinotenda Dzawi — Web, Software & AI",
    description: "Ideas into useful digital products.",
    type: "website",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Tinotenda Dzawi — Design, Software, AI" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
