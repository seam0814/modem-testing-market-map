import {
  PLAYERS,
  CATEGORY_LABEL,
  CATEGORY_DESC,
  REGION_LABEL,
  REGION_FLAG,
  type PlayerCategory,
  type Player,
  type Region,
} from "@/lib/data/players";
import { MARKET_STATS, FUTURE_TRENDS } from "@/lib/data/market";
import {
  Building2,
  Cpu,
  Smartphone,
  Antenna,
  Satellite,
  Boxes,
  Car,
  Microscope,
  TestTube,
  TrendingUp,
  Sparkles,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "통신 시장 — Modem Testing Market Map",
};

const CATEGORY_META: Record<
  PlayerCategory,
  { icon: typeof Building2; tone: string }
> = {
  carrier: { icon: Antenna, tone: "indigo" },
  chipset: { icon: Cpu, tone: "indigo" },
  oem: { icon: Smartphone, tone: "amber" },
  network: { icon: Building2, tone: "forest" },
  satellite: { icon: Satellite, tone: "indigo" },
  iot: { icon: Boxes, tone: "amber" },
  auto: { icon: Car, tone: "forest" },
  vendor: { icon: TestTube, tone: "amber" },
  research: { icon: Microscope, tone: "indigo" },
};

const TONE_CLS: Record<string, { bg: string; text: string; ring: string }> = {
  indigo: { bg: "bg-indigo-bg", text: "text-indigo", ring: "border-indigo/30" },
  amber: { bg: "bg-amber-soft", text: "text-amber", ring: "border-amber/40" },
  forest: { bg: "bg-forest-bg", text: "text-forest", ring: "border-forest/30" },
};

export default function MarketPage() {
  const grouped = new Map<PlayerCategory, Player[]>();
  for (const p of PLAYERS) {
    if (!grouped.has(p.category)) grouped.set(p.category, []);
    grouped.get(p.category)!.push(p);
  }

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-12 md:px-10 md:pt-16">
      {/* Hero */}
      <header>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
          telecom · ecosystem
        </p>
        <h1 className="serif mt-3 text-4xl leading-[1.1] tracking-tight md:text-5xl">
          글로벌 통신 시장의{" "}
          <span className="text-indigo">전체 그림</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg">
          통신사·chipset·OEM·네트워크 장비·위성·IoT·자동차·검증 vendor·연구 기관까지.
          시장 규모 숫자, 누가 어디서 무엇을 하는지, 그리고 앞으로 5년 어디로 가는지를 한 곳에 정리.
        </p>
      </header>

      {/* Market size stats */}
      <section className="mt-14">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
              market size · 2025
            </p>
            <h2 className="serif mt-2 text-3xl tracking-tight">
              시장 규모 (실제 숫자)
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              GSMA, Ericsson, Counterpoint, Dell&apos;Oro 등 산업 보고서 기준. 정확한 수치보다
              <strong> 자릿수와 추세</strong>를 보는 용도.
            </p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {MARKET_STATS.map((stat) => (
            <div
              key={stat.id}
              className="rounded-md border border-border bg-surface p-5"
            >
              <div className="flex items-baseline justify-between gap-2">
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted">
                  {stat.label}
                </div>
                {stat.trend === "up" && (
                  <TrendingUp className="h-3.5 w-3.5 text-forest" />
                )}
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="serif text-3xl font-semibold tracking-tight">
                  {stat.value}
                </span>
                <span className="mono text-xs text-muted">{stat.unit}</span>
              </div>
              <p className="mt-2.5 text-xs leading-6 text-muted">{stat.detail}</p>
              <div className="mono mt-3 text-[10px] uppercase tracking-widest text-subtle">
                via {stat.source}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why this matters block */}
      <section className="mt-16 rounded-md border border-indigo/30 bg-indigo-bg/40 p-6 md:p-10">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo-deep">
          why this matters
        </p>
        <h2 className="serif mt-3 max-w-3xl text-2xl leading-tight tracking-tight md:text-3xl">
          모뎀 테스트 도구 시장 ~$10B 안에 우리가 들어갈 자리.{" "}
          <span className="text-indigo">한 고객사 의존이 아니라 글로벌 분산 매출.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">
          chipset 6곳, 단말 OEM 글로벌 Top 10, IoT 모듈 회사 30+곳, 자동차 텔레매틱스 OEM 다수,
          위성 통신 회사들이 모뎀 검증 도구의 잠재 고객. 한 곳에 매출 의존 X.
        </p>
      </section>

      {/* Players by category */}
      <section className="mt-16">
        <div className="mb-8">
          <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
            ecosystem · who&apos;s who
          </p>
          <h2 className="serif mt-2 text-3xl tracking-tight">9개 카테고리 · 60+ 플레이어</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            글로벌 + 한국 핵심 플레이어. 잠재 고객 (chipset·OEM·IoT·auto), 잠재 파트너 (vendor),
            잠재 경쟁사 (test tools)를 한눈에.
          </p>
        </div>

        <div className="space-y-12">
          {(Object.keys(CATEGORY_LABEL) as PlayerCategory[]).map((cat) => {
            const players = grouped.get(cat) ?? [];
            if (players.length === 0) return null;
            const meta = CATEGORY_META[cat];
            const Icon = meta.icon;
            const tone = TONE_CLS[meta.tone];

            return (
              <section key={cat}>
                <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-md border",
                        tone.bg,
                        tone.text,
                        tone.ring
                      )}
                    >
                      <Icon className="h-4.5 w-4.5" strokeWidth={1.6} />
                    </div>
                    <div>
                      <div className="mono text-[10px] uppercase tracking-[0.3em] text-subtle">
                        {players.length} players
                      </div>
                      <h3 className="serif text-2xl leading-tight tracking-tight">
                        {CATEGORY_LABEL[cat]}
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="mb-5 max-w-3xl text-sm leading-6 text-muted">
                  {CATEGORY_DESC[cat]}
                </p>
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {players.map((p) => (
                    <PlayerCard key={p.name} player={p} tone={meta.tone} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      {/* Future trends */}
      <section className="mt-20">
        <div className="mb-8">
          <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
            future · 2025 → 2030
          </p>
          <h2 className="serif mt-2 text-3xl tracking-tight md:text-4xl">
            앞으로 5~10년의 통신 시장
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
            5개 메가트렌드. 각 트렌드마다 시장 규모, 드라이버, 너에게 의미 있는 기회를 함께.
          </p>
        </div>

        <div className="space-y-5">
          {FUTURE_TRENDS.map((trend, i) => (
            <article
              key={trend.id}
              className="overflow-hidden rounded-md border border-border bg-surface"
            >
              <div className="border-b border-border bg-surface-2 px-6 py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="mono inline-flex h-6 items-center rounded-full bg-foreground px-2 text-[10px] font-semibold uppercase tracking-widest text-background">
                      0{i + 1}
                    </span>
                    <h3 className="serif text-2xl tracking-tight md:text-3xl">
                      {trend.title}
                    </h3>
                  </div>
                  <span className="mono rounded-full border border-border bg-surface px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-muted">
                    {trend.timeframe}
                  </span>
                </div>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
                  {trend.oneLiner}
                </p>
                {trend.marketSize && (
                  <div className="mono mt-3 inline-flex items-center gap-1.5 rounded-full bg-indigo-bg px-3 py-1 text-[11px] text-indigo-deep">
                    <TrendingUp className="h-3 w-3" />
                    {trend.marketSize}
                  </div>
                )}
              </div>

              <div className="grid gap-0 md:grid-cols-3 md:divide-x md:divide-border">
                <TrendBlock
                  icon={Sparkles}
                  title="드라이버"
                  iconTone="indigo"
                >
                  <ul className="space-y-2">
                    {trend.drivers.map((d, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 text-sm leading-6 text-foreground"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </TrendBlock>
                <TrendBlock
                  icon={TrendingUp}
                  title="시장 임팩트"
                  iconTone="amber"
                >
                  <p className="text-sm leading-7 text-foreground">
                    {trend.impact}
                  </p>
                </TrendBlock>
                <TrendBlock
                  icon={Target}
                  title="너의 기회"
                  iconTone="forest"
                  highlight
                >
                  <p className="text-sm leading-7 text-foreground">
                    {trend.yourOpportunity}
                  </p>
                </TrendBlock>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Sales priority */}
      <section className="mt-20 rounded-md border border-indigo/30 bg-indigo-bg/40 p-6 md:p-10">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo-deep">
          who to approach first
        </p>
        <h2 className="serif mt-3 text-2xl leading-tight tracking-tight md:text-3xl">
          영업 우선순위
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          한 고객사 매출 의존을 피하고 글로벌 분산. 처음 6개월은 의사결정 빠른 곳부터.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ApproachCard
            order="1순위"
            who="모뎀 chipset 스타트업 + IoT 모듈 회사"
            why="자체 도구 만들 여력 없음. 빠르게 도입 결정. 가격 민감하지만 ROI 명확하면 사용. Quectel·u-blox·Fibocom 같은 회사."
          />
          <ApproachCard
            order="2순위"
            who="통신사 R&D · 정부 연구원"
            why="과제 예산 큼. 연 단위 라이선스 가능. 도입 결정 사이클 길지만 한 번 들어가면 안정적. ETRI·KAIST·SKT R&D 등."
          />
          <ApproachCard
            order="3순위"
            who="자동차 텔레매틱스 (TCU)"
            why="EU 의무화로 모뎀 검증 수요 폭증. 자동차 도메인 = 안전성 요구 강함 → 차별화 가능. 현대모비스·Bosch·Continental."
          />
        </div>
        <div className="mt-6 rounded-md bg-surface/60 p-4 text-sm leading-7 text-foreground">
          <strong>피해야 할 첫 고객:</strong> 글로벌 Tier 1 통신사·대형 chipset·대형 OEM. 보안 검토 6~12개월 + 의사결정 사이클 길어서 첫 매출 발생 너무 늦어짐. 트랙 레코드 쌓인 후 Phase 2~3에 진입.
        </div>
      </section>

      <section className="mt-12 rounded-md border border-foreground/10 bg-foreground p-6 text-background md:p-10">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-background/60">
          tl;dr
        </p>
        <h2 className="serif mt-3 max-w-3xl text-2xl leading-tight tracking-tight md:text-3xl">
          88억 가입 · $1.6T 통신 산업 · 22억 5G 가입자.{" "}
          <span className="text-indigo-soft">앞으로는 위성 D2D · 6G · IoT · AI-RAN · V2X.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-background/70 md:text-base">
          모뎀 테스트 도구는 이 모든 영역의 기반 인프라. 한 곳에 매출 의존 X, 글로벌 분산 가능한 자리.
          위성·6G·V2X 같은 미래 영역은 아직 도구가 거의 없음 — 지금부터 시작하면 선점 가능.
        </p>
      </section>
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
      <div className="serif mt-2 text-base font-semibold leading-tight">{who}</div>
      <p className="mt-3 text-xs leading-6 text-muted">{why}</p>
    </div>
  );
}

function PlayerCard({ player, tone }: { player: Player; tone: string }) {
  const cls = TONE_CLS[tone];
  return (
    <div className="flex h-full flex-col rounded-md border border-border bg-surface p-4 transition-colors hover:border-foreground/20">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="text-base">{REGION_FLAG[player.region]}</span>
            <span className="text-sm font-semibold leading-tight">
              {player.korean}
            </span>
          </div>
          <div className="mono mt-1 text-[11px] text-subtle">{player.name}</div>
        </div>
        <span
          className={cn(
            "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium",
            player.scale === "대"
              ? "bg-foreground text-background"
              : player.scale === "중"
                ? `${cls.bg} ${cls.text}`
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

function TrendBlock({
  icon: Icon,
  title,
  children,
  iconTone,
  highlight,
}: {
  icon: typeof Sparkles;
  title: string;
  children: React.ReactNode;
  iconTone: "indigo" | "amber" | "forest";
  highlight?: boolean;
}) {
  const tone = TONE_CLS[iconTone];
  return (
    <div className={cn("p-6", highlight && "bg-forest-bg/50")}>
      <div className="mb-3 flex items-center gap-2">
        <div
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded-md",
            tone.bg,
            tone.text
          )}
        >
          <Icon className="h-3.5 w-3.5" strokeWidth={1.6} />
        </div>
        <div className="mono text-[10px] uppercase tracking-[0.3em] text-subtle">
          {title}
        </div>
      </div>
      {children}
    </div>
  );
}
