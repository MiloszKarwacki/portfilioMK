import { useState, ChangeEvent } from "react";

interface SettingsDropdownProps {
  changeLanguage: (language: string) => void;
  locale: string;
  toggleTheme: (theme: string) => void;
}

export default function SettingsDropdown({
  changeLanguage,
  locale,
  toggleTheme,
}: SettingsDropdownProps) {
  const [selectedLang, setSelectedLang] = useState<string>(locale);
  const [theme, setTheme] = useState<string>("light");

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    setSelectedLang(selectedLanguage);
    changeLanguage(selectedLanguage);
  };

  const handleThemeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
    toggleTheme(selectedTheme);
  };

  return (
    <div className="relative flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
      <select
        value={selectedLang}
        onChange={handleLanguageChange}
        className="px-4 py-2 bg-white text-red-500 font-semibold rounded-lg shadow hover:bg-red-500 hover:text-white transition-all sm:w-auto w-full"
      >
        <option value="en">English</option>
        <option value="pl">Polski</option>
      </select>

      <select
        value={theme}
        onChange={handleThemeChange}
        className="px-4 py-2 bg-white text-red-500 font-semibold rounded-lg shadow hover:bg-red-500 hover:text-white transition-all sm:w-auto w-full"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}
