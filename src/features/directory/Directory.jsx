import React from 'react';

import { ClothingCategory } from '@/components';

import categories from '@/data/categories';

export function Directory() {
  const renderCategories = categories.map(cat => (
    <ClothingCategory key={cat.id} categoryTitle={cat.category} />
  ));
  return (
    <div className="w-full flex flex-wrap justify-between">
      {renderCategories}
    </div>
  );
}
