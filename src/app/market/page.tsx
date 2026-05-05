import { KOREAN_PLAYERS, CATEGORY_LABEL, type KoreanPlayer } from "@/lib/data/players";
import {
  Building2,
  Cpu,
  Microscope,
  TestTube,
  Workflow,
  Zap,
  Map as MapIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "한국 모뎀 시장 — Modem Testing Market Map",
};

const CATEGORY_META: Record<
  KoreanPlayer["category"],
  { icon: typeof Building2; tone: string }
> = {
  vendor1: { icon: Building2, tone: "indigo" },
  vendor2: { icon: Workflow, tone: "indigo" },
  tools: { icon: TestTube, tone: "amber" },
  carrier: { icon: Zap, tone: "forest" },
  iot: { icon: Cpu, tone: "amber" },
  auto: { icon: MapIcon, tone: "forest" },
  research: { icon: Microscope, tone: "indigo" },
};

const TONE_CLS: Record<string, { bg: string; text: string; ring: string }> = {
  indigo: { bg: "bg-indigo-bg", text: "text-indigo", ring: "border-indigo/30" },
  amber: { bg: "bg-amber-soft", text: "text-amber", ring: "border-amber/40" },
  forest: { bg: "bg-forest-bg", text: "text-forest", ring: "border-forest/30" },
};

export default function MarketPage() {
  const grouped = new Map<KoreanPlayer["category"], KoreanPlayer[]>();
  for (const p of KOREAN_PLAYERS) {
    if (!grouped.has(p.category)) grouped.set(p.category, []);
    grouped.get(p.category)!.push(p);
  }

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-12 md:px-10 md:pt-16">
      <header>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
          korea map
        </p>
        <h1 className="serif mt-3 text-4xl leading-[1.1] tracking-tight md:text-5xl">
          한국 모뎀 · 통신 시장 플레이어
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg">
          잠재 고객 / 잠재 파트너 / 잠재 경쟁사를 카테고리별로 매핑. 영업 시작 전에 누구를 만나야 할지 그림이 나옴.
        </p>
      </header>

      {/* Stats summary */}
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
        <SummaryCard
          label="협력사 / 검증 SI"
          value={
            (grouped.get("vendor1")?.length ?? 0) +
            (grouped.get("vendor2")?.length ?? 0)
          }
          tone="indigo"
        />
        <SummaryCard
          label="통신사 R&D"
          value={grouped.get("carrier")?.length ?? 0}
          tone="forest"
        />
        <SummaryCard
          label="IoT / 자동차 OEM"
          value={
            (grouped.get("iot")?.length ?? 0) + (grouped.get("auto")?.length ?? 0)
          }
          tone="amber"
        />
        <SummaryCard
          label="연구 기관"
          value={grouped.get("research")?.length ?? 0}
          tone="indigo"
        />
      </div>

      {/* Categories */}
      <div className="mt-12 space-y-12">
        {(Object.keys(CATEGORY_LABEL) as KoreanPlayer["category"][]).map(
          (cat) => {
            const players = grouped.get(cat) ?? [];
            if (players.length === 0) return null;
            const meta = CATEGORY_META[cat];
            const Icon = meta.icon;
            const tone = TONE_CLS[meta.tone];

            return (
              <section key={cat}>
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-md border",
                      tone.bg,
                      tone.text,
                      tone.ring
                    )}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.6} />
                  </div>
                  <div>
                    <div className="mono text-[10px] uppercase tracking-[0.3em] text-subtle">
                      category · {players.length}
                    </div>
                    <h2 className="serif text-2xl leading-none tracking-tight">
                      {CATEGORY_LABEL[cat]}
                    </h2>
                  </div>
                </div>
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {players.map((p) => (
                    <PlayerCard key={p.name} player={p} tone={meta.tone} />
                  ))}
                </div>
              </section>
            );
          }
        )}
      </div>

      {/* Approach guide */}
      <section className="mt-20 rounded-md border border-indigo/30 bg-indigo-bg/40 p-8 md:p-10">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo-deep">
          who to approach first
        </p>
        <h2 className="serif mt-3 text-2xl leading-tight tracking-tight md:text-3xl">
          영업 우선순위
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ApproachCard
            order="1순위"
            who="모뎀 chipset 스타트업 + IoT 모듈 회사"
            why="자체 도구 만들 여력 없음. 빠르게 도입 결정. 가격 민감하지만 ROI 명확하면 사용."
          />
          <ApproachCard
            order="2순위"
            who="통신사 R&D · 정부 연구원 (ETRI)"
            why="과제 예산 큼. 연 단위 라이선스 가능. 도입 결정 사이클 길지만 한 번 들어가면 안정적."
          />
          <ApproachCard
            order="3순위"
            who="자동차 텔레매틱스 (TCU)"
            why="모뎀 검증 수요 빠르게 증가. 자동차 도메인은 안전성 요구 강함 — 차별화 포인트."
          />
        </div>
        <div className="mt-6 rounded-md bg-surface/60 p-4 text-sm leading-7 text-foreground">
          <strong>피해야 할 첫 고객:</strong> 삼성·LG·SKT 같은 대기업. 보안 검토 6~12개월 + 의사결정 사이클 길어서 첫 매출 발생 너무 늦어짐. 트랙 레코드 쌓인 후 진입.
        </div>
      </section>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: "indigo" | "amber" | "forest";
}) {
  const cls = TONE_CLS[tone];
  return (
    <div className="rounded-md border border-border bg-surface p-5">
      <div className="text-[10px] uppercase tracking-widest text-subtle">
        {label}
      </div>
      <div className={cn("tabular mt-2 text-3xl font-semibold", cls.text)}>
        {value}
      </div>
    </div>
  );
}

function PlayerCard({
  player,
  tone,
}: {
  player: KoreanPlayer;
  tone: string;
}) {
  const cls = TONE_CLS[tone];
  return (
    <div className="flex h-full flex-col rounded-md border border-border bg-surface p-4 transition-colors hover:border-foreground/20">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="text-sm font-semibold">{player.korean}</div>
          <div className="mono mt-0.5 text-[11px] text-subtle">{player.name}</div>
        </div>
        <span
          className={cn(
            "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium",
            player.scale === "대"
              ? "bg-foreground text-background"
              : player.scale === "중"
                ? cls.bg + " " + cls.text
                : "bg-soft text-muted"
          )}
        >
          {player.scale}
        </span>
      </div>
      <p className="mt-3 text-xs leading-6 text-muted">{player.note}</p>
    </div>
  );
}

function ApproachCard({
  order,
  who,
  why,
}: {
  order: string;
  who: string;
  why: string;
}) {
  return (
    <div className="rounded-md border border-indigo/20 bg-surface p-5">
      <div className="mono text-[10px] uppercase tracking-[0.3em] text-indigo-deep">
        {order}
      </div>
      <div className="serif mt-2 text-base font-semibold">{who}</div>
      <p className="mt-2 text-xs leading-6 text-muted">{why}</p>
    </div>
  );
}
