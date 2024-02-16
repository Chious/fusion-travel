import classNames from "classnames";

export default function NewsCardItem({ direction }) {
  const displayStyle = `flex-${direction}`;

  return (
    <div
      className={classNames(
        "bg-white w-full flex items-center justify-center p-4 gap-4",
        displayStyle
      )}
    >
      <div>
        <h3>Most Beautiful Place In The World - Isunbui</h3>
        <p>
          Venture capital food-trunk minimum viable product ideate pitch deck
          experiential cortado affordances parallax
        </p>
      </div>
      <div className="image bg-gray" />
    </div>
  );
}
