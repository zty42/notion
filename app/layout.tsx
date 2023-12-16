import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-proider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jotion X",
  description: "a notion clone project",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        href: "/logo.svg",
        url: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        href: "/logo-dark.svg",
        url: "/logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
