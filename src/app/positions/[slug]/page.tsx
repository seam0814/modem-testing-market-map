import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Target,
  Sparkles,
  Building2,
  Users,
  AlertCircle,
  Zap,
  Tag,
} from "lucide-react";
import { POSITIONS, getPosition } from "@/lib/data/positions";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return POSITIONS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const position = getPosition(slug);
  return {
    title: position
      ? `${position.id}. ${position.title} — Market Map`
      : "Position not found",
  };
}

const PLAYER_TONE: Record<
  string,
  { label: string; cls: string }
> = {
  commercial: { label: "Commercial", cls: "border-coral/40 bg-coral-soft text-coral" },
  oss: { label: "Open Source", cls: "border-forest/40 bg-forest-bg text-forest" },
  korean: { label: "한국 플레이어", cls: "border-indigo/40 bg-indigo-bg text-indigo-deep" },
  internal: { label: "사내 자체", cls: "border-border-strong bg-soft text-muted" },
};

const CATEGORY_TONE: Record<string, { label: string; cls: string }> = {
  core: { label: "Core · Phase 1", cls: "bg-indigo text-white" },
  extension: { label: "Extension · Phase 2", cls: "bg-forest text-white" },
  specialty: { label: "Specialty · Phase 3", cls: "bg-amber text-white" },
  advanced: { label: "Advanced", cls: "bg-foreground text-background" },
};

export default async function PositionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const position = getPosition(slug);
  if (!position) notFound();

  const sortedPositions = [...POSITIONS].sort((a, b) => a.priority - b.priority);
  const idx = sortedPositions.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? sortedPositions[idx - 1] : null;
  const next = idx < sortedPositions.length - 1 ? sortedPositions[idx + 1] : null;

  const categoryTone = CATEGORY_TONE[position.category];

  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-12 md:px-10 md:pt-16">
      <Link
        href="/positions"
        className="mono inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.3em] text-muted hover:text-foreground"
      >
        <ArrowLeft className="h-3 w-3" />
        all positions
      </Link>

      {/* Header */}
      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={cn(
              "mono inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em]",
              categoryTone.cls
            )}
          >
            {categoryTone.label}
          </span>
          <span className="mono rounded-full border border-border bg-surface px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted">
            {position.priorityLabel}
          </span>
          <span className="mono text-[11px] uppercase tracking-[0.18em] text-subtle">
            id · {position.id}
          </span>
        </div>

        <h1 className="serif mt-6 text-4xl leading-[1.1] tracking-tight md:text-5xl">
          {position.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted md:text-xl">
          {position.oneLiner}
        </p>

        {/* Stats row */}
        <div className="mt-10 grid grid-cols-3 gap-4 rounded-md border border-border bg-surface p-5">
          <StatBlock
            label="진입 난이도"
            value={position.difficulty}
            max={5}
            tone="amber"
          />
          <StatBlock
            label="시장 크기"
            value={position.marketSize}
            max={5}
            tone="indigo"
          />
          <StatBlock
            label="너의 강점 fit"
            value={position.fitScore}
            max={5}
            tone="forest"
          />
        </div>
      </header>

      {position.bestFor && (
        <section className="mt-10 rounded-md border-l-4 border-indigo bg-indigo-bg/40 p-5 md:p-6">
          <div className="mono mb-2 text-[10px] uppercase tracking-[0.3em] text-indigo-deep">
            best for
          </div>
          <p className="text-base leading-7 text-foreground">{position.bestFor}</p>
        </section>
      )}

      {/* Existing players */}
      <Section icon={Building2} title="기존 플레이어" eyebrow="who's there">
        <div className="space-y-3">
          {position.existingPlayers.map((player) => {
            const tone = PLAYER_TONE[player.type];
            return (
              <div
                key={player.name}
                className="flex items-start gap-4 rounded-md border border-border bg-surface p-4"
              >
                <span
                  className={cn(
                    "mono shrink-0 rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-widest",
                    tone.cls
                  )}
                >
                  {tone.label}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-medium">{player.name}</div>
                  <div className="mt-1 text-sm text-muted">{player.note}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Gaps */}
      <Section icon={AlertCircle} title="빈 자리" eyebrow="gaps in the market" tone="amber">
        <ul className="space-y-2.5">
          {position.gaps.map((g, i) => (
            <li key={i} className="flex gap-3 text-sm leading-7 text-foreground">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-amber" />
              <span>{g}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Your angle */}
      <Section icon={Target} title="너가 들어갈 각도" eyebrow="your angle" tone="indigo">
        <ul className="space-y-2.5">
          {position.yourAngle.map((a, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-md border border-indigo/20 bg-indigo-bg/30 p-3.5 text-sm leading-7"
            >
              <Sparkles className="mt-1 h-3.5 w-3.5 shrink-0 text-indigo" />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* First customers */}
      <Section icon={Users} title="첫 고객 후보" eyebrow="first customers">
        <div className="grid gap-3 md:grid-cols-2">
          {position.firstCustomers.map((c, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-md border border-border bg-surface p-4 text-sm"
            >
              <span className="mono mt-0.5 shrink-0 text-[11px] text-subtle">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{c}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section icon={Tag} title="가격 / 시장 크기" eyebrow="economics">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-md border border-border bg-surface p-5">
            <div className="text-[10px] uppercase tracking-widest text-subtle">
              가격 모델
            </div>
            <div className="serif mt-2 text-lg">{position.pricing}</div>
          </div>
          <div className="rounded-md border border-border bg-surface p-5">
            <div className="text-[10px] uppercase tracking-widest text-subtle">
              시장 규모
            </div>
            <div className="mt-2 text-sm leading-6 text-foreground">
              {position.marketSizeNote}
            </div>
          </div>
        </div>
      </Section>

      {/* Recommendation */}
      {position.recommendation && (
        <section className="mt-12 rounded-md border border-foreground/10 bg-foreground p-6 text-background md:p-8">
          <div className="mono mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-background/60">
            <Zap className="h-3 w-3" />
            recommendation
          </div>
          <p className="serif text-xl leading-relaxed md:text-2xl">
            {position.recommendation}
          </p>
        </section>
      )}

      {/* Prev / Next */}
      <nav className="mt-16 grid gap-3 border-t border-border pt-6 md:grid-cols-2">
        {prev ? (
          <Link
            href={`/positions/${prev.slug}`}
            className="group flex items-center gap-3 rounded-md border border-border bg-surface p-4 transition-colors hover:bg-soft md:justify-start"
          >
            <ArrowLeft className="h-4 w-4 text-muted transition-transform group-hover:-translate-x-0.5" />
            <div>
              <div className="text-[10px] uppercase tracking-widest text-subtle">
                이전 (priority {prev.priority})
              </div>
              <div className="mt-0.5 text-sm font-medium">
                {prev.id}. {prev.title}
              </div>
            </div>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/positions/${next.slug}`}
            className="group flex items-center gap-3 rounded-md border border-border bg-surface p-4 transition-colors hover:bg-soft md:flex-row-reverse md:justify-start md:text-right"
          >
            <ArrowRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5" />
            <div>
              <div className="text-[10px] uppercase tracking-widest text-subtle">
                다음 (priority {next.priority})
              </div>
              <div className="mt-0.5 text-sm font-medium">
                {next.id}. {next.title}
              </div>
            </div>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
}

function Section({
  icon: Icon,
  title,
  eyebrow,
  tone = "default",
  children,
}: {
  icon: typeof Target;
  title: string;
  eyebrow: string;
  tone?: "default" | "indigo" | "amber" | "forest";
  children: React.ReactNode;
}) {
  const iconCls = {
    default: "bg-soft text-muted",
    indigo: "bg-indigo-bg text-indigo",
    amber: "bg-amber-soft text-amber",
    forest: "bg-forest-bg text-forest",
  }[tone];
  return (
    <section className="mt-12">
      <div className="mb-5 flex items-center gap-3">
        <div
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-md",
            iconCls
          )}
        >
          <Icon className="h-4 w-4" strokeWidth={1.6} />
        </div>
        <div>
          <div className="mono text-[10px] uppercase tracking-[0.3em] text-subtle">
            {eyebrow}
          </div>
          <h2 className="serif text-xl leading-none tracking-tight">{title}</h2>
        </div>
      </div>
      {children}
    </section>
  );
}

function StatBlock({
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
      <div className="mt-2 flex items-baseline gap-2">
        <span className="tabular text-xl font-semibold">{value}</span>
        <span className="mono text-[11px] text-muted">/ {max}</span>
      </div>
      <div className="mt-2 flex gap-1">
        {Array.from({ length: max }, (_, i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 flex-1 rounded-sm",
              i < value ? color : "bg-soft"
            )}
          />
        ))}
      </div>
    </div>
  );
}
