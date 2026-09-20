"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { clinic, navItems } from "@/data/clinic";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[rgba(247,245,239,0.82)] shadow-[0_1px_0_rgba(23,58,45,0.08)] backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 xl:px-0">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Smile Dental Clinic home"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--forest) bg-(--forest) text-sm font-semibold text-white">
            S
          </span>
          <span className="font-serif text-2xl leading-none text-foreground">
            {clinic.name}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-foreground transition hover:text-(--forest)"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+910000000000"
            className="text-sm font-medium text-foreground hover:text-(--forest)"
          >
            Call
          </a>
          <Link
            href="/appointment"
            className="inline-flex items-center rounded-full bg-(--forest) px-5 py-3 text-sm font-medium text-white transition hover:bg-(--forest-deep)"
          >
            Book an Appointment
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-(--border) bg-white/70 text-foreground lg:hidden"
          onClick={() => setIsMenuOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-(--border) bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-(--border)">
              <Link
                href="/appointment"
                className="rounded-full bg-(--forest) px-5 py-3 text-center text-sm font-medium text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
              <a
                href="tel:+910000000000"
                className="rounded-full border border-(--border) px-5 py-3 text-center text-sm font-medium text-foreground"
              >
                Call
              </a>
              <a
                href="https://wa.me/910000000000"
                className="rounded-full border border-(--border) px-5 py-3 text-center text-sm font-medium text-foreground"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
