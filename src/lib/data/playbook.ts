// 사업 플레이북 — ModemHQ thesis 데이터

export type OptionRow = {
  id: string;
  name: string;
  difficulty: 1 | 2 | 3 | 4 | 5; // 진입 난이도 (낮을수록 좋음 → 시각화 시 역수)
  marketSize: 1 | 2 | 3 | 4 | 5;
  defensibility: 1 | 2 | 3 | 4 | 5;
  exitable: 1 | 2 | 3 | 4 | 5; // 매각 가능성
  founderFit: 1 | 2 | 3 | 4 | 5;
  highlight?: boolean;
  oneLiner: string;
};

export const OPTIONS: OptionRow[] = [
  {
    id: "consulting",
    name: "인력 공수 사업",
    difficulty: 2,
    marketSize: 4,
    defensibility: 1,
    exitable: 1,
    founderFit: 2,
    oneLiner: "ThunderSoft·Capgemini와 정면 경쟁. 매출 cap, 매각 X.",
  },
  {
    id: "single-a",
    name: "단일 도구 (A만)",
    difficulty: 2,
    marketSize: 3,
    defensibility: 3,
    exitable: 2,
    founderFit: 4,
    oneLiner: "로그 분석 SaaS 단독. 한 번 도입 후 확장이 약함.",
  },
  {
    id: "single-b",
    name: "단일 도구 (B만)",
    difficulty: 1,
    marketSize: 2,
    defensibility: 1,
    exitable: 1,
    founderFit: 3,
    oneLiner: "3GPP RAG. LLM 발전으로 commoditize 위험.",
  },
  {
    id: "hardware",
    name: "하드웨어 (SDR 셀 시뮬)",
    difficulty: 5,
    marketSize: 2,
    defensibility: 4,
    exitable: 3,
    founderFit: 1,
    oneLiner: "Amarisoft 저가 대안. 자본 집약, 1인 시작 X.",
  },
  {
    id: "research",
    name: "컨설팅 · 연구 보고서",
    difficulty: 2,
    marketSize: 2,
    defensibility: 2,
    exitable: 1,
    founderFit: 3,
    oneLiner: "Counterpoint·Dell'Oro 같은 형식. 시간 의존, 매각 X.",
  },
  {
    id: "platform",
    name: "통합 플랫폼 (ModemHQ)",
    difficulty: 3,
    marketSize: 5,
    defensibility: 5,
    exitable: 5,
    founderFit: 5,
    highlight: true,
    oneLiner:
      "B → A → F·G → vertical (IoT·Auto·NTN). 모듈 시너지 + 글로벌 + M&A exit.",
  },
];

export const COMPARISON_COLS = [
  { id: "ease", label: "진입 용이성", invertDifficulty: true },
  { id: "market", label: "시장 크기" },
  { id: "defense", label: "방어성" },
  { id: "exit", label: "매각 가능성" },
  { id: "fit", label: "강점 fit" },
] as const;

// 4-Phase recap (간략 — 자세한 건 /strategy)
export type PhaseStep = {
  id: number;
  duration: string;
  title: string;
  oneLiner: string;
  modules: string[];
  arrTarget: string;
};

export const PHASE_STEPS: PhaseStep[] = [
  {
    id: 1,
    duration: "0~12M",
    title: "Wedge — 무료 + 첫 유료",
    oneLiner: "3GPP RAG 무료로 트래픽 + 로그 분석 SaaS 첫 유료 전환",
    modules: ["B", "A"],
    arrTarget: "$300K ARR",
  },
  {
    id: 2,
    duration: "12~24M",
    title: "Platform — 부가 모듈",
    oneLiner: "회귀 추적 + AI 버그 검색 + 엔터프라이즈 on-prem",
    modules: ["F", "G"],
    arrTarget: "$1M ARR",
  },
  {
    id: 3,
    duration: "24~48M",
    title: "Vertical — 인접 시장",
    oneLiner: "IoT 모듈 vertical + 자동차 TCU vertical + NTN 위성 검증",
    modules: ["IoT", "Auto", "NTN"],
    arrTarget: "$3~5M ARR",
  },
  {
    id: 4,
    duration: "48M+",
    title: "Exit",
    oneLiner: "M&A (Keysight·R&S·NVIDIA), Series A, 또는 lifestyle 회사",
    modules: ["Exit"],
    arrTarget: "$30~60M valuation",
  },
];

// Founder-fit check — 모뎀 도메인 깊이 자가 진단
export type FitQuestion = {
  id: string;
  question: string;
  expertAnswer: string;
  why: string;
};

export const FIT_QUESTIONS: FitQuestion[] = [
  {
    id: "rrc",
    question: "QXDM 로그에서 RRC Connection Reject가 발생했을 때 어디부터 봐?",
    expertAnswer:
      "OTA Log 채널에서 RRC Connection Reject 메시지의 waitTime IE와 release cause를 본다. 이전 RRC Connection Request의 establishmentCause·UE Identity 확인. NAS Layer 메시지에서 attach reject·security mode failure 동반 여부 확인. 발생 직전의 PCCH paging frequency도 같이 봄.",
    why: "이걸 즉답 못 하면 첫 5명 사용자 인터뷰에서 들통남.",
  },
  {
    id: "at",
    question: "AT+CFUN과 AT+CGDCONT 차이를 한 줄로 설명할 수 있어?",
    expertAnswer:
      "AT+CFUN은 모뎀의 functionality level (off/full/RF off 등) 제어 → 전원·RF 관리. AT+CGDCONT는 PDP context (APN·IP타입·인증) 정의 → 데이터 세션 설정. 즉 CFUN = 모뎀 상태, CGDCONT = 데이터 연결 설정.",
    why: "AT 명령 자동화 도구 만들 때 가장 기본. 이거 모르면 시나리오 설계 X.",
  },
  {
    id: "iot-std",
    question: "NB-IoT와 LTE-M의 표준 차이 3개를 즉답 가능?",
    expertAnswer:
      "(1) 대역폭: NB-IoT 200kHz / LTE-M 1.4MHz. (2) 데이터 속도: NB-IoT ~250kbps / LTE-M ~1Mbps (Cat-M1). (3) 이동성: NB-IoT 정적 위주(핸드오버 약함) / LTE-M 이동 지원. 추가로 voice 지원도 LTE-M만 있음 (VoLTE).",
    why: "IoT vertical 시장 진입 시 필수. 이 차이 모르면 Quectel·Telit과 대화 시작 X.",
  },
  {
    id: "pucch",
    question: "5G NR Type 1 vs Type 2 PUCCH 한 줄 차이?",
    expertAnswer:
      "Type 1 (Format 0/1) = 짧은 PUCCH (1~2 OFDM symbol), 적은 페이로드, fast HARQ-ACK. Type 2 (Format 2/3/4) = 긴 PUCCH (4~14 symbol), CSI·HARQ 큰 페이로드 가능. 즉 Type 1 = quick & small, Type 2 = robust & large.",
    why: "5G NR PHY layer 전문성 검증. AI-RAN 검증 도구 만들려면 이 수준 도메인 필수.",
  },
];

// 솔직한 걱정 3가지
export const CONCERNS = [
  {
    title: "모뎀 도메인 깊이가 진짜 검증 필요",
    body: "위 4개 질문 답할 수 있어야 함. 못 하면 첫 인터뷰부터 들통남. 부족하면 시니어 도메인 공동창업자 영입 또는 6~12개월 SI 펌에서 도메인 충전 후 시작.",
    severity: "critical",
  },
  {
    title: "12개월 운영 자금 필요",
    body: "1인 풀타임 시 월 생활비 × 12개월. 위시켓 외주 60~70% 유지 + SaaS 30% 하이브리드도 가능 (18~24개월 더 걸림). 첫 유료 고객 따기 전 자금 외부 조달 어려움.",
    severity: "high",
  },
  {
    title: "B2B 모뎀 도구 영업은 길다",
    body: "POC 무료 요구 함정 — 유상 POC (200~500만)으로 차단. NDA 통과까지 2~6개월. on-premise 옵션 필수. 첫 고객은 chipset 스타트업·IoT 모듈 (의사결정 빠름)부터.",
    severity: "high",
  },
] as const;

// Plan A / B / C
export type Plan = {
  id: "A" | "B" | "C";
  title: string;
  oneLiner: string;
  best: string;
  detail: string;
  recommended?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: "A",
    title: "ModemHQ 즉시 시작",
    oneLiner: "도메인 깊이 충분 + 자금 12개월 → 바로 풀타임 진입",
    best: "위 4개 질문 다 답 가능 + 운영 자금 12개월 보유",
    detail:
      "Phase 1 wedge부터 즉시 시작. 첫 90일 동안 인터뷰 + B 출시 + A prototype + design partner 1~2개 확보.",
    recommended: true,
  },
  {
    id: "B",
    title: "공동창업자 영입 후 시작",
    oneLiner: "도메인 약하면 시니어 1명 영입 (지분 30~40%)",
    best: "풀스택 빌드 강함, 모뎀 도메인 약함",
    detail:
      "Quectel·Telit·MTK·System LSI 출신 시니어 영입. 도메인 검증·고객 인터뷰는 그가, 빌드·UX·영업은 너가. 지분 협상 신중히. 1년 내 cliff 포함.",
  },
  {
    id: "C",
    title: "도메인 충전 후 시작",
    oneLiner: "6~12개월 SI 펌에 들어가서 도메인 + 인맥 동시 확보",
    best: "도메인·자금·인맥 모두 부족",
    detail:
      "Innowireless·Accuver·RFcore 같은 한국 SI에 PM/Product Engineer로 진입. 모뎀 도메인 학습 + 잠재 고객·파트너 인맥 동시. 6~12개월 후 ModemHQ 시작. 시간 늦지만 성공률 압도적.",
  },
];

// 첫 90일 액션
export type ActionWeek = {
  range: string;
  goal: string;
  tasks: string[];
};

export const ACTIONS_90D: ActionWeek[] = [
  {
    range: "주 1~2",
    goal: "트랙 레코드 + 첫 신호",
    tasks: [
      "기존 데모 사이트 외에 모뎀 도메인 prototype 1개 더 공개 (예: 가짜 QXDM 로그 파서)",
      "LinkedIn 프로필 모뎀 도메인 키워드로 정비",
    ],
  },
  {
    range: "주 3~4",
    goal: "시장 검증 인터뷰",
    tasks: [
      "LinkedIn에서 한국·중국·인도 모뎀 엔지니어 50명에게 콜드 메시지",
      "30분 인터뷰 8건 목표 (실제 5~6건 잡힘)",
      "질문: \"QXDM 로그 분석할 때 가장 짜증나는 거 뭐예요?\" + \"사내 도구가 어떻게 부족해요?\"",
    ],
  },
  {
    range: "주 5~8",
    goal: "Wedge 출시 + Prototype",
    tasks: [
      "3GPP RAG 무료 베타 출시 (B) — 회원가입만",
      "로그 분석 prototype (A) 1차 — 가짜 데이터로 demo flow",
      "인터뷰한 사람들에게 prototype 공유, 피드백 수집",
    ],
  },
  {
    range: "주 9~12",
    goal: "Design Partner 확보 + 결정",
    tasks: [
      "강한 반응 보인 5명 중 2~3명에게 \"회사 차원 도입 미팅\" 요청",
      "1~2개사 design partner 무상 12주 베타 계약",
      "90일 끝에 시장 결정: 진입 / 보류 / 피봇 (인터뷰 8명 중 3명+ 강한 도입 의지면 진입)",
    ],
  },
];
