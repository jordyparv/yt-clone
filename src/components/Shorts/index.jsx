import axios from 'axios';
import { useState, useEffect } from 'react';
import { items } from '../Sidebar/consts';

import ClipCard from './ClipCard';
import { config } from './config';

export default function Shorts() {
  const [shorts, setShorts] = useState([]);
  const [limit, setLimit] = useState(4);
  const handleMore = () => {
    if (limit < shorts.length) setLimit((prev) => (prev += 4));
  };
  useEffect(() => {
    (async () => {
      const response = await axios.get(...config);
      setShorts(response.data.videos);
      // console.log(response.data.videos);
    })();
  }, []);
  console.log(shorts.length);
  return (
    <div className='flex flex-col mx-6'>
      <div className='grid grid-cols-4 md:gap-8 gap-2 xl:gap-8 px-1 h-auto'>
        {shorts?.length > 0
          ? shorts.slice(0, limit).map((item) => (
              <ClipCard
                key={item.video_id}
                imageUrl={item.thumbnails[2]}
                title={item.title}
              />
            ))
          : null}
      </div>
      {shorts?.length > 4 ? (
        <div className='mb-12 mt-6 text-center h-2'>
          <button
            className='text-white bg-[#0F0F0F] p-2 w-32 rounded-2xl text-xl hover:bg-gray-800'
            onClick={handleMore}
          >
            More
          </button>
        </div>
      ) : null}
    </div>
  );
}
