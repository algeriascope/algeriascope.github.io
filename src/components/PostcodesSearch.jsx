import React, { useState } from 'react';
import styles from './PostcodesSearch.module.css';
import { slugify } from '../pages/Postcodes';
import data from '../data/algeria_data.json';

const PostcodesSearch = () => {
  const [query, setQuery] = useState('');
  const formattedQuery = slugify(query);
  const filteredData = !formattedQuery
    ? []
    : data.filter((wilaya) => {
        return wilaya.postcodes.some((post) => {
          return slugify(post.commune_name).includes(formattedQuery);
        });
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
      <div className={styles.searchResults}>
        <div className={styles.searchResult}>
          <div className={styles.postAndWilaya}>
            <div className={styles.postName}>Hachmaoui Massoud</div>
            <div className={styles.wilayaName}>Medea</div>
          </div>
          <div className={styles.postcode}>26001</div>
        </div>
        {filteredData.map((wilaya) => {
          return null;
        })}
      </div>
    </div>
  );
};

export default PostcodesSearch;
