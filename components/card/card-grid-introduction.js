import IntroductionCardItem from "./card-introduction";

export default function IntroductionCardGrid() {
  return (
    <div className=" w-full h-52 flex gap-5">
      <IntroductionCardItem />
      <IntroductionCardItem />
      <IntroductionCardItem />
    </div>
  );
}
