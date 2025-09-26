interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function SkillCard({
  title,
  description,
  icon,
}: SkillCardProps) {
  return (
    <div className="bg-[#112240] p-6 rounded-xl shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="text-4xl mb-3 text-slate-100">{icon}</div>
      <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
      <p className="text-sm text-slate-400">{description}</p>
    </div>
  );
}
