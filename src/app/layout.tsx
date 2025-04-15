import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
    variable: "--font-noto-sans-jp",
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "原作者テロップジェネレーター",
    description: "画像に原作者クレジットを追加するツール",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} antialiased font-sans`}
            >
                {children}
            </body>
        </html>
    );
}
