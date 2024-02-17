import ClientCardGrid from '../card/card-grid-client';

export default function HomeClient() {
  return (
    <section
      id='HomeClient'
      className='client flex flex-col gap-4 bg-white p-10 pl-40 pr-40'
    >
      <div className='titles flex flex-col items-center justify-center gap-4'>
        <h2>What Our Client Says</h2>
        <p>{`People's sharing their thought about our works`}</p>
      </div>
      <ClientCardGrid />
    </section>
  );
}
