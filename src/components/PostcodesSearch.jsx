import React, { useState } from 'react';
import styles from './PostcodesSearch.module.css';
import { slugify } from '../pages/Postcodes';
import data from '../data/algeria_data.json';
import { FaLessThanEqual, FaMapPin } from 'react-icons/fa6';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export const normalizeSearch = (str) => {
  if (!str) return '';
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Strips Latin accents (ï -> i, é -> e)
    .replace(/[\u064B-\u065F]/g, '') // Strips Arabic Tashkeel / Harakat (َ ً ُ ٍ ِ ّ ْ)
    .replace(/[أإآ]/g, 'ا') // Normalizes all Arabic Alef forms (أ/إ/آ -> ا)
    .replace(/ى/g, 'ي') // Normalizes Alef Maqsura to Ya
    .replace(/ة/g, 'ه') // Normalizes Ta Marbouta
    .trim();
};

const PostcodesSearch = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isArabic = currentLanguage.startsWith('ar');
  const Tamazight = currentLanguage.startsWith('zgh');

  const [query, setQuery] = useState('');
  const [selectedWilaya, setSelectedWilaya] = useState('ALL');
  const [isOpen, setIsOpen] = useState(false);
  const formattedQuery = normalizeSearch(query);

  const filteredData =
    !formattedQuery || formattedQuery.length < 2
      ? []
      : data
          .filter(
            (wilaya) =>
              selectedWilaya === 'All wilayas' ||
              wilaya.wilaya_name === selectedWilaya,
          )
          .flatMap((wilaya) => {
            return wilaya.postcodes
              .filter((post) => {
                const matchesCommune =
                  normalizeSearch(post.commune_name || '').includes(formattedQuery) ||
                  normalizeSearch(post.commune_name_ar || '').includes(
                    formattedQuery,
                  );

                const matchesPostName =
                  normalizeSearch(post.post_name || '').includes(formattedQuery) ||
                  normalizeSearch(post.post_name_ar || '').includes(formattedQuery);

                const matchesCode = (post.post_code || '').includes(
                  formattedQuery,
                );

                return matchesCode || matchesPostName || matchesCommune;
              })
              .map((post) => ({
                ...post,
                wilaya_name: wilaya.wilaya_name,
                wilaya_name_ar: wilaya.wilaya_name_ar,
                unique_key: crypto.randomUUID(),
              }));
          });

  return (
    <div className={styles.container} dir="ltr">
      <div className={styles.inputWrapper}>
        <input
          type="text"
          className={styles.searchInput}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={
            selectedWilaya === 'All wilayas'
              ? 'Search Commune, postcode'
              : `Search Commune, postcode in ${selectedWilaya}`
          }
          dir={isArabic ? 'rtl' : 'ltr'}
        />
        {formattedQuery.length >= 2 && (
          <div className={styles.searchResults} dir={isArabic ? 'rtl' : 'ltr'}>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => {
                return (
                  <div key={item.unique_key} className={styles.searchResult}>
                    <div className={styles.postAndWilaya}>
                      <div className={styles.postName}>
                        {isArabic ? item.post_name_ar : item.post_name}
                      </div>
                      <div className={styles.wilayaName}>
                        <FaMapPin className={styles.locationIcon} />

                        {isArabic ? item.wilaya_name_ar : item.wilaya_name}
                      </div>
                    </div>
                    <div className={styles.postcode}>
                      {item.post_code ? item.post_code : 'xxxxx'}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className={styles.noResults}>No search results found.</div>
            )}
          </div>
        )}
      </div>
      <div className={styles.selectWrapper} >
        <div className={styles.wilayaSelect} onClick={() => setIsOpen(!isOpen)}>
          <span className={styles.wilayaSpan}>{selectedWilaya}</span>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        {isOpen && (
          <div className={styles.optionsMenu} dir={isArabic ? 'rtl' : 'ltr'}>
            <span
              className={styles.wilayaOption}
              onClick={() => {
                setSelectedWilaya('All wilayas');
                setIsOpen(false);
              }}
            >
              All wilayas
            </span>
            {data.map((w) => (
              <span
                className={styles.wilayaOption}
                key={w.wilaya_code}
                onClick={() => {
                  setSelectedWilaya(w.wilaya_name);
                  setIsOpen(false);
                }}
              >
                {`${w.wilaya_code} - ${isArabic ? w.wilaya_name_ar : w.wilaya_name}`}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostcodesSearch;
