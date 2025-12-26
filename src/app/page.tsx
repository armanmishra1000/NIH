import HeroSlider from '@/components/HeroSlider';

export default function Home() {
  const slides = [
    {
      id: 1,
      image: '/images/banner-1.jpg',
      alt: 'NIH Wellness Centre banner',
    },
    {
      id: 2,
      image: '/images/banner-2.jpg',
      alt: 'Yoga and Meditation classes',
    },
    {
      id: 3,
      image: '/images/banner-4.jpg',
      alt: 'Holistic Health Education programs',
    },
    {
      id: 4,
      image: '/images/VIETNAM1.jpg',
      alt: 'International Yoga Day celebration',
    },
  ];

  return (
    <main className="font-sans">
      <HeroSlider slides={slides} />
    </main>
  );
}
