import { H4 } from "@components/atoms";
import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { SectionTitle } from "@components/molecules";

export default function StudentsWork() {
    return (
        <section id="testimonials">
            <SectionTitle>
                <div className="text-center">
                    <span className="text-primary-500">420 Students</span> have joined the course!
                    <br />
                    Have a look at their works
                </div>
            </SectionTitle>

            <div className="mt-16 overflow-hidden">
                <ParallaxCards
                    texts={[
                        "DON'T BOTHER YOUR DEV-TEAM WITH DAILY CHANGES",
                        "DON'T LOSE CUSTOMERS BECAUSE OF AN UGLY AND SLOW SITE",
                        "DON'T WASTE TIME WAITING FOR OTHERS TO APPLY CHANGES",
                        "DON'T BOTHER YOUR DEV-TEAM WITH DAILY CHANGES",
                    ]}
                    baseVelocity={1} />

                <ParallaxCards
                    texts={[
                        "DON'T BOTHER YOUR DEV-TEAM WITH DAILY CHANGES",
                        "DON'T LOSE CUSTOMERS BECAUSE OF AN UGLY AND SLOW SITE",
                        "DON'T WASTE TIME WAITING FOR OTHERS TO APPLY CHANGES",
                        "DON'T BOTHER YOUR DEV-TEAM WITH DAILY CHANGES",
                    ]}
                    baseVelocity={-1} />
            </div>
        </section>
    )
}

interface ParallaxCardsProps {
    texts: string[];
    baseVelocity?: number;
}

function ParallaxCards({ texts, baseVelocity = 100 }: ParallaxCardsProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 10000], [0, 5], {
        clamp: false
    });
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    const prevT = useRef<number>(0);
    useAnimationFrame((t) => {
        if (!prevT.current) prevT.current = t;

        const timeDelta = t - prevT.current;
        let moveBy = directionFactor.current * baseVelocity * (timeDelta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);

        prevT.current = t;
    });

    return (
        <div className="parallax flex flex-nowrap mb-12">
            <motion.div className="scroller flex flex-nowrap gap-9" style={{ x }}>
                {texts.map((value, index) => {
                    return (
                        <Card key={`0-${index}`} text={value} />
                    )
                })}
                {texts.map((value, index) => {
                    return (
                        <Card key={`1-${index}`} text={value} />
                    )
                })}

                {texts.map((value, index) => {
                    return (
                        <Card key={`2-${index}`} text={value} />
                    )
                })}
                {texts.map((value, index) => {
                    return (
                        <Card key={`3-${index}`} text={value} />
                    )
                })}
            </motion.div>
        </div>
    )
}

interface CardProps {
    text: string;
}

function Card({ text }: CardProps) {
    return (
        <div
            className="relative w-[35vw]">
            <div className="relative z-30 p-[5vw] lg:px-[3vw] lg:py-[6vw] flx justify-center items-center text-center h-full border-2 border-white rounded-2xl bg-gray-900">
                <H4>
                    {text}
                </H4>
            </div>
            <div className="absolute inset-0 z-20 flex justify-center items-center h-full border-2 rounded-2xl border-primary-500 translate-x-2 translate-y-2 bg-gray-900" />
            <div className="absolute inset-0 z-10 flex justify-center items-center h-full border-2 rounded-2xl border-primary-500 translate-x-4 translate-y-4 bg-gray-900" />
        </div>
    )
}