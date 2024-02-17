import NewsCardItem from './card-news';
import { newsData } from '@/data/news';

export default function NewsCardGrid() {
  const items = newsData.map((data) => {
    return <NewsCardItem key={data.slug} data={data} />;
  });

  return (
    <div className=' grid h-96 w-full grid-cols-4 grid-rows-3 gap-5'>
      <div className='col-span-2 row-span-2 grid-cols-subgrid grid-rows-subgrid bg-gray' />
      <div className=' row-span-2  grid-rows-subgrid'>{items[0]}</div>
      <div className='bg-gray' />
      <div className=' row-span-2 grid-rows-subgrid'>{items[1]}</div>
      <div className=' col-span-2 grid-cols-subgrid'>{items[2]}</div>
      <div className='bg-gray' />
    </div>
  );
}
