export type PlayerType = "commercial" | "oss" | "korean" | "internal";

export type Player = {
  name: string;
  type: PlayerType;
  note: string;
};

export type Position = {
  id: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
  slug: string;
  title: string;
  oneLiner: string;
  category: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  marketSize: 1 | 2 | 3 | 4 | 5;
  fitScore: 1 | 2 | 3 | 4 | 5;
  priority: number;
  priorityLabel: string;
  bestFor?: string;
  existingPlayers: Player[];
  gaps: string[];
  yourAngle: string[];
  firstCustomers: string[];
  pricing: string;
  marketSizeNote: string;
  recommendation?: string;
};

export const POSITIONS: Position[] = [
  {
    id: "A",
    slug: "log-analytics-saas",
    title: "로그 분석 / 파싱 / BI",
    oneLiner: "QXDM·QCAT 로그를 모던 웹 SaaS로 — 모뎀 엔지니어 일일 업무의 30% 시간 회수.",
    category: "core",
    difficulty: 2,
    marketSize: 4,
    fitScore: 5,
    priority: 1,
    priorityLabel: "1순위",
    bestFor: "Phase 1의 메인 제품. 너의 데모 능력과 가장 강하게 결합되는 영역.",
    existingPlayers: [
      { name: "Qualcomm QXDM / QCAT", type: "commercial", note: "퀄컴 라이선시 무료, GUI는 2010년 수준" },
      { name: "Accuver XCAL / XCAP", type: "korean", note: "한국 회사, drive test 강세, 가격대 높음" },
      { name: "R&S ROMES", type: "commercial", note: "장비 묶음 판매, 분석은 약함" },
      { name: "Keysight Nemo Outdoor", type: "commercial", note: "drive test 중심" },
      { name: "Spirent / IXIA", type: "commercial", note: "대기업 향, 가격 상상 초월" },
      { name: "회사 자체 도구", type: "internal", note: "대부분 엑셀 + 사내 스크립트로 처리" },
    ],
    gaps: [
      "모던 웹 UX의 분석 도구가 사실상 0개. QXDM은 데스크톱 native 앱",
      "회귀 비교 (빌드 A vs B 자동 diff) 거의 없음",
      "다중 로그 동시 분석 (DUT 5대 비교) 약함",
      "AI 기반 이상 자동 탐지 거의 없음",
      "팀 협업 (코멘트, 공유 링크) 부재",
    ],
    yourAngle: [
      "웹 SaaS — 로그 업로드 → 자동 파싱 → 인터랙티브 대시보드",
      "on-premise 자체 호스팅 옵션 (NDA 회피용) 같이 제공",
      "LLM 결합: \"이 로그에서 RRC release 원인 분석\" 같은 자연어 분석",
      "RRC 상태 다이어그램, KPI 시계열, regression diff, 이상 자동 감지",
    ],
    firstCustomers: [
      "모뎀 chipset 스타트업 (자체 도구 만들 여력 X)",
      "통신사 R&D — KT, SKT, LG U+",
      "대학 연구실 (5G/6G 과제)",
      "텔레매틱스 OEM — 현대모비스, 만도, LG VS",
      "ETRI 같은 정부 연구원",
    ],
    pricing: "시트당 월 30만원 / 회사 라이선스 연 1~3억",
    marketSizeNote: "글로벌 잠재 고객 1만+ 엔지니어",
    recommendation: "Phase 1 메인 SaaS로 시작. POC 2~4주 만에 prototype 가능.",
  },
  {
    id: "B",
    slug: "3gpp-rag-assistant",
    title: "3GPP Spec 검색 + AI Assistant",
    oneLiner: "TS·TR 전체를 학습한 specialized AI. 모뎀 엔지니어 누구나 매일 spec 찾아봄.",
    category: "core",
    difficulty: 1,
    marketSize: 3,
    fitScore: 5,
    priority: 2,
    priorityLabel: "2순위 — 보조",
    bestFor: "Phase 1 마케팅 진입점. 무료 freemium으로 트래픽 → A로 전환.",
    existingPlayers: [
      { name: "3gpp.org 공식", type: "commercial", note: "검색 비효율, UI 1990년대" },
      { name: "Tech-invite.com", type: "commercial", note: "개인이 만든 spec 인덱스, 인기 있지만 오래됨" },
      { name: "ChatGPT / Claude", type: "commercial", note: "spec 학습 얕고 hallucination 심함" },
      { name: "사내 RAG (삼성·화웨이 등)", type: "internal", note: "대기업만 자체 구축, 외부 미공개" },
    ],
    gaps: [
      "3GPP TS·TR 전체를 학습한 specialized AI assistant 부재",
      "표준 변경 추적 (Rel-15 → Rel-18 diff) 자동화 도구 없음",
      "\"이 메시지 IE는 어디 정의?\" 즉답 도구 없음",
      "한국어 인터페이스 자료 거의 없음",
    ],
    yourAngle: [
      "3GPP spec 전체 RAG + GPT 인터페이스",
      "변경 이력 자동 추적 (CR analysis)",
      "AT 명령 / NAS / RRC 메시지 검색",
      "무료 freemium → enterprise 전환 funnel",
      "A 제품과 자연스럽게 cross-sell",
    ],
    firstCustomers: [
      "모뎀 / 단말 / chipset 회사 전부",
      "표준 위원회 참여 회사",
      "통신 컨설팅 펌",
      "주니어 모뎀 엔지니어 (자기 학습용)",
    ],
    pricing: "무료 freemium / 엔터프라이즈 시트당 월 5~15만",
    marketSizeNote: "글로벌 모뎀 엔지니어 + 표준 위원회 + 학생 합쳐 수만 명",
    recommendation: "A의 마케팅 도구로 동시 출시. 진입 장벽 낮아 빠르게 트래픽 확보 가능.",
  },
  {
    id: "F",
    slug: "regression-kpi-tracking",
    title: "회귀 테스트 결과 추적 / KPI 모니터링",
    oneLiner: "빌드별 성능 변화 자동 추적. A의 자연스러운 확장 모듈.",
    category: "extension",
    difficulty: 2,
    marketSize: 3,
    fitScore: 5,
    priority: 3,
    priorityLabel: "Phase 2 — A 확장",
    existingPlayers: [
      { name: "TestRail / Zephyr", type: "commercial", note: "general QA, 모뎀 특화 X" },
      { name: "Spirent Velocity", type: "commercial", note: "비싸고 복잡" },
      { name: "회사 자체 Excel + 스크립트", type: "internal", note: "90% 케이스" },
    ],
    gaps: [
      "모뎀 KPI (throughput, latency, attach success rate, BLER) 시계열 자동 추적 부재",
      "회귀 발생 시 어느 commit 때문인지 자동 bisect 도구 없음",
      "빌드 매니저용 dashboard 거의 없음",
    ],
    yourAngle: [
      "A의 로그 분석 SaaS의 자연스러운 확장",
      "\"이 빌드에서 attach success rate가 3% 떨어졌어요\" 자동 알림",
      "Git commit과 KPI 변화 자동 연결",
    ],
    firstCustomers: [
      "A 사용자 중 빌드 매니저 페르소나",
      "chipset 펌웨어 release 팀",
    ],
    pricing: "A에 부가 모듈로 연 1~3천만 추가",
    marketSizeNote: "A 사용자 base에서 자연스럽게 확장",
    recommendation: "A 출시 6~12개월 후 추가. 단독 제품으로는 시장 작음.",
  },
  {
    id: "G",
    slug: "bug-triage-ai",
    title: "버그 Triage / 유사 케이스 검색 (AI)",
    oneLiner: "\"이 attach 실패는 작년 3월에 같은 원인으로 봤어요\" — 사후 분석팀의 시간 회수.",
    category: "extension",
    difficulty: 2,
    marketSize: 2,
    fitScore: 4,
    priority: 4,
    priorityLabel: "Phase 2 — A 확장",
    existingPlayers: [
      { name: "Jira / Bugzilla", type: "commercial", note: "general 이슈 트래커, 모뎀 특화 X" },
      { name: "회사 사내 검색", type: "internal", note: "텍스트 검색 수준, 컨텍스트 인식 X" },
    ],
    gaps: [
      "AI 기반 모뎀 버그 클러스터링 부재",
      "로그 + 버그 보고서 통합 검색 도구 없음",
      "재현 시나리오 자동 추출 X",
    ],
    yourAngle: [
      "로그 + 버그 보고서 → 임베딩 → 유사 케이스 자동 검색",
      "C·F와 결합한 통합 솔루션",
      "LLM 기반 자연어 검색",
    ],
    firstCustomers: [
      "모뎀 QA · 사후 분석팀",
      "통신사 NOC",
      "chipset 회사 customer support",
    ],
    pricing: "시트당 월 10~30만",
    marketSizeNote: "A 사용자 + QA 페르소나 확장",
    recommendation: "A의 데이터 base 위에 AI 레이어로 추가. 단독 제품 X.",
  },
  {
    id: "C",
    slug: "at-diag-automation",
    title: "AT 명령 / Diag 자동화",
    oneLiner: "단말 검증 엔지니어의 손이 가장 많이 가는 영역. USB만 있으면 동작.",
    category: "specialty",
    difficulty: 3,
    marketSize: 3,
    fitScore: 4,
    priority: 5,
    priorityLabel: "도메인 깊으면",
    existingPlayers: [
      { name: "회사 자체 Python 스크립트", type: "internal", note: "90% 케이스" },
      { name: "R&S CMW Smart Server", type: "commercial", note: "장비 묶음 판매" },
      { name: "Anritsu RTD", type: "commercial", note: "장비 묶음 판매" },
      { name: "ATCommander", type: "oss", note: "오픈소스, 구식" },
      { name: "Robot Framework", type: "oss", note: "general 자동화, 모뎀 특화 X" },
    ],
    gaps: [
      "시나리오 작성을 코드 없이 (low-code/YAML) 가능한 도구 부재",
      "AT 명령 파라미터 자동 완성 + 검증 X",
      "결과 자동 비교 / 회귀 감지 X",
      "단말 USB만 있으면 동작 — 장비 의존성 0",
    ],
    yourAngle: [
      "Web 기반 AT 시퀀서 + 시나리오 마켓플레이스",
      "Diag (Qualcomm Diag, Samsung Modem Diag) 통합",
      "결과 자동 비교 → A·F와 결합",
    ],
    firstCustomers: [
      "단말 OEM 검증팀",
      "IoT 모듈 회사 (Quectel, 텔릿, 라텔)",
      "자동차 텔레매틱스 (TCU 검증)",
    ],
    pricing: "시트당 월 20~50만 / 사이트 라이선스 연 5천~2억",
    marketSizeNote: "단말 검증 엔지니어 시장",
    recommendation: "도메인 경력자 1~2명 영입 시 가능. 단말마다 명령 차이 커서 학습 곡선 있음.",
  },
  {
    id: "D",
    slug: "modem-cicd",
    title: "Modem CI/CD Platform",
    oneLiner: "빌드 → 자동 플래싱 → 시나리오 → 로그 분석 → diff 알림 통합.",
    category: "advanced",
    difficulty: 4,
    marketSize: 3,
    fitScore: 3,
    priority: 6,
    priorityLabel: "후순위",
    existingPlayers: [
      { name: "Jenkins / GitLab CI", type: "oss", note: "general purpose, 모뎀 특화 X" },
      { name: "회사 사내 자체", type: "internal", note: "대기업은 자체 구축" },
    ],
    gaps: [
      "모뎀 빌드 산물 (.dlf, .img) 관리 + 단말 자동 플래싱 통합 도구 부재",
      "빌드별 KPI 변화 자동 추적 X",
      "small chipset 회사용 turnkey 솔루션 없음",
    ],
    yourAngle: [
      "A·C·F와 결합한 \"modem CI/CD platform\"",
      "빌드되면 자동으로 단말 5대에 플래싱 → AT 시나리오 실행 → 로그 분석 → diff 알림",
    ],
    firstCustomers: [
      "작은 chipset 스타트업 (인프라 살 여력 X)",
      "자동차 텔레매틱스 (TCU 펌웨어 빌드)",
    ],
    pricing: "사이트 라이선스 연 1~5억",
    marketSizeNote: "인프라 묶음 사업, 영업 사이클 길음",
    recommendation: "후순위. A·C·F가 자리 잡은 후 통합 패키지로.",
  },
  {
    id: "E",
    slug: "sdr-cell-simulator",
    title: "SDR 기반 저가 셀 시뮬레이터",
    oneLiner: "Amarisoft (수억원) 의 1/10 가격으로 80% 기능. R&D · 교육 시장.",
    category: "advanced",
    difficulty: 4,
    marketSize: 2,
    fitScore: 3,
    priority: 7,
    priorityLabel: "도메인 매우 깊을 때",
    existingPlayers: [
      { name: "Amarisoft", type: "commercial", note: "상용, 수억원, 산업 표준" },
      { name: "srsRAN", type: "oss", note: "오픈소스 4G/5G, 학계 위주" },
      { name: "OpenAirInterface", type: "oss", note: "EU 학계, 진입 장벽 큼" },
      { name: "USRP + GNU Radio", type: "oss", note: "수동, 전문가만" },
    ],
    gaps: [
      "\"누구나 쓸 수 있는\" 저가 셀 시뮬 turnkey 부재",
      "srsRAN 위에 web GUI + 시나리오 자동화 + 로그 통합 X",
      "R&D 단계 합리적 가격 옵션 X",
    ],
    yourAngle: [
      "Amarisoft의 1/10 가격으로 80% 기능",
      "인증 시험은 못 해도 개발·R&D·교육 단계는 충분",
      "한국·중국·인도 R&D 시장",
    ],
    firstCustomers: [
      "대학 연구실 (정부 과제 예산 1~3억)",
      "chipset 스타트업",
      "교육·트레이닝 회사",
    ],
    pricing: "라이선스 연 1~3천만 + USRP B210 (300만) HW",
    marketSizeNote: "한국·중국·인도 R&D + 교육",
    recommendation: "SDR + RF 도메인 매우 깊을 때만. Phase 3 이후.",
  },
  {
    id: "H",
    slug: "drive-test-cloud",
    title: "Field / Drive Test 데이터 분석 (Cloud)",
    oneLiner: "차량으로 다니며 측정한 데이터 분석. 한국 강자(Accuver) 있어 진입 어려움.",
    category: "advanced",
    difficulty: 4,
    marketSize: 2,
    fitScore: 2,
    priority: 8,
    priorityLabel: "비추천",
    existingPlayers: [
      { name: "Accuver XCAL", type: "korean", note: "한국 강자, 시장 점유율 큼" },
      { name: "Innowireless", type: "korean", note: "한국 회사, 5G 측정" },
      { name: "R&S Romes / Keysight Nemo", type: "commercial", note: "글로벌 강자" },
    ],
    gaps: [
      "클라우드 / SaaS 형태 부재",
      "다중 캠페인 비교 어려움",
      "AI 이상 탐지 X",
    ],
    yourAngle: [
      "XCAL의 데이터 export → 클라우드 분석",
      "통신사 R&D 시장",
    ],
    firstCustomers: [
      "통신사 R&D",
      "장비 인증 컨설팅",
    ],
    pricing: "라이선스 연 5천~2억",
    marketSizeNote: "한국 강자 있고 drive test 사업 자체가 복잡",
    recommendation: "비추천. Accuver와 정면 경쟁 어려움. 시장도 작음.",
  },
];

export const CORE = POSITIONS.filter((p) => p.category === "core");
export const EXTENSION = POSITIONS.filter((p) => p.category === "extension");
export const SPECIALTY = POSITIONS.filter((p) => p.category === "specialty");
export const ADVANCED = POSITIONS.filter((p) => p.category === "advanced");

export function getPosition(slug: string): Position | undefined {
  return POSITIONS.find((p) => p.slug === slug);
}
