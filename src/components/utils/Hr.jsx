import React from 'react';

const Line = () => (
  <div className='w-full h-[1px] bg-white/30 rounded-full'></div>
);
export default function Hr({ title, Icon }) {
  return (
    <div className='flex items-center mx-14 my-8'>
      <Line />
      {title ? (
        <>
          <span className='mx-4 flex items-center'>
            {Icon ? <Icon /> : null} {title}
          </span>
          <Line />
        </>
      ) : null}
    </div>
  );
}
