import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";
import { regularFont } from "@/utils/fontUtils";
import classNames from "classnames";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buzzline",
  description: "Engage with tweets and earn BUZZ tokens using AI",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
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
        className={classNames(
          `antialiased text-[var(--text-default)]`,
          "leading-normal",
          regularFont.className
        )}
      >
        <Toaster />

        <AppHeader />

        {children}

        <AppFooter />
      </body>
    </html>
  );
}
