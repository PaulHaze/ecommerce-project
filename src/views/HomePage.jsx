import React from 'react';

import { NavBar, ClothingCategory } from '@/components';

export function HomePage() {
  return (
    <div className="homepage p-4">
      <section className="nav">
        <NavBar />
      </section>
      <section className="my-10 flex flex-wrap flex-shrink">
        <ClothingCategory categoryTitle="Hats" />
        <ClothingCategory categoryTitle="Jackets" />
        <ClothingCategory categoryTitle="Sneakers" />
        <ClothingCategory categoryTitle="Womens" />
        <ClothingCategory categoryTitle="Mens" />
      </section>
    </div>
  );
}
