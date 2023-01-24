import React from 'react';
import SidebarListItems from './SidebarListItems';

export default function SidebarList({ items }) {
  return (
    <ul className='space-y-2 mt-6'>
      {items
        ? items.map((item, idx) => (
            <SidebarListItems
              key={idx}
              {...item}
            />
          ))
        : null}
    </ul>
  );
}
