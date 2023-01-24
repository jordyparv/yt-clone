import React from 'react';
import CategoryCard from './CategoryCard';

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: 'Food',
      imageUrl:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 2,
      name: 'Action',
      imageUrl:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=100',
    },
    {
      id: 3,
      name: 'Electronics',
      imageUrl:
        'https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 6,
      name: 'Electronics',
      imageUrl:
        'https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 5,
      name: 'Food',
      imageUrl:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 4,
      name: 'Action',
      imageUrl:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=100',
    },
  ];

  return (
    <div className='mx-6 grid lg:gap-12 md:grid-cols-3 md:gap-8 lg:grid-cols-3 sm:grid-cols-1 sm:gap-2 xs:grid-cols-1 xs:gap-2 gap-2'>
      {categories
        ? categories.map((category) => (
            <div key={category.id}>
              <CategoryCard
                title={category.name}
                imageUrl={category.imageUrl}
              />
              <p className='text-lg'>{category.name}</p>
            </div>
          ))
        : null}
    </div>
  );
  S;
}
