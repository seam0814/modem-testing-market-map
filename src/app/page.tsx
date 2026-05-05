import Link from "next/link";
import { ArrowRight, Sparkles, Target, Layers } from "lucide-react";
import { POSITIONS, CORE, EXTENSION, SPECIALTY, ADVANCED } from "@/lib/data/positions";
import { PriorityMatrix } from "@/components/PriorityMatrix";
import { PositionCard } from "@/components/PositionCard";

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 md:px-10">
      <section className="grid-bg relative -mx-6 px-6 pt-16 pb-20 md:-mx-10 md:px-10 md:pt-24 md:pb-28">
        <div className="mono mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-muted">
          <Sparkles className="h-3 w-3 text-indigo" />
          internal · v0.2
        </div>
        <h1 className="serif max-w-4xl whitespace-pre-line text-4xl leading-[1.1] tracking-tight md:text-6xl">
          {`88억 가입 · $1.6T 통신 산업.\n`}
          <span className="text-indigo">비싼 장비 없이도</span>
          {`\n들어갈 자리는 있다.`}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg">
          chipset 6곳 · 단말 OEM Top 10 · IoT 모듈 30+곳 · 자동차 TCU OEM 다수 · 위성 통신 신흥 강자들. 이들이 모두
          모뎀 검증 도구의 잠재 고객입니다. Anritsu·Keysight 같은 측정 장비 없이도 들어갈 8개 포지션을 매핑했습니다.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/positions"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm text-background transition-transform hover:scale-[1.02]"
          >
            8개 포지션 살펴보기
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/market"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-indigo/40 bg-indigo-bg px-5 text-sm text-indigo-deep transition-colors hover:bg-indigo-soft"
          >
            통신 시장 전체 보기
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
          body="$10B 측정 장비 시장 뒤에, 그 장비를 못 사는 회사가 글로벌 수천 곳. 그들이 곧 잠재 고객이고, 큰 회사는 못 만드는 도구를 만들 수 있는 자리."
        />
        <Insight
          icon={Layers}
          title="인력 공수 사업 X · 도구 사업 O"
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
            overview
          </p>
          <h2 className="serif mt-2 text-3xl tracking-tight">우선순위 매트릭스</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            왼쪽 위(쉬움 + 큰 시장)에 가까운 포지션이 1순위 후보. 점 크기는 너의 강점과의 fit.
          </p>
        </div>
        <PriorityMatrix />
      </section>

      <CategorySection
        eyebrow="phase 1 — 메인"
        title="Core 포지션"
        sub="처음 6개월 안에 출시할 단일 제품의 후보."
        positions={CORE}
      />
      <CategorySection
        eyebrow="phase 2 — 부가 모듈"
        title="Extension 포지션"
        sub="Core 출시 6~18개월 후 자연스러운 확장."
        positions={EXTENSION}
      />
      <CategorySection
        eyebrow="phase 3 — 인접 시장"
        title="Specialty 포지션"
        sub="도메인 깊이가 충분할 때 진입하는 인접 시장."
        positions={SPECIALTY}
      />
      <CategorySection
        eyebrow="후순위"
        title="Advanced / 비추천"
        sub="진입 난이도 또는 경쟁 강도가 큰 영역. 참고용."
        positions={ADVANCED}
      />

      <section className="mt-20 rounded-md border border-indigo/30 bg-indigo-bg/40 p-8 md:p-10">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo-deep">
          tl;dr
        </p>
        <h2 className="serif mt-3 whitespace-pre-line text-2xl leading-tight tracking-tight md:text-3xl">
          {`A (로그 분석 SaaS) + B (3GPP RAG) 로 시작.\n6~18개월 안에 F + G로 확장.`}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">
          B는 진입 장벽이 낮아 빠르게 트래픽 확보 → A로 전환하는 funnel. 둘 다 너의 데모 prototype 능력으로
          2~4주 안에 베타 가능.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/positions/log-analytics-saas"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-indigo px-4 text-sm text-white transition-transform hover:scale-[1.02]"
          >
            A — 로그 분석 SaaS 보기
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/positions/3gpp-rag-assistant"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-indigo/40 bg-surface px-4 text-sm text-indigo-deep transition-colors hover:bg-indigo-bg"
          >
            B — 3GPP RAG 보기
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

function CategorySection({
  eyebrow,
  title,
  sub,
  positions,
}: {
  eyebrow: string;
  title: string;
  sub: string;
  positions: typeof POSITIONS;
}) {
  if (positions.length === 0) return null;
  return (
    <section className="mt-16">
      <div className="mb-6">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
          {eyebrow}
        </p>
        <h2 className="serif mt-2 text-2xl tracking-tight md:text-3xl">{title}</h2>
        <p className="mt-2 text-sm text-muted">{sub}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {positions.map((p) => (
          <PositionCard key={p.id} position={p} />
        ))}
      </div>
    </section>
  );
}
