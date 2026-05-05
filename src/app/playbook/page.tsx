import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Clock,
  TrendingDown,
  Search,
  Bug,
  Cpu,
  Boxes,
  Car,
  Antenna,
  Cable,
  Lock,
  Brain,
  Layers,
  Check,
  Mail,
} from "lucide-react";
import {
  LogLensMockup,
  SpecSearchMockup,
  RegressionGuardMockup,
  BugFinderMockup,
} from "@/components/playbook/ModuleMockups";
import { ContactForm } from "@/components/playbook/ContactForm";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "ModemHQ — Modern tools for modem engineering teams",
  description:
    "QXDM 로그 분석부터 3GPP spec 검색, 회귀 추적, AI 기반 버그 검색까지. 모뎀 엔지니어가 진짜 쓸 수 있는 통합 개발 플랫폼.",
};

const PAINS = [
  {
    icon: Clock,
    stat: "30%",
    statLabel: "엔지니어가 로그 분석에 쓰는 일일 시간",
    title: "QXDM 한 번 보는 데 1~3시간",
    body: "RRC reject 원인 찾으려고 매번 같은 패턴 반복. 데스크톱 GUI는 2010년 수준이고, 다중 로그 비교는 사실상 불가능.",
  },
  {
    icon: TrendingDown,
    stat: "Day 5",
    statLabel: "회귀 발견까지 평균 시간",
    title: "어느 빌드부터 KPI가 떨어졌는지 모름",
    body: "Excel + 자체 스크립트로 빌드별 KPI 비교. attach success rate가 떨어진 commit을 찾는 데 며칠. CI/CD와 분리되어 있음.",
  },
  {
    icon: Search,
    stat: "30+",
    statLabel: "분/일 spec 검색에 소요",
    title: "3GPP spec 찾는 게 매번 30분",
    body: "tech-invite 북마크, 3gpp.org 검색, ChatGPT — 다 다르게 답함. 신뢰성 낮고 Rel 변경 추적 어려움.",
  },
  {
    icon: Bug,
    stat: "3×",
    statLabel: "같은 이슈 중복 디버깅",
    title: "같은 버그를 다른 사람이 또 디버깅",
    body: "Jira 검색은 텍스트 매칭. 6개월 전 누가 같은 NB-IoT cell 선택 이슈 풀었는지 못 찾음. 매번 처음부터.",
  },
];

const MODULES = [
  {
    id: "loglens",
    name: "LogLens",
    tagline: "QXDM/QCAT 로그를 모던 웹에서 분석",
    body:
      "로그 업로드 → 자동 파싱 → 인터랙티브 대시보드. RRC 시그널링 다이어그램, KPI 시계열, 이상 자동 탐지, 빌드별 diff. LLM 기반 자연어 분석으로 \"이 attach 실패 원인 알려줘\" 즉답.",
    features: [
      "QMDL · DLF · AT log · kernel log 통합 파싱",
      "RRC/NAS 시그널링 시퀀스 자동 재구성",
      "다중 로그 동시 비교 (DUT 5대 동시)",
      "AI 이상 탐지 + 자연어 쿼리",
    ],
    Mockup: LogLensMockup,
  },
  {
    id: "specsearch",
    name: "SpecSearch",
    tagline: "3GPP TS·TR 전체를 학습한 AI assistant",
    body:
      "표준 검색·이해의 새 표준. Rel-15부터 Rel-19까지 전 표준을 학습한 RAG. CR(Change Request) 자동 추적으로 Rel 간 차이 즉답. 무료 freemium.",
    features: [
      "TS 38 / TS 36 / TS 24 시리즈 전체 인덱싱",
      "Rel-15 → Rel-19 변경 이력 자동 추적",
      "AT 명령 / NAS / RRC 메시지 IE 검색",
      "한국어 / 영어 동시 지원",
    ],
    Mockup: SpecSearchMockup,
  },
  {
    id: "regression",
    name: "RegressionGuard",
    tagline: "빌드별 KPI 자동 추적 + 회귀 자동 감지",
    body:
      "Git commit과 KPI를 자동 연결. attach success rate, throughput, BLER 등 시계열 추적. 회귀 발생 시 어느 commit인지 자동 bisect. 빌드 매니저의 수동 비교 작업 종료.",
    features: [
      "CI 파이프라인 통합 (Jenkins · GitLab · GitHub)",
      "주요 KPI 자동 시계열 + 임계치 알림",
      "회귀 commit 자동 bisect",
      "메일 / Slack / 카카오 알림 연결",
    ],
    Mockup: RegressionGuardMockup,
  },
  {
    id: "bugfinder",
    name: "BugFinder AI",
    tagline: "유사 버그 자동 검색 + 사후 분석 가속",
    body:
      "로그·버그 보고서·코멘트를 임베딩해 의미 기반 유사 검색. \"이건 작년 3월에 같은 원인으로 본 거예요\"가 자동으로. 수년 누적된 디버깅 자산을 처음으로 활용 가능.",
    features: [
      "Jira / Bugzilla / GitHub Issues 자동 인덱싱",
      "로그 + 버그 텍스트 통합 임베딩 검색",
      "유사도 % 표시 + 재현 시나리오 추출",
      "팀 내 지식 사일로 해소",
    ],
    Mockup: BugFinderMockup,
  },
];

