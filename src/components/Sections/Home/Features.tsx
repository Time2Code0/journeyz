import { H4 } from "@components/atoms";
import classNames from "classnames";
import { ReactNode } from "react";

export default function Features() {
    return (
        <section id="features">
            <div className="sticky top-0">
                <FeatureSlide
                    title="01 Kick Off"
                    color="primary"
                    className="top-0 mb-32">
                    <div>
                        First
                    </div>
                </FeatureSlide>
                <FeatureSlide
                    title="02 Design"
                    color="indigo"
                    className="top-16 -mt-16 mb-16">
                    <div>
                        Second
                    </div>
                </FeatureSlide>
                <FeatureSlide
                    title="03 Development"
                    color="fuchsia"
                    className="top-32 mb-16">
                    <div>
                        Therd
                    </div>
                </FeatureSlide>
            </div>
        </section>
    )
}

interface FeatureSlideProps {
    title: string;
    children: ReactNode;
    className?: string;
    color: | "primary" | "indigo" | "fuchsia";
}

function FeatureSlide({ title, children, className, color }: FeatureSlideProps) {
    const borderColor = color === "indigo" ? "border-indigo-500" : color === "fuchsia" ? "border-fuchsia-500" : "border-primary-500";
    const textColor = color === "indigo" ? "text-indigo-500" : color === "fuchsia" ? "text-fuchsia-500" : "text-primary-500";

    return (
        <div className={classNames("relative lg:sticky border-t-2 bg-gray-900", borderColor, className)}>
            <div className="px-[5%]">
                <div className="mx-auto w-full max-w-7xl">
                    <H4 className={textColor}>
                        {title}
                    </H4>

                    <div className="py-12 min-h-[45vh]">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}