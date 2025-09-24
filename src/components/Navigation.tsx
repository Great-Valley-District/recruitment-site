'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { semanticColors, tw } from "@/config/colors";

const navItems = [
  { href: "/programs", label: "Programs" },
  { href: "/activities", label: "Activities" },
  { href: "/faqs", label: "FAQs" },
];

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
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
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors px-2 py-1 rounded ${
                  isActive(item.href)
                    ? `${tw.text(semanticColors.nav.textActive)} ${tw.bg(semanticColors.nav.bgActive)} font-medium`
                    : `${tw.text(semanticColors.nav.text)} ${tw.hover.text(semanticColors.nav.textHover)} ${tw.hover.bg(semanticColors.nav.bgActive)}`
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/join-now"
            className={`${tw.bg(semanticColors.button.primary.bg)} ${tw.text(semanticColors.button.primary.text)} px-6 py-2 rounded-lg ${tw.hover.bg(semanticColors.button.primary.hover)} transition-colors font-medium`}
          >
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
}