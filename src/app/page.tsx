import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Target,
  Layers,
  Building2,
  Cpu,
  Smartphone,
  Antenna,
  Satellite,
  Boxes,
  Car,
  Microscope,
  TestTube,
} from "lucide-react";
import {
  PLAYERS,
  CATEGORY_LABEL,
  CATEGORY_DESC,
  REGION_FLAG,
  type PlayerCategory,
  type Player,
} from "@/lib/data/players";
import { MARKET_STATS, FUTURE_TRENDS } from "@/lib/data/market";
import { HERO_STAT } from "@/lib/data/charts";
import { MarketSizeBars } from "@/components/charts/MarketSizeBars";
import { GrowthProjection } from "@/components/charts/GrowthProjection";
import { EcosystemDiagram } from "@/components/EcosystemDiagram";
import { cn } from "@/lib/utils";

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

export default function HomePage() {
  const grouped = new Map<PlayerCategory, Player[]>();
  for (const p of PLAYERS) {
    if (!grouped.has(p.category)) grouped.set(p.category, []);
    grouped.get(p.category)!.push(p);
  }

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 md:px-10">
      <section className="grid-bg relative -mx-6 px-6 pt-16 pb-16 md:-mx-10 md:px-10 md:pt-24 md:pb-24">
        <div className="mono mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-muted">
          <Sparkles className="h-3 w-3 text-indigo" />
          telecom · ecosystem · v0.3
        </div>
        <h1 className="serif max-w-4xl whitespace-pre-line text-4xl leading-[1.05] tracking-tight md:text-6xl">
          {`글로벌 통신 시장의 `}
          <span className="text-indigo">전체 그림</span>
          {`과\n그 안의 우리 자리.`}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg">
          {HERO_STAT.mobileSubs}B 가입 · ${HERO_STAT.serviceRevenue}B 통신 산업 · 5G {HERO_STAT.fiveGSubs}B 가입자.
          chipset · OEM · IoT · 자동차 · 위성까지 — 누가 어디 있는지, 시장이 어디로 가는지, 그리고 우리가 어디 들어갈지를 한 페이지에 정리.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="#ecosystem"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm text-background transition-transform hover:scale-[1.02]"
          >
            생태계 그림 보기
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/positions"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-indigo/40 bg-indigo-bg px-5 text-sm text-indigo-deep transition-colors hover:bg-indigo-soft"
          >
            8개 포지션 분석
          </Link>
          <Link
            href="/strategy"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-surface px-5 text-sm transition-colors hover:bg-soft"
          >
            Phase 빌드 전략
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Insight
          icon={Target}
          title="장비 = 진입 장벽 = 빈 자리"
          body="$10B 측정 장비 시장 뒤에, 그 장비를 못 사는 회사가 글로벌 수천 곳. 그들이 곧 잠재 고객. 큰 회사는 못 만드는 도구를 만들 수 있는 자리."
        />
        <Insight
          icon={Layers}
          title="인력 공수 X · 도구 사업 O"
          body="ThunderSoft·Capgemini 같은 글로벌 대형 vendor와 인력 사업으로 정면 경쟁 X. SaaS 도구로 가서 매출 분산하고 매각 가능한 자산화."
        />
        <Insight
          icon={Sparkles}
          title="미래 시장 선점 가능"
          body="위성 D2D · 6G · IoT 폭발 · AI-RAN · V2X 의무화. 앞으로 5년 핵심 트렌드들에 모두 모뎀 검증 도구가 새로 필요해. 지금이 진입 타이밍."
        />
      </section>

      <section className="mt-16">
        <div className="mb-6">
          <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
            visual · market size
          </p>
          <h2 className="serif mt-2 text-3xl tracking-tight">시장 규모를 한 눈에</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            막대에 hover하면 출처/메모가 표시됩니다. 통신 서비스 매출 $1.6T는 모든 부품·인프라 합계의 3배 이상.
          </p>
        </div>
        <MarketSizeBars />
      </section>

      <section className="mt-12">
        <div className="mb-6">
          <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
            visual · 2025 → 2030
          </p>
          <h2 className="serif mt-2 text-3xl tracking-tight">앞으로 5년 어디로 가나</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            모뎀 검증 도구의 잠재 시장은 모두 우상향. 가장 빠르게 성장하는 곳이 곧 우리의 우선 진입 영역.
          </p>
        </div>
        <GrowthProjection />
      </section>

      <section id="ecosystem" className="mt-16 scroll-mt-24">
        <div className="mb-6">
          <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
            visual · value chain
          </p>
          <h2 className="serif mt-2 text-3xl tracking-tight">통신 산업 가치사슬</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            표준 → chipset → 단말/IoT/TCU/위성 → carrier로 흐르는 가치사슬. 검증 vendor (빨간 박스)가 횡단으로 chipset·단말·IoT에 모두 연결되는 구조.
          </p>
        </div>
        <EcosystemDiagram />
      </section>

      <section className="mt-16">
        <div className="mb-6">
          <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
            numbers · sourced
          </p>
          <h2 className="serif mt-2 text-2xl tracking-tight md:text-3xl">12개 핵심 숫자</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            각 카드의 출처는 GSMA · Ericsson · Counterpoint · Dell&apos;Oro · IoT Analytics 등 산업 보고서 기준.
          </p>
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

      <section className="mt-20">
        <div className="mb-8">
          <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
            who&apos;s who
          </p>
          <h2 className="serif mt-2 text-3xl tracking-tight">9개 카테고리 · 60+ 플레이어</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            글로벌 + 한국 핵심 플레이어. 잠재 고객, 잠재 파트너, 잠재 경쟁사를 한눈에.
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
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-md border",
                        tone.bg,
                        tone.text,
                        tone.ring
                      )}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
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
                <p className="mb-4 max-w-3xl text-sm leading-6 text-muted">
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

      <section className="mt-20">
        <div className="mb-8">
          <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
            future · 2025 → 2030
          </p>
          <h2 className="serif mt-2 text-3xl tracking-tight md:text-4xl">
            앞으로 5~10년의 통신 시장
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
            5개 메가트렌드. 각 트렌드마다 시장 규모, 드라이버, 우리에게 의미 있는 기회를 함께.
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
                <TrendBlock title="드라이버" iconTone="indigo">
                  <ul className="space-y-2">
                    {trend.drivers.map((d, idx) => (
                      <li key={idx} className="flex gap-2 text-sm leading-6">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </TrendBlock>
                <TrendBlock title="시장 임팩트" iconTone="amber">
                  <p className="text-sm leading-7">{trend.impact}</p>
                </TrendBlock>
                <TrendBlock title="우리의 기회" iconTone="forest" highlight>
                  <p className="text-sm leading-7">{trend.yourOpportunity}</p>
                </TrendBlock>
              </div>
            </article>
          ))}
        </div>
      </section>

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
            why="자체 도구 만들 여력 없음. 빠르게 도입 결정. ROI 명확하면 유료 전환 빠름. Quectel·u-blox·Fibocom 같은 회사."
          />
          <ApproachCard
            order="2순위"
            who="통신사 R&D · 정부 연구원"
            why="과제 예산 큼. 연 단위 라이선스 가능. 사이클 길지만 한 번 들어가면 안정적. ETRI·KAIST·SKT R&D."
          />
          <ApproachCard
            order="3순위"
            who="자동차 텔레매틱스 (TCU)"
            why="EU 의무화로 모뎀 검증 수요 폭증. 자동차 도메인 = 안전성 요구 강함 → 차별화 가능. Bosch·Continental·Mobis."
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
          <span className="text-indigo-soft">
            앞으로는 위성 D2D · 6G · IoT · AI-RAN · V2X.
          </span>
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-background/70 md:text-base">
          모뎀 테스트 도구는 이 모든 영역의 기반 인프라. 한 곳에 매출 의존 X, 글로벌 분산 가능한 자리.
          위성·6G·V2X 같은 미래 영역은 아직 도구가 거의 없음 — 지금부터 시작하면 선점 가능.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/positions"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-indigo px-4 text-sm transition-transform hover:scale-[1.02]"
          >
            8개 포지션 분석으로 →
          </Link>
          <Link
            href="/strategy"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-background/30 bg-foreground px-4 text-sm text-background transition-colors hover:bg-background/10"
          >
            Phase 빌드 전략으로 →
          </Link>
        </div>
      </section>
    </div>
  );
}

function Insight({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Target;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-md border border-border bg-surface p-6">
      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-indigo-bg text-indigo">
        <Icon className="h-4 w-4" strokeWidth={1.6} />
      </div>
      <h3 className="serif mt-4 text-lg leading-tight tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
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
  title,
  children,
  iconTone,
  highlight,
}: {
  title: string;
  children: React.ReactNode;
  iconTone: "indigo" | "amber" | "forest";
  highlight?: boolean;
}) {
  const tone = TONE_CLS[iconTone];
  return (
    <div className={cn("p-6", highlight && "bg-forest-bg/50")}>
      <div className={cn("mono mb-3 text-[10px] uppercase tracking-[0.3em]", tone.text)}>
        {title}
      </div>
      {children}
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
