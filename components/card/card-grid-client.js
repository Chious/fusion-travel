'use client';

import ClientCardItem from './card-client';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { useState } from 'react';
import Stepper from './stepper';
import { clientData } from '@/data/client';

export default function ClientCardGrid() {
  const [highlight, setHighlight] = useState(1);

  const clientCards = clientData.map((data, index) => {
    return <ClientCardItem key={index} data={data} />;
  });

  return (
    <div className=' relative flex flex-col items-center justify-center gap-5'>
      {clientCards[highlight - 1]}
      <div className='quote-icon pointer-events-none absolute -left-40 flex w-screen justify-between p-40 text-gray'>
        <FaQuoteLeft className='relative -top-28' />
        <FaQuoteRight className='relative top-28' />
      </div>
      <Stepper
        className='relative z-10'
        highlight={highlight}
        setHighlight={setHighlight}
      />
    </div>
  );
}
