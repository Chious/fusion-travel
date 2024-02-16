export default function Footer() {
  return (
    <section className="footer bg-white flex flex-col items-center justify-center pl-40 pr-40 p-10">
      <footer className="h-40 w-full flex justify-between">
        <div className="about  flex flex-col gap-2">
          <h3 className=" pb-3">About Us</h3>
          <p>About Us</p>
          <p>Blog</p>
          <p>Contact Us</p>
        </div>

        <div className="address  flex flex-col gap-2">
          <h3 className=" pb-3">Address</h3>
          <p>4433 Heavner Court</p>
          <p>Plainview, New York</p>
        </div>

        <div className="contact  flex flex-col gap-2">
          <h3 className="pb-3">Contact Us</h3>
          <p>{`Email: help@agency.com`}</p>
          <p>{`Cell: +516-260-0598`}</p>
        </div>

        <div className="follow">
          <h3 className="pb-3">Follow Us</h3>
        </div>
      </footer>
      <div className="divier" />
      <p>{`Copyright@Parag2016, All Rights Reserved`}</p>
    </section>
  );
}
