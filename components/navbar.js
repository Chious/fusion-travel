import Link from 'next/link';
import { FaPhone } from 'react-icons/fa6';

export default function Navbar() {
  return (
    <>
      <nav className='fixed z-50 flex h-20 w-screen items-center justify-between bg-gray pl-40 pr-40'>
        <div className='btn-group flex gap-5 text-white'>
          <Link href='/' className=' hover:text-yellow'>
            Home
          </Link>
          <button className=' hover:text-yellow'>Services</button>
          <Link href='/#AboutUs' className=' hover:text-yellow'>
            About Us
          </Link>
          <Link href='/#HomeClient' className=' hover:text-yellow'>
            Our Clients
          </Link>
          <Link href='/blog' className=' hover:text-yellow'>
            Blog
          </Link>
          <Link href='/contact' className=' hover:text-yellow'>
            Contact Us
          </Link>
        </div>

        <p className='flex gap-1 text-white'>
          <FaPhone /> + 516 260 0598
        </p>
      </nav>
    </>
  );
}
