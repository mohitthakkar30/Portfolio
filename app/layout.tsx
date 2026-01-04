import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohit Thakkar | DevRel Engineer & Web3 Builder",
  description:
    "Developer Relations Engineer specializing in blockchain and web3 technologies. Building the future of decentralized applications with expertise in TypeScript, Solidity, and React.",
  keywords: [
    "DevRel",
    "Developer Relations",
    "Web3",
    "Blockchain",
    "Solidity",
    "React",
    "TypeScript",
    "DeFi",
    "Smart Contracts",
    "Ethereum",
  ],
  authors: [{ name: "Mohit Thakkar", url: "https://github.com/mohitthakkar30" }],
  creator: "Mohit Thakkar",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Mohit Thakkar | DevRel Engineer & Web3 Builder",
    description:
      "Developer Relations Engineer specializing in blockchain and web3 technologies.",
    siteName: "Mohit Thakkar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Thakkar | DevRel Engineer & Web3 Builder",
    description:
      "Developer Relations Engineer specializing in blockchain and web3 technologies.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
