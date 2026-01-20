import { currentLocation } from "@/src/lib/constant";

export function Greeting() {
    return (
        <section className="w-full bg-gray py-16 md:py-20 2xl:py-24" id="hero">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
                <div className="flex flex-col gap-12 md:flex-row">
                    <div className="flex items-center justify-center md:order-last md:grow md:justify-end">
                        <div className="relative h-75 w-70 md:h-90 md:w-[320px]">
                            <div
                                className="absolute h-70 w-70 border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-80 md:w-70"></div>
                        </div>
                    </div>

                    <div
                        className="flex max-w-3xl grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-18 text-gray-100">
                                Hi, I&apos;m Aleksei <span className="inline-block animate-waving-hand">👋</span>
                            </h1>

                            <p className="text-normal text-base">
                                I&apos;m a full stack developer (React.js, Node.js & Go) with a focus on creating and
                                designing exceptional digital experiences that are fast, accessible, visually appealing,
                                and responsive. Even though I have been creating web applications for over 10 years, I
                                still love it as if it was something new.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                     height="24" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" stroke-width="2"
                                     stroke-linecap="round" stroke-linejoin="round"
                                     className="stroke-gray-600">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>

                                <p className="text-normal text-base">
                                    {currentLocation.city}, {currentLocation.country}
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="flex h-6 w-6 items-center justify-center">
                                    <span className="relative flex h-3 w-3">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                                    </span>
                                </div>

                                <p className="text-normal text-base">
                                    Available for new opportunities
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-1">
                            Buttons
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
