import React, { useEffect, useState } from 'react';
import YoutubeIcon from '../../assets/YoutubeIcon';
import { useDispatch, useSelector } from 'react-redux';
import { handleSidebarStatus } from '../../features/sidebar/sidebarStatusSlice';
import SidebarList from './components/SidebarList';
import { items } from './consts';
export default function Sidebar() {
  const dispatch = useDispatch();
  const sidebarStatus = useSelector(
    (state) => state.sidebarStatus.status
  );
  useEffect(() => {
    if (sidebarStatus) {
      document.body.style.overflow = 'hidden';
    } else document.body.style.overflow = '';
  }, [sidebarStatus]);

  if (!sidebarStatus) return;

  return (
    <div className='w-screen absolute left-0 rounded z-100 h-screen flex'>
      <aside
        className={`w-64 z-10  transition-all`}
        aria-label='Sidebar'
      >
        <div className='px-3 py-4 overflow-y-auto h-screen bg-gray-50 dark:bg-black'>
          <div className='flex justify-between'>
            <YoutubeIcon />
            <button
              className='text-white'
              onClick={() => dispatch(handleSidebarStatus())}
            >
              Close
            </button>
          </div>
          <SidebarList items={items} />
        </div>
      </aside>
      <div
        className='w-screen absolute z-0 bg-black/80 h-full'
        onClick={() => dispatch(handleSidebarStatus())}
      ></div>
    </div>
  );
}
