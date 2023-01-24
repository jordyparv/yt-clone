import React from 'react';

export default function Card({ position }) {
  return (
    <div
      className={`w-${position === 'v' ? '42' : '82'} h-${
        position === 'v' ? '82' : '42'
      } rounded bg-gray-300`}
    >
      Card
    </div>
  );
}
