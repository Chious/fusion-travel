'use client';

import { useState } from 'react';
import DestinationCardItem from './card-destination';
import { countriesData } from '@/data/destination';

import { GrLinkPrevious } from 'react-icons/gr';
import { GrLinkNext } from 'react-icons/gr';
import { CiSearch } from 'react-icons/ci';

export default function DestinationCardGrid() {
  const [displayCountries, setDisplayCountries] = useState(countriesData);
  const maxPages = Math.floor(displayCountries.length / 6);
  const [page, setPage] = useState(1);

  // Get current page countries
  const itemsPerPage = 6;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = displayCountries.slice(startIndex, endIndex);

  //Search Bar
  const handleInputEnter = (e) => {
    if (e.key === 'Enter') {
      const searchTerm = e.target.value;
      const filteredItems = countriesData.filter((country) =>
        country.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setDisplayCountries(filteredItems);
    }
  };

  // Next and Prev Page
  const handleNextPage = () => {
    if (page < maxPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextArrowStyle = page === maxPages ? 'text-gray' : 'text-yellow';
  const PrevArrowStyle = page === 1 ? 'text-gray' : 'text-yellow';

  return (
    <div className='relative flex w-full flex-col items-center justify-center gap-4'>
      <div className='search-bar flex items-center gap-2'>
        <CiSearch className='h-8 w-8' />
        <input
          type='text'
          onKeyPress={(e) => {
            handleInputEnter(e);
          }}
          placeholder='Search...'
          className='h-10 w-40 p-1'
        />
      </div>
      <div className='grid h-full w-full  gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {currentItems.map((country) => (
          <DestinationCardItem country={country} key={country} />
        ))}
      </div>
      <div className='stepper absolute -left-40 top-1/2 flex w-screen justify-between pl-20 pr-20'>
        <GrLinkPrevious onClick={handlePrevPage} className={PrevArrowStyle} />
        <GrLinkNext onClick={handleNextPage} className={nextArrowStyle} />
      </div>
    </div>
  );
}
