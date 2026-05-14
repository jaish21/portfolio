import { cn } from "@/shared/utils/cn";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
  download?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
  className,
}: ButtonLinkProps) {
  const variants = {
    primary:
      "bg-[#5b2a86] text-white hover:bg-[#6d379f] dark:bg-[#7c3aed] dark:hover:bg-[#8b5cf6]",

    secondary:
      "border border-[#d8cbe0] text-[#2d2235] hover:border-[#5b2a86] hover:text-[#5b2a86] dark:border-[#4a3957] dark:text-[#e9dff0] dark:hover:border-[#d8b4fe] dark:hover:text-[#d8b4fe]",
  };

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      download={download}
      className={cn(
        "rounded-full px-5 py-3 text-sm font-medium transition",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
