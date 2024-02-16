import NewsCardItem from "./card-news";

export default function NewsCardGrid() {
  return (
    <div className=" w-full h-96 gap-5 grid grid-rows-3 grid-cols-4">
      <div className="bg-gray grid-cols-subgrid grid-rows-subgrid row-span-2 col-span-2" />
      <div className="bg-gray grid-rows-subgrid  row-span-2">
        <NewsCardItem direction="col" />
      </div>
      <div className="bg-gray" />
      <div className="bg-gray grid-rows-subgrid row-span-2">
        <NewsCardItem direction="col" />
      </div>
      <div className="bg-gray grid-cols-subgrid col-span-2">
        <NewsCardItem direction="row" />
      </div>
      <div className="bg-gray" />
    </div>
  );
}
