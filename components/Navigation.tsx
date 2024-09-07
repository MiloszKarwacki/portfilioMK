"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import Logo from "./Logo";
import SettingsDropdown from "./SettingsDropdown";
import { useState } from "react";

export default function Navigation({ locale }: { locale: string }) {
  const t = useTranslations("Navigation");
  const router = useRouter();
  const pathname = usePathname();
  const [theme, setTheme] = useState<string>("light");

  const changeLanguage = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const navItems = [
    { href: `/${locale}/`, label: t("home") },
    { href: `/${locale}/blog`, label: t("blog") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const toggleTheme = (theme: string) => {
    setTheme(theme);
    console.log(`Theme changed to: ${theme}`);
  };

  return (
    <div className="flex justify-between items-center bg-red-300 p-4 shadow-lg h-20 relative">
      {/* Logo po lewej stronie */}
      <div className="absolute left-4">
        <Logo />
      </div>

      {/* Nawigacja wyśrodkowana */}
      <div className="flex justify-center w-full">
        <ul className="flex gap-12">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="text-white font-semibold hover:text-gray-300"
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* SettingsDropdown po prawej stronie */}
      <div className="absolute right-4">
        <SettingsDropdown
          changeLanguage={changeLanguage}
          locale={locale}
          toggleTheme={toggleTheme}
        />
      </div>
    </div>
  );
}
