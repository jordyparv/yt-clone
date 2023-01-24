import { CgProfile } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import Search from './Search';
import { handleSidebarStatus } from '../../features/sidebar/sidebarStatusSlice';
import { links } from './config';
export default function Header() {
  // const links = [{ name: 'home', path: '/' }];
  const dispatch = useDispatch();

  return (
    <>
      <div className='flex gap-2 items-center w-full md:justify-between'>
        <div className='flex items-center'>
          <div className='flex gap-2 items-center'>
            {/* logo and options button */}
            <button
              className='flex flex-col gap-1'
              onClick={() => dispatch(handleSidebarStatus())}
            >
              <span className='w-4 h-1 rounded-full bg-white'></span>
              <span className='w-4 h-1 rounded-full bg-white'></span>
              <span className='w-4 h-1 rounded-full bg-white'></span>
            </button>
          </div>
          {/* link container */}
          <div className='flex gap-4 mx-12 hidden'>
            {links
              ? links.map((link) => (
                  <a
                    href={link}
                    className='text-md'
                    key={link}
                  >
                    {link.toUpperCase()}
                  </a>
                ))
              : null}
          </div>
        </div>
        <div className='flex w-full md:w-1/2 '>
          <Search />
          <span className='mx-4'>
            <CgProfile
              size={48}
              color='white'
            />
          </span>
        </div>
      </div>
    </>
  );
}
