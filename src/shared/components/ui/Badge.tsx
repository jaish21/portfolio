type BadgeProps = {
  children: React.ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full bg-[#eadcf4] px-3 py-1 text-xs font-medium text-[#5b2a86] dark:bg-[#c084fc]/15 dark:text-[#d8b4fe]">
      {children}
    </span>
  );
}
