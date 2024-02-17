import { GoDotFill } from 'react-icons/go';

export default function Stepper({ setHighlight, highlight }) {
  const handleClick = (e, step) => {
    e.preventDefault();
    setHighlight(step);
  };

  const isActive = (step) => {
    return highlight === step && 'text-yellow';
  };

  return (
    <div className='flex gap-2'>
      <GoDotFill
        className={isActive(1)}
        onClick={(e) => {
          handleClick(e, 1);
        }}
      />
      <GoDotFill
        className={isActive(2)}
        onClick={(e) => {
          handleClick(e, 2);
        }}
      />
      <GoDotFill
        className={isActive(3)}
        onClick={(e) => {
          handleClick(e, 3);
        }}
      />
    </div>
  );
}
