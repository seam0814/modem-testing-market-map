"use client";

import { Search, AlertTriangle, TrendingDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// ─────────── LogLens ───────────
export function LogLensMockup() {
  return (
    <div className="overflow-hidden rounded-md border border-border bg-foreground p-4 font-mono text-[11px] leading-relaxed text-background/80 shadow-inner">
      <div className="mb-2 flex items-center gap-2 text-background/40">
        <span className="h-2 w-2 rounded-full bg-coral" />
        <span className="h-2 w-2 rounded-full bg-amber" />
        <span className="h-2 w-2 rounded-full bg-forest" />
        <span className="ml-2 text-[10px] uppercase tracking-widest">
          loglens · session_b1248.qmdl
        </span>
      </div>
      <div className="space-y-1">
        <div className="text-background/40">
          [12:04:21.183] <span className="text-indigo-soft">RRC</span>
          <span className="text-background/60"> · ConnectionRequest</span>
        </div>
        <div className="text-background/40">
          [12:04:21.247] <span className="text-indigo-soft">RRC</span>
          <span className="text-background/60"> · ConnectionSetup</span>
        </div>
        <div className="rounded-sm bg-coral/15 px-1 py-0.5 text-coral">
          [12:04:23.982] <span className="font-bold">RRC</span> ·
          ConnectionReject — waitTime=16s, cause=
          <span className="font-bold">congestion</span>
        </div>
        <div className="text-background/40">
          [12:04:24.001] NAS · attach_failed code=22
        </div>
      </div>
      <div className="mt-3 flex items-start gap-2 rounded-sm bg-indigo-soft/15 p-2 text-[10px]">
        <Sparkles className="mt-0.5 h-3 w-3 shrink-0 text-indigo-soft" />
        <div>
          <div className="text-indigo-soft font-semibold">
            AI 분석 결과
          </div>
          <div className="mt-0.5 text-background/70">
            셀 혼잡으로 인한 RRC 거절. 직전 PCCH paging 빈도 증가 (3.2/sec).
            동일 셀에서 지난 24h 23회 발생. <span className="underline">유사 케이스 4건</span> 보기.
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────── SpecSearch ───────────
export function SpecSearchMockup() {
  return (
    <div className="overflow-hidden rounded-md border border-border bg-surface">
      <div className="flex items-center gap-2 border-b border-border bg-soft/40 px-4 py-3">
        <Search className="h-4 w-4 text-indigo" />
        <span className="text-sm">
          <span className="text-foreground">PUCCH Format 2 max payload</span>
          <span className="ml-1 animate-pulse text-indigo">|</span>
        </span>
        <span className="ml-auto mono text-[10px] uppercase tracking-widest text-subtle">
          specsearch · rel-18
        </span>
      </div>
      <div className="space-y-3 p-4 text-xs">
        <div className="rounded-md border border-indigo/20 bg-indigo-bg/40 p-3">
          <div className="mono text-[10px] font-semibold text-indigo-deep">
            TS 38.213 § 9.2.5.2 · PUCCH Format 2
          </div>
          <p className="mt-1.5 leading-6 text-foreground">
            Format 2 (long PUCCH, 1~2 symbol). Max payload up to{" "}
            <span className="font-semibold">11 bits</span> CSI + HARQ-ACK.
            UCI block of 12 RE per symbol; X = 240 bits before encoding.
          </p>
        </div>
        <div className="rounded-md border border-border bg-surface p-3">
          <div className="mono text-[10px] font-semibold text-muted">
            TS 38.331 · PUCCH-Resource
          </div>
          <p className="mt-1 leading-6 text-muted">
            Configuration parameters: <code>nrofPRBs</code>,{" "}
            <code>occ-Length</code>...
          </p>
        </div>
        <div className="text-[10px] text-subtle">
          · Rel-15 → Rel-18 변경 이력 4건 ·{" "}
          <span className="text-indigo-deep">표시</span>
        </div>
      </div>
    </div>
  );
}

// ─────────── RegressionGuard ───────────
export function RegressionGuardMockup() {
  const points = [78, 79, 81, 80, 82, 81, 83, 84, 82, 65];
  const max = 90;
  return (
    <div className="overflow-hidden rounded-md border border-border bg-surface p-4">
      <div className="flex items-baseline justify-between">
        <div>
          <div className="text-xs text-muted">5G NR · Attach Success Rate</div>
          <div className="serif mt-0.5 text-2xl font-semibold tracking-tight">
            65<span className="ml-1 text-sm text-muted">%</span>
          </div>
        </div>
        <div className="inline-flex items-center gap-1 rounded-full bg-coral-soft px-2 py-1 text-[10px] text-coral">
          <TrendingDown className="h-3 w-3" />
          -19% vs build #1247
        </div>
      </div>
      <div className="mt-4 flex h-20 items-end gap-1.5">
        {points.map((v, i) => {
          const isAlert = i === points.length - 1;
          return (
            <div
              key={i}
              className={cn(
                "flex-1 rounded-sm transition-all",
                isAlert ? "bg-coral" : "bg-indigo-soft"
              )}
              style={{ height: `${(v / max) * 100}%` }}
            />
          );
        })}
      </div>
      <div className="mt-3 flex items-start gap-2 rounded-sm bg-coral-soft/40 p-2 text-[10px]">
        <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0 text-coral" />
        <div className="leading-5">
          <span className="font-semibold text-coral">회귀 감지</span>
          <span className="text-foreground">
            {" "}
            · Build #1248 (commit 9af3d1) 이후 -19%. 의심 영역:{" "}
            <span className="underline">RRC reestablishment 처리</span>
          </span>
        </div>
      </div>
    </div>
  );
}

// ─────────── BugFinder ───────────
export function BugFinderMockup() {
  const cases = [
    { id: "BUG-2843", title: "NB-IoT cell selection 실패 (TDD)", sim: 96 },
    { id: "BUG-2611", title: "RACH 재시도 횟수 초과", sim: 89 },
    { id: "BUG-2199", title: "Cat-NB1 attach reject (cause 18)", sim: 84 },
  ];
  return (
    <div className="overflow-hidden rounded-md border border-border bg-surface">
      <div className="border-b border-border bg-soft/40 px-4 py-3">
        <div className="flex items-center gap-2 text-xs">
          <Sparkles className="h-3.5 w-3.5 text-indigo" />
          <span className="text-muted">현재 분석 중:</span>
          <span className="mono font-semibold">BUG-2901</span>
          <span className="text-muted">· NB-IoT 초기 attach 실패</span>
        </div>
      </div>
      <div className="space-y-1.5 p-3">
        <div className="px-1 text-[10px] uppercase tracking-widest text-subtle">
          AI가 찾은 유사 케이스 3건
        </div>
        {cases.map((c) => (
          <div
            key={c.id}
            className="flex items-center gap-3 rounded-md border border-border bg-surface px-3 py-2 transition-colors hover:border-indigo/40"
          >
            <span className="mono text-[10px] text-subtle">{c.id}</span>
            <span className="flex-1 truncate text-xs">{c.title}</span>
            <span className="mono shrink-0 rounded-full bg-indigo-bg px-2 py-0.5 text-[10px] text-indigo-deep">
              {c.sim}% 유사
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
