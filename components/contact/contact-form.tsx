"use client";

import { Send, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const isLoading = status === "loading";

  const isFormValid = name.trim().length > 0 && email.trim().length > 0;

  const buttonLabel =
    status === "loading"
      ? "Enviando…"
      : status === "success"
      ? "Mensaje enviado · te respondo a la brevedad"
      : status === "error"
      ? "No se pudo enviar · reintentar"
      : "Enviar";

  useEffect(() => {
    if (status !== "success" && status !== "error") return;

    const t = setTimeout(() => {
      setStatus("idle");
    }, 3000);

    return () => clearTimeout(t);
  }, [status]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const company = String(formData.get("company") ?? "");

    try {
      setStatus("loading");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company,
        }),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5 grid gap-3">
      {/* Honeypot anti-spam */}
      <label className="hidden">
        <span>Company</span>
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
      </label>

      <div className="grid gap-2 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <span className="text-slate-700 dark:text-slate-200">Nombre</span>
          <input
            type="text"
            placeholder="Tu nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isLoading}
            className="
              h-11 rounded-xl px-3 text-sm
              bg-white/70 dark:bg-primary/55
              border border-secondary/25 dark:border-primary/70
              ring-0 dark:ring-1 dark:ring-white/10
              text-slate-900 dark:text-slate-100
              placeholder:text-slate-500
              focus:outline-none focus:ring-2 focus:ring-secondary/35
              dark:focus:ring-tertiary/45
              transition
              disabled:opacity-60 disabled:cursor-not-allowed
            "
          />
        </label>

        <label className="grid gap-1 text-sm">
          <span className="text-slate-700 dark:text-slate-200">Email</span>
          <input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="
              h-11 rounded-xl px-3 text-sm
              bg-white/70 dark:bg-primary/55
              border border-secondary/25 dark:border-primary/70
              ring-0 dark:ring-1 dark:ring-white/10
              text-slate-900 dark:text-slate-100
              placeholder:text-slate-500
              focus:outline-none focus:ring-2 focus:ring-secondary/35
              dark:focus:ring-tertiary/45
              transition
              disabled:opacity-60 disabled:cursor-not-allowed
            "
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={isLoading || !isFormValid}
        className="
          mt-1 inline-flex h-11 items-center justify-center gap-2
          rounded-xl px-4
          text-sm font-semibold
          bg-white/85 text-secondary border border-secondary/45
          shadow-[0_6px_18px_rgba(30,64,175,0.18)]
          hover:bg-secondary hover:text-white hover:border-secondary/70
          hover:shadow-[0_10px_26px_rgba(30,64,175,0.28)]
          transition
          focus:outline-none focus-visible:ring-2
          focus-visible:ring-secondary/45 focus-visible:ring-offset-2 focus-visible:ring-offset-white
          disabled:opacity-60 disabled:cursor-not-allowed

          dark:bg-slate-950/40 dark:text-slate-100 dark:border dark:border-tertiary/35
          dark:hover:bg-slate-950/55 dark:hover:border-tertiary/60 dark:hover:text-tertiary
          dark:focus-visible:ring-tertiary/55 dark:focus-visible:ring-offset-slate-950
        "
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {buttonLabel}
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            {buttonLabel}
          </>
        )}
      </button>
    </form>
  );
}
