import { ButtonLink } from "@/shared/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-5xl  text-[#5b2a86] dark:text-[#d8b4fe] md:text-6xl">
          404
        </h1>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-[#17131c] dark:text-white md:text-6xl">
          Lost in the interface?
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#5a4e63] dark:text-[#d6c9df]">
          The page you’re looking for doesn’t exist, moved, or took a coffee
          break.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/">Back Home</ButtonLink>

          <ButtonLink href="/#projects" variant="secondary">
            View Projects
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
