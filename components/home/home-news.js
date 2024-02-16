import NewsCardGrid from "../card/card-grid-news";

export default function HomeNews() {
  return (
    <section className="news bg-white flex flex-col gap-8 items-center justify-center pl-40 pr-40 p-10">
      <div className="titles flex flex-col gap-5 justify-center items-center">
        <h2>Latest News From Blog</h2>
        <p>See Whats People Are Sharing Ther Thoughts</p>
      </div>
      <NewsCardGrid />
      <button className=" bg-yellow text-white h-10 w-40 rounded-2xl">
        Keep Reading
      </button>
    </section>
  );
}
