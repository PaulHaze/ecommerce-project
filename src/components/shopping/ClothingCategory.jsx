import React from 'react';

import styles from './ClothingCategory.module.scss';

export function ClothingCategory({ categoryTitle, imageUrl }) {
  return (
    <div className={styles.categoryContainer}>
      <div
        className={styles.imgContainer}
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className={styles.textContainer}>
          <h2 className={styles.categoryText}>{categoryTitle.toUpperCase()}</h2>
          <p className="mt-2 font-light text-gray-800/70">SHOP NOW</p>
        </div>
      </div>
    </div>
  );
}
