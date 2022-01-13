import React from 'react';

// import styles from './ClothingCategory.module.scss';

export function ClothingCategory({ categoryTitle }) {
  return (
    <div className="sm:min-w-[30%] flex-1 flex-grow m-0.5 p-10 bg-blue-200 flex-center">
      <div className="px-4 py-3 bg-white/80 text-center">
        <h2 className="text-2xl text-gray-800/80">
          {categoryTitle.toUpperCase()}
        </h2>
        <p className="text-gray-800/70 font-light mt-4">SHOP NOW</p>
      </div>
    </div>
  );
}