const USE_CASES = [
  {
    icon: Cpu,
    title: "Chipset 회사",
    body: "자체 도구 만들 R&D 여력이 부족한 모뎀 chipset 스타트업·중견. 양산 검증·캐리어 인증 자동화에 즉시 ROI.",
    examples: "5G/4G chipset · 신생 IoT SoC",
  },
  {
    icon: Boxes,
    title: "IoT 모듈 회사",
    body: "Quectel·Telit·u-blox·Fibocom처럼 다국가 캐리어 인증을 매주 돌려야 하는 회사. 회귀 추적 + 로그 분석 결합 시 검증 시간 60% 단축.",
    examples: "셀룰러 IoT · LPWAN · 위성 IoT",
  },
  {
    icon: Car,
    title: "자동차 TCU",
    body: "EU eCall·V2X 의무화 이후 폭증한 검증 수요. ISO 26262 / ASPICE 인증과 결합한 추적 가능한 검증 환경 제공.",
    examples: "Bosch · Continental · 현대모비스 · LG VS",
  },
  {
    icon: Antenna,
    title: "통신사 R&D",
    body: "ETRI·SKT·KT·LG U+ R&D 같은 곳. 5G/6G 연구 과제 + AI-RAN 검증. on-premise 옵션 + 사내 SSO 호환.",
    examples: "통신사 연구소 · 정부 출연 연구원",
  },
];

const DIFFERENTIATORS = [
  {
    icon: Brain,
    title: "AI-Native by design",
    body: "RAG·임베딩·LLM이 부가가 아닌 코어. ChatGPT 래퍼가 아니라 모뎀 도메인에 특화된 reasoning.",
  },
  {
    icon: Lock,
    title: "On-Premise 옵션",
    body: "모뎀 데이터는 NDA 영역. Docker compose / Helm chart로 자체 호스팅 패키지. 클라우드 단독 강요 X.",
  },
  {
    icon: Cable,
    title: "Modem-Specific",
    body: "Datadog·Splunk가 아닌 모뎀 전용. RRC/NAS·AT·QXDM·3GPP를 native로 이해. generic 도구로는 불가능한 깊이.",
  },
  {
    icon: Layers,
    title: "Built by engineers",
    body: "엔지니어 매니저가 만든 게 아니라 매일 QXDM 보는 엔지니어가 만든 도구. 페인 포인트가 다름.",
  },
];

