import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/layout/TopNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const notoKR = Noto_Sans_KR({
  variable: "--font-noto-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Modem Testing Market Map — 포지션 분석",
  description:
    "모뎀 테스트 시장의 8개 포지션 — 기존 플레이어, 빈 자리, 진입 전략 매핑.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${notoKR.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <TopNav />
        <main className="pt-16">{children}</main>
        <footer className="mt-32 border-t border-border bg-surface-2">
          <div className="mx-auto max-w-6xl px-6 py-10 text-xs text-muted md:px-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span>
                Modem Testing Market Map · 시장 매핑과 포지션 분석을 위한 내부 자료
              </span>
              <span className="mono">v0.1 · 2026-05</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
