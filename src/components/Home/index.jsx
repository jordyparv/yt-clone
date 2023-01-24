import Featured from '../Featured';
import Header from '../Header';
import LinkButton from '../LinkButton';
import Shorts from '../Shorts';
import Hr from '../utils/Hr';
import Categories from '../Categories';
import Videos from '../Videos';
import ShortIcon from '../../assets/ShortIcon';
export default function Home() {
  // const catalogsKeyword = ['games', 'songs', 'hiphop', 'text'];
  //https://placekitten.com/640/360
  //https://picsum.photos/640/360
  const shortsClips = Array(5).fill(
    'https://images.unsplash.com/photo-1674368777653-bc2bca1c30c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=680&q=100'
  );

  return (
    <header className='px-2 py-4 bg-black text-white h-auto w-screen flex flex-col items-center'>
      {/* header */}
      <Header />
      {/* catalogs */}
      <div className='my-12 flex gap-2 w-[96%] overflow-hidden md:gap-8'>
        {new Array(22).fill(1).map((item, idx) => (
          <LinkButton
            text={`text-${idx + 1}`}
            link='/'
            key={idx + 1}
          />
        ))}
      </div>

      {/* featured */}
      <div className='mx-12 h-fit w-full'>
        <h3 className='text-2xl ml-2 my-8 font-bold'>Featured</h3>
        <div className='mx-4'>
          <Featured />
        </div>
      </div>
      {/* shorts */}
      <div className='mx-12 h-fit w-full'>
        <Hr
          title='Shorts'
          Icon={ShortIcon}
        />
        <Shorts items={shortsClips} />
      </div>
      {/* catagories */}
      <div className='h-fit w-full'>
        {/* <Hr /> */}
        <h3 className='text-2xl ml-2 my-8 font-bold'>Categories</h3>
        <Categories />
      </div>
      {/* video */}
      <div className='mx-12 h-fit w-full '>
        {/* <Hr /> */}
        <h3 className='text-2xl ml-2 my-8 font-bold'>Video</h3>
        <Videos />
      </div>
    </header>
  );
}
