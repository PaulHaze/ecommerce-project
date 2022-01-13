import React from 'react';

import { NavBar, ClothingCategory } from '@/components';

import styles from '@/styles/HomePage.module.scss';

export function HomePage() {
  return (
    <header className="">
      <section className="nav">
        <NavBar />
      </section>
      <div className={styles.homepageContainer}>
        <section className={styles.directoryContainer}>
          <ClothingCategory categoryTitle="Hats" />
          <ClothingCategory categoryTitle="Jackets" />
          <ClothingCategory categoryTitle="Shoes" />
          <ClothingCategory categoryTitle="Womens" />
          <ClothingCategory categoryTitle="Mens" />
        </section>
      </div>
    </header>
  );
}
