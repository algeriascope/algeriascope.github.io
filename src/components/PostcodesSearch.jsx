import React from 'react';
import styles from './PostcodesSearch.module.css'
const PostcodesSearch = ({query, setQuery}) => {
  return (
    <div className={styles.container}>

      <input
        type="text"
        className={styles.searchInput}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search Wilaya, Commune, postcode'
      />
      <div className={styles.searchResults}>
         <div className={styles.searchResult}>
          name zipcode something
          something else
        </div>
        <div className={styles.searchResult}>
          name zipcode something
          something else
        </div>

      </div>
    </div>
    );
};

export default PostcodesSearch;
