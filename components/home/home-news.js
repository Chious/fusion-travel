import Link from 'next/link';
import NewsCardGrid from '../card/card-grid-news';

export default function HomeNews() {
  return (
    <section className='news flex flex-col items-center justify-center gap-8 bg-white p-10 pl-40 pr-40'>
      <div className='titles flex flex-col items-center justify-center gap-5'>
        <h2>Latest News From Blog</h2>
        <p>See Whats People Are Sharing Ther Thoughts</p>
      </div>
      <NewsCardGrid />
      <Link
        href='/blog'
        className=' flex h-10 w-40 items-center justify-center rounded-2xl bg-yellow text-white'
      >
        Keep Reading
      </Link>
      <div className='divider w-full border-b border-solid border-gray/40' />
    </section>
  );
}
