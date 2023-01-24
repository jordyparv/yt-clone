export default function SidebarListItems({
  text,
  link,
  Icon,
  active,
}) {
  return (
    <li>
      <a
        href={link}
        className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 ${
          active ? 'bg-white/10' : ''
        }`}
      >
        <span className='flex-1 ml-3 whitespace-nowrap'>
          {text ?? 'text'}
        </span>
      </a>
    </li>
  );
}
