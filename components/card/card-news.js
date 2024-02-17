import classNames from 'classnames';
import Link from 'next/link';

export default function NewsCardItem({ data }) {
  const { slug, direction, title, description } = data;
  const displayStyle = `flex-${direction}`;

  return (
    <Link href={`/blog/${slug}`}>
      <div
        className={classNames(
          'flex h-full w-full items-center justify-center gap-4 bg-white shadow-lg',
          displayStyle
        )}
      >
        <div className='flex h-fit flex-col gap-2 p-4'>
          <h3>{title}</h3>
          <p className=' leading-4'>{description}</p>
        </div>
        <div className='img h-28 w-full bg-gray' />
      </div>
    </Link>
  );
}
