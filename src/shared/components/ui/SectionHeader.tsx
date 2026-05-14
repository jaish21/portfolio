type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="text-sm font-medium tracking-wide text-[#5b2a86] dark:text-[#d8b4fe]">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17131c] dark:text-white md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-lg leading-8 text-[#5a4e63] dark:text-[#d6c9df]">
          {description}
        </p>
      )}
    </div>
  );
}
