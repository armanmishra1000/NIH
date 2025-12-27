import HeroSlider from '@/components/HeroSlider';
import HolisticImpact from '@/components/HolisticImpact';
import NIHNumbers from '@/components/NIHNumbers';
import NewMembers from '@/components/NewMembers';
import EventsSection from '@/components/EventsSection';

export default function Home() {
  const slides = [
    {
      id: 1,
      image: '/images/banner-1.jpg',
    },
    {
      id: 2,
      image: '/images/banner-2.jpg',
    },
    {
      id: 3,
      image: '/images/banner-4.jpg',
    },
    {
      id: 4,
      image: '/images/VIETNAM1.jpg',
    },
  ];

  return (
    <main className="font-sans">
      <div id="hero">
        <HeroSlider slides={slides} />
      </div>

      <NIHNumbers />
      <HolisticImpact />
      <NewMembers />
      <EventsSection />
    </main>
  );
}
