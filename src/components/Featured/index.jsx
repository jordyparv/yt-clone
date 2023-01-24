import Card from './Card';

export default function Featured() {
  return (
    <div className='grid md:grid-cols-4 grid-flow-row sm:grid-cols-2 gap-4 p-2 items-center w-full'>
      <div className='bg-indigo-400 col-span-1  h-52 rounded-xl hover:scale-105 transition-all shadow'></div>
      <div className='bg-indigo-400 col-span-1  h-52 rounded-xl hover:scale-105 transition-all shadow'></div>
      <div className='bg-indigo-400 col-span-1  h-52 rounded-xl hover:scale-105 transition-all shadow'></div>
      <div className='bg-indigo-400 row-span-2  col-span-1 h-full rounded-xl hover:scale-105 transition-all shadow'></div>
      <div className='bg-indigo-400 col-span-1  h-52 rounded-xl hover:scale-105 transition-all shadow'></div>
      <div className='bg-indigo-400 col-span-2  h-52 rounded-xl hover:scale-105 transition-all shadow'></div>
    </div>
  );
}
