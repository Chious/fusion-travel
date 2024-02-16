import IntroductionCardGrid from "../card/card-grid-introduction";

export default function HomeIntroduction() {
  return (
    <section className="introduction bg-white pl-40 pr-40 p-10 flex flex-col justify-center items-center gap-4">
      <div className="titles flex flex-col gap-2">
        <h2 className="text-center">Welcome to Fusion</h2>
        <p>
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
