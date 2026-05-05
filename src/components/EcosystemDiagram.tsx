"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type NodeId =
  | "research"
  | "chipset"
  | "phone"
  | "iot"
  | "auto"
  | "sat"
  | "carrier"
  | "satop"
  | "network"
  | "vendor";

type Node = {
  id: NodeId;
  label: string;
  examples: string[];
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  bg: string;
  textColor: string;
};

type Edge = {
  from: NodeId;
  to: NodeId;
  label: string;
  curve?: number; // 곡선 정도
};

const NODES: Node[] = [
  {
    id: "research",
    label: "표준 · 연구",
    examples: ["3GPP", "ETRI", "Bell Labs", "EU 6G-IA"],
    x: 320,
    y: 30,
    w: 300,
    h: 70,
    color: "#4f3fd6",
    bg: "rgba(79, 63, 214, 0.08)",
    textColor: "#2e1fa6",
  },
  {
    id: "chipset",
    label: "Chipset · SoC",
    examples: ["Qualcomm", "MediaTek", "Apple C1", "System LSI", "UNISOC"],
    x: 320,
    y: 160,
    w: 300,
    h: 80,
    color: "#4f3fd6",
    bg: "rgba(79, 63, 214, 0.12)",
    textColor: "#2e1fa6",
  },
  {
    id: "phone",
    label: "단말 OEM",
    examples: ["Apple", "Samsung", "Xiaomi", "Vivo", "OPPO"],
    x: 30,
    y: 290,
    w: 190,
    h: 80,
    color: "#c08727",
    bg: "rgba(192, 135, 39, 0.12)",
    textColor: "#8a5f15",
  },
  {
    id: "iot",
    label: "IoT 모듈",
    examples: ["Quectel", "Telit", "u-blox", "Fibocom"],
    x: 240,
    y: 290,
    w: 190,
    h: 80,
    color: "#c08727",
    bg: "rgba(192, 135, 39, 0.12)",
    textColor: "#8a5f15",
  },
  {
    id: "auto",
    label: "자동차 TCU",
    examples: ["Bosch", "Continental", "Mobis", "LG VS"],
    x: 450,
    y: 290,
    w: 190,
    h: 80,
    color: "#2d6a4f",
    bg: "rgba(45, 106, 79, 0.12)",
    textColor: "#1a4530",
  },
  {
    id: "sat",
    label: "위성 단말 / D2D",
    examples: ["AST SpaceMobile", "Iridium 모듈"],
    x: 660,
    y: 290,
    w: 190,
    h: 80,
    color: "#4f3fd6",
    bg: "rgba(79, 63, 214, 0.10)",
    textColor: "#2e1fa6",
  },
  {
    id: "carrier",
    label: "통신 사업자 (Carrier)",
    examples: ["China Mobile", "Verizon", "Vodafone", "NTT", "SKT/KT/LGU+"],
    x: 30,
    y: 440,
    w: 410,
    h: 80,
    color: "#4f3fd6",
    bg: "rgba(79, 63, 214, 0.18)",
    textColor: "#2e1fa6",
  },
  {
    id: "satop",
    label: "위성 운영사 (LEO)",
    examples: ["SpaceX Starlink", "Amazon Kuiper", "OneWeb"],
    x: 460,
    y: 440,
    w: 380,
    h: 80,
    color: "#4f3fd6",
    bg: "rgba(79, 63, 214, 0.18)",
    textColor: "#2e1fa6",
  },
  {
    id: "network",
    label: "네트워크 인프라",
    examples: ["Ericsson", "Nokia", "Huawei", "ZTE", "Samsung NW"],
    x: 870,
    y: 160,
    w: 240,
    h: 280,
    color: "#2d6a4f",
    bg: "rgba(45, 106, 79, 0.10)",
    textColor: "#1a4530",
  },
  {
    id: "vendor",
    label: "검증 · SI · 도구 vendor",
    examples: ["Keysight", "R&S", "Anritsu", "ThunderSoft", "Capgemini", "한국 SI"],
    x: 30,
    y: 30,
    w: 240,
    h: 70,
    color: "#c84033",
    bg: "rgba(200, 64, 51, 0.10)",
    textColor: "#8c2419",
  },
];

