import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tinotendadzawi.com"),
  title: "Tinotenda Dzawi — Frontend Engineer & Product Designer",
  description: "Cape Town frontend engineer building typed, responsive interfaces and practical automation with clear human review.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Tinotenda Dzawi — Frontend Engineer & Product Designer",
    description: "Three live products, public repositories and clearly explained engineering decisions.",
    type: "website",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Tinotenda Dzawi — Frontend Engineer and Product Designer" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
