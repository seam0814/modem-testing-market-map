import { POSITIONS } from "@/lib/data/positions";
import { PositionCard } from "@/components/PositionCard";

export const metadata = {
  title: "8개 포지션 — Modem Testing Market Map",
};

export default function PositionsListPage() {
  const sorted = [...POSITIONS].sort((a, b) => a.priority - b.priority);

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-12 md:px-10 md:pt-16">
      <header className="mb-12">
        <p className="mono text-[10px] uppercase tracking-[0.3em] text-indigo">
          positions
        </p>
        <h1 className="serif mt-3 text-4xl tracking-tight md:text-5xl">
          8개 포지션
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
          우선순위 순으로 정렬됐어. 각 카드를 클릭하면 기존 플레이어, 빈 자리, 진입 각도, 첫 고객, 가격대를 자세히 볼 수 있어.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sorted.map((p) => (
          <PositionCard key={p.id} position={p} />
        ))}
      </div>
    </div>
  );
}
