import React from 'react';

import { Directory } from '@/features';

import { NavBar } from '@/components';

import styles from '@/styles/HomePage.module.scss';

export function HomePage() {
  return (
    <header className="">
      <section className="nav">
        <NavBar />
      </section>
      <div className={styles.homepageContainer}>
        <section className={styles.directoryContainer}>
          <Directory />
        </section>
      </div>
    </header>
  );
}
