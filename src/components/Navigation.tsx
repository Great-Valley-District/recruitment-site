'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { semanticColors, tw } from "@/config/colors";

const navItems = [
  { href: "/programs", label: "Programs" },
  { href: "/activities", label: "Activities" },
  { href: "/faqs", label: "FAQs" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`${tw.bg(semanticColors.nav.bg)} shadow-sm ${tw.border(semanticColors.nav.border)} border-b`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              alt="Scouting America Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className={`text-lg font-bold ${tw.text(semanticColors.text.heading)}`}>Great Valley District</span>
              <span className="text-xs text-gray-600">Scouting America</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors px-3 py-2 rounded font-medium ${
                  isActive(item.href)
                    ? `${tw.text(semanticColors.nav.textActive)} ${tw.bg(semanticColors.nav.bgActive)}`
                    : `${tw.text(semanticColors.nav.text)} ${tw.hover.text(semanticColors.nav.textHover)} ${tw.hover.bg(semanticColors.nav.bgActive)}`
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Join Now Button */}
          <Link
            href="/join-now"
            className={`hidden md:block ${tw.bg(semanticColors.button.primary.bg)} ${tw.text(semanticColors.button.primary.text)} px-6 py-2 rounded-lg ${tw.hover.bg(semanticColors.button.primary.hover)} transition-colors font-medium`}
          >
            Join Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-stone-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-stone-200 pt-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`transition-colors px-4 py-3 rounded-lg font-medium text-base ${
                    isActive(item.href)
                      ? `${tw.text(semanticColors.nav.textActive)} ${tw.bg(semanticColors.nav.bgActive)}`
                      : `${tw.text(semanticColors.nav.text)} ${tw.hover.bg(semanticColors.nav.bgActive)}`
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/join-now"
                onClick={closeMobileMenu}
                className={`${tw.bg(semanticColors.button.primary.bg)} ${tw.text(semanticColors.button.primary.text)} px-4 py-3 rounded-lg ${tw.hover.bg(semanticColors.button.primary.hover)} transition-colors font-medium text-center text-base`}
              >
                Join Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}