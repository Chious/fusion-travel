import { MdOutlineFlight } from 'react-icons/md';
import { FaRegStar } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import cx from 'classnames';

export default function IntroductionCardItem({ data, highlight }) {
  const { icon, title, description, id } = data;

  const cardStyle = cx(
    'bg-white w-full flex flex-col items-start justify-center p-4 gap-4',
    highlight === id && 'shadow-lg'
  );

  return (
    <div className={cardStyle}>
      <Icon icon={icon} />
      <h3 className='w-full'>{title}</h3>
      <p className=' leading-6'>{description}</p>
    </div>
  );
}

const Icon = ({ icon }) => {
  if (icon === 'flight') {
    return <MdOutlineFlight className='h-10 w-10 text-yellow' />;
  }

  if (icon === 'star') {
    return <FaRegStar className='h-10 w-10 text-yellow' />;
  }

  if (icon === 'favorite') {
    return <MdFavorite className='h-10 w-10 text-yellow' />;
  }
};
