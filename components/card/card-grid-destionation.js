import DestinationCardItem from "./card-destination";

export default function DestinationCardGrid() {
  return (
    <div className=" w-full h-96 grid grid-rows-2 grid-cols-3 gap-2">
      <DestinationCardItem />
      <DestinationCardItem />
      <DestinationCardItem />
      <DestinationCardItem />
      <DestinationCardItem />
      <DestinationCardItem />
    </div>
  );
}
