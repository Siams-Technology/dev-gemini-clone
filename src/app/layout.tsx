import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProviders } from "@/utils/theme-providers";
const OutfitFont = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "Quba AI",
  description: "A Gemini-inspired AI assistant built with Next.js",
  keywords: ["AI", "assistant", "Gemini", "clone", "Next.js"],
  authors: [{ name: "Siam" }],
  creator: "Your Name or Company",
  publisher: "Your Name or Company",
  openGraph: {
    title: "Quba AI",
    description: "An advanced GEMINI Clone built with Next.js, featuring enhanced functionalities and faster response times.",
    url: "https://quba-ai-gemini-clone.vercel.app",
    siteName: "QUba AI",
    images: [
      {
        url: "/assets/gemini-logo.svg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quba AI",
    description: "Experience the power of AI with our Gemini-inspired assistant",
    creator: "@yourTwitterHandle",
    images: ["/assets/gemini-banner.svg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${OutfitFont.className} dark:bg-[#131314] h-dvh w-full overflow-hidden bg-white text-black dark:text-white`}
      >
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}
