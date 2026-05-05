"use client";

import { useState } from "react";
import { GROWTH_ROWS, type GrowthRow } from "@/lib/data/charts";
import { TrendingUp, Users, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

const GROUP_META: Record<
  GrowthRow["group"],
  { label: string; unit: string; icon: typeof Users; tone: string }
> = {
  subs: { label: "가입자", unit: "B (Billion)", icon: Users, tone: "indigo" },
  revenue: { label: "매출", unit: "$B (Billion USD)", icon: DollarSign, tone: "forest" },
};

const TONE_CLS: Record<
  string,
  { bar25: string; bar30: string; bg: string; text: string; label: string }
> = {
  indigo: {
    bar25: "bg-subtle/50",
    bar30: "bg-indigo",
    bg: "bg-indigo-bg/50",
    text: "text-indigo-deep",
    label: "text-indigo-deep",
  },
  forest: {
    bar25: "bg-subtle/50",
    bar30: "bg-forest",
    bg: "bg-forest-bg/50",
    text: "text-forest",
    label: "text-forest",
  },
};

export function GrowthProjection() {
  const groups = (Object.keys(GROUP_META) as GrowthRow["group"][]).map((g) => {
    const rows = GROWTH_ROWS.filter((r) => r.group === g);
    const max = Math.max(...rows.flatMap((r) => [r.in2025, r.in2030]));
    return { id: g, rows, max };
  });

  return (
    <div className="rounded-md border border-border bg-surface p-6 md:p-8">
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <div className="text-sm font-semibold">2025 → 2030 성장 전망</div>
          <div className="mt-0.5 text-xs text-muted">
            가입자(B)와 매출($B)을 그룹별로 분리. 각 그룹 안에서 같은 스케일로 비교.
          </div>
        </div>
        <div className="flex gap-3 text-[10px]">
          <span className="inline-flex items-center gap-1.5 text-muted">
            <span className="inline-block h-2 w-2 rounded-sm bg-subtle/70" />
            2025
          </span>
          <span className="inline-flex items-center gap-1.5 text-muted">
            <span className="inline-block h-2 w-2 rounded-sm bg-indigo" />
            2030 (가입자)
          </span>
          <span className="inline-flex items-center gap-1.5 text-muted">
            <span className="inline-block h-2 w-2 rounded-sm bg-forest" />
            2030 (매출)
          </span>
        </div>
      </div>

      <div className="mt-6 space-y-8">
        {groups.map((group) => {
          const meta = GROUP_META[group.id];
          const tone = TONE_CLS[meta.tone];
          const Icon = meta.icon;

          return (
            <div key={group.id}>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div
                    className={cn(
                      "flex h-7 w-7 items-center justify-center rounded-md",
                      tone.bg,
                      tone.text
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.6} />
                  </div>
                  <div>
                    <div
                      className={cn(
                        "mono text-[10px] uppercase tracking-[0.2em]",
                        tone.label
                      )}
                    >
                      group
                    </div>
                    <div className="text-sm font-semibold">
                      {meta.label}{" "}
                      <span className="ml-1 text-xs font-normal text-muted">
                        · {meta.unit}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mono text-[10px] uppercase tracking-widest text-subtle">
                  scale 0 → {group.max}
                  {group.id === "subs" ? "B" : "$B"}
                </div>
              </div>

              <GroupRows group={group} tone={tone} />
            </div>
          );
        })}
      </div>

      <div className="dotted-divider mt-8" />

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <Insight
          title="가장 빠른 성장 = AI-RAN (4×)"
          body="O-RAN + LLM 결합. 5년 내 4배. B (3GPP RAG) + G (Bug AI) 가 정확히 이 흐름."
        />
        <Insight
          title="LEO 광대역 2.7×"
          body="Starlink·Kuiper 매출 가속. NTN 검증 도구는 거의 비어있음."
        />
        <Insight
          title="가입자 2.7×"
          body="5G 가입자 2.2B → 6B. 단말 검증 수요는 기하급수적으로 늘어남."
        />
      </div>
    </div>
  );
}

function GroupRows({
  group,
  tone,
}: {
  group: { id: GrowthRow["group"]; rows: GrowthRow[]; max: number };
  tone: (typeof TONE_CLS)[string];
}) {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {group.rows.map((row) => {
        const w25 = (row.in2025 / group.max) * 100;
        const w30 = (row.in2030 / group.max) * 100;
        const ratio = row.in2030 / row.in2025;
        const isHover = hover === row.id;
        return (
          <div
            key={row.id}
            onMouseEnter={() => setHover(row.id)}
            onMouseLeave={() => setHover(null)}
            className={cn(
              "rounded-md border border-transparent p-3 transition-all hover:border-border hover:bg-surface-2",
              isHover && tone.bg
            )}
          >
            <div className="mb-2 flex items-baseline justify-between gap-3 text-sm">
              <span className="font-medium">{row.label}</span>
              <div className="flex items-center gap-2">
                <span className="mono tabular text-xs text-muted">
                  {row.in2025}
                  {row.unit}
                </span>
                <span className="mono text-subtle">→</span>
                <span className={cn("mono tabular text-sm font-semibold", tone.label)}>
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
                <span className="mono w-9 shrink-0 text-[9px] uppercase tracking-widest text-subtle">
                  2025
                </span>
                <div className="relative h-4 flex-1 overflow-hidden rounded-sm bg-soft">
                  <div
                    className={cn(
                      "h-full rounded-sm transition-all duration-700",
                      tone.bar25
                    )}
                    style={{ width: `${w25}%` }}
                  />
                </div>
                <span className="mono w-12 shrink-0 text-right text-[10px] text-subtle">
                  {Math.round(w25)}%
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "mono w-9 shrink-0 text-[9px] uppercase tracking-widest",
                    tone.label
                  )}
                >
                  2030
                </span>
                <div className="relative h-4 flex-1 overflow-hidden rounded-sm bg-soft">
                  <div
                    className={cn(
                      "h-full rounded-sm transition-all duration-700",
                      tone.bar30
                    )}
                    style={{ width: `${w30}%` }}
                  />
                </div>
                <span className={cn("mono w-12 shrink-0 text-right text-[10px]", tone.label)}>
                  {Math.round(w30)}%
                </span>
              </div>
            </div>
            {isHover && (
              <div className="mt-2 text-[11px] leading-5 text-muted">{row.note}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Insight({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-md border border-border bg-surface-2 p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1.5 text-xs leading-6 text-muted">{body}</div>
    </div>
  );
}
