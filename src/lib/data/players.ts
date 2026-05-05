export type Region = "global" | "korea" | "china" | "us" | "eu" | "japan" | "india";

export type PlayerCategory =
  | "carrier"
  | "chipset"
  | "oem"
  | "network"
  | "satellite"
  | "iot"
  | "auto"
  | "vendor"
  | "research";

export type Player = {
  name: string;
  korean: string;
  category: PlayerCategory;
  region: Region;
  scale: "대" | "중" | "소";
  note: string;
};

export const CATEGORY_LABEL: Record<PlayerCategory, string> = {
  carrier: "통신 사업자 (Telcos)",
  chipset: "모뎀 / SoC Chipset",
  oem: "단말 OEM (Smartphone)",
  network: "네트워크 인프라 장비",
  satellite: "위성 통신 (NTN / LEO)",
  iot: "IoT / 셀룰러 모듈",
  auto: "자동차 텔레매틱스 (V2X)",
  vendor: "검증 · SI · 테스트 도구",
  research: "연구 기관 · 표준화",
};

export const CATEGORY_DESC: Record<PlayerCategory, string> = {
  carrier: "글로벌 88억+ 가입자, 5G 22억+. 가장 큰 통신 산업 매출 ($1.6T).",
  chipset: "모뎀·AP·통신 SoC 시장 ~$45B. Qualcomm·MediaTek·Apple·UNISOC 등 핵심 잠재 고객.",
  oem: "글로벌 스마트폰 OEM. 매년 12억+ 단말 출하. 모뎀 검증 수요 상시.",
  network: "5G/6G RAN·코어 장비. 글로벌 시장 ~$50B. O-RAN 확산 중.",
  satellite: "LEO 위성 폭발적 성장. SpaceX 7M+ 사용자. 3GPP NTN 표준화로 모뎀 영역 확장.",
  iot: "셀룰러 IoT 가입 30억+ → 2030년 60억+. LTE-M / NB-IoT / 5G RedCap 표준.",
  auto: "신차 셀룰러 모뎀 의무화 (EU 2026+). C-V2X 표준 정착. TCU 시장 급성장.",
  vendor: "검증·인증·테스트 도구 시장 ~$10B. 너의 직접 경쟁·파트너 영역.",
  research: "5G/6G 표준화·정부 R&D 예산. 한국·EU·중국·미국·일본 모두 투자.",
};

