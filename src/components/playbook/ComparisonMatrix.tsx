import { OPTIONS, COMPARISON_COLS } from "@/lib/data/playbook";
import { cn } from "@/lib/utils";

export function ComparisonMatrix() {
  return (
    <div className="overflow-hidden rounded-md border border-border bg-surface">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-surface-2 text-left text-[11px] uppercase tracking-[0.18em] text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">옵션</th>
              {COMPARISON_COLS.map((c) => (
                <th key={c.id} className="px-3 py-3 text-center font-medium">
                  {c.label}
                </th>
              ))}
              <th className="px-3 py-3 text-center font-medium">종합</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {OPTIONS.map((row) => {
              const ease = 6 - row.difficulty; // invert
              const total = ease + row.marketSize + row.defensibility + row.exitable + row.founderFit;
              return (
                <tr
                  key={row.id}
                  className={cn(
                    "transition-colors",
                    row.highlight ? "bg-indigo-bg/40" : "hover:bg-soft/50"
                  )}
                >
                  <td className="px-4 py-3 align-top">
                    <div className="flex items-baseline gap-2">
                      {row.highlight && (
                        <span className="mono inline-flex items-center rounded-full bg-indigo px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-white">
                          recommended
                        </span>
                      )}
                      <span className={cn("font-medium", row.highlight && "text-indigo-deep")}>
                        {row.name}
                      </span>
                    </div>
                    <div className="mt-1 text-xs leading-5 text-muted">
                      {row.oneLiner}
                    </div>
                  </td>
                  <ScoreCell value={ease} highlight={row.highlight} />
                  <ScoreCell value={row.marketSize} highlight={row.highlight} />
                  <ScoreCell value={row.defensibility} highlight={row.highlight} />
                  <ScoreCell value={row.exitable} highlight={row.highlight} />
                  <ScoreCell value={row.founderFit} highlight={row.highlight} />
                  <td className="px-3 py-3 text-center align-top">
                    <span
                      className={cn(
                        "mono tabular text-lg font-semibold",
                        row.highlight ? "text-indigo-deep" : "text-foreground"
                      )}
                    >
                      {total}
                      <span className="text-xs font-normal text-muted">/25</span>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ScoreCell({ value, highlight }: { value: number; highlight?: boolean }) {
  return (
    <td className="px-3 py-3 align-top">
      <div className="flex flex-col items-center gap-1.5">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={cn(
                "h-1.5 w-2 rounded-sm",
                i < value
                  ? highlight
                    ? "bg-indigo"
                    : "bg-foreground/70"
                  : "bg-soft"
              )}
            />
          ))}
        </div>
        <span className={cn("mono text-[10px]", highlight && "text-indigo-deep")}>
          {value}
        </span>
      </div>
    </td>
  );
}
