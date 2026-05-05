import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { POSITIONS, CORE, EXTENSION, SPECIALTY, ADVANCED } from "@/lib/data/positions";
import { PriorityMatrix } from "@/components/PriorityMatrix";
import { PositionCard } from "@/components/PositionCard";

export const metadata = {
  title: "8개 포지션 — Modem Testing Market Map",
};

export default function PositionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-12 md:px-10 md:pt-16">
      <header className="mb-12">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
          positions
        </p>
        <h1 className="serif mt-3 text-4xl leading-[1.1] tracking-tight md:text-5xl">
          모뎀 검증 도구 시장의{" "}
          <span className="text-indigo">8개 포지션</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted md:text-lg">
          비싼 RF 측정 장비 없이도 들어갈 자리를 8개로 매핑. 우선순위 매트릭스로 전체 비교 후, 카테고리별로 자세히.
        </p>
      </header>

      <section className="mb-16">
        <div className="mb-6">
          <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
            overview
          </p>
          <h2 className="serif mt-2 text-3xl tracking-tight">우선순위 매트릭스</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            왼쪽 위(쉬움 + 큰 시장)에 가까운 포지션이 1순위 후보. 점 크기는 강점과의 fit. 점 클릭 시 상세 페이지.
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
          B는 진입 장벽이 낮아 빠르게 트래픽 확보 → A로 전환하는 funnel. 둘 다 빠른 prototype 능력으로 2~4주 안에 베타 가능.
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
          <Link
            href="/strategy"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-surface px-4 text-sm transition-colors hover:bg-soft"
          >
            Phase 빌드 전략 →
          </Link>
        </div>
      </section>
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
