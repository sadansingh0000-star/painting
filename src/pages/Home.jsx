import Hero from '../components/home/Hero';
import Featured from '../components/home/Featured';
import MissionSection from '../components/home/MissionSection';
import UniqueSection from '../components/home/UniqueSection';
import CompaniesSection from '../components/home/CompaniesSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <MissionSection />
      <UniqueSection />
      <CompaniesSection />
    </>
  );
}