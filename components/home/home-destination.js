import DestinationCardGrid from "../card/card-grid-destionation";

export default function HomeDestination() {
  return (
    <section className="destination pl-40 pr-40 p-10 flex flex-col gap-5 justify-center items-center bg-white">
      <div className="titles flex flex-col justify-center items-center gap-4">
        <h2>Find Your Destination</h2>
        <p>More Popular Places Are Waiting For You!</p>
      </div>
      <input
        placeholder="Search..."
        className="w-40 border-gray border-solid border-2"
      />
      <DestinationCardGrid />
    </section>
  );
}
