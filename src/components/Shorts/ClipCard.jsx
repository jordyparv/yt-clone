import React from 'react';

export default function ClipCard({ imageUrl, title }) {
  return (
    <div className='rounded-lg overflow-hidden relative group cursor-pointer w-full h-full grid place-items-center'>
      <img
        src={imageUrl.url}
        className='w-full h-full transition-all object-cover group-hover:brightness-75'
        alt='card-img'
      />
    </div>
  );
}
