import React, { useState, useRef, useEffect } from 'react';
import { VscGlobe } from 'react-icons/vsc';
import { useTranslation } from 'react-i18next';
import styles from './TranslateBtn.module.css';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'ar', label: 'العربية' },
  { code: 'zgh', label: 'Tamazight' },
];

const TranslateBtn = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper} ref={dropdownRef}>
      <button
        className={styles.container}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle language menu"
      >
        <VscGlobe />
      </button>

      {isOpen && (
        <ul className={styles.dropdown}>
          {LANGUAGES.map((lang) => (
            <li
              key={lang.code}
              className={`${styles.option} ${
                i18n.language.startsWith(lang.code) ? styles.active : ''
              }`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TranslateBtn;
