import React from 'react';
import { BiSearch } from 'react-icons/bi';
import YoutubeIcon from '../../assets/YoutubeIcon';
export default function Search() {
  return (
    <div className='flex items-center w-full'>
      <input
        className='bg-black rounded-l-full p-2 w-full text-white outline-none border border-white/20'
        type='search'
      />
      <button className='p-2 bg-red-600 rounded-r-full'>
        <BiSearch
          color='white'
          size={24}
        />
      </button>
      <YoutubeIcon />
    </div>
  );
}
