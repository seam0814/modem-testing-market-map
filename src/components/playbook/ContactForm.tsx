"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const EMAIL = "seumsolarpower@gmail.com";

const INTERESTS = [
  { id: "loglens", label: "LogLens — 로그 분석" },
  { id: "specsearch", label: "SpecSearch — 3GPP" },
  { id: "regression", label: "RegressionGuard — 회귀" },
  { id: "bugfinder", label: "BugFinder — AI 버그 검색" },
  { id: "platform", label: "전체 플랫폼" },
  { id: "other", label: "기타 / 컨설팅" },
];

export function ContactForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError(null);

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name") || "",
      email: fd.get("email") || "",
      company: fd.get("company") || "",
      role: fd.get("role") || "",
      interest: fd.get("interest") || "",
      message: fd.get("message") || "",
      _subject: `[ModemHQ] ${fd.get("name")} (${fd.get("company")}) 문의`,
      _captcha: "false",
      _template: "table",
    };

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (data.success === "false" || data.success === false) {
        throw new Error(data.message || "전송 실패");
      }
      setSent(true);
    } catch (err) {
      console.error(err);
      setError(
        `전송에 실패했습니다. 직접 ${EMAIL}로 메일 보내주시거나 잠시 후 다시 시도해주세요.`
      );
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-md border border-forest/30 bg-forest-bg/40 p-8 md:p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-white">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="serif mt-5 text-2xl tracking-tight">
          접수되었습니다
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground">
          24시간 안에 회신드립니다. 더 자세한 데모 일정은 메일로 안내드릴게요.
          급하신 경우{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-indigo-deep underline underline-offset-2"
          >
            {EMAIL}
          </a>
          으로 직접 연락 주셔도 됩니다.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="성함 *" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="홍길동"
            className={inputCls}
          />
        </Field>
        <Field label="회사 이메일 *" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={inputCls}
          />
        </Field>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="회사명 *" htmlFor="company">
          <input
            id="company"
            name="company"
            type="text"
            required
            placeholder="Quectel · Telit · ETRI · 자체 chipset 등"
            className={inputCls}
          />
        </Field>
        <Field label="역할 / 직무 *" htmlFor="role">
          <input
            id="role"
            name="role"
            type="text"
            required
            placeholder="모뎀 SW 엔지니어 / 빌드 매니저 / R&D 팀장 등"
            className={inputCls}
          />
        </Field>
      </div>

      <Field label="관심 모듈 *" htmlFor="interest">
        <select id="interest" name="interest" required className={inputCls}>
          <option value="">선택해주세요</option>
          {INTERESTS.map((i) => (
            <option key={i.id} value={i.label}>
              {i.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="현재 사용 중인 도구 / 페인 포인트" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="예: QXDM 로그 분석에 일평균 2시간씩 쓰고 있어 자동화 도구 검토 중입니다. 다국가 캐리어 인증 회귀 테스트 중복 작업 감소가 목표입니다."
          className={cn(inputCls, "h-auto min-h-[140px] py-3")}
        />
      </Field>

      {error && (
        <div className="flex items-start gap-2 rounded-md border border-coral/30 bg-coral-soft/40 p-3 text-sm text-coral">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <p className="text-xs text-muted">
          제출 시 24시간 내 회신. 회사 도메인 메일 권장. 데이터는 회신 외 용도로 사용하지 않습니다.
        </p>
        <button
          type="submit"
          disabled={sending}
          className={cn(
            "inline-flex h-11 items-center gap-2 rounded-full bg-indigo px-6 text-sm font-medium text-white transition-all",
            sending
              ? "cursor-wait opacity-70"
              : "hover:bg-indigo-deep hover:scale-[1.02]"
          )}
        >
          {sending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              전송 중
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              데모 신청 / 문의 보내기
            </>
          )}
        </button>
      </div>
    </form>
  );
}

const inputCls =
  "h-11 w-full rounded-md border border-border bg-background px-4 text-sm text-foreground placeholder:text-subtle focus:border-indigo focus:outline-none focus:ring-2 focus:ring-indigo/20 transition-colors";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}
