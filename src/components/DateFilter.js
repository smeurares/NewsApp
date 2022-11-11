import DatePicker from "react-datepicker";
import { useState } from "react";

export function DateFilter({setDateRange, startDate, endDate}) {
 
  const [filter, setFilter] = useState(false);
  const handleClose = () => {
    setFilter(false);
    setDateRange([null, null])
  }
  return (
    <div className='relative text-lg bg-transparent text-gray-800'>
      <div className='flex flex-col md:flex-row items-center justify-start border-b border-b-2 border-teal-500 py-2 '>
        {filter && (
          <div className="flex">
            <DatePicker
              className='border-2 rounded border-indigo-800 sm:mb-2 mb-0'
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
                setDateRange(update);
              }}
              withPortal
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 self-center'
              onClick={() => handleClose()}>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
        )}
        { startDate && console.log(startDate.toISOString().format)}
        <button
          className='block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded'
          onClick={() => setFilter(true)}>
          Filter by date
        </button>
      </div>
    </div>
  );
}