export const PLAYERS: Player[] = [
  // ───────────── Carriers ─────────────
  {
    name: "China Mobile",
    korean: "차이나모바일",
    category: "carrier",
    region: "china",
    scale: "대",
    note: "9.9억+ 가입자. 단일 최대 통신사. 5G SA 글로벌 1위 배포.",
  },
  {
    name: "Reliance Jio",
    korean: "릴라이언스 지오",
    category: "carrier",
    region: "india",
    scale: "대",
    note: "4.7억+ 가입자. 인도 최대. 자체 5G 네트워크 + 단말.",
  },
  {
    name: "Verizon",
    korean: "버라이즌",
    category: "carrier",
    region: "us",
    scale: "대",
    note: "1.4억+ 가입자. mmWave 5G 선도, FWA 강세.",
  },
  {
    name: "AT&T",
    korean: "AT&T",
    category: "carrier",
    region: "us",
    scale: "대",
    note: "1.2억+ 가입자. 미국 2위.",
  },
  {
    name: "T-Mobile US",
    korean: "T-모바일 US",
    category: "carrier",
    region: "us",
    scale: "대",
    note: "1.2억+ 가입자. 5G 커버리지 미국 1위.",
  },
  {
    name: "Vodafone Group",
    korean: "보다폰",
    category: "carrier",
    region: "eu",
    scale: "대",
    note: "글로벌 30개국 운영. 영국 본사.",
  },
  {
    name: "Deutsche Telekom",
    korean: "도이치 텔레콤",
    category: "carrier",
    region: "eu",
    scale: "대",
    note: "독일 본사. T-Mobile US 모회사.",
  },
  {
    name: "NTT Docomo",
    korean: "NTT 도코모",
    category: "carrier",
    region: "japan",
    scale: "대",
    note: "일본 1위. 6G 연구 적극.",
  },
  {
    name: "KDDI",
    korean: "KDDI",
    category: "carrier",
    region: "japan",
    scale: "대",
    note: "일본 2위. Starlink 직접 통신 파트너십.",
  },
  {
    name: "SK Telecom",
    korean: "SK텔레콤",
    category: "carrier",
    region: "korea",
    scale: "대",
    note: "한국 1위. 자체 R&D 보유. AI 인프라 투자.",
  },
  {
    name: "KT",
    korean: "KT",
    category: "carrier",
    region: "korea",
    scale: "대",
    note: "한국 2위. 융합기술원 운영.",
  },
  {
    name: "LG U+",
    korean: "LG유플러스",
    category: "carrier",
    region: "korea",
    scale: "대",
    note: "한국 3위. B2B IoT·AI 강세.",
  },

  // ───────────── Chipset ─────────────
  {
    name: "Qualcomm",
    korean: "퀄컴",
    category: "chipset",
    region: "us",
    scale: "대",
    note: "Snapdragon X 모뎀. 프리미엄 모바일 사실상 표준. 시장 점유율 1위.",
  },
  {
    name: "MediaTek",
    korean: "미디어텍",
    category: "chipset",
    region: "global",
    scale: "대",
    note: "대만. 중저가 모뎀 시장 강자. 출하량 1위 (2023+).",
  },
  {
    name: "Apple",
    korean: "애플",
    category: "chipset",
    region: "us",
    scale: "대",
    note: "C1 자체 모뎀 (2025+). iPhone 일부 라인 적용 시작.",
  },
  {
    name: "Samsung System LSI",
    korean: "시스템LSI",
    category: "chipset",
    region: "korea",
    scale: "대",
    note: "Exynos Modem 시리즈. 자체 단말 + 외부 라이선스.",
  },
  {
    name: "UNISOC",
    korean: "유니SOC",
    category: "chipset",
    region: "china",
    scale: "중",
    note: "중국 (전 Spreadtrum). 저가 모뎀 시장.",
  },
  {
    name: "HiSilicon (Huawei)",
    korean: "하이실리콘",
    category: "chipset",
    region: "china",
    scale: "중",
    note: "Kirin/Balong 모뎀. 미국 제재로 위축됐으나 자국 회복 중.",
  },

  // ───────────── OEM ─────────────
  {
    name: "Apple iPhone",
    korean: "애플",
    category: "oem",
    region: "us",
    scale: "대",
    note: "글로벌 매출 1위. 자체 모뎀 전환 진행.",
  },
  {
    name: "Samsung Mobile",
    korean: "삼성전자 모바일",
    category: "oem",
    region: "korea",
    scale: "대",
    note: "출하량 글로벌 Top 2. Galaxy 라인.",
  },
  {
    name: "Xiaomi",
    korean: "샤오미",
    category: "oem",
    region: "china",
    scale: "대",
    note: "글로벌 Top 3. 모뎀은 Qualcomm·MediaTek 외주.",
  },
  {
    name: "Vivo",
    korean: "비보",
    category: "oem",
    region: "china",
    scale: "대",
    note: "BBK 그룹. 중국·동남아·인도 강세.",
  },
  {
    name: "OPPO",
    korean: "오포",
    category: "oem",
    region: "china",
    scale: "대",
    note: "BBK 그룹. 자체 모뎀 시도 중단했으나 검증 수요 큼.",
  },
  {
    name: "Honor",
    korean: "아너",
    category: "oem",
    region: "china",
    scale: "중",
    note: "Huawei에서 분사. 글로벌 회복 중.",
  },
  {
    name: "Google Pixel",
    korean: "구글 픽셀",
    category: "oem",
    region: "us",
    scale: "중",
    note: "Tensor SoC + Exynos 모뎀 (G5부터 자체).",
  },

  // ───────────── Network Infrastructure ─────────────
  {
    name: "Ericsson",
    korean: "에릭슨",
    category: "network",
    region: "eu",
    scale: "대",
    note: "스웨덴. 5G RAN 글로벌 최대.",
  },
  {
    name: "Nokia",
    korean: "노키아",
    category: "network",
    region: "eu",
    scale: "대",
    note: "핀란드. RAN + 코어 + 광 네트워크.",
  },
  {
    name: "Huawei",
    korean: "화웨이",
    category: "network",
    region: "china",
    scale: "대",
    note: "글로벌 최대 통신 장비. 미국·EU 일부 시장 제재.",
  },
  {
    name: "ZTE",
    korean: "ZTE",
    category: "network",
    region: "china",
    scale: "대",
    note: "중국 2위. 신흥국 시장 강세.",
  },
  {
    name: "Samsung Networks",
    korean: "삼성 네트워크사업부",
    category: "network",
    region: "korea",
    scale: "대",
    note: "5G RAN. Verizon·NTT 등 대형 계약.",
  },
  {
    name: "Cisco",
    korean: "시스코",
    category: "network",
    region: "us",
    scale: "대",
    note: "코어·라우팅 강세. RAN 일부.",
  },

  // ───────────── Satellite ─────────────
  {
    name: "SpaceX Starlink",
    korean: "스페이스엑스 스타링크",
    category: "satellite",
    region: "us",
    scale: "대",
    note: "LEO 6500+ 위성. 7M+ 사용자. D2D (직접 단말 통신) 시작. 시장 선두.",
  },
  {
    name: "Amazon Kuiper",
    korean: "아마존 카이퍼",
    category: "satellite",
    region: "us",
    scale: "대",
    note: "3236기 LEO 위성 계획. 2025 본격 발사 시작.",
  },
  {
    name: "OneWeb (Eutelsat)",
    korean: "원웹",
    category: "satellite",
    region: "eu",
    scale: "중",
    note: "Eutelsat 합병. 영국. 648기 LEO.",
  },
  {
    name: "AST SpaceMobile",
    korean: "AST 스페이스모바일",
    category: "satellite",
    region: "us",
    scale: "중",
    note: "일반 스마트폰과 직접 통신 (D2D) 특화. AT&T·보다폰·라쿠텐 파트너.",
  },
  {
    name: "Iridium",
    korean: "이리듐",
    category: "satellite",
    region: "us",
    scale: "중",
    note: "IoT·항공·해상·방산 특화. 66기 LEO. Apple Globalstar 협력.",
  },
  {
    name: "Inmarsat (Viasat)",
    korean: "인마샛 / 비아샛",
    category: "satellite",
    region: "global",
    scale: "중",
    note: "GEO 위성. 항공·해상 전용 통신.",
  },

  // ───────────── IoT / Modules ─────────────
  {
    name: "Quectel",
    korean: "퀵텔",
    category: "iot",
    region: "china",
    scale: "대",
    note: "셀룰러 IoT 모듈 글로벌 1위 (~30%). 한국 지사 운영.",
  },
  {
    name: "Telit Cinterion",
    korean: "텔릿 신터리온",
    category: "iot",
    region: "eu",
    scale: "중",
    note: "이탈리아·독일 합병. IoT 모듈 글로벌 2~3위.",
  },
  {
    name: "Sierra Wireless (Semtech)",
    korean: "시에라 와이어리스",
    category: "iot",
    region: "us",
    scale: "중",
    note: "Semtech가 인수. 산업용 IoT.",
  },
  {
    name: "u-blox",
    korean: "유블럭스",
    category: "iot",
    region: "eu",
    scale: "중",
    note: "스위스. 산업용 / 자동차 IoT 모듈.",
  },
  {
    name: "Fibocom",
    korean: "피보콤",
    category: "iot",
    region: "china",
    scale: "중",
    note: "중국 IoT 모듈 2위.",
  },
  {
    name: "MeiG Smart",
    korean: "메이그 스마트",
    category: "iot",
    region: "china",
    scale: "중",
    note: "중국 IoT 모듈 신흥",
  },

  // ───────────── Auto ─────────────
  {
    name: "Bosch Mobility",
    korean: "보쉬 모빌리티",
    category: "auto",
    region: "eu",
    scale: "대",
    note: "글로벌 최대 자동차 부품. TCU·V2X.",
  },
  {
    name: "Continental",
    korean: "콘티넨탈",
    category: "auto",
    region: "eu",
    scale: "대",
    note: "독일. TCU·텔레매틱스.",
  },
  {
    name: "Denso",
    korean: "덴소",
    category: "auto",
    region: "japan",
    scale: "대",
    note: "토요타 계열. 텔레매틱스·V2X.",
  },
  {
    name: "Hyundai Mobis",
    korean: "현대모비스",
    category: "auto",
    region: "korea",
    scale: "대",
    note: "현대차 계열. TCU 자체 개발.",
  },
  {
    name: "LG VS Company",
    korean: "LG VS사업부",
    category: "auto",
    region: "korea",
    scale: "대",
    note: "차량용 텔레매틱스. 5G TCU.",
  },
  {
    name: "Mando (HL Mando)",
    korean: "에이치엘 만도",
    category: "auto",
    region: "korea",
    scale: "대",
    note: "ADAS + 텔레매틱스.",
  },

  // ───────────── Vendor / Test Tools ─────────────
  {
    name: "Keysight Technologies",
    korean: "키사이트",
    category: "vendor",
    region: "us",
    scale: "대",
    note: "측정 장비 + 검증 SW 글로벌 1위.",
  },
  {
    name: "Rohde & Schwarz",
    korean: "로데앤슈바르츠",
    category: "vendor",
    region: "eu",
    scale: "대",
    note: "독일. 모뎀 인증 측정 표준.",
  },
  {
    name: "Anritsu",
    korean: "안리쓰",
    category: "vendor",
    region: "japan",
    scale: "대",
    note: "일본. 단말 적합성 시험 강자.",
  },
  {
    name: "Spirent Communications",
    korean: "스파이런트",
    category: "vendor",
    region: "us",
    scale: "중",
    note: "통신 검증 SW. SaaS 가까움.",
  },
  {
    name: "VIAVI Solutions",
    korean: "VIAVI",
    category: "vendor",
    region: "us",
    scale: "중",
    note: "필드 측정·인증 도구.",
  },
  {
    name: "ThunderSoft",
    korean: "썬더소프트",
    category: "vendor",
    region: "china",
    scale: "대",
    note: "중국. Qualcomm Authorized Design Center. 모뎀·자동차 임베디드 인력 사업.",
  },
  {
    name: "Capgemini Engineering (Aricent)",
    korean: "카프제미니 엔지니어링",
    category: "vendor",
    region: "eu",
    scale: "대",
    note: "EU 본사. 모뎀 plat 검증 글로벌.",
  },
  {
    name: "Tata Elxsi",
    korean: "타타 엘식시",
    category: "vendor",
    region: "india",
    scale: "대",
    note: "인도. 모뎀·자동차 임베디드.",
  },
  {
    name: "HCLTech",
    korean: "HCL테크",
    category: "vendor",
    region: "india",
    scale: "대",
    note: "인도. 한국 사무소 — 모뎀 검증 인력 파견.",
  },
  {
    name: "Innowireless",
    korean: "이노와이어리스",
    category: "vendor",
    region: "korea",
    scale: "중",
    note: "한국. 5G/4G 측정 + 검증 서비스.",
  },
  {
    name: "Accuver",
    korean: "악큐버",
    category: "vendor",
    region: "korea",
    scale: "중",
    note: "한국. XCAL drive test 도구.",
  },
  {
    name: "RFcore",
    korean: "알에프코어",
    category: "vendor",
    region: "korea",
    scale: "중",
    note: "한국. RF/모뎀 검증 SI.",
  },
  {
    name: "Solid",
    korean: "쏠리드",
    category: "vendor",
    region: "korea",
    scale: "중",
    note: "한국. 통신 장비 + R&D 서비스.",
  },

  // ───────────── Research ─────────────
  {
    name: "ETRI",
    korean: "한국전자통신연구원",
    category: "research",
    region: "korea",
    scale: "대",
    note: "5G/6G 정부 연구원. 과제 예산 큼.",
  },
  {
    name: "KARI",
    korean: "한국항공우주연구원",
    category: "research",
    region: "korea",
    scale: "대",
    note: "위성 통신.",
  },
  {
    name: "KAIST 통신랩",
    korean: "KAIST 통신연구실",
    category: "research",
    region: "korea",
    scale: "중",
    note: "5G/6G 학계.",
  },
  {
    name: "3GPP",
    korean: "3GPP",
    category: "research",
    region: "global",
    scale: "대",
    note: "글로벌 무선 통신 표준화 단체. Rel-15(5G) → Rel-20(6G).",
  },
  {
    name: "Bell Labs (Nokia)",
    korean: "벨 연구소",
    category: "research",
    region: "us",
    scale: "대",
    note: "노키아 산하. 통신 기초 연구.",
  },
  {
    name: "EU 6G-IA",
    korean: "EU 6G-IA",
    category: "research",
    region: "eu",
    scale: "대",
    note: "EU 6G 산업협회. Horizon Europe 예산 ~€900M.",
  },
];

export const REGION_LABEL: Record<Region, string> = {
  global: "글로벌",
  korea: "한국",
  china: "중국",
  us: "미국",
  eu: "EU",
  japan: "일본",
  india: "인도",
};

export const REGION_FLAG: Record<Region, string> = {
  global: "🌐",
  korea: "🇰🇷",
  china: "🇨🇳",
  us: "🇺🇸",
  eu: "🇪🇺",
  japan: "🇯🇵",
  india: "🇮🇳",
};

export function playersByCategory() {
  const map = new Map<PlayerCategory, Player[]>();
  for (const p of PLAYERS) {
    if (!map.has(p.category)) map.set(p.category, []);
    map.get(p.category)!.push(p);
  }
  return map;
}
