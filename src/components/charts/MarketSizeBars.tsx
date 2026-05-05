"use client";

import { useState } from "react";
import { MARKET_BARS, GROUP_COLOR, GROUP_LABEL, type SegmentBar } from "@/lib/data/charts";
import { cn } from "@/lib/utils";

export function MarketSizeBars() {
  const [hover, setHover] = useState<string | null>(null);
  const max = Math.max(...MARKET_BARS.map((b) => b.valueUSD));
  const sorted = [...MARKET_BARS].sort((a, b) => b.valueUSD - a.valueUSD);

  return (
    <div className="rounded-md border border-border bg-surface p-6 md:p-8">
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <div className="text-sm font-semibold">시장 규모 비교</div>
          <div className="mt-0.5 text-xs text-muted">단위: 십억 USD ($B), 연간 기준</div>
        </div>
        <div className="flex flex-wrap gap-3 text-[10px]">
          {(Object.keys(GROUP_LABEL) as SegmentBar["group"][]).map((g) => (
            <span key={g} className="inline-flex items-center gap-1.5 text-muted">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: GROUP_COLOR[g] }}
              />
              {GROUP_LABEL[g]}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {sorted.map((bar) => {
          const pct = (bar.valueUSD / max) * 100;
          const isHover = hover === bar.id;
          return (
            <div
              key={bar.id}
              onMouseEnter={() => setHover(bar.id)}
              onMouseLeave={() => setHover(null)}
              className={cn(
                "group transition-opacity",
                hover && !isHover && "opacity-50"
              )}
            >
              <div className="mb-1 flex items-baseline justify-between gap-3 text-sm">
                <span className="truncate font-medium">{bar.label}</span>
                <span className="mono tabular shrink-0 font-semibold">
                  ${bar.valueUSD}B
                </span>
              </div>
              <div className="relative h-7 overflow-hidden rounded-sm bg-soft">
                <div
                  className="h-full rounded-sm transition-all duration-300 group-hover:brightness-110"
                  style={{
                    width: `${pct}%`,
                    background: GROUP_COLOR[bar.group],
                    opacity: hover && !isHover ? 0.5 : 0.9,
                  }}
                />
                {isHover && (
                  <div
                    className="absolute inset-y-0 flex items-center px-3"
                    style={{ left: `${Math.min(pct + 1, 70)}%` }}
                  >
                    <span className="mono whitespace-nowrap text-[10px] text-muted">
                      {bar.note}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="dotted-divider mt-8" />

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-md bg-indigo-bg/40 p-4">
          <div className="text-[10px] uppercase tracking-widest text-indigo-deep">
            거대한 비교축
          </div>
          <div className="serif mt-2 text-2xl font-semibold">$1,600B</div>
          <div className="mt-1 text-xs leading-6 text-muted">
            글로벌 통신 서비스 매출 (carrier 합계). 위 막대들 모두 합쳐도 30% 안 됨.
          </div>
        </div>
        <div className="rounded-md bg-amber-soft/60 p-4">
          <div className="text-[10px] uppercase tracking-widest text-amber">
            우리 자리
          </div>
          <div className="serif mt-2 text-2xl font-semibold">$10B + $8B</div>
          <div className="mt-1 text-xs leading-6 text-muted">
            테스트 장비 + 검증 서비스 합계. 작아 보이지만 SaaS 도구 1%만 점유해도 연 $180M.
          </div>
        </div>
      </div>
    </div>
  );
}