const PRICING = [
  {
    name: "Free",
    price: "₩0",
    sub: "영구 무료",
    audience: "개인 엔지니어",
    cta: "지금 시작",
    features: [
      "SpecSearch 무료 사용 (월 100쿼리)",
      "LogLens 데모 (10MB 로그)",
      "커뮤니티 지원",
    ],
    highlighted: false,
  },
  {
    name: "Team",
    price: "₩40,000",
    sub: "/시트/월 (연간)",
    audience: "5~50명 팀",
    cta: "데모 신청",
    features: [
      "모든 모듈 무제한",
      "팀 협업 (코멘트·공유 링크)",
      "Slack · Jira 연동",
      "이메일 지원 24h SLA",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Contact",
    sub: "맞춤 견적",
    audience: "대형 R&D · 인증 사이트",
    cta: "상담 요청",
    features: [
      "On-premise / VPC 배포",
      "사내 SSO (Azure AD · Google · LDAP)",
      "SLA 99.9% + 24/7 지원",
      "전담 기술 지원 매니저",
      "보안 검토 (SOC 2 in progress)",
    ],
    highlighted: false,
  },
];

const FAQ = [
  {
    q: "데이터가 우리 서버 밖으로 나가나요?",
    a: "Enterprise 플랜은 100% on-premise 또는 VPC 배포 가능합니다. Docker compose / Helm chart 형태로 사내 인프라에 직접 설치되며, 모든 데이터(로그·임베딩·메타)가 사내에서만 처리됩니다. SaaS 플랜에서도 EU/한국 리전 선택 가능.",
  },
  {
    q: "어떤 로그 형식을 지원하나요?",
    a: "Qualcomm QMDL, DLF, ISF, AT command logs, Android logcat, modem trace, custom 형식 모두 지원. 자체 chipset 형식은 Enterprise 플랜에서 커스텀 파서 개발.",
  },
  {
    q: "기존 Jira / GitLab CI / Slack과 연동되나요?",
    a: "네. RegressionGuard는 Jenkins, GitLab CI, GitHub Actions와 webhook 연동. BugFinder는 Jira, Bugzilla, GitHub Issues 자동 인덱싱. 알림은 메일·Slack·카카오 알림톡 지원.",
  },
  {
    q: "회사가 NDA가 강한데 도입 가능한가요?",
    a: "Enterprise 플랜은 자체 호스팅이라 NDA 영역에 머무릅니다. 보안 검토 필요 시 사전 SOC 2 / ISO 27001 자료 제공. 데이터 처리·저장·접근 정책 모두 사내 정책에 맞춤 구성.",
  },
  {
    q: "AI 모델은 어떤 걸 쓰나요?",
    a: "SaaS 플랜은 GPT-5 / Claude Opus / Gemini 중 자동 선택. Enterprise on-premise는 Llama 3.3 70B 또는 Qwen 2.5 사내 호스팅 가능. 임베딩은 자체 fine-tune 모델 사용.",
  },
  {
    q: "지금 베타인가요? 언제 정식 출시하나요?",
    a: "현재 closed beta — design partner 5~10개사 모집 중입니다. 정식 출시는 2026년 Q3 예정. 디자인 파트너는 12주 무료 사용 + 향후 1년 50% 할인.",
  },
];

export default function ModemHQPage() {
  return (
    <div>
      <section className="relative">
        <div className="grid-bg absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-20 md:px-10 md:pt-24 md:pb-28">
          <div className="mono mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo animate-pulse" />
            closed beta · design partners now
          </div>
          <h1 className="serif max-w-4xl text-4xl leading-[1.05] tracking-tight md:text-7xl">
            모뎀 엔지니어가{" "}
            <span className="text-indigo">진짜 쓸 수 있는</span> 통합 개발 플랫폼.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg">
            QXDM 로그 분석 · 3GPP spec 검색 · 빌드 회귀 추적 · AI 버그 검색을
            한 시스템으로. <span className="text-foreground">모뎀 엔지니어가 만든 도구를 모뎀 엔지니어가 씁니다.</span>
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="#contact"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-indigo px-6 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
            >
              <Sparkles className="h-4 w-4" />
              데모 신청 · 디자인 파트너 등록
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#modules"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-surface px-6 text-sm transition-colors hover:bg-soft"
            >
              제품 살펴보기
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4">
            <TrustStat label="QXDM 로그 분석 시간" value="1~3시간 → 5분" />
            <TrustStat label="빌드 회귀 발견" value="5일 → 자동 즉시" />
            <TrustStat label="3GPP spec 검색" value="30분 → 자연어 즉답" />
            <TrustStat label="유사 버그 매칭" value="텍스트 검색 → AI 의미" />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface-2">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="mb-12 max-w-3xl">
            <p className="mono text-[10px] uppercase tracking-[0.3em] text-coral">
              the problem
            </p>
            <h2 className="serif mt-3 text-3xl leading-tight tracking-tight md:text-5xl">
              모뎀 엔지니어링은 2010년대에 멈춰있습니다.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted md:text-lg">
              60+개 회사가 각자 사내 도구를 별도로 만들고 있고, 어느 곳도 충분치 않습니다.
              엔지니어들이 가장 많이 시간을 쓰는 4가지 영역이 가장 비효율적입니다.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {PAINS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="group rounded-md border border-border bg-surface p-6 transition-colors hover:border-coral/40"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-coral-soft text-coral">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <div className="text-right">
                      <div className="serif text-3xl font-semibold tracking-tight text-coral">
                        {p.stat}
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-subtle">
                        {p.statLabel}
                      </div>
                    </div>
                  </div>
                  <h3 className="serif mt-5 text-xl leading-tight tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="modules" className="scroll-mt-20 border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="mb-12 max-w-3xl">
            <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
              the platform
            </p>
            <h2 className="serif mt-3 text-3xl leading-tight tracking-tight md:text-5xl">
              4개 모듈, 하나의 시스템.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted md:text-lg">
              각 모듈은 독립 제품이지만, 모든 모듈이 같은 데이터·워크플로우를 공유합니다. 하나로 시작해서 자연스럽게 확장하세요.
            </p>
          </div>

          <div className="space-y-20">
            {MODULES.map((m, i) => {
              const Mockup = m.Mockup;
              const reverse = i % 2 === 1;
              return (
                <div
                  key={m.id}
                  className={cn(
                    "grid items-center gap-10 md:grid-cols-2 md:gap-16",
                    reverse && "md:[&>*:first-child]:order-2"
                  )}
                >
                  <div>
                    <div className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
                      module · 0{i + 1}
                    </div>
                    <h3 className="serif mt-3 text-3xl tracking-tight md:text-4xl">
                      {m.name}
                    </h3>
                    <p className="mt-2 text-base font-medium text-foreground">
                      {m.tagline}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-muted">{m.body}</p>
                    <ul className="mt-6 space-y-2">
                      {m.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-foreground"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <Mockup />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface-2">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <div className="mb-10 max-w-3xl">
            <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
              built for
            </p>
            <h2 className="serif mt-3 text-3xl leading-tight tracking-tight md:text-4xl">
              모뎀이 들어가는 모든 곳
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {USE_CASES.map((u) => {
              const Icon = u.icon;
              return (
                <div
                  key={u.title}
                  className="rounded-md border border-border bg-surface p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-bg text-indigo">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <h3 className="serif mt-4 text-xl tracking-tight">{u.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-muted">{u.body}</p>
                  <p className="mt-4 text-[10px] uppercase tracking-widest text-subtle">
                    {u.examples}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <div className="mb-10 max-w-3xl">
            <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
              why ModemHQ
            </p>
            <h2 className="serif mt-3 text-3xl leading-tight tracking-tight md:text-4xl">
              Datadog과 ChatGPT만으로는 부족합니다.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {DIFFERENTIATORS.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  className="rounded-md border border-border bg-surface p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-foreground text-background">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <h3 className="serif mt-4 text-lg leading-tight tracking-tight">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{d.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface-2">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="mb-12 max-w-3xl">
            <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
              pricing
            </p>
            <h2 className="serif mt-3 text-3xl leading-tight tracking-tight md:text-5xl">
              팀 규모에 맞는 요금제
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              SpecSearch는 영구 무료. Enterprise는 on-premise 옵션과 보안 검토 지원.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {PRICING.map((p) => (
              <div
                key={p.name}
                className={cn(
                  "flex h-full flex-col rounded-md border bg-surface p-6 md:p-8",
                  p.highlighted ? "border-indigo bg-indigo-bg/30" : "border-border"
                )}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="serif text-2xl tracking-tight">{p.name}</h3>
                  {p.highlighted && (
                    <span className="mono inline-flex items-center rounded-full bg-indigo px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-white">
                      most popular
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="serif text-4xl font-semibold tracking-tight">
                    {p.price}
                  </span>
                  <span className="text-sm text-muted">{p.sub}</span>
                </div>
                <p className="mt-2 text-xs uppercase tracking-widest text-subtle">
                  {p.audience}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          p.highlighted ? "text-indigo" : "text-foreground/60"
                        )}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className={cn(
                    "mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-all",
                    p.highlighted
                      ? "bg-indigo text-white hover:bg-indigo-deep"
                      : "border border-border bg-surface hover:bg-soft"
                  )}
                >
                  {p.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <div className="mb-10">
            <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
              FAQ
            </p>
            <h2 className="serif mt-3 text-3xl leading-tight tracking-tight md:text-4xl">
              자주 묻는 질문
            </h2>
          </div>
          <div className="space-y-3">
            {FAQ.map((f, i) => (
              <details
                key={i}
                className="group rounded-md border border-border bg-surface px-5 py-4 transition-colors open:border-indigo/40"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-base font-medium leading-7 text-foreground">
                  <span>{f.q}</span>
                  <span className="mt-1.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-soft text-muted transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-20 border-t border-border bg-foreground text-background"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo-soft">
                become a design partner
              </p>
              <h2 className="serif mt-3 whitespace-pre-line text-3xl leading-tight tracking-tight md:text-5xl">
                {"12주 무료 베타.\n우리가 직접 함께 만듭니다."}
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-background/70 md:text-base">
                현재 5~10개 디자인 파트너만 받습니다. 12주 무료 사용 + 우선 기능 반영 + 향후 1년 50% 할인.
                직접 워크플로우를 보고 같이 도구를 개선합니다.
              </p>

              <div className="mt-8 space-y-3">
                <Benefit text="12주 무제한 사용 (모든 모듈)" />
                <Benefit text="주 1회 직접 미팅 — CEO + 엔지니어와" />
                <Benefit text="우선 기능 요청 + 빠른 반영" />
                <Benefit text="정식 출시 후 1년 50% 할인" />
              </div>

              <div className="mt-10 flex items-center gap-3 text-sm text-background/70">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:seumsolarpower@gmail.com"
                  className="underline underline-offset-2 hover:text-indigo-soft"
                >
                  seumsolarpower@gmail.com
                </a>
              </div>
            </div>

            <div className="rounded-md border border-background/10 bg-background p-6 text-foreground md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function TrustStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-subtle">
        {label}
      </div>
      <div className="mono mt-2 text-base font-semibold tabular">{value}</div>
    </div>
  );
}

function Benefit({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2.5 text-sm">
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo">
        <Check className="h-3 w-3 text-white" />
      </div>
      <span className="text-background/90">{text}</span>
    </div>
  );
}
