import Image from 'next/image';

interface StatItem {
  label: string;
  value: string;
}

interface CTAButton {
  text: string;
  href: string;
}

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCTA: CTAButton;
  secondaryCTA: CTAButton;
  stats: StatItem[];
  backgroundImage: string;
}

export default function HeroSection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  stats,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="NIH Holistic Health Institute background"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="text-lg leading-relaxed text-gray-100 sm:text-xl">
              {subtitle}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={primaryCTA.href}
                className="flex h-12 items-center justify-center rounded-full bg-[#f3972a] px-8 font-semibold text-white transition-colors hover:bg-[#e0861f] focus:outline focus:ring-2 focus:ring-[#f3972a] focus:ring-offset-2"
              >
                {primaryCTA.text}
              </a>
              <a
                href={secondaryCTA.href}
                className="flex h-12 items-center justify-center rounded-full border-2 border-white px-8 font-semibold text-white transition-colors hover:bg-white/10 focus:outline focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                {secondaryCTA.text}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8 sm:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-200 sm:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative rounded-2xl bg-[#155b2e]/20 p-8 backdrop-blur-sm">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  Key Achievements
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 size-2 shrink-0 rounded-full bg-[#f3972a]" />
                    <p className="text-base text-gray-100">
                      International Conference on Yoga & Holistic Health
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 size-2 shrink-0 rounded-full bg-[#f3972a]" />
                    <p className="text-base text-gray-100">
                      224+ Health Checkup Camps conducted
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 size-2 shrink-0 rounded-full bg-[#f3972a]" />
                    <p className="text-base text-gray-100">
                      64+ Educational Webinars
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
