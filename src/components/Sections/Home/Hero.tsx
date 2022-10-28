import { H1, H2, Link } from "@components/atoms";
import classNames from "classnames";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero" className="-mt-16 nav:-mt-20">
            <div className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden [--geist-foreground:#000] [--gradient-stop-1:0px] [--gradient-stop-2:120px] sm:[--gradient-stop-1:0px] sm:[--gradient-stop-2:120px]">
                {/* Animated Background */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <span className="landing_leftLights opacity-100"></span>
                    <span className="landing_rightLights opacity-100"></span>
                    <span className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent"></span>
                    <span className="bg-gradient-to-b from-black to-transparent absolute top-[20vh] left-0 w-full h-[50vh]"></span>
                    <div className="![perspective:1000px] sm:![perspective:1000px] md:![perspective:1000px] lg:![perspective:1000px] turbohero-background_container">
                        <div
                            className="z-[100] absolute inset-0 [--gradient-stop-1:0px] [--gradient-stop-2:50%]"
                            style={{ background: "linear-gradient(to top, rgba(0,0,0,0) 0px, var(--geist-foreground) 50%)" }}></div>

                        <div className="absolute inset-0" style={{ transform: "rotateX(75deg)" }}>
                            <div className="turbohero-background_lines"></div>
                        </div>
                    </div>
                </div>

                {/* Title */}
                <div className="mt-16 nav:mt-20 z-10 flex flex-col items-center justify-center w-full h-full">
                    <H1 className="mt-12 lg:!mt-20 mx-6 w-[300px] md:!w-full font-extrabold text-5xl lg:text-6xl text-center mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">Begin your</span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-indigo-500 to-fuchsia-500">&nbsp;journey</span>
                    </H1>

                    <p className="mx-6 text-xl max-h-[112px] md:max-h-[96px] w-[315px] md:w-[660px] md:text-2xl font-space-grotesk text-center text-[#888888]">
                        Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust.
                    </p>
                </div>

                {/* Main Content */}
                <div className="flex w-full container items-center justify-center gap-6 px-6 sm:mx-0 mt-8 md:!mt-14 lg:!mt-15 md:mb-4 flex-col lg:!flex-row z-10 lg:!translate-y-0">
                    <AnimatedBoxDingens
                        href="/repo"
                        title="Turborepo"
                        description="High-performance build system for JavaScript and TypeScript codebases."
                        logo="" />
                    <AnimatedBoxDingens
                        href="/pack"
                        title="Turbopack"
                        description="Introducing the Rust-powered successor to Webpack."
                        logo=""
                        color="fuchsia" />
                </div>

                {/* Subtitle */}
                <div className="z-10 py-16">
                    <div className="mx-auto">
                        <p className="bg-contain mb-2 md:!mb-4 text-sm font-semibold tracking-wide text-center text-[#888888] uppercase">
                            Trusted by teams from
                            <br className="inline md:hidden" />
                            around the world
                        </p>

                        <div className="z-50 grid grid-flow-col grid-rows-6 sm:grid-rows-3 md:grid-rows-2 lg:grid-rows-1">
                            <TrustedByLogo
                                href="https://vercel.com"
                                src="/images/logos/vercel.svg"
                                alt="Vercel's Logo"
                                height={75}
                                width={150} />

                            <TrustedByLogo
                                href="https://aws.com"
                                src="/images/logos/aws.svg"
                                alt="AWS's Logo"
                                height={75}
                                width={75} />

                            <TrustedByLogo
                                href="https://microsoft.com"
                                src="/images/logos/microsoft.svg"
                                alt="Microsoft's Logo"
                                height={75}
                                width={125} />

                            <TrustedByLogo
                                href="https://netflix.com"
                                src="/images/logos/netflix.svg"
                                alt="Netflix's Logo"
                                height={75}
                                width={110} />

                            <TrustedByLogo
                                href="https://disney.com"
                                src="/images/logos/disney.svg"
                                alt="Disney's Logo"
                                height={75}
                                width={100} />

                            <TrustedByLogo
                                href="https://adobe.com"
                                src="/images/logos/adobe.svg"
                                alt="Adobe's Logo"
                                height={75}
                                width={100} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

interface AnimatedBoxDingensProps {
    href: string;
    title: string;
    description: string;
    logo: string;
    color?: | "primary" | "fuchsia";
}

function AnimatedBoxDingens({ href, title, description, logo, color = "primary" }: AnimatedBoxDingensProps) {
    const gradientColor = color === "fuchsia" ? "from-fuchsia-500 to-indigo-500" : "from-primary-500 to-indigo-500";

    return (
        <div>
            <Link
                href={href}
                className="landing_counter-border w-[calc(100%_-_0px)] h-[304]px sm:!w-[488px] sm:h-[352px] group">
                <i
                    aria-hidden="true"
                    className="opacity-0 group-hover:opacity-100" />

                <div className="relative w-full h-full max-w-full !pb-12 pt-8 md:!pb-4 md:!pt-4 p-3 rounded-xl overflow-hidden flex flex-col items-center justify-center border border-[rgba(255,255,255,0.05)] turborepoCardBg">
                    <div className="flex items-center justify-center flex-1 mb-7 md:mb-0">
                        <div className="relative w-24 h-24">
                            <div className={classNames("pointer-events-none absolute w-[261px] h-[261px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b mix-blend-normal opacity-[0.15] blur-[60px]", gradientColor)} />

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="contents">
                                    <svg
                                        width="84"
                                        height="84"
                                        viewBox="0 0 84 84"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect
                                            width="84"
                                            height="84"
                                            rx="42"
                                            fill="black"></rect>
                                        <path d="M41.8878 27.9263C34.1892 27.9263 27.9258 34.1897 27.9258 41.8883C27.9258 49.5869 34.1892 55.8503 41.8878 55.8503C49.5864 55.8503 55.8498 49.5869 55.8498 41.8883C55.8498 34.1897 49.5864 27.9263 41.8878 27.9263ZM41.8878 49.1137C37.8968 49.1137 34.6624 45.8793 34.6624 41.8883C34.6624 37.8973 37.8968 34.6629 41.8878 34.6629C45.8788 34.6629 49.1132 37.8973 49.1132 41.8883C49.1132 45.8793 45.8788 49.1137 41.8878 49.1137Z"
                                            fill="white"></path>
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M43.0581 25.6329V20.4199C54.3889 21.0257 63.3901 30.4065 63.3901 41.8881C63.3901 53.3697 54.3889 62.7479 43.0581 63.3563V58.1433C51.5029 57.5401 58.1901 50.4837 58.1901 41.8881C58.1901 33.2925 51.5029 26.2361 43.0581 25.6329ZM29.5745 52.5481C27.3359 49.9637 25.8929 46.6721 25.6355 43.0581H20.4199C20.6903 48.1151 22.7131 52.7041 25.8825 56.2375L29.5719 52.5481H29.5745ZM40.7182 63.3563V58.1433C37.1016 57.8859 33.81 56.4455 31.2256 54.2043L27.5362 57.8937C31.0722 61.0657 35.6612 63.0859 40.7156 63.3563H40.7182Z"
                                            fill="url(#paint0_linear_967_8719)"></path>
                                        <rect
                                            x="0.5"
                                            y="0.5"
                                            width="83"
                                            height="83"
                                            rx="41.5"
                                            stroke="url(#paint1_radial_967_8719)"
                                            strokeOpacity="0.15"></rect>
                                        <rect
                                            x="0.5"
                                            y="0.5"
                                            width="83"
                                            height="83"
                                            rx="41.5"
                                            stroke="url(#paint2_linear_967_8719)"
                                            strokeOpacity="0.5"></rect>
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_967_8719"
                                                x1="43.9007"
                                                y1="23.4388"
                                                x2="22.7679"
                                                y2="44.5716"
                                                gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#0096FF"></stop>
                                                <stop offset="1" stopColor="#FF1E56"></stop>
                                            </linearGradient>
                                            <radialGradient
                                                id="paint1_radial_967_8719"
                                                cx="0"
                                                cy="0"
                                                r="1"
                                                gradientUnits="userSpaceOnUse"
                                                gradientTransform="translate(42) rotate(90) scale(108)">
                                                <stop stopColor="white"></stop>
                                                <stop offset="1" stopColor="white"></stop>
                                            </radialGradient>
                                            <linearGradient
                                                id="paint2_linear_967_8719"
                                                x1="0"
                                                y1="0"
                                                x2="18.375"
                                                y2="34.125"
                                                gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white"></stop>
                                                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center flex-1">
                        <H2 className="mb-3">
                            {title}
                        </H2>

                        <p className="text-lg !w-[280px] md:!w-[340px] font-space-grotesk text-center opacity-50 dark:opacity-70">
                            {description}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

interface TrustedByLogoParams {
    href: string;
    src: string;
    width: number;
    height: number;
    alt?: string;
}

function TrustedByLogo({ href, src, width, height, alt }: TrustedByLogoParams) {
    return (
        <Link
            href={href}
            className="w-48 lg:w-40 flex items-center justify-center transform opacity-80 brightness-[100] grayscale filter transition-transform duration-300 hover:-translate-y-[4px] hover:opacity-100 hover:brightness-100 hover:grayscale-0">
            <Image
                alt={alt ?? src}
                src={src}
                width={width}
                height={height}
                className="mx-8 inline" />
        </Link>
    )
}