// 통신 시장 규모 + 미래 트렌드 데이터
// 출처: GSMA Mobile Economy 2025, Ericsson Mobility Report 2024, Statista, IDC, Counterpoint, Dell'Oro
// 숫자는 추정·근사치

export type MarketStat = {
  id: string;
  label: string;
  value: string;
  unit: string;
  detail: string;
  source: string;
  trend?: "up" | "flat" | "down";
};

export const MARKET_STATS: MarketStat[] = [
  {
    id: "mobile-subs",
    label: "글로벌 모바일 가입",
    value: "8.8B+",
    unit: "가입",
    detail: "인구보다 많음 (다중 가입). 2030년 9.5B 추정.",
    source: "GSMA 2025",
    trend: "up",
  },
  {
    id: "5g-subs",
    label: "5G 가입자",
    value: "2.2B+",
    unit: "가입",
    detail: "2025년 말. 2030년 6B+ 추정. 중국 단독 1.2B+.",
    source: "Ericsson Mobility 2024",
    trend: "up",
  },
  {
    id: "telco-revenue",
    label: "글로벌 통신 서비스 매출",
    value: "$1.6T",
    unit: "USD",
    detail: "통신 사업자 (carrier) 매출 합계. 연간.",
    source: "GSMA 2024",
    trend: "flat",
  },
  {
    id: "chipset-market",
    label: "모바일 / 통신 SoC 시장",
    value: "$45B",
    unit: "USD/년",
    detail: "Qualcomm·MediaTek·Apple·UNISOC 등 합계. 모뎀 단독은 ~$25B.",
    source: "Counterpoint 2024",
    trend: "up",
  },
  {
    id: "5g-infra",
    label: "5G 인프라 장비",
    value: "$50B",
    unit: "USD/년",
    detail: "RAN + 코어 + 광 전송. Ericsson·Nokia·Huawei·ZTE.",
    source: "Dell'Oro 2024",
    trend: "flat",
  },
  {
    id: "iot-cellular",
    label: "셀룰러 IoT 가입",
    value: "3B+",
    unit: "가입",
    detail: "2025년 ~3B → 2030년 6B+. LTE-M/NB-IoT/5G RedCap.",
    source: "GSMA Mobile IoT 2024",
    trend: "up",
  },
  {
    id: "iot-modules",
    label: "셀룰러 IoT 모듈",
    value: "$10B",
    unit: "USD/년",
    detail: "Quectel 30%, Telit·u-blox·Sierra·Fibocom 등.",
    source: "IoT Analytics 2024",
    trend: "up",
  },
  {
    id: "leo-broadband",
    label: "LEO 위성 광대역",
    value: "$15B",
    unit: "USD/년",
    detail: "2025년 ~$15B → 2030년 $40B+. Starlink 단독 매출 ~$8B.",
    source: "Quilty / Northern Sky 2024",
    trend: "up",
  },
  {
    id: "satellite-total",
    label: "위성 통신 시장 (전체)",
    value: "$300B+",
    unit: "USD/년",
    detail: "광대역 + 방송 + IoT + 항공·해상 합계.",
    source: "SIA 2024",
    trend: "up",
  },
  {
    id: "test-tools",
    label: "통신 테스트·측정 시장",
    value: "$10B",
    unit: "USD/년",
    detail: "Keysight·R&S·Anritsu 합산 + 검증 서비스.",
    source: "Frost & Sullivan 2024",
    trend: "flat",
  },
  {
    id: "test-services",
    label: "통신 SW 검증 서비스",
    value: "$8B",
    unit: "USD/년",
    detail: "ThunderSoft·Capgemini·Tata 등 인력 공수 사업 포함.",
    source: "Industry estimate",
    trend: "up",
  },
  {
    id: "v2x-tcu",
    label: "차량 텔레매틱스 (TCU)",
    value: "$30B",
    unit: "USD/년",
    detail: "신차 셀룰러 모뎀 의무화 (EU 2026+) 가속.",
    source: "Counterpoint Auto 2024",
    trend: "up",
  },
];

export type FutureTrend = {
  id: string;
  title: string;
  timeframe: string;
  oneLiner: string;
  drivers: string[];
  impact: string;
  yourOpportunity: string;
  marketSize?: string;
};

