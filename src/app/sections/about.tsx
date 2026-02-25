import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-28 2xl:py-36 border-t border-border">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <p className="section-label">About me</p>

        <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
          <div className="flex justify-center md:order-first md:justify-end">
            <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
              <div className="absolute -inset-2 rounded-2xl bg-primary/5 blur-xl"></div>
              <Image src="/avatar.jpg" width={280} height={320} alt="Fullpose of Aleksei Ivasiuta" className="relative rounded-xl" />
            </div>
          </div>

          <div className="flex max-w-xl flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Curious about me? Here you have it:
            </h3>

            <p className="text-text-secondary text-base leading-relaxed">Some info about me</p>
          </div>
        </div>
      </div>
    </section>
  );
}
