"use client";

import { useState } from "react";
import { GROWTH_ROWS } from "@/lib/data/charts";
import { TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function GrowthProjection() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <div className="rounded-md border border-border bg-surface p-6 md:p-8">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <div className="text-sm font-semibold">2025 → 2030 성장 전망</div>
          <div className="mt-0.5 text-xs text-muted">
            가입자(B) · 매출($B) — 모뎀 검증 도구의 잠재 시장은 모두 우상향
          </div>
        </div>
        <div className="flex gap-3 text-[10px]">
          <span className="inline-flex items-center gap-1.5 text-muted">
            <span className="inline-block h-2 w-2 rounded-sm bg-soft" />
            2025
          </span>
          <span className="inline-flex items-center gap-1.5 text-muted">
            <span className="inline-block h-2 w-2 rounded-sm bg-indigo" />
            2030
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {GROWTH_ROWS.map((row) => {
          const max = Math.max(row.in2025, row.in2030);
          const w25 = (row.in2025 / max) * 100;
          const w30 = (row.in2030 / max) * 100;
          const ratio = row.in2030 / row.in2025;
          const isHover = hover === row.id;
          return (
            <div
              key={row.id}
              onMouseEnter={() => setHover(row.id)}
              onMouseLeave={() => setHover(null)}
              className={cn(
                "rounded-md border border-transparent p-3 transition-all hover:border-border hover:bg-surface-2",
                isHover && "border-indigo/40 bg-indigo-bg/30"
              )}
            >
              <div className="mb-2 flex items-baseline justify-between gap-3 text-sm">
                <div>
                  <span className="font-medium">{row.label}</span>
                  <span className="mono ml-2 text-[11px] text-subtle">
                    {row.unit === "B" ? "가입자" : "매출"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="mono tabular text-xs text-muted">
                    {row.in2025}
                    {row.unit}
                  </span>
                  <span className="mono text-subtle">→</span>
                  <span className="mono tabular text-sm font-semibold text-indigo-deep">
                    {row.in2030}
                    {row.unit}
                  </span>
                  <span className="mono inline-flex items-center gap-0.5 rounded-full bg-forest-bg px-1.5 py-0.5 text-[10px] text-forest">
                    <TrendingUp className="h-2.5 w-2.5" />
                    {ratio.toFixed(1)}x
                  </span>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="mono w-9 text-[9px] uppercase tracking-widest text-subtle">
                    2025
                  </span>
                  <div className="relative h-4 flex-1 overflow-hidden rounded-sm bg-soft">
                    <div
                      className="h-full rounded-sm bg-subtle/60 transition-all duration-700"
                      style={{ width: `${w25}%` }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="mono w-9 text-[9px] uppercase tracking-widest text-indigo-deep">
                    2030
                  </span>
                  <div className="relative h-4 flex-1 overflow-hidden rounded-sm bg-soft">
                    <div
                      className="h-full rounded-sm bg-indigo transition-all duration-700"
                      style={{ width: `${w30}%` }}
                    />
                  </div>
                </div>
              </div>
              {isHover && (
                <div className="mt-2 text-[11px] leading-5 text-muted">
                  {row.note}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
