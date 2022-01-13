import React from 'react';

import styles from './ClothingCategory.module.scss';

export function ClothingCategory({ categoryTitle = 'Hats' }) {
  return (
    <div className={styles.clothingContainer}>
      <div className={styles.textContainer}>
        <h2 className="text-2xl text-gray-800/80">
          {categoryTitle.toUpperCase()}
        </h2>
        <p className="mt-4 font-light text-gray-800/70">SHOP NOW</p>
      </div>
    </div>
  );
}
