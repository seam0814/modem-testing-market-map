"use client";

import { useState } from "react";
import { ChevronDown, Check, X, Circle } from "lucide-react";
import { FIT_QUESTIONS } from "@/lib/data/playbook";
import { cn } from "@/lib/utils";

type Answer = "yes" | "no" | null;

export function FounderFitCheck() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [open, setOpen] = useState<string | null>(null);

  const yesCount = Object.values(answers).filter((a) => a === "yes").length;
  const answered = Object.values(answers).filter((a) => a !== null).length;

  let verdict: { tone: string; title: string; body: string } | null = null;
  if (answered === FIT_QUESTIONS.length) {
    if (yesCount >= 4) {
      verdict = {
        tone: "indigo",
        title: "Plan A — 즉시 시작 가능",
        body: "도메인 깊이 충분. 자금 + 시간만 확보되면 바로 ModemHQ 진입 가능.",
      };
    } else if (yesCount >= 2) {
      verdict = {
        tone: "amber",
        title: "Plan B — 공동창업자 영입 권고",
        body: "도메인 부분적. 시니어 모뎀 엔지니어 1명 영입 후 시작이 안전. 또는 약한 영역만 6개월 충전.",
      };
    } else {
      verdict = {
        tone: "coral",
        title: "Plan C — 도메인 충전 먼저",
        body: "도메인 약함. 6~12개월 SI 펌에서 도메인 + 인맥 충전 후 시작 권고. 지금 시작하면 첫 인터뷰부터 들통남.",
      };
    }
  }

  return (
    <div className="space-y-4">
      <div className="rounded-md border border-border bg-surface p-5">
        <div className="mb-2 flex items-baseline justify-between gap-2">
          <div>
            <div className="text-sm font-semibold">자가 진단</div>
            <div className="mt-0.5 text-xs text-muted">
              아래 4개 질문에 즉답 가능한지 솔직하게 체크. 4개 다 yes = Plan A, 2~3개 = Plan B, 0~1개 = Plan C.
            </div>
          </div>
          <div className="mono text-[10px] uppercase tracking-widest text-subtle">
            {answered}/{FIT_QUESTIONS.length} 답변
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {FIT_QUESTIONS.map((q, i) => {
          const ans = answers[q.id];
          const isOpen = open === q.id;
          return (
            <div
              key={q.id}
              className={cn(
                "overflow-hidden rounded-md border bg-surface transition-colors",
                ans === "yes" && "border-indigo/40",
                ans === "no" && "border-coral/40",
                !ans && "border-border"
              )}
            >
              <div className="flex items-start gap-3 p-4">
                <span className="mono mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border bg-surface-2 text-[11px] text-muted">
                  Q{i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium leading-6">
                    {q.question}
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : q.id)}
                    className="mt-2 inline-flex items-center gap-1 text-[11px] text-muted hover:text-foreground"
                  >
                    <ChevronDown
                      className={cn(
                        "h-3 w-3 transition-transform",
                        isOpen && "rotate-180"
                      )}
                    />
                    {isOpen ? "답변 닫기" : "전문가 답변 보기"}
                  </button>
                </div>
                <div className="flex shrink-0 gap-1.5">
                  <AnswerButton
                    active={ans === "yes"}
                    tone="indigo"
                    onClick={() =>
                      setAnswers((a) => ({
                        ...a,
                        [q.id]: a[q.id] === "yes" ? null : "yes",
                      }))
                    }
                    icon={Check}
                    label="즉답 가능"
                  />
                  <AnswerButton
                    active={ans === "no"}
                    tone="coral"
                    onClick={() =>
                      setAnswers((a) => ({
                        ...a,
                        [q.id]: a[q.id] === "no" ? null : "no",
                      }))
                    }
                    icon={X}
                    label="모름"
                  />
                </div>
              </div>
              {isOpen && (
                <div className="border-t border-border bg-surface-2 px-4 py-4">
                  <div className="mono mb-2 text-[10px] uppercase tracking-[0.3em] text-indigo-deep">
                    expert answer
                  </div>
                  <p className="text-sm leading-7 text-foreground">
                    {q.expertAnswer}
                  </p>
                  <div className="dotted-divider my-3" />
                  <div className="flex items-start gap-2 text-xs text-muted">
                    <Circle className="mt-1 h-2 w-2 shrink-0 fill-amber stroke-none" />
                    <span>
                      <span className="font-semibold text-foreground">왜 중요해?</span>{" "}
                      {q.why}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {verdict && (
        <div
          className={cn(
            "mt-6 rounded-md border-l-4 p-5",
            verdict.tone === "indigo" && "border-indigo bg-indigo-bg/40",
            verdict.tone === "amber" && "border-amber bg-amber-soft/40",
            verdict.tone === "coral" && "border-coral bg-coral-soft/40"
          )}
        >
          <div
            className={cn(
              "mono mb-2 text-[10px] uppercase tracking-[0.3em]",
              verdict.tone === "indigo" && "text-indigo-deep",
              verdict.tone === "amber" && "text-amber",
              verdict.tone === "coral" && "text-coral"
            )}
          >
            진단 결과 · {yesCount}/{FIT_QUESTIONS.length} 즉답
          </div>
          <h3 className="serif text-2xl tracking-tight">{verdict.title}</h3>
          <p className="mt-2 text-sm leading-7 text-foreground">{verdict.body}</p>
        </div>
      )}
    </div>
  );
}

function AnswerButton({
  active,
  tone,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean;
  tone: "indigo" | "coral";
  onClick: () => void;
  icon: typeof Check;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-md border transition-colors",
        active
          ? tone === "indigo"
            ? "border-indigo bg-indigo text-white"
            : "border-coral bg-coral text-white"
          : "border-border bg-surface text-muted hover:bg-soft"
      )}
    >
      <Icon className="h-3.5 w-3.5" />
    </button>
  );
}
