import Link from "next/link";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-(--border) bg-[rgba(247,245,239,0.92)] backdrop-blur-md md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2 px-3 py-2.5 safe-area-bottom">
        <a
          href="tel:+910000000000"
          className="rounded-full border border-(--border) bg-white px-3 py-3 text-center text-sm font-medium text-foreground"
        >
          Call
        </a>
        <a
          href="https://wa.me/910000000000"
          className="rounded-full border border-(--border) bg-white px-3 py-3 text-center text-sm font-medium text-foreground"
        >
          WhatsApp
        </a>
        <Link
          href="/appointment"
          className="rounded-full bg-(--forest) px-3 py-3 text-center text-sm font-medium text-white"
        >
          Book
        </Link>
      </div>
    </div>
  );
}
