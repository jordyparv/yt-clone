import { useEffect, useState } from 'react';
import axios from 'axios';
import VideoCard from './components/VideoCard';
import { config } from './config';
export default function Videos() {
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        'https://youtube-v31.p.rapidapi.com/search',
        config
      );
      setVideo(response.data.items);
    })();
  }, []);

  return (
    <div className='mx-6 grid md:grid-cols-3 md:gap-4 xl:grid-cols-4 xl:gap-4 sm:grid-cols-1 sm:gap-6'>
      {videos.map((video) => (
        <VideoCard
          key={video.id.videoId}
          {...video.snippet}
        />
      ))}
    </div>
  );
}
