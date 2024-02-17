import Link from 'next/link';
import { MdOutlineNotStarted } from 'react-icons/md';

export default function HomeMain() {
  return (
    <section className='main relative h-96 bg-gray'>
      <main className='flex h-full w-full flex-col items-center justify-center gap-2'>
        <h1 className='text-center'>Fusion Travel</h1>
        <p className='text-white'>Lets Discover The World Together</p>
        <Link
          href='/plan'
          className=' flex h-10 w-40 items-center justify-center rounded-2xl bg-yellow text-white'
        >
          Plan Your Trip
        </Link>
      </main>

      <div className='intro-video absolute bottom-10 left-20 flex gap-2 text-white'>
        <MdOutlineNotStarted className='h-8 w-8' />
        <div className='description'>
          <p className='text-white'>Watch</p>
          <h3>INTRO VIDEO</h3>
        </div>
      </div>
    </section>
  );
}
