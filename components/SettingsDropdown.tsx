import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import LanguageButton from "./LangueButton";

interface SettingsDropdownProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
  toggleTheme: (theme: string) => void;
}

export default function SettingsDropdown({
  changeLanguage,
  locale,
}: SettingsDropdownProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [selectedLang, setSelectedLang] = useState<string>(locale);

  const handleLanguageChange = (language: string) => {
    setSelectedLang(language);
    changeLanguage(language);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex items-center">
      {/* Przycisk do zmiany motywu */}
      <button
        onClick={toggleTheme}
        className="p-2 m-4 rounded-full bg-gray-200 dark:bg-gray-700 text-yellow-500 dark:text-yellow-300 transition-colors"
      >
        {theme === "light" ? <FaSun size={24} /> : <FaMoon size={24} />}
      </button>

      {/* Kafelki do zmiany języka */}
      <div className="flex space-x-4">
        <LanguageButton
          label="PL"
          selectedLang={selectedLang}
          lang="pl"
          handleLanguageChange={handleLanguageChange}
        />

        <LanguageButton
          label="EN"
          selectedLang={selectedLang}
          lang="en"
          handleLanguageChange={handleLanguageChange}
        />
      </div>
    </div>
  );
}
