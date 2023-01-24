import React from 'react';
import getAge from '../../utils/getAge.js';

export default function VideoCard({
  channelTitle,
  thumbnails,
  title,
  publishTime,
}) {
  const thumbnailUrl =
    thumbnails.maxres?.url ||
    thumbnails.high?.url ||
    thumbnails.medium?.url ||
    thumbnails.standard?.url ||
    thumbnails.default?.url;

  const videoAge = getAge(publishTime);

  return (
    <div className='h-auto max-w-72 cursor-pointer group overflow-hidden'>
      <div className='w-full rounded-lg h-fit'>
        <img
          src={thumbnailUrl ?? ''}
          className='w-full h-full object-cover object-center rounded-lg group-hover:brightness-50'
          alt='thumbnail'
          style={{ borderRadius: '12px' }}
        />
      </div>
      <div className='mt-2'>
        <div className='flex justify-between items-center'>
          <h3 className='text-md truncate w-[80%]'>{title}</h3>
          <strong className='text-xs'>
            {videoAge ? videoAge : '0'}
          </strong>
        </div>
        <div className='flex flex-col'>
          <p className='text-md'>{channelTitle}</p>
          <strong className='text-sm text-white/80 mt-2'>
            View 4K
          </strong>
        </div>
      </div>
    </div>
  );
}
