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
  title: "Ashwani Kumar | Senior Product Engineer",
  description: "Full Stack Engineer specializing in AI/ML, scalable systems, and developer tools. Building the future of web technology.",
  keywords: ["Full Stack Developer", "AI Engineer", "React", "Node.js", "TypeScript", "Next.js"],
  authors: [{ name: "Ashwani Kumar" }],
  openGraph: {
    title: "Ashwani Kumar | Senior Product Engineer",
    description: "Full Stack Engineer specializing in AI/ML, scalable systems, and developer tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased animated-gradient min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
