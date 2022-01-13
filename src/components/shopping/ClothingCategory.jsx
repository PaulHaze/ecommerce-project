import React from 'react';

export function ClothingCategory({ categoryTitle = 'HATS' }) {
  return (
    <div className="flex-grow m-2 p-10 bg-blue-200 flex-center">
      <div className="px-4 py-3 bg-white/80 text-center">
        <h2 className="text-2xl text-gray-800/80">
          {categoryTitle.toUpperCase()}
        </h2>
        <p className="text-gray-800/70 font-light mt-4">SHOP NOW</p>
      </div>
    </div>
  );
}
