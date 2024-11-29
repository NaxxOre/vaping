"use client"

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../store/languageSlice";

const ToggleButton = () => {
  const dispatch = useDispatch();

  const [language, setLanguage] = useState(() => {
    return sessionStorage.getItem("language") || "EN";
  });

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "မြန်မာ" ? "EN" : "မြန်မာ"
    );
    dispatch(changeLanguage());
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center gap-4 min-w-[142px] h-[72px] bg-transparent border-none outline-none cursor-pointer p-2"
    >
      <span
        className={`text-[24px] font-medium transition-opacity duration-300 ${
          language === "EN" ? "opacity-100" : "opacity-50"
        }`}
      >
        EN
      </span>
      <span>|</span>
      <span
        className={`text-[24px] font-medium transition-opacity duration-300 ${
          language === "မြန်မာ" ? "opacity-100" : "opacity-50"
        }`}
      >
        မြန်မာ
      </span>
    </button>
  );
};

export default ToggleButton;
