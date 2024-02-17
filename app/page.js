import Footer from '@/components/Footer';
import HomeClient from '@/components/home/home-client';
import HomeDestination from '@/components/home/home-destination';
import HomeDiscount from '@/components/home/home-discount';
import HomeIntroduction from '@/components/home/home-introduction';
import HomeMain from '@/components/home/home-main';
import HomeNews from '@/components/home/home-news';

export default function Home() {
  return (
    <>
      <HomeMain />
      <HomeIntroduction />
      <HomeDestination />
      <HomeNews />
      <HomeClient />
      <HomeDiscount />
      <Footer />
    </>
  );
}
