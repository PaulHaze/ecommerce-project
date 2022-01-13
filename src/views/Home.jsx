import React from 'react';

export function Home() {
  return (
    <div className="h-[100vh] bg-gradient-to-br from-teal-700/50 to-sky-500/50 flex items-center justify-center p-md">
      <div className="flex flex-col bg-white rounded-lg shadow-2xl">
        <h2 className="m-5 text-[#504e63] font-extralight text-center text-6xl">
          Im your new Tailwind Project
        </h2>
        <p className="text-[#504e63] text-center mb-10">
          Delete this and make something great
        </p>
      </div>
    </div>
  );
}
