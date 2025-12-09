import type { ElementType } from "react";

interface SkillCardProps {
  title: string;
  Icon: ElementType;
}

export default function SkillCard({ title, Icon }: SkillCardProps) {
  return (
    <div className="group flex flex-col items-center rounded-2xl border border-brand-100 bg-brand-50/40 p-4 text-center shadow-sm transition-all hover:border-secondary hover:shadow-[0_10px_24px_rgba(15,23,42,0.18)] dark:border-slate-700 dark:bg-slate-900/80 dark:hover:bg-tertiary">
      {/* Ícono */}
      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/85 text-secondary shadow-inner transition-all duration-300 group-hover:text-tertiary group-hover:rotate-6 dark:text-slate-100 dark:group-hover:bg-white dark:group-hover:text-slate-900">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="text-xs font-semibold text-slate-900 sm:text-sm md:text-[0.9rem] dark:text-slate-50">
        {title}
      </h3>
    </div>
  );
}
