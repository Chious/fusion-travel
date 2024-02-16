export default function Navbar() {
  return (
    <nav className="flex items-center justify-between h-20 w-screen fixed pr-40 pl-40 border-b border-solid bg-gray border-black/40 ">
      <div className="btn-group flex gap-5 text-white">
        <button>Home</button>
        <button>Services</button>
        <button>About Us</button>
        <button>Our Clients</button>
        <button>Blog</button>
        <button>Contact Us</button>
      </div>
      <div className="contact">
        <p>+ 516 260 0598</p>
      </div>
    </nav>
  );
}
