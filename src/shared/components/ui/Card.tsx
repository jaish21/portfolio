import { cn } from "@/shared/utils/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[#e8dde9] bg-white/80 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#5b2a86]/30 hover:shadow-md dark:border-[#3b2d47] dark:bg-[#241b2c] dark:hover:border-[#d8b4fe]/30",
        className,
      )}
    >
      {children}
    </div>
  );
}