export const FUTURE_TRENDS: FutureTrend[] = [
  {
    id: "satellite-d2d",
    title: "위성 직접 통신 (D2D)",
    timeframe: "2025 → 2030",
    oneLiner: "일반 스마트폰이 위성과 직접 통신. Starlink·AST·Apple Globalstar 모두 시작.",
    drivers: [
      "SpaceX Starlink Direct-to-Cell (2025 정식)",
      "AST SpaceMobile + AT&T·Vodafone·Rakuten 협력",
      "Apple iPhone Globalstar (긴급 SOS → 메시지 → 데이터)",
      "3GPP NTN (Non-Terrestrial Networks) 표준화 — Rel-17/18/19",
    ],
    impact:
      "모든 모뎀에 NTN 지원이 표준이 되어감. 새로운 인증 시험 필요. 지상망 + 위성망 핸드오버 검증, NTN 채널 모델 검증, doppler shift 테스트 등 새 영역 발생.",
    yourOpportunity:
      "NTN 검증 도구는 거의 없음. SDR 기반 NTN 시뮬레이터 + 로그 분석 도구 시장이 새로 열림. Phase 3 또는 별도 사업 후보.",
    marketSize: "LEO 광대역 시장 $15B → $40B (2030)",
  },
  {
    id: "6g",
    title: "6G — 2030년 상용화",
    timeframe: "2030 → 2035",
    oneLiner: "3GPP Rel-20부터 6G 표준화. THz·AI Native·NTN 통합.",
    drivers: [
      "3GPP Rel-20 (2025 시작) → Rel-21에서 6G 첫 사양",
      "한국 정부 6G R&D 예산 2조원+",
      "EU Hexa-X-II 프로젝트, 미국 Next G Alliance",
      "중국 이미 6G 위성 시험 발사",
    ],
    impact:
      "주파수 100GHz+ (sub-THz, THz). AI가 RAN 기본 구성요소. 통신 + 센싱 통합 (ISAC). 모뎀 검증 자체가 새 패러다임.",
    yourOpportunity:
      "6G 도구는 아직 아무도 안 만들었음. 2027~2028년부터 학계·기업 R&D에서 도구 수요 시작. 지금 5G 도구로 트랙 레코드 쌓아두면 유리한 위치.",
    marketSize: "추정 어려움. 5G의 확장",
  },
  {
    id: "iot-explosion",
    title: "셀룰러 IoT 폭발 (3B → 6B)",
    timeframe: "2025 → 2030",
    oneLiner: "LTE-M / NB-IoT / 5G RedCap. 산업용 IoT 매출 가속.",
    drivers: [
      "Industrial 5G — 공장·물류·에너지",
      "5G RedCap (Reduced Capability) — 저전력 광대역 IoT",
      "스마트시티·스마트미터·자동차 IoT",
      "위성 IoT (Iridium·Astrocast·ORBCOMM) 확산",
    ],
    impact:
      "수만 개 디바이스 동시 검증 필요. 각 모듈 회사가 자체 검증 도구 못 만들고 외주. Quectel·Telit 등의 R&D 인력 부족.",
    yourOpportunity:
      "IoT 모듈 회사는 chipset만큼 깊이 있는 사내 도구 없음. SaaS형 도구가 가장 잘 먹히는 시장. 글로벌 영업 가능.",
    marketSize: "셀룰러 IoT 모듈 $10B → $25B (2030)",
  },
  {
    id: "ai-native-ran",
    title: "AI Native Networks (AI-RAN)",
    timeframe: "2024 → 2028",
    oneLiner: "O-RAN 확산 + LLM이 네트워크 운영에 들어옴. NVIDIA·Qualcomm 적극 투자.",
    drivers: [
      "O-RAN Alliance 확산 — 네트워크 장비 multi-vendor",
      "AI-RAN Alliance (NVIDIA 주도)",
      "LLM 기반 네트워크 자동화 (Slicing, 최적화)",
      "T-Mobile·SoftBank·KDDI 등 도입 시작",
    ],
    impact:
      "통신 + AI 융합 영역의 도구 수요 폭발. RAG·LLM이 통신 도메인에 들어옴. 모뎀 도구도 AI 결합 필수.",
    yourOpportunity:
      "B (3GPP RAG) + G (Bug AI) 가 정확히 이 흐름. AI Native 통신 시대의 표준 도구가 될 자리. 너의 강점 영역.",
    marketSize: "AI-RAN 시장 ~$5B → $20B (2030)",
  },
  {
    id: "v2x-mandate",
    title: "차량 셀룰러 의무화",
    timeframe: "2026 → 2030",
    oneLiner: "EU 모든 신차 eCall + V2X. 미국·중국·한국도 추진.",
    drivers: [
      "EU eCall 의무화 (이미 시행) → V2X 의무화 (2026+ 추진)",
      "C-V2X (3GPP) vs DSRC 경쟁 → C-V2X 승리 정착",
      "자율주행 통신 표준화 가속",
      "테슬라·현대·BYD 모두 셀룰러 모뎀 자체 통합",
    ],
    impact:
      "모든 신차에 셀룰러 모뎀 내장. TCU 검증 수요 폭발. 자동차 안전성 규격(ISO 26262, ASPICE)과 결합되어 검증 깊이 요구.",
    yourOpportunity:
      "TCU 검증은 일반 모바일 모뎀과 다름. ISO 26262 / ASPICE 인증 추적, OTA 업데이트 검증 등 새 영역. 자동차 도메인 + 모뎀 둘 다 알면 차별화.",
    marketSize: "TCU 시장 $30B → $60B (2030)",
  },
];

export const ECOSYSTEM_FLOW: { from: string; to: string; label?: string }[] = [
  { from: "research", to: "chipset", label: "표준" },
  { from: "chipset", to: "oem", label: "SoC 공급" },
  { from: "chipset", to: "iot", label: "모듈 칩" },
  { from: "chipset", to: "auto", label: "TCU 칩" },
  { from: "oem", to: "carrier", label: "단말 인증" },
  { from: "iot", to: "carrier", label: "M2M 가입" },
  { from: "auto", to: "carrier", label: "TCU 가입" },
  { from: "network", to: "carrier", label: "RAN/코어" },
  { from: "satellite", to: "oem", label: "D2D" },
  { from: "satellite", to: "iot", label: "위성 IoT" },
  { from: "vendor", to: "chipset", label: "검증 외주" },
  { from: "vendor", to: "oem", label: "검증 외주" },
  { from: "vendor", to: "iot", label: "검증 외주" },
];
