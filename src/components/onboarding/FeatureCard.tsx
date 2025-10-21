import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon?: LucideIcon;
  number?: number;
  title: string;
  description: string;
  bgColor: string;
}

export default function FeatureCard({ 
  icon: IconComponent, 
  number, 
  title, 
  description, 
  bgColor 
}: FeatureCardProps) {
  return (
    <div className="flex gap-4 p-2 items-center rounded-xl">
      <div
        className={`w-12 h-[50px] ${bgColor} rounded-full flex items-center justify-center flex-shrink-0`}
      >
        {IconComponent ? (
          <IconComponent size={16} color="white" />
        ) : (
          <span className="text-white font-bold text-lg">{number}</span>
        )}
      </div>
      <div className="flex flex-col gap-1 flex-1">
        <h3 className="sm:text-[20px] text-[14px] font-bold text-black">
          {title}
        </h3>
        <p className="sm:text-[18px] text-[12px] text-black leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}