"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { POSITIONS } from "@/lib/data/positions";
import { cn } from "@/lib/utils";

export function PriorityMatrix() {
  const router = useRouter();
  const [hover, setHover] = useState<string | null>(null);

  const W = 720;
  const H = 480;
  const padding = { top: 30, right: 30, bottom: 60, left: 70 };
  const innerW = W - padding.left - padding.right;
  const innerH = H - padding.top - padding.bottom;

  // x = difficulty (1=easy, 5=hard), inverted so easier on left = better
  // y = market size (1=small, 5=big), so bigger on top = better
  function xAt(difficulty: number) {
    return padding.left + ((difficulty - 1) / 4) * innerW;
  }
  function yAt(market: number) {
    return padding.top + innerH - ((market - 1) / 4) * innerH;
  }

  const categoryColor: Record<string, string> = {
    core: "#4f3fd6",
    extension: "#2d6a4f",
    specialty: "#c08727",
    advanced: "#9a99a3",
  };

  return (
    <div className="rounded-md border border-border bg-surface p-4 md:p-6">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <div className="text-sm font-semibold">우선순위 매트릭스</div>
          <div className="mt-0.5 text-xs text-muted">
            가로 = 진입 난이도, 세로 = 시장 크기, 점 크기 = 너의 강점 fit
          </div>
        </div>
        <div className="flex flex-wrap gap-3 text-[11px]">
          <Legend color="#4f3fd6" label="Core" />
          <Legend color="#2d6a4f" label="Extension" />
          <Legend color="#c08727" label="Specialty" />
          <Legend color="#9a99a3" label="Advanced" />
        </div>
      </div>

      <div className="relative">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* sweet spot — bottom-left quadrant (low difficulty, high market) */}
          <rect
            x={padding.left}
            y={padding.top}
            width={innerW / 2}
            height={innerH / 2}
            fill="rgba(79, 63, 214, 0.05)"
            stroke="rgba(79, 63, 214, 0.18)"
            strokeWidth={1}
            strokeDasharray="3 3"
          />
          <text
            x={padding.left + 8}
            y={padding.top + 18}
            style={{ fontSize: 10, fill: "var(--indigo)", fontWeight: 600 }}
          >
            SWEET SPOT
          </text>

          {/* axes */}
          <line
            x1={padding.left}
            y1={padding.top + innerH}
            x2={padding.left + innerW}
            y2={padding.top + innerH}
            stroke="var(--border-strong)"
            strokeWidth={1}
          />
          <line
            x1={padding.left}
            y1={padding.top}
            x2={padding.left}
            y2={padding.top + innerH}
            stroke="var(--border-strong)"
            strokeWidth={1}
          />

          {/* gridlines */}
          {[1, 2, 3, 4, 5].map((v) => (
            <g key={`gx${v}`}>
              <line
                x1={xAt(v)}
                y1={padding.top}
                x2={xAt(v)}
                y2={padding.top + innerH}
                stroke="var(--border)"
                strokeDasharray="2 4"
                strokeWidth={0.5}
              />
              <text
                x={xAt(v)}
                y={padding.top + innerH + 18}
                textAnchor="middle"
                style={{ fontSize: 10, fill: "var(--subtle)" }}
              >
                {v === 1 ? "쉬움" : v === 5 ? "어려움" : ""}
                {v === 3 ? "중간" : ""}
              </text>
            </g>
          ))}
          {[1, 2, 3, 4, 5].map((v) => (
            <g key={`gy${v}`}>
              <line
                x1={padding.left}
                y1={yAt(v)}
                x2={padding.left + innerW}
                y2={yAt(v)}
                stroke="var(--border)"
                strokeDasharray="2 4"
                strokeWidth={0.5}
              />
              <text
                x={padding.left - 10}
                y={yAt(v) + 4}
                textAnchor="end"
                style={{ fontSize: 10, fill: "var(--subtle)" }}
              >
                {v === 1 ? "작음" : v === 5 ? "큼" : ""}
                {v === 3 ? "중간" : ""}
              </text>
            </g>
          ))}

          {/* axis labels */}
          <text
            x={padding.left + innerW / 2}
            y={H - 12}
            textAnchor="middle"
            style={{ fontSize: 11, fill: "var(--muted)", fontWeight: 500 }}
          >
            진입 난이도 →
          </text>
          <text
            x={20}
            y={padding.top + innerH / 2}
            textAnchor="middle"
            transform={`rotate(-90, 20, ${padding.top + innerH / 2})`}
            style={{ fontSize: 11, fill: "var(--muted)", fontWeight: 500 }}
          >
            시장 크기 →
          </text>

          {/* points */}
          {POSITIONS.map((p) => {
            const r = 12 + p.fitScore * 4;
            const x = xAt(p.difficulty);
            const y = yAt(p.marketSize);
            const isHover = hover === p.id;
            const color = categoryColor[p.category];

            return (
              <g
                key={p.id}
                style={{ cursor: "pointer" }}
                onMouseEnter={() => setHover(p.id)}
                onMouseLeave={() => setHover(null)}
                onClick={() => router.push(`/positions/${p.slug}`)}
              >
                <circle
                  cx={x}
                  cy={y}
                  r={r + 6}
                  fill={color}
                  opacity={isHover ? 0.15 : 0}
                  style={{ transition: "opacity 200ms" }}
                />
                <circle
                  cx={x}
                  cy={y}
                  r={r}
                  fill={color}
                  opacity={0.85}
                  stroke={isHover ? "var(--foreground)" : "transparent"}
                  strokeWidth={1.5}
                  style={{ transition: "all 200ms" }}
                />
                <text
                  x={x}
                  y={y + 5}
                  textAnchor="middle"
                  style={{
                    fontSize: 14,
                    fill: "white",
                    fontWeight: 600,
                    pointerEvents: "none",
                  }}
                >
                  {p.id}
                </text>
                {isHover && (
                  <g style={{ pointerEvents: "none" }}>
                    <rect
                      x={x + r + 8}
                      y={y - 26}
                      width={Math.max(180, p.title.length * 9)}
                      height={52}
                      rx={6}
                      fill="var(--foreground)"
                    />
                    <text
                      x={x + r + 18}
                      y={y - 8}
                      style={{ fontSize: 11, fill: "white", fontWeight: 600 }}
                    >
                      {p.id} · {p.title}
                    </text>
                    <text
                      x={x + r + 18}
                      y={y + 10}
                      style={{ fontSize: 10, fill: "rgba(255,255,255,0.7)" }}
                    >
                      {p.priorityLabel}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-muted">
      <span
        className="inline-block h-2 w-2 rounded-full"
        style={{ background: color }}
      />
      {label}
    </span>
  );
}
