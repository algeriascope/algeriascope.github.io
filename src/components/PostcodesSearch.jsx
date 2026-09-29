import React, { useState } from 'react';
import styles from './PostcodesSearch.module.css';
import { slugify } from '../pages/Postcodes';
import data from '../data/algeria_data.json';
import { FaMapPin } from 'react-icons/fa6';

const PostcodesSearch = () => {
  const [query, setQuery] = useState('');
  const formattedQuery = slugify(query);
  const filteredData =
    !formattedQuery || formattedQuery.length < 2
      ? []
      : data.flatMap((wilaya) => {
          return wilaya.postcodes
            .filter((post) => {
              const matchesCommune = slugify(post.commune_name || '').includes(
                formattedQuery,
              );
              const matchesCode = (post.post_code || '').includes(
                formattedQuery,
              );
              const matchesPostName = slugify(post.post_name || '').includes(
                formattedQuery,
              );

              return matchesCode || matchesPostName;
            })
            .map((post) => ({
              ...post,
              wilaya_name: wilaya.wilaya_name,
              unique_key: crypto.randomUUID(),
            }));
        });

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.searchInput}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Wilaya, Commune, postcode"
      />
      {formattedQuery.length >= 2 && (
        <div className={styles.searchResults}>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => {
              return (
                <div key={item.unique_key} className={styles.searchResult}>
                  <div className={styles.postAndWilaya}>
                    <div className={styles.postName}>{item.post_name}</div>
                    <div className={styles.wilayaName}><FaMapPin className={styles.locationIcon}/>{item.wilaya_name}</div>
                  </div>
                  <div className={styles.postcode}>
                    {item.post_code ? item.post_code : 'xxxxxx'}
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
  );
};

export default PostcodesSearch;
