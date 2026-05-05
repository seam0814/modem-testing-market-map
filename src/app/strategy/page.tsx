import Link from "next/link";
import { ArrowRight, CheckCircle2, Target, Zap } from "lucide-react";
import { PHASES } from "@/lib/data/phases";
import { POSITIONS } from "@/lib/data/positions";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Phase 빌드 전략 — Modem Testing Market Map",
};

export default function StrategyPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-12 md:px-10 md:pt-16">
      <header>
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
          phase strategy
        </p>
        <h1 className="serif mt-3 text-4xl leading-[1.1] tracking-tight md:text-5xl">
          18~36개월{" "}
          <span className="text-indigo">단계별 빌드 계획</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg">
          Phase 1에 단일 제품으로 시작 → Phase 2에서 부가 모듈로 ARPU 확장 → Phase 3에 인접 시장 진입.
          한국 B2B SaaS의 표준 경로를 모뎀 도구 시장에 맞춰 적용.
        </p>
      </header>

      {/* Timeline visualization */}
      <section className="mt-12 rounded-md border border-border bg-surface p-6 md:p-8">
        <div className="mb-5 flex items-center justify-between">
          <div className="text-sm font-semibold">타임라인 (개월)</div>
          <div className="mono text-[10px] uppercase tracking-widest text-subtle">
            0 → 36 months
          </div>
        </div>
        <div className="space-y-3">
          {PHASES.map((phase) => {
            const left = (phase.durationMonths.from / 36) * 100;
            const width = ((phase.durationMonths.to - phase.durationMonths.from) / 36) * 100;
            const tone = {
              1: "bg-indigo",
              2: "bg-forest",
              3: "bg-amber",
            }[phase.number];
            return (
              <div key={phase.number} className="relative">
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="font-medium">
                    Phase {phase.number} · {phase.title}
                  </span>
                  <span className="mono text-subtle">{phase.duration}</span>
                </div>
                <div className="relative h-8 overflow-hidden rounded-md bg-soft">
                  <div
                    className={cn(
                      "absolute top-0 bottom-0 flex items-center px-3 text-[11px] text-white",
                      tone
                    )}
                    style={{
                      left: `${left}%`,
                      width: `${width}%`,
                    }}
                  >
                    <span className="mono uppercase tracking-widest">
                      {phase.positions.join(" + ")}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex items-center justify-between text-[10px] text-subtle">
          <span>0개월</span>
          <span>12개월</span>
          <span>24개월</span>
          <span>36개월</span>
        </div>
      </section>

      {/* Phase details */}
      {PHASES.map((phase, i) => {
        const tone = {
          1: { bg: "bg-indigo-bg", text: "text-indigo-deep", chip: "bg-indigo text-white" },
          2: { bg: "bg-forest-bg", text: "text-forest", chip: "bg-forest text-white" },
          3: { bg: "bg-amber-soft", text: "text-amber", chip: "bg-amber text-white" },
        }[phase.number]!;
        return (
          <section
            key={phase.number}
            className="mt-12 rounded-md border border-border bg-surface p-6 md:p-10"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={cn(
                  "mono inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em]",
                  tone.chip
                )}
              >
                Phase {phase.number}
              </span>
              <span className="mono rounded-full border border-border bg-surface-2 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted">
                {phase.duration}
              </span>
              <div className="flex gap-1.5">
                {phase.positions.map((id) => {
                  const pos = POSITIONS.find((p) => p.id === id);
                  return (
                    <Link
                      key={id}
                      href={`/positions/${pos?.slug ?? ""}`}
                      className={cn(
                        "mono inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold transition-colors hover:opacity-80",
                        tone.bg,
                        tone.text
                      )}
                    >
                      {id}
                    </Link>
                  );
                })}
              </div>
            </div>

            <h2 className="serif mt-5 text-3xl tracking-tight md:text-4xl">
              {phase.title}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
              {phase.oneLiner}
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <div className="mono mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-subtle">
                  <Target className="h-3 w-3" />
                  focus
                </div>
                <ul className="space-y-2">
                  {phase.focus.map((f, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm leading-6 text-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="mono mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-subtle">
                  <Zap className="h-3 w-3" />
                  metrics
                </div>
                <div className="space-y-2">
                  {phase.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex items-baseline justify-between gap-3 rounded-md border border-border bg-surface-2 px-3 py-2.5 text-sm"
                    >
                      <span className="text-muted">{m.label}</span>
                      <span className="mono font-semibold">{m.target}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="mono mb-3 text-[10px] uppercase tracking-[0.3em] text-subtle">
                deliverables
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {phase.deliverables.map((d) => (
                  <div
                    key={d.title}
                    className="rounded-md border border-border bg-surface-2 p-4"
                  >
                    <div className="text-sm font-semibold">{d.title}</div>
                    <div className="mt-2 text-xs leading-6 text-muted">
                      {d.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={cn("mt-8 rounded-md border-l-4 p-4 md:p-5", tone.bg)}>
              <div className={cn("mono mb-1 text-[10px] uppercase tracking-[0.3em]", tone.text)}>
                rationale
              </div>
              <p className="text-sm leading-7 text-foreground">{phase.rationale}</p>
            </div>
          </section>
        );
      })}

      {/* Common differentiators */}
      <section className="mt-16">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
          all phases · 차별화 포인트
        </p>
        <h2 className="serif mt-3 text-3xl tracking-tight">
          모든 phase에 공통으로 적용
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Differentiator
            title="On-premise 자체 호스팅 옵션 필수"
            body="모뎀 데이터는 NDA 영역. 클라우드 단독으로는 엔터프라이즈 못 따냄. Docker compose / Helm chart로 자체 호스팅 패키지 제공."
          />
          <Differentiator
            title="API + 데이터 export"
            body="사내 BI · 사내 도구와 연동 가능해야 함. REST + webhook + CSV export 기본 탑재."
          />
          <Differentiator
            title="빠른 prototype 능력 = 영업 무기"
            body="고객 페인 듣고 2~4주 안에 prototype 보여주는 사이클. 위시켓 데모 만들던 그 능력 그대로 사용."
          />
          <Differentiator
            title="한국어 + 영어 동시 지원"
            body="처음부터 한·중·인도 시장 모두 노릴 거니까 i18n 기본 탑재. 한국 제한 X."
          />
        </div>
      </section>

      <section className="mt-16 rounded-md border border-foreground/10 bg-foreground p-6 text-background md:p-10">
        <div className="mono mb-3 text-[10px] uppercase tracking-[0.3em] text-background/60">
          start here
        </div>
        <h2 className="serif text-3xl leading-tight tracking-tight md:text-4xl">
          이번 주 액션
        </h2>
        <ul className="mt-6 space-y-3 text-base leading-7">
          <li className="flex gap-3">
            <span className="mono shrink-0 rounded-full bg-indigo px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest">
              week 1
            </span>
            <span>
              LinkedIn에서 "modem QXDM" / "5G NR engineer" 검색 → 한국 엔지니어 30명 콜드 메시지
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mono shrink-0 rounded-full bg-indigo px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest">
              week 2
            </span>
            <span>30분 인터뷰 5건 — "QXDM 로그 분석할 때 가장 짜증나는 거 뭐예요?"</span>
          </li>
          <li className="flex gap-3">
            <span className="mono shrink-0 rounded-full bg-indigo px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest">
              week 3-4
            </span>
            <span>가장 많이 나온 페인 1개 골라서 prototype 1주 만에 완성</span>
          </li>
          <li className="flex gap-3">
            <span className="mono shrink-0 rounded-full bg-indigo px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest">
              week 5-6
            </span>
            <span>인터뷰한 사람들에게 prototype 다시 보여주기 → 5명 중 2~3명 강한 반응 = 진짜 시장</span>
          </li>
        </ul>
        <Link
          href="/positions/log-analytics-saas"
          className="mt-8 inline-flex h-10 items-center gap-2 rounded-full bg-indigo px-4 text-sm transition-transform hover:scale-[1.02]"
        >
          A — 로그 분석 SaaS 자세히
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </section>
    </div>
  );
}

function Differentiator({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-md border border-border bg-surface p-5">
      <h3 className="serif text-lg leading-tight tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
    </div>
  );
}
