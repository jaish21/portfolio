type ListItemProps = {
  children: React.ReactNode;
};

export function ListItem({ children }: ListItemProps) {
  return (
    <li className="text-sm leading-relaxed text-[#5a4e63] dark:text-[#d6c9df]">
      • {children}
    </li>
  );
}
