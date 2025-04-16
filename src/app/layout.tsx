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
    description: "画像に原作者クレジットを追加するツールです。画像をアップロードするだけで画像を生成でき、細かい調整も可能です。",
    openGraph: {
        title: "原作者テロップジェネレーター",
        description: "画像に原作者クレジットを追加するツールです。画像をアップロードするだけで画像を生成でき、細かい調整も可能です。",
        images: [
            {
                url: "/ogp.png",
                width: 1200,
                height: 630,
                alt: "原作者テロップジェネレーター",
            },
        ],
        locale: "ja_JP",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "原作者テロップジェネレーター",
        description: "画像に原作者クレジットを追加するツールです。画像をアップロードするだけで画像を生成でき、細かい調整も可能です。",
        images: ["/ogp.png"],
        creator: "@yukyan_p",
    },
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
