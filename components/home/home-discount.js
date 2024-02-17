import Link from 'next/link';

export default function HomeDiscount() {
  return (
    <section className='discount flex items-center justify-between bg-yellow p-10 pl-40 pr-40'>
      <h3 className='text-white'>Get special discount on your first journey</h3>
      <Link
        href='/plan'
        className='flex h-8 w-28 items-center justify-center rounded-2xl border border-solid border-white text-white'
      >
        Book Now
      </Link>
    </section>
  );
}
