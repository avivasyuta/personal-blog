import Image from 'next/image';

export function AboutSection() {
  return (
    <section className="w-full py-16 md:py-20 2xl:py-24 bg-gray-50 dark:bg-gray-900" id="about">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
          <div className="flex justify-center md:order-first md:justify-end">
            <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
              <Image src="/avatar.jpg" width={280} height={320} alt="Fullpose of Aleksei Ivasiuta" />
            </div>
          </div>

          <div className="flex max-w-xl flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em]">
              Curious about me? Here you have it:
            </h3>

            <p className="text-normal text-base">Some info about me</p>
          </div>
        </div>
      </div>
    </section>
  );
}
