import DestinationCardGrid from '../card/card-grid-destionation';

export default function HomeDestination() {
  return (
    <section className='destination flex flex-col items-center justify-center gap-5 bg-white p-10 pl-40 pr-40 '>
      <div className='titles flex flex-col items-center justify-center gap-4'>
        <h2>Find Your Destination</h2>
        <p>More Popular Places Are Waiting For You!</p>
      </div>
      <DestinationCardGrid />
      <div className='divider w-full border-b border-solid border-gray/40' />
    </section>
  );
}
