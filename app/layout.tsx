import type { Metadata } from "next";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Tinotenda Dzawi — Web Designer & Developer",
    description: "Cape Town web designer and developer creating responsive, brand-led websites for hiring teams, founders, artists, and growing businesses.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "Tinotenda Dzawi — Web Designer & Developer",
      description: "Useful digital experiences, built with care.",
      type: "website",
    },
    twitter: { card: "summary" },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
