import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Position } from "@/lib/data/positions";
import { cn } from "@/lib/utils";

const TONE: Record<string, { bg: string; text: string; ring: string; label: string }> = {
  core: {
    bg: "bg-indigo-bg",
    text: "text-indigo-deep",
    ring: "border-indigo/30",
    label: "Core",
  },
  extension: {
    bg: "bg-forest-bg",
    text: "text-forest",
    ring: "border-forest/30",
    label: "Extension",
  },
  specialty: {
    bg: "bg-amber-soft",
    text: "text-amber",
    ring: "border-amber/40",
    label: "Specialty",
  },
  advanced: {
    bg: "bg-soft",
    text: "text-muted",
    ring: "border-border-strong",
    label: "Advanced",
  },
};

export function PositionCard({ position }: { position: Position }) {
  const tone = TONE[position.category];

  return (
    <Link
      href={`/positions/${position.slug}`}
      className="group flex h-full flex-col rounded-md border border-border bg-surface p-5 transition-all hover:border-foreground/30 hover:shadow-sm"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-md border font-semibold",
              tone.bg,
              tone.text,
              tone.ring
            )}
          >
            {position.id}
          </div>
          <div>
            <span className={cn("text-[10px] uppercase tracking-[0.18em]", tone.text)}>
              {tone.label}
            </span>
            <div className="mono text-[10px] text-subtle">
              priority {position.priority}
            </div>
          </div>
        </div>
        <span className="mono rounded-full border border-border bg-surface-2 px-2 py-0.5 text-[10px] uppercase tracking-widest text-muted">
          {position.priorityLabel}
        </span>
      </div>

      <h3 className="serif mt-5 text-xl tracking-tight">{position.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">
        {position.oneLiner}
      </p>

      <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-4">
        <Stat label="진입 난이도" value={position.difficulty} max={5} tone="amber" />
        <Stat label="시장 크기" value={position.marketSize} max={5} tone="indigo" />
        <Stat label="Fit" value={position.fitScore} max={5} tone="forest" />
      </div>

      <div className="mt-auto flex items-center justify-between pt-5 text-xs">
        <span className="text-subtle">{position.pricing}</span>
        <span className="inline-flex items-center gap-1 text-foreground transition-transform group-hover:translate-x-0.5">
          상세 <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </Link>
  );
}

function Stat({
  label,
  value,
  max,
  tone,
}: {
  label: string;
  value: number;
  max: number;
  tone: "indigo" | "amber" | "forest";
}) {
  const color = {
    indigo: "bg-indigo",
    amber: "bg-amber",
    forest: "bg-forest",
  }[tone];

  return (
    <div>
      <div className="text-[10px] uppercase tracking-widest text-subtle">
        {label}
      </div>
      <div className="mt-1.5 flex items-center gap-1">
        {Array.from({ length: max }, (_, i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 w-3.5 rounded-sm",
              i < value ? color : "bg-soft"
            )}
          />
        ))}
      </div>
    </div>
  );
}
