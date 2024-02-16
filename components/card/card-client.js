export default function ClientCardItem() {
  return (
    <div className="bg-white flex h-52 w-2/3 p-6 rounded-2xl gap-6">
      <div className="image bg-gray w-96 h-40 rounded-xl" />
      <div className="description flex flex-col justify-between text-black">
        <p>
          {`Integrate 360 compaign viral disrput pair programming latte paradigm hacker 360 compaign cortado
           bootstrapping. Thinkr-maker-doer paradigm affordances viral bootstrapping ship it human-centered design waterfall is so 2000 and late responsive integrate parallax.`}
        </p>
        <div className="flex flex-col gap-2">
          <h3 className="company text-yellow">Dimitri Vegas</h3>
          <h3 className="location text-black">London, England</h3>
        </div>
      </div>
    </div>
  );
}
