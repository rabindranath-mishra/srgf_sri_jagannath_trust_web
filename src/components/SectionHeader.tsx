import { cn } from "../utils/cn";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export const SectionHeader = ({ title, subtitle, className, light }: SectionHeaderProps) => {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <h2 className={cn(
        "text-3xl md:text-4xl font-bold mb-4",
        light ? "text-ivory" : "text-maroon"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "max-w-2xl mx-auto text-lg",
          light ? "text-ivory/80" : "text-slate-dark/80"
        )}>
          {subtitle}
        </p>
      )}
      <div className={cn(
        "w-24 h-1 mx-auto mt-4 rounded-full",
        light ? "bg-amber" : "bg-saffron"
      )} />
    </div>
  );
};
