"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation"; // Dodano usePathname
import Logo from "./Logo";
import SettingsDropdown from "./SettingsDropdown";
import { useState } from "react";

export default function Navigation({ locale }: { locale: string }) {
  const t = useTranslations("Navigation");
  const router = useRouter();
  const pathname = usePathname(); // Pobranie aktualnej ścieżki
  const [theme, setTheme] = useState<string>("light");

  const changeLanguage = (newLocale: string) => {
    // Zmień tylko prefiks języka w URL
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    // Przejdź do nowego URL z nowym językiem
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
    <div className="flex justify-between items-center bg-red-300 p-4 shadow-lg h-20">
      <Logo />
      <nav>
        <ul className="flex space-x-6">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="text-white font-semibold hover:text-gray-300"
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <SettingsDropdown
          changeLanguage={changeLanguage}
          locale={locale}
          toggleTheme={toggleTheme}
        />
      </div>
    </div>
  );
}
