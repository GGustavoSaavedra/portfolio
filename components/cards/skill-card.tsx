import type { ElementType } from "react";

interface SkillCardProps {
  title: string;
  Icon: ElementType;
}

export default function SkillCard({ title, Icon }: SkillCardProps) {
  return (
    <div
      className="
        group flex flex-col items-center justify-center
        rounded-2xl border
        border-slate-300/70 bg-white/60
        p-4 text-center shadow-sm
        transition
        hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(15,23,42,0.12)]
        hover:border-secondary/50
        dark:border-slate-700/80 dark:bg-slate-900/65
        dark:hover:border-tertiary/50 dark:hover:bg-slate-900/85
      "
    >
      <Icon
        className="
          mb-2 h-9 w-9
          text-slate-700
          transition
          duration-300
          group-hover:text-secondary
          group-hover:rotate-6
          drop-shadow-[0_0_0_rgba(0,0,0,0)]
          group-hover:drop-shadow-[0_0_14px_rgba(59,130,246,0.25)]
          dark:text-brand-200
          dark:group-hover:text-tertiary
          dark:group-hover:drop-shadow-[0_0_18px_rgba(0,255,153,0.25)]
        "
      />

      <h3 className="text-xs font-semibold text-slate-900 sm:text-sm dark:text-slate-50">
        {title}
      </h3>
    </div>
  );
}
