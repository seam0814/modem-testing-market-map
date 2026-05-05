import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Crown,
  Layers,
  Rocket,
  Target,
  Zap,
  AlertTriangle,
  Calendar,
  Users,
  Trophy,
  TrendingUp,
  Compass,
} from "lucide-react";
import { ComparisonMatrix } from "@/components/playbook/ComparisonMatrix";
import { FounderFitCheck } from "@/components/playbook/FounderFitCheck";
import {
  PHASE_STEPS,
  CONCERNS,
  PLANS,
  ACTIONS_90D,
} from "@/lib/data/playbook";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "사업 플레이북 — ModemHQ Thesis",
};

const PHASE_TONE: Record<number, { bg: string; text: string; bar: string }> = {
  1: { bg: "bg-indigo-bg", text: "text-indigo-deep", bar: "bg-indigo" },
  2: { bg: "bg-forest-bg", text: "text-forest", bar: "bg-forest" },
  3: { bg: "bg-amber-soft", text: "text-amber", bar: "bg-amber" },
  4: { bg: "bg-foreground/5", text: "text-foreground", bar: "bg-foreground" },
};

export default function PlaybookPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-12 md:px-10 md:pt-16">
      {/* Hero */}
      <header>
        <div className="mono mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-muted">
          <Sparkles className="h-3 w-3 text-indigo" />
          playbook · my bet
        </div>
        <h1 className="serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
          이 시장에서 내가 만들 것 ─{" "}
          <span className="text-indigo">ModemHQ.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg">
          웹 개발자에게 Vercel이 있고, 데이터 사이언티스트에게 Hugging Face가 있고, AI 엔지니어에게 Replicate가 있어.
          모뎀 엔지니어한테는 그게 없어. 60곳+ 회사가 각자 사내 도구를 별도로 만들고 있고, 다 비효율적이야.
          이 빈 자리를 <span className="text-foreground">AI-native SaaS 플랫폼</span>으로 채운다.
        </p>
      </header>

      {/* Thesis Statement */}
      <section className="mt-10 rounded-md border border-foreground/10 bg-foreground p-6 text-background md:p-10">
        <div className="mono mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-background/60">
          <Crown className="h-3 w-3" />
          thesis
        </div>
        <h2 className="serif text-2xl leading-tight tracking-tight md:text-3xl">
          ModemHQ — Vercel for Modem Engineers.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-background/80 md:text-base">
          B (3GPP RAG) → A (로그 분석) → F·G (회귀·버그 AI) → vertical SKU (IoT·Auto·NTN) 의 4단계 빌드.
          각 모듈이 독립 제품인 동시에 한 시스템으로 묶여 데이터·워크플로우 공유. 한 명 모뎀 엔지니어가 들어오면 5~6개 도구를 같이 쓰고,
          한 회사가 도입하면 50~500명이 같이 씀.
        </p>
      </section>

      {/* Why this beats alternatives */}
      <section className="mt-16">
        <div className="mb-6">
          <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
            why this wins
          </p>
          <h2 className="serif mt-2 text-3xl tracking-tight">
            왜 다른 옵션을 다 이기는가
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            5개 기준으로 6가지 옵션 비교. 통합 플랫폼이 압도적 — 핵심은{" "}
            <span className="text-foreground">CAC를 한 번 쓰고 여러 모듈 팔 수 있는 구조</span>.
          </p>
        </div>
        <ComparisonMatrix />
      </section>

      {/* 4-Phase recap */}
      <section className="mt-16">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
              build path
            </p>
            <h2 className="serif mt-2 text-3xl tracking-tight">4단계 빌드 경로</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              단계별 운영 디테일은 Phase 전략 페이지에. 여기는 큰 그림.
            </p>
          </div>
          <Link
            href="/strategy"
            className="inline-flex items-center gap-1 text-xs text-sage-deep hover:text-foreground"
          >
            <Compass className="h-3 w-3" />
            상세 Phase 전략
          </Link>
        </div>

        <div className="space-y-3">
          {PHASE_STEPS.map((step) => {
            const tone = PHASE_TONE[step.id];
            return (
              <div
                key={step.id}
                className="grid items-stretch gap-0 overflow-hidden rounded-md border border-border bg-surface md:grid-cols-[120px_1fr_180px]"
              >
                <div className={cn("flex flex-col justify-center p-5", tone.bg)}>
                  <div className={cn("mono text-[10px] uppercase tracking-[0.3em]", tone.text)}>
                    Phase {step.id}
                  </div>
                  <div className="mono mt-1 text-sm font-semibold">
                    {step.duration}
                  </div>
                </div>
                <div className="flex flex-col justify-center border-l border-border p-5">
                  <h3 className="serif text-xl tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {step.oneLiner}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {step.modules.map((m) => (
                      <span
                        key={m}
                        className={cn(
                          "mono inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest",
                          tone.bg,
                          tone.text
                        )}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center border-l border-border p-5 md:items-end">
                  <div className="mono text-[10px] uppercase tracking-widest text-subtle">
                    target
                  </div>
                  <div className="serif mt-1 text-base font-semibold">
                    {step.arrTarget}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why it works for me */}
      <section className="mt-16">
        <div className="mb-6">
          <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
            founder × market
          </p>
          <h2 className="serif mt-2 text-3xl tracking-tight">왜 너에게 가능한가</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            세 가지 강점의 우연한 결합 — 이 조합 가진 사람이 한국에 적음.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Strength
            icon={Rocket}
            number="01"
            title="빠른 prototype × 풀스택"
            body="위시켓 데모 만든 패턴이 그대로 SaaS 빌드 능력. (모뎀 도메인 + 풀스택 빌드) 둘 다 가진 사람 한국에 적음. Quectel 사람은 풀스택 못 만들고, 토스 출신은 모뎀 모름."
          />
          <Strength
            icon={Sparkles}
            number="02"
            title="AI 잘 활용"
            body="RAG·LLM이 핵심. AI 도구 만드는 능력 자체가 차별화. 큰 회사는 보안·기존 시스템 때문에 AI 빠르게 못 넣음."
          />
          <Strength
            icon={Trophy}
            number="03"
            title="혼자 시작 가능"
            body="첫 제품 둘 다 (B + A) 자본 거의 0, 시간만 필요. Vercel + Supabase + LLM API 합쳐 월 5~20만으로 운영."
          />
        </div>
      </section>

      {/* Founder Fit Check */}
      <section className="mt-16">
        <div className="mb-6">
          <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
            self diagnostic
          </p>
          <h2 className="serif mt-2 text-3xl tracking-tight">
            Founder Fit Check — 도메인 깊이 자가 진단
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            가장 중요한 질문은{" "}
            <span className="text-foreground">너의 모뎀 도메인 깊이가 진짜 충분한가</span>야.
            아래 4개 질문에 솔직하게 체크해보면 어느 Plan으로 가야 하는지 자동으로 나와.
          </p>
        </div>
        <FounderFitCheck />
      </section>

      {/* Concerns */}
      <section className="mt-16">
        <div className="mb-6">
          <p className="mono text-[10px] uppercase tracking-[0.3em] text-coral">
            honest concerns
          </p>
          <h2 className="serif mt-2 text-3xl tracking-tight">솔직한 걱정 3가지</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            낭만 빼고 사실대로. 이걸 미리 보고 시작해야 1년 후 후회 안 함.
          </p>
        </div>

        <div className="space-y-3">
          {CONCERNS.map((c, i) => (
            <div
              key={c.title}
              className={cn(
                "flex items-start gap-4 rounded-md border-l-4 bg-surface p-5",
                c.severity === "critical" && "border-coral",
                c.severity === "high" && "border-amber"
              )}
            >
              <div
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-md",
                  c.severity === "critical" && "bg-coral-soft text-coral",
                  c.severity === "high" && "bg-amber-soft text-amber"
                )}
              >
                <AlertTriangle className="h-4 w-4" strokeWidth={1.6} />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="mono text-[10px] uppercase tracking-widest text-subtle">
                    0{i + 1}
                  </span>
                  <h3 className="font-semibold">{c.title}</h3>
                  {c.severity === "critical" && (
                    <span className="mono inline-flex items-center rounded-full bg-coral px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-white">
                      critical
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-7 text-muted">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Plans A/B/C */}
      <section className="mt-16">
        <div className="mb-6">
          <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
            three paths
          </p>
          <h2 className="serif mt-2 text-3xl tracking-tight">
            Plan A · B · C
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            도메인 / 자금 / 인맥 상황에 따라 세 가지 진입 경로. 위 자가 진단 결과에 따라 추천이 다름.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.id}
              className={cn(
                "flex h-full flex-col rounded-md border bg-surface p-6",
                p.recommended ? "border-indigo/50 bg-indigo-bg/30" : "border-border"
              )}
            >
              <div className="flex items-baseline justify-between">
                <span
                  className={cn(
                    "mono inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest",
                    p.recommended ? "bg-indigo text-white" : "bg-foreground text-background"
                  )}
                >
                  Plan {p.id}
                </span>
                {p.recommended && (
                  <span className="mono text-[10px] uppercase tracking-widest text-indigo-deep">
                    ★ recommended
                  </span>
                )}
              </div>
              <h3 className="serif mt-4 text-xl leading-tight tracking-tight">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{p.oneLiner}</p>
              <div className="dotted-divider my-4" />
              <div className="text-[11px] uppercase tracking-widest text-subtle">
                best for
              </div>
              <p className="mt-1.5 text-xs leading-6 text-foreground">{p.best}</p>
              <div className="mt-4 text-[11px] uppercase tracking-widest text-subtle">
                detail
              </div>
              <p className="mt-1.5 text-xs leading-6 text-muted">{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* First 90 Days */}
      <section className="mt-16">
        <div className="mb-6">
          <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
            week 1 → week 12
          </p>
          <h2 className="serif mt-2 text-3xl tracking-tight">첫 90일 액션</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Plan A 가정. 90일 끝에 시장 결정 — 진입 / 보류 / 피봇.
          </p>
        </div>

        <div className="space-y-4">
          {ACTIONS_90D.map((week, i) => (
            <div
              key={week.range}
              className="flex flex-col gap-4 rounded-md border border-border bg-surface p-5 md:flex-row md:items-start"
            >
              <div className="flex shrink-0 items-center gap-3 md:w-48 md:flex-col md:items-start md:gap-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-indigo text-white">
                  <Calendar className="h-4 w-4" strokeWidth={1.6} />
                </div>
                <div>
                  <div className="mono text-[10px] uppercase tracking-widest text-indigo-deep">
                    {week.range}
                  </div>
                  <div className="text-sm font-semibold">{week.goal}</div>
                </div>
              </div>
              <div className="flex-1">
                <ul className="space-y-2">
                  {week.tasks.map((t, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm leading-6 text-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* tl;dr */}
      <section className="mt-20 rounded-md border border-indigo/30 bg-indigo-bg/40 p-6 md:p-10">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo-deep">
          tl;dr
        </p>
        <h2 className="serif mt-3 text-2xl leading-tight tracking-tight md:text-3xl">
          무엇 · 왜 · 언제 · 얼마
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Summary
            icon={Target}
            label="무엇"
            value="Modem 엔지니어용 통합 개발 도구 플랫폼"
            sub="B → A → F·G → vertical 확장"
          />
          <Summary
            icon={Zap}
            label="왜"
            value="강점 × 빈 자리 × 글로벌 분산"
            sub="빠른 풀스택+AI × 통합 도구 0개 × 매출 분산 가능"
          />
          <Summary
            icon={Users}
            label="언제"
            value="도메인 검증 통과 후 즉시"
            sub="안 통과면 6~12개월 충전 먼저"
          />
          <Summary
            icon={TrendingUp}
            label="얼마"
            value="첫해 $300K → 4년 $3~5M"
            sub="exit 시 $30~60M valuation"
          />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/strategy"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-indigo px-5 text-sm text-white transition-transform hover:scale-[1.02]"
          >
            <Layers className="h-4 w-4" />
            Phase 빌드 전략 자세히
          </Link>
          <Link
            href="/positions/log-analytics-saas"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-indigo/40 bg-surface px-5 text-sm text-indigo-deep transition-colors hover:bg-indigo-bg"
          >
            A — 로그 분석 SaaS 보기
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function Strength({
  icon: Icon,
  number,
  title,
  body,
}: {
  icon: typeof Rocket;
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-md border border-border bg-surface p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-indigo-bg text-indigo">
          <Icon className="h-4 w-4" strokeWidth={1.6} />
        </div>
        <span className="mono text-[10px] uppercase tracking-widest text-subtle">
          {number}
        </span>
      </div>
      <h3 className="serif mt-4 text-lg leading-tight tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
    </div>
  );
}

function Summary({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: typeof Target;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-md bg-surface/80 p-5">
      <div className="flex items-center gap-2">
        <Icon className="h-3.5 w-3.5 text-indigo" />
        <span className="mono text-[10px] uppercase tracking-[0.3em] text-indigo-deep">
          {label}
        </span>
      </div>
      <div className="serif mt-3 text-lg font-semibold leading-tight">
        {value}
      </div>
      <div className="mt-1 text-xs text-muted">{sub}</div>
    </div>
  );
}
