import IntroductionCardGrid from '../card/card-grid-introduction';

export default function HomeIntroduction() {
  return (
    <section
      id='AboutUs'
      className='introduction flex flex-col items-center justify-center gap-4 bg-white p-10 pl-40 pr-40 sm:h-screen lg:h-auto'
    >
      <div className='titles flex flex-col items-center gap-2'>
        <h2 className='text-center'>Welcome to Fusion</h2>
        <p className=' w-4/5 text-center leading-5'>
          Nam constetur elementum neque vitae condimentum. Adenean dignissim,
          turpis, turpis et tincidunt finbus, massa purus melesuada metus, a
          commodo velit magna nec nibh. Donec dictum fringilla tempus. Nunc
          rhoncus sapien lectus, non fermentum neque euismod quis. Phasellus
          sagittis tortor in accumsan.
        </p>
      </div>
      <IntroductionCardGrid />
    </section>
  );
}
