import { cn } from "@/shared/utils/cn";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-24", className)}>
      {children}
    </section>
  );
}
