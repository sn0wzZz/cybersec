import SearchIcon from '../icons/search';
import { Input } from '../ui/input';

export default function Searchbar() {
  return (
    <div className='flex bg-background border items-center pl-2 pr-4 h-11 rounded-2xl w-full lg:max-w-[312px]'>
      <Input
        className='!border-0 !outline-0 !ring-0 shadow-none body-large placeholder:body-large dark:placeholder:text-border dark:text-white  w-full '
        placeholder='Search...'
      />
      <SearchIcon className='text-primary dark:text-white' />
    </div>
  )
}
