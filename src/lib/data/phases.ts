export type PhaseDeliverable = {
  title: string;
  detail: string;
};

export type Phase = {
  number: 1 | 2 | 3;
  duration: string;
  durationMonths: { from: number; to: number };
  title: string;
  oneLiner: string;
  focus: string[];
  positions: ("A" | "B" | "C" | "D" | "E" | "F" | "G" | "H")[];
  deliverables: PhaseDeliverable[];
  rationale: string;
  metrics: { label: string; target: string }[];
};

export const PHASES: Phase[] = [
  {
    number: 1,
    duration: "0~6개월",
    durationMonths: { from: 0, to: 6 },
    title: "단일 제품 출시 (A + B)",
    oneLiner: "로그 분석 SaaS를 메인 제품으로, 3GPP RAG를 마케팅 진입점으로.",
    focus: [
      "Customer discovery — 모뎀 엔지니어 5~10명 인터뷰",
      "MVP — 로그 업로드 → 자동 파싱 → 대시보드",
      "B의 무료 freemium 출시 → 트래픽 확보",
      "디자인 파트너 1~2개사 확보 (무료 closed beta)",
    ],
    positions: ["A", "B"],
    deliverables: [
      {
        title: "ModemLens (가칭) MVP",
        detail: "QXDM 로그 .qmdl 업로드 → RRC 시그널링 다이어그램 + KPI 시계열 + LLM 자연어 분석",
      },
      {
        title: "3GPP Spec Search (무료)",
        detail: "TS·TR 전체 임베딩 + GPT 인터페이스. 회원가입만 받음. SEO + 입소문 채널.",
      },
      {
        title: "Design partner 계약",
        detail: "1~2개사와 무료 12주 beta. 피드백 받고 사례 확보.",
      },
    ],
    rationale:
      "B는 진입 장벽 ★, 빠르게 트래픽 확보. A는 매출 엔진. B로 들어온 트래픽 중 실무자를 A의 유료 고객으로 전환하는 funnel.",
    metrics: [
      { label: "B 월간 활성 사용자", target: "500+" },
      { label: "A 디자인 파트너", target: "2개사" },
      { label: "유료 전환 첫 계약", target: "1건 (월 100~300만)" },
    ],
  },
  {
    number: 2,
    duration: "6~18개월",
    durationMonths: { from: 6, to: 18 },
    title: "확장 모듈 출시 (F + G)",
    oneLiner: "회귀 추적과 버그 검색 AI를 A의 부가 모듈로. 페르소나 다각화.",
    focus: [
      "F — 빌드 매니저 페르소나 추가, KPI regression bisect",
      "G — QA 페르소나 추가, AI 유사 케이스 검색",
      "엔터프라이즈 영업 채널 구축 (on-premise 옵션)",
      "한국 + 해외 (중국·인도) 동시 영업",
    ],
    positions: ["F", "G"],
    deliverables: [
      {
        title: "Regression Tracker (F)",
        detail: "빌드별 KPI 시계열, 자동 알림, Git commit 연동",
      },
      {
        title: "Bug Search AI (G)",
        detail: "로그 + 버그 보고서 임베딩, 자연어 검색, 유사 케이스 추천",
      },
      {
        title: "On-premise 배포 패키지",
        detail: "Docker compose + Helm chart, NDA 통과용 자체 호스팅",
      },
    ],
    rationale:
      "A 사용자가 자연스럽게 요구할 기능. 단독 제품으로는 시장 작지만 부가 모듈로 ARPU 확장. 엔터프라이즈 계약 단가 3~5배.",
    metrics: [
      { label: "유료 회사", target: "10~20개사" },
      { label: "엔터프라이즈 계약", target: "2~3건 (연 1~3억)" },
      { label: "ARR", target: "5~10억" },
    ],
  },
  {
    number: 3,
    duration: "18개월+",
    durationMonths: { from: 18, to: 36 },
    title: "사업 확장 (C 또는 E)",
    oneLiner: "도메인 경력에 따라 단말 검증(C) 또는 R&D 시장(E)으로.",
    focus: [
      "도메인 깊다면 C — AT/Diag 자동화로 단말 검증 시장 진입",
      "또는 E — SDR + 셀 시뮬로 R&D · 교육 시장",
      "팀 빌드 (영업 1, 개발 2~3)",
      "글로벌 진출 — 인도, 동남아",
    ],
    positions: ["C", "E"],
    deliverables: [
      {
        title: "C 또는 E 단독 제품",
        detail: "기존 A·F·G 사용자 base를 발판으로 인접 시장 진입",
      },
      {
        title: "팀 5~10명 규모",
        detail: "개발 + 영업 + 도메인 + 디자인",
      },
    ],
    rationale:
      "A·F·G로 지속가능한 ARR이 자리잡은 후 인접 시장 확장. C는 단말 OEM, E는 학계·연구소 시장.",
    metrics: [
      { label: "ARR", target: "20억+" },
      { label: "팀 규모", target: "5~10명" },
      { label: "글로벌 매출 비중", target: "30%+" },
    ],
  },
];