const EDGES: Edge[] = [
  { from: "research", to: "chipset", label: "표준 명세" },
  { from: "research", to: "network", label: "표준" },
  { from: "chipset", to: "phone", label: "SoC 공급" },
  { from: "chipset", to: "iot", label: "모뎀 칩" },
  { from: "chipset", to: "auto", label: "TCU 칩" },
  { from: "chipset", to: "sat", label: "위성 칩" },
  { from: "phone", to: "carrier", label: "단말 인증" },
  { from: "iot", to: "carrier", label: "M2M 가입" },
  { from: "auto", to: "carrier", label: "TCU 가입" },
  { from: "sat", to: "satop", label: "위성 단말" },
  { from: "satop", to: "phone", label: "D2D" },
  { from: "network", to: "carrier", label: "RAN/코어" },
  { from: "vendor", to: "chipset", label: "검증 외주" },
  { from: "vendor", to: "phone", label: "" },
  { from: "vendor", to: "iot", label: "" },
];

const W = 1140;
const H = 560;

export function EcosystemDiagram() {
  const [hover, setHover] = useState<NodeId | null>(null);

  // 어떤 edge가 활성화되어야 하는지
  const activeEdges = new Set<string>();
  if (hover) {
    for (const e of EDGES) {
      if (e.from === hover || e.to === hover) {
        activeEdges.add(`${e.from}-${e.to}`);
      }
    }
  }

  // 어떤 node가 활성화되어야 하는지
  const activeNodes = new Set<NodeId>();
  if (hover) {
    activeNodes.add(hover);
    for (const e of EDGES) {
      if (e.from === hover) activeNodes.add(e.to);
      if (e.to === hover) activeNodes.add(e.from);
    }
  }

  return (
    <div className="rounded-md border border-border bg-surface p-4 md:p-6">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <div className="text-sm font-semibold">통신 산업 가치사슬</div>
          <div className="mt-0.5 text-xs text-muted">
            노드에 hover하면 연결된 영역이 강조됨. 클릭하면 카테고리 상세로 이동.
          </div>
        </div>
        <div className="flex flex-wrap gap-3 text-[10px] text-muted">
          <Legend color="#4f3fd6" label="통신·표준·서비스" />
          <Legend color="#c08727" label="단말 / 모듈" />
          <Legend color="#2d6a4f" label="인프라 · 자동차" />
          <Legend color="#c84033" label="검증 vendor (우리 영역)" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full min-w-[900px]"
          preserveAspectRatio="xMidYMid meet"
          onMouseLeave={() => setHover(null)}
        >
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--border-strong)" />
            </marker>
            <marker
              id="arrow-active"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--indigo)" />
            </marker>
            <marker
              id="arrow-vendor"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#c84033" />
            </marker>
          </defs>

          {/* edges */}
          {EDGES.map((edge) => {
            const fromNode = NODES.find((n) => n.id === edge.from)!;
            const toNode = NODES.find((n) => n.id === edge.to)!;
            const isActive = activeEdges.has(`${edge.from}-${edge.to}`);
            const isVendorEdge = edge.from === "vendor";

            // 시작·끝 점 계산 (각 노드의 가까운 가장자리)
            let x1 = fromNode.x + fromNode.w / 2;
            let y1 = fromNode.y + fromNode.h;
            let x2 = toNode.x + toNode.w / 2;
            let y2 = toNode.y;

            if (toNode.y > fromNode.y) {
              y1 = fromNode.y + fromNode.h;
              y2 = toNode.y;
            } else if (toNode.y < fromNode.y) {
              y1 = fromNode.y;
              y2 = toNode.y + toNode.h;
            } else {
              // 같은 row — horizontal
              if (fromNode.x < toNode.x) {
                x1 = fromNode.x + fromNode.w;
                x2 = toNode.x;
              } else {
                x1 = fromNode.x;
                x2 = toNode.x + toNode.w;
              }
              y1 = fromNode.y + fromNode.h / 2;
              y2 = toNode.y + toNode.h / 2;
            }

            // 곡선 (Bezier)
            const dx = x2 - x1;
            const dy = y2 - y1;
            const cx1 = x1 + dx * 0.3;
            const cy1 = y1 + dy * 0.5;
            const cx2 = x2 - dx * 0.3;
            const cy2 = y2 - dy * 0.5;
            const path = `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;

            const stroke = isVendorEdge
              ? "#c84033"
              : isActive
                ? "var(--indigo)"
                : "var(--border-strong)";
            const opacity = hover && !isActive ? 0.15 : isVendorEdge ? 0.35 : 0.55;
            const marker = isVendorEdge
              ? "url(#arrow-vendor)"
              : isActive
                ? "url(#arrow-active)"
                : "url(#arrow)";

            return (
              <g key={`${edge.from}-${edge.to}`} style={{ pointerEvents: "none" }}>
                <path
                  d={path}
                  fill="none"
                  stroke={stroke}
                  strokeWidth={isActive ? 2 : 1}
                  strokeDasharray={isVendorEdge ? "4 4" : "0"}
                  opacity={opacity}
                  markerEnd={marker}
                  style={{ transition: "all 200ms" }}
                />
                {edge.label && isActive && (
                  <g>
                    <rect
                      x={(x1 + x2) / 2 - 30}
                      y={(y1 + y2) / 2 - 8}
                      width={60}
                      height={16}
                      fill="white"
                      stroke="var(--indigo)"
                      strokeWidth={0.5}
                      rx={3}
                    />
                    <text
                      x={(x1 + x2) / 2}
                      y={(y1 + y2) / 2 + 4}
                      textAnchor="middle"
                      style={{
                        fontSize: 10,
                        fill: "var(--indigo-deep)",
                        fontWeight: 500,
                      }}
                    >
                      {edge.label}
                    </text>
                  </g>
                )}
              </g>
            );
          })}

          {/* nodes */}
          {NODES.map((node) => {
            const isHover = hover === node.id;
            const isActive = activeNodes.has(node.id);
            const dimmed = hover && !isActive;
            return (
              <g
                key={node.id}
                onMouseEnter={() => setHover(node.id)}
                style={{
                  cursor: "pointer",
                  opacity: dimmed ? 0.35 : 1,
                  transition: "opacity 200ms",
                }}
              >
                <rect
                  x={node.x}
                  y={node.y}
                  width={node.w}
                  height={node.h}
                  rx={6}
                  fill={node.bg}
                  stroke={node.color}
                  strokeWidth={isHover ? 2 : 1}
                  style={{ transition: "all 200ms" }}
                />
                <text
                  x={node.x + 12}
                  y={node.y + 22}
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    fill: node.textColor,
                  }}
                >
                  {node.label}
                </text>
                <text
                  x={node.x + 12}
                  y={node.y + 42}
                  style={{
                    fontSize: 10,
                    fill: "var(--muted)",
                  }}
                >
                  {node.examples.slice(0, 4).join(" · ")}
                </text>
                {node.examples.length > 4 && (
                  <text
                    x={node.x + 12}
                    y={node.y + 56}
                    style={{
                      fontSize: 10,
                      fill: "var(--muted)",
                    }}
                  >
                    {node.examples.slice(4).join(" · ")}
                  </text>
                )}
              </g>
            );
          })}

          {/* 안내 텍스트 */}
          <text
            x={W - 12}
            y={H - 12}
            textAnchor="end"
            style={{
              fontSize: 10,
              fill: "var(--subtle)",
              fontStyle: "italic",
            }}
          >
            ─ 검증 vendor (점선) → chipset · 단말 · IoT 등에 모두 검증 외주 제공
          </text>
        </svg>
      </div>

      <div className="dotted-divider mt-6" />

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <DiagramInsight
          title="우리 자리 = 검증 vendor"
          body="가장 좌상단에 있는 빨간 박스. Chipset / 단말 / IoT 회사들에 도구·인력 외주로 들어감. 거의 모든 노드와 연결."
        />
        <DiagramInsight
          title="위성은 새로 들어온 축"
          body="기존 chipset → 단말 → carrier 흐름에 위성 운영사(Starlink·Kuiper)가 별도로 진입. D2D로 단말과 직접 연결되는 새 흐름 등장."
        />
        <DiagramInsight
          title="Carrier 의존도 낮음"
          body="Chipset, IoT, Auto, Network는 carrier에 직접 매출 의존 X. 따라서 우리도 carrier 영업 안 해도 사업 가능."
        />
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className="inline-block h-2 w-2 rounded-sm"
        style={{ background: color }}
      />
      {label}
    </span>
  );
}

function DiagramInsight({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-md border border-border bg-surface-2 p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1.5 text-xs leading-6 text-muted">{body}</div>
    </div>
  );
}
