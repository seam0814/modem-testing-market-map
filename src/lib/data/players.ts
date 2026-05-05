export type KoreanPlayer = {
  name: string;
  korean: string;
  category: "vendor1" | "vendor2" | "tools" | "carrier" | "iot" | "auto" | "research";
  scale: "대" | "중" | "소";
  note: string;
  url?: string;
};

export const CATEGORY_LABEL: Record<KoreanPlayer["category"], string> = {
  vendor1: "1차 협력사 (글로벌)",
  vendor2: "한국 검증 SI / 1·2차 vendor",
  tools: "테스트·측정 도구 회사",
  carrier: "통신사 R&D",
  iot: "IoT / 모듈 회사",
  auto: "자동차 텔레매틱스",
  research: "연구 기관 / 학계",
};

export const KOREAN_PLAYERS: KoreanPlayer[] = [
  // Tier 1 vendors (global, but with Korea office)
  {
    name: "ThunderSoft Korea",
    korean: "썬더소프트코리아",
    category: "vendor1",
    scale: "대",
    note: "중국 본사. Qualcomm Authorized Design Center. 삼성 모뎀 CP S/W 협력",
  },
  {
    name: "Capgemini Engineering (Aricent)",
    korean: "카프제미니 엔지니어링",
    category: "vendor1",
    scale: "대",
    note: "EU 본사, 모뎀 plat 검증 글로벌 강자",
  },
  {
    name: "Tata Elxsi",
    korean: "타타 엘식시",
    category: "vendor1",
    scale: "대",
    note: "인도 본사, 모뎀·자동차 임베디드",
  },
  {
    name: "HCLTech",
    korean: "HCL테크",
    category: "vendor1",
    scale: "대",
    note: "인도, 한국 사무소 — 모뎀 검증 인력 파견",
  },
  // Tier 2 — Korean SI / vendor
  {
    name: "Innowireless",
    korean: "이노와이어리스",
    category: "vendor2",
    scale: "중",
    note: "5G/4G 측정 장비 + 검증 서비스. 한국 모뎀 시장 강자",
  },
  {
    name: "Accuver",
    korean: "악큐버",
    category: "tools",
    scale: "중",
    note: "XCAL drive test 도구. 한국 본사, 글로벌 영업",
  },
  {
    name: "RFcore",
    korean: "알에프코어",
    category: "vendor2",
    scale: "중",
    note: "RF/모뎀 검증 SI",
  },
  {
    name: "Solid",
    korean: "쏠리드",
    category: "vendor2",
    scale: "중",
    note: "통신 장비 + R&D 서비스",
  },
  {
    name: "GenTech",
    korean: "지엔텍",
    category: "vendor2",
    scale: "소",
    note: "통신 검증 SI",
  },
  // Tools companies
  {
    name: "R&S Korea",
    korean: "로데앤슈바르츠 코리아",
    category: "tools",
    scale: "대",
    note: "독일 R&S 한국 지사. 측정 장비",
  },
  {
    name: "Keysight Korea",
    korean: "키사이트 코리아",
    category: "tools",
    scale: "대",
    note: "미국 Keysight 한국 지사",
  },
  {
    name: "Anritsu Korea",
    korean: "안리쓰 코리아",
    category: "tools",
    scale: "대",
    note: "일본 Anritsu 한국 지사",
  },
  // Carriers (R&D)
  {
    name: "SK Telecom R&D",
    korean: "SKT 연구소",
    category: "carrier",
    scale: "대",
    note: "5G/6G 연구. 자체 도구 다수 보유",
  },
  {
    name: "KT Convergence Lab",
    korean: "KT 융합기술원",
    category: "carrier",
    scale: "대",
    note: "통신 R&D",
  },
  {
    name: "LG U+ R&D",
    korean: "LG유플러스 연구소",
    category: "carrier",
    scale: "대",
    note: "5G/네트워크 R&D",
  },
  // IoT / Module
  {
    name: "Telit Korea",
    korean: "텔릿 코리아",
    category: "iot",
    scale: "중",
    note: "셀룰러 IoT 모듈",
  },
  {
    name: "Quectel Korea",
    korean: "퀵텔 코리아",
    category: "iot",
    scale: "중",
    note: "중국 Quectel 한국 지사. IoT 모듈 시장 강자",
  },
  {
    name: "Sierra Wireless",
    korean: "시에라 와이어리스",
    category: "iot",
    scale: "중",
    note: "캐나다, IoT 모듈",
  },
  {
    name: "Ratel",
    korean: "라텔",
    category: "iot",
    scale: "소",
    note: "한국 IoT 모듈",
  },
  // Auto / Telematics
  {
    name: "Hyundai Mobis",
    korean: "현대모비스",
    category: "auto",
    scale: "대",
    note: "TCU(Telematics Control Unit) 자체 개발",
  },
  {
    name: "LG VS Company",
    korean: "LG VS사업부",
    category: "auto",
    scale: "대",
    note: "차량용 텔레매틱스",
  },
  {
    name: "Mando",
    korean: "만도",
    category: "auto",
    scale: "대",
    note: "ADAS + 텔레매틱스",
  },
  // Research
  {
    name: "ETRI",
    korean: "한국전자통신연구원",
    category: "research",
    scale: "대",
    note: "5G/6G 정부 연구원, 과제 예산 큼",
  },
  {
    name: "KARI",
    korean: "한국항공우주연구원",
    category: "research",
    scale: "대",
    note: "위성 통신",
  },
  {
    name: "KAIST 모뎀랩",
    korean: "KAIST 통신 연구실",
    category: "research",
    scale: "중",
    note: "5G/6G 학계",
  },
  {
    name: "서울대 통신랩",
    korean: "SNU 통신 연구실",
    category: "research",
    scale: "중",
    note: "5G/6G 학계",
  },
];

export function playersByCategory() {
  const map = new Map<KoreanPlayer["category"], KoreanPlayer[]>();
  for (const p of KOREAN_PLAYERS) {
    if (!map.has(p.category)) map.set(p.category, []);
    map.get(p.category)!.push(p);
  }
  return map;
}
