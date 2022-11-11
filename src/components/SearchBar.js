export function SearchBar({handleInput, handleSearch, value}) {
  
  return (
    <div className='relative text-lg bg-transparent text-gray-800'>
      <div className='flex items-center justify-start border-b border-b-2 border-teal-500 py-2'>
        <input
          className='bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none w-11/12'
          type='text'
          placeholder='Search'
          value={value || ''}
          onChange={(e) => handleInput(e.target.value)}
          />
          <button type='submit' className='absolute right-0 top-0 mt-3 mr-4' onClick={() =>handleSearch()}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
              />
            </svg>
          </button>
      </div>
    </div>
  );
}
