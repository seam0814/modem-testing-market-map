// 차트용 가공 데이터 — market.ts의 raw 통계를 시각화 형태로

export type SegmentBar = {
  id: string;
  label: string;
  valueUSD: number; // billion USD
  group: "service" | "infra" | "components" | "tools" | "future";
  note: string;
};

// $1.6T (1600B)는 너무 크니까 별도 hero stat으로 분리하고
// 부품·장비·도구·인프라·미래 segment 비교용
export const MARKET_BARS: SegmentBar[] = [
  { id: "satellite-total", label: "위성 산업 전체 (방송+통신+장비)", valueUSD: 285, group: "service", note: "DTH방송 $60B + 광대역 $30B + 모바일 $15B + 지상장비 $150B 등 — 통신만 ~$113B" },
  { id: "satellite-comm", label: "└ 그중 위성 통신 서비스만", valueUSD: 113, group: "service", note: "방송+광대역+모바일+정부. SpaceX Starlink 단독 ~$8B" },
  { id: "5g-infra", label: "5G 인프라 장비", valueUSD: 50, group: "infra", note: "RAN+코어+광 전송" },
  { id: "chipset", label: "모바일 SoC", valueUSD: 45, group: "components", note: "Qualcomm·MTK·Apple·UNISOC" },
  { id: "v2x-tcu", label: "차량 텔레매틱스", valueUSD: 30, group: "components", note: "TCU + V2X 부품" },
  { id: "leo", label: "LEO 광대역", valueUSD: 15, group: "future", note: "Starlink·Kuiper·OneWeb" },
  { id: "iot-mod", label: "셀룰러 IoT 모듈", valueUSD: 10, group: "components", note: "Quectel·Telit·u-blox" },
  { id: "test-tools", label: "통신 테스트 장비", valueUSD: 10, group: "tools", note: "Keysight·R&S·Anritsu" },
  { id: "test-srv", label: "통신 SW 검증 서비스", valueUSD: 8, group: "tools", note: "ThunderSoft·Capgemini·Tata" },
];

// 통신 서비스 매출은 단독 hero
export const HERO_STAT = {
  serviceRevenue: 1600, // billion USD = $1.6T
  mobileSubs: 8.8, // billion
  fiveGSubs: 2.2, // billion
  iotSubs: 3, // billion
};

export const GROUP_LABEL: Record<SegmentBar["group"], string> = {
  service: "Service",
  infra: "Infrastructure",
  components: "Components",
  tools: "Tools / Vendor",
  future: "Future / Emerging",
};

export const GROUP_COLOR: Record<SegmentBar["group"], string> = {
  service: "#4f3fd6",
  infra: "#2d6a4f",
  components: "#c08727",
  tools: "#5e5e6b",
  future: "#c84033",
};

// 성장 전망 — 2025 vs 2030
export type GrowthRow = {
  id: string;
  label: string;
  unit: string;
  in2025: number;
  in2030: number;
  group: "subs" | "revenue";
  note: string;
};

export const GROWTH_ROWS: GrowthRow[] = [
  {
    id: "5g-subs",
    label: "5G 가입자",
    unit: "B",
    in2025: 2.2,
    in2030: 6.0,
    group: "subs",
    note: "글로벌 5G 가입자 2.7배 증가",
  },
  {
    id: "iot-subs",
    label: "셀룰러 IoT 가입",
    unit: "B",
    in2025: 3.0,
    in2030: 6.0,
    group: "subs",
    note: "산업 IoT, 5G RedCap 영향",
  },
  {
    id: "leo-bb",
    label: "LEO 위성 광대역",
    unit: "$B",
    in2025: 15,
    in2030: 40,
    group: "revenue",
    note: "Starlink·Kuiper 본격 매출",
  },
  {
    id: "v2x",
    label: "차량 텔레매틱스",
    unit: "$B",
    in2025: 30,
    in2030: 60,
    group: "revenue",
    note: "EU 의무화 + V2X 정착",
  },
  {
    id: "iot-mod",
    label: "셀룰러 IoT 모듈",
    unit: "$B",
    in2025: 10,
    in2030: 25,
    group: "revenue",
    note: "Industrial 5G + RedCap",
  },
  {
    id: "ai-ran",
    label: "AI-RAN 시장",
    unit: "$B",
    in2025: 5,
    in2030: 20,
    group: "revenue",
    note: "O-RAN + LLM 결합",
  },
];
