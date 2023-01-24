import React from 'react';

export default function CategoryCard({ title, imageUrl }) {
  return (
    <div className='h-fit rounded-lg grid place-items-center overflow-hidden relative group cursor-pointer'>
      <img
        src={imageUrl}
        alt='logo'
        className='w-full h-full object-cover'
      />
      <div className='bg-black/10 w-full h-full absolute group-hover:bg-black/80 transition-all'></div>
      <p className='text-6xl absolute z-10 select-none translate-y-[10rem] transform-gpu group-hover:transform-none transition-all'>
        {title}
      </p>
    </div>
  );
}
