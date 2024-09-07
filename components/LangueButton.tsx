import React from "react";

interface ButtonProps {
  label: string;
  selectedLang: string;
  lang: string;
  handleLanguageChange: (lang: string) => void;
}

const LanguageButton: React.FC<ButtonProps> = ({
  label,
  selectedLang,
  lang,
  handleLanguageChange,
}) => {
  return (
    <button
      onClick={() => handleLanguageChange(lang)}
      className={`px-4 py-2 rounded-lg ${
        selectedLang === lang
          ? "bg-red-500 text-white"
          : "bg-gray-200 text-gray-700"
      } transition-colors hover:bg-red-500 hover:text-white`}
    >
      {label}
    </button>
  );
};

export default LanguageButton;
