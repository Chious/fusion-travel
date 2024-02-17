import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaSquareInstagram } from 'react-icons/fa6';

export default function Footer() {
  return (
    <section className='footer flex flex-col items-center justify-center bg-white p-10 pl-40 pr-40'>
      <footer className='flex h-40 w-full justify-between'>
        <div className='about  flex flex-col gap-2'>
          <h3 className=' pb-3'>About Us</h3>
          <Link href='/#AboutUs'>
            <p className=' hover:text-yellow'>About Us</p>
          </Link>
          <Link href='/blog'>
            <p className=' hover:text-yellow'>Blog</p>
          </Link>
          <Link href='/contact'>
            <p className=' hover:text-yellow'>Contact Us</p>
          </Link>
        </div>

        <div className='address  flex flex-col gap-2'>
          <h3 className=' pb-3'>Address</h3>
          <p>4433 Heavner Court</p>
          <p>Plainview, New York</p>
        </div>

        <div className='contact  flex flex-col gap-2'>
          <h3 className='pb-3'>Contact Us</h3>
          <p>{`Email: help@agency.com`}</p>
          <p>{`Cell: +516-260-0598`}</p>
        </div>

        <div className='follow'>
          <h3 className='pb-3'>Follow Us</h3>
          <div className='link-group flex justify-between'>
            <Link href='https://www.twitter.com' target='_blank'>
              <AiFillTwitterCircle className=' hover:text-yellow' />
            </Link>
            <Link href='https://www.facebook.com' target='_blank'>
              <FaFacebook className=' hover:text-yellow' />
            </Link>
            <Link href='https://www.instagram.com' target='_blank'>
              <FaSquareInstagram className=' hover:text-yellow' />
            </Link>
          </div>
        </div>
      </footer>
      <div className='divier' />
      <p>{`Copyright@Parag2016, All Rights Reserved`}</p>
    </section>
  );
}
