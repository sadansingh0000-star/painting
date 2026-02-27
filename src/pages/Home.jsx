import Hero from '../components/home/Hero';
import Featured from '../components/home/Featured';
import MissionSection from '../components/home/MissionSection';
import UniqueSection from '../components/home/UniqueSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Featured />
      <MissionSection />
      <UniqueSection />
    </div>
  );
}