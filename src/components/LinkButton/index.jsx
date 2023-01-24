import React from 'react';

export default function LinkButton({ text, link }) {
  return (
    <a
      href={link ?? ''}
      className='text-gray-200 bg-white/10 text-sm p-2 rounded border border-white/10 hover:bg-white/60 transition-all whitespace-nowrap text-center'
    >
      {text ?? ''}
    </a>
  );
}
