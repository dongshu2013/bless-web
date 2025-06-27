import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";
import { regularFont } from "@/utils/fontUtils";
import classNames from "classnames";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
  title: "祈福",
  description: "全球华人专属真实祈福平台｜真实寺庙｜视频记录｜人文关怀",
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
          "leading-none",
          regularFont.className
        )}
      >
        <Toaster />

        <AppHeader />

        {children}

        {/* <AppFooter /> */}
      </body>
    </html>
  );
}
