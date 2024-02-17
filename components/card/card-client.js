export default function ClientCardItem({ data }) {
  const { description, company, location } = data;

  return (
    <div className='flex w-2/3 gap-6 rounded-2xl bg-white p-6 shadow-lg sm:flex-col md:flex-row'>
      <div className='image sm:w:40 aspect-square rounded-xl bg-gray  md:h-40' />
      <div className='description flex flex-col justify-between leading-5 text-black'>
        <p className='h-3/4 overflow-hidden text-ellipsis'>{description}</p>
        <div className='flex flex-col gap-2'>
          <h3 className='company text-yellow'>{company}</h3>
          <h3 className='location text-black'>{location}</h3>
        </div>
      </div>
    </div>
  );
}
