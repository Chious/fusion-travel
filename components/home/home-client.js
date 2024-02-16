import ClientCardGrid from "../card/card-grid-client";

export default function HomeClient() {
  return (
    <section className="client bg-white flex flex-col pl-40 pr-40 p-10 gap-4">
      <div className="titles flex flex-col justify-center items-center gap-4">
        <h2>What Our Client Says</h2>
        <p>{`People's sharing their thought about our works`}</p>
      </div>
      <ClientCardGrid />
    </section>
  );
}
