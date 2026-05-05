"use client";

import { useState } from "react";
import {
  CATEGORY_METRIC,
  REGION_FLAG,
  type Player,
  type PlayerCategory,
} from "@/lib/data/players";
import { cn } from "@/lib/utils";

const TONE_BAR: Record<string, string> = {
  indigo: "bg-indigo",
  amber: "bg-amber",
  forest: "bg-forest",
};

const TONE_BG: Record<string, string> = {
  indigo: "bg-indigo-bg/40",
  amber: "bg-amber-soft/40",
  forest: "bg-forest-bg/40",
};

export function CategoryScaleBar({
  category,
  players,
  tone,
}: {
  category: PlayerCategory;
  players: Player[];
  tone: string;
}) {
  const meta = CATEGORY_METRIC[category];
  const [hover, setHover] = useState<string | null>(null);

  // metric이 정의된 player만, 큰 값 순으로 정렬
  const withMetric = players
    .filter((p): p is Player & { metric: number } => typeof p.metric === "number")
    .sort((a, b) => b.metric - a.metric);

  if (!meta || withMetric.length === 0) return null;

  const max = withMetric[0].metric || 1;

  return (
    <div className={cn("rounded-md border border-border p-5", TONE_BG[tone])}>
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <div className="text-sm font-semibold">{meta.metricLabel}</div>
          <div className="mt-0.5 text-xs text-muted">{meta.note}</div>
        </div>
        <div className="mono text-[10px] uppercase tracking-widest text-subtle">
          via {meta.source}
        </div>
      </div>

      <div className="space-y-2">
        {withMetric.map((p) => {
          const pct = max > 0 ? (p.metric / max) * 100 : 0;
          const isHover = hover === p.name;
          // 막대가 너무 작아져서 보이지 않을 정도면 최소 1.5%
          const visualPct = Math.max(pct, 1.2);
          return (
            <div
              key={p.name}
              onMouseEnter={() => setHover(p.name)}
              onMouseLeave={() => setHover(null)}
              className={cn(
                "group rounded-sm px-1 py-1 transition-colors",
                isHover && "bg-surface"
              )}
            >
              <div className="mb-1 flex items-baseline gap-2 text-xs">
                <span className="text-base">{REGION_FLAG[p.region]}</span>
                <span className="font-medium">{p.korean}</span>
                <span className="mono text-[10px] text-subtle">{p.name}</span>
                <span className="ml-auto mono tabular text-sm font-semibold">
                  {meta.metricFmt(p.metric)}
                </span>
              </div>
              <div className="relative h-3 overflow-hidden rounded-sm bg-surface/80">
                <div
                  className={cn(
                    "h-full rounded-sm transition-all duration-500",
                    TONE_BAR[tone]
                  )}
                  style={{
                    width: `${visualPct}%`,
                    opacity: hover && !isHover ? 0.4 : 0.92,
                  }}
                />
                {pct < 1.2 && p.metric > 0 && (
                  <span className="absolute inset-y-0 left-1.5 flex items-center text-[9px] text-muted">
                    ·
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {withMetric[0].metric === 0 ||
        (withMetric.some((p) => p.metric === 0) && (
          <div className="mono mt-3 text-[10px] uppercase tracking-widest text-subtle">
            * 일부 항목은 서비스 시작 전 (가입자 0)
          </div>
        ))}
    </div>
  );
}
