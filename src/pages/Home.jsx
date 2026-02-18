import Hero from '../components/home/Hero';
import Featured from '../components/home/Featured';
import Categories from '../components/home/Categories';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Categories />
      <Stats />
      <Testimonials />
      <Newsletter />
    </>
  );
}