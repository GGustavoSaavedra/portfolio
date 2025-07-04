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
    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
