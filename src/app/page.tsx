import HeroSlider from '@/components/HeroSlider';
import NIHNumbers from '@/components/NIHNumbers';

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
      <HeroSlider slides={slides} />
      <NIHNumbers />
    </main>
  );
}
