'use client';

import { useState } from 'react';
import IntroductionCardItem from './card-introduction';
import Stepper from './stepper';
import { featureData } from '@/data/introduction';

export default function IntroductionCardGrid() {
  const [highlight, setHighlight] = useState(1);

  const cards = featureData.map((data, index) => {
    return (
      <IntroductionCardItem key={data.id} data={data} highlight={highlight} />
    );
  });

  return (
    <>
      <div className='card-container flex w-full gap-5 sm:flex-col lg:flex-row'>
        {cards}
      </div>
      <Stepper setHighlight={setHighlight} highlight={highlight} />
      <div className='divider w-full border-b border-solid border-gray/40' />
    </>
  );
}
