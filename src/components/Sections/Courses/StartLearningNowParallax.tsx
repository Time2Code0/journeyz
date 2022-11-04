import { Parallax } from "@components/animations";
import { H2 } from "@components/atoms";
import { Button } from "@components/molecules";
import Image from "next/image";

export default function StartLearingNowParallax() {
    return (
        <section className="mt-16 mp-12">
            <div className="bg-primary-500 py-16 lg:py-32 overflow-hidden">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="relative flex flex-col lg:flex-row justify-between items-center">
                        <div className="relative max-w-2xl lg:max-w-[45%] text-center lg:text-left">
                            <H2 className="mb-4">
                                Start learning now!
                            </H2>

                            <p className="mb-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio quisque integer elementum egestas aliquet tincidunt.
                            </p>

                            <Button href="#all-courses" size="large" color="grey">
                                Our Courses
                            </Button>
                        </div>

                        <div className="relative mt-20 lg:mt-0 w-[70%] lg:w-[42%] lg:mr-12">
                            <Image
                                src="/images/CoursesParallax/Overview.svg"
                                width={484}
                                height={309}/>

                            <Parallax offset={25} className="absolute -right-[7%] -bottom-[12%] w-[43%]" >
                                <Image
                                    src="/images/CoursesParallax/Bars.svg"
                                    width={207}
                                    height={141} />
                            </Parallax>

                            <Parallax offset={75} className="absolute -right-[15%] -top-[26%] w-[39%]">
                                <Image
                                    src="/images/CoursesParallax/Text.svg"
                                    width={188}
                                    height={203} />
                            </Parallax>

                            <Parallax className="absolute -left-[10%] -bottom-[12%] w-[27%]" >
                                <Image
                                    src="/images/CoursesParallax/Mobile.svg"
                                    width={132}
                                    height={235} />
                            </Parallax>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}