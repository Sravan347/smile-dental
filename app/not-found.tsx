import Link from "next/link";
import { clinic } from "@/data/clinic";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-(--forest)">
        404 · Page not found
      </p>
      <h1 className="max-w-xl font-serif text-5xl leading-none text-foreground md:text-7xl">
        This page is not available.
      </h1>
      <p className="mt-6 max-w-lg text-base leading-7 text-(--muted)">
        The page you were looking for may have moved. Return home or get in
        touch with {clinic.name}.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-(--forest) px-7 py-3 text-sm font-medium text-white transition hover:bg-(--forest-deep)"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-(--border) bg-transparent px-7 py-3 text-sm font-medium text-foreground transition hover:border-(--forest) hover:text-(--forest)"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
