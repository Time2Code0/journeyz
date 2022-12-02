import { Link } from "@components/atoms";
import Footer from "@components/organism/Footer";
import classNames from "classnames";
import { ReactNode, useState } from "react";
import { Briefcase, ChevronRight, Code, Home, User } from "react-feather";
import BaseLayout from "./Base";

interface Props {
    children: ReactNode;
    showStartLearningBanner?: boolean;
}

export default function DashboardLayout({ children, showStartLearningBanner = true }: Props) {
    const [isOpen, setIsIOpen] = useState(true);

    return (
        <BaseLayout>
            <div className="flex gap-8 mt-12 px-12">
                {/* SIDE Navigation */}
                <div>
                    <div className="sticky top-12 h-[calc(100vh_-_6rem)] bg-primary-500 rounded-2xl p-6 flex flex-col">
                        <Link href="/">
                            <span className="sr-only">JourneyZ</span>

                            <div className="flex items-center group cursor-pointer">
                                <svg
                                    width="27"
                                    height="32"
                                    viewBox="0 0 38 43"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ml-2">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5.7346 0.971817L36.0112 18.4767C38.3367 19.8206 38.3368 23.1799 36.0115 24.5239L5.73423 42.0292C3.40538 43.3751 0.5 41.6914 0.5 39.0057V3.99513C0.5 1.31072 3.40451 -0.375901 5.7346 0.971817ZM4.23226 3.56854C3.90991 3.38205 3.5 3.61216 3.5 3.99513V39.0057C3.5 39.3874 3.90902 39.6188 4.23264 39.4321L34.5099 21.9268C34.8369 21.7378 34.8371 21.2631 34.5101 21.0742L4.23226 3.56854Z"
                                        className="fill-white" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M13.772 9.44228L3.81036 15.2013C3.61917 15.3116 3.5 15.5166 3.5 15.7409V27.259C3.5 27.483 3.61986 27.6894 3.81109 27.7999L13.772 33.5593C13.9636 33.6701 14.2 33.6701 14.3916 33.5593L24.352 27.801C24.5445 27.6897 24.6636 27.4839 24.6636 27.2599V15.7418C24.6636 15.5177 24.5437 15.3114 24.3525 15.2009L14.3916 9.44228C14.2002 9.33183 13.9634 9.33183 13.772 9.44228ZM12.2711 6.8447C13.3914 6.19744 14.7722 6.19744 15.8925 6.8447L25.8534 12.6033C26.9738 13.2508 27.6636 14.4483 27.6636 15.7418V27.2599C27.6636 28.5535 26.9748 29.7497 25.8539 30.398L15.8928 36.1567C14.7726 36.804 13.3914 36.8042 12.2711 36.1569L2.31024 30.3975C1.18988 29.7499 0.5 28.5524 0.5 27.259V15.7409C0.5 14.4478 1.18843 13.2509 2.31048 12.6032L12.2711 6.8447Z"
                                        className="fill-white" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0.5 14.9575C0.5 13.6056 1.9625 12.7612 3.13325 13.4378L14.7031 20.1277C15.2562 20.4459 15.5814 21.0321 15.5814 21.6482V35.4708C15.5814 36.0069 15.2953 36.5022 14.831 36.7701C14.3666 37.038 13.7946 37.0377 13.3306 36.7694L1.38379 29.8619L1.37869 29.8589C0.825347 29.5407 0.5 28.9544 0.5 28.3382V14.9575ZM3.5 17.1153L12.5814 22.3663V32.8708L3.5 27.6201V17.1153Z"
                                        className="fill-white" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M24.7545 13.5966C26.0542 12.8459 27.6596 13.7907 27.6633 15.2724L27.6633 15.2762L27.6633 28.2328C27.6633 28.9247 27.2945 29.5654 26.6943 29.9121L26.692 29.9134L15.4903 36.3896C14.1948 37.1379 12.5811 36.2001 12.5811 34.7103V21.7545C12.5811 21.0623 12.9502 20.4213 13.5509 20.0747L13.5523 20.0739L24.7545 13.5966ZM24.6633 17.1148L15.5811 22.3663V32.8718L24.6633 27.621V17.1148Z"
                                        className="fill-white" />
                                </svg>

                                {isOpen && (
                                    <span className="ml-4 text-2xl">JourneyZ</span>
                                )}
                            </div>
                        </Link>

                        <div
                            className="absolute -right-2 bg-gray-800 shadow-lg rounded-full cursor-pointer mt-11"
                            onClick={() => setIsIOpen(!isOpen)}>
                            <ChevronRight className={classNames("stroke-primary-500 transition-transform duration-300", isOpen ? "rotate-180" : "")} size={24} />
                        </div>

                        <ul className="mt-12 flex flex-col gap-4">
                            <NavigationItem
                                href="/dashbaord"
                                title="Dashboard"
                                icon={<Home size={27} />}
                                isOpen={isOpen} />
                            <NavigationItem
                                href="/courses"
                                title="Courses"
                                icon={<Briefcase size={27} />}
                                isOpen={isOpen} />
                        </ul>

                        <div className="mt-auto">
                            <div className="ml-2 flex items-center cursor-pointer">
                                <User size={27} />
                                {isOpen && (
                                    <>
                                        <span className="ml-2">Username</span>
                                        <div className="rotate-90 ml-2">
                                            <Code size={20} rotate={45} />
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full">
                    {children}
                </div>
            </div>

            <Footer showStartLearningBanner={showStartLearningBanner} />
        </BaseLayout>
    )
}

interface NavigationItemProps {
    href: string;
    title: string;
    icon: ReactNode;
    isOpen: boolean;
}

function NavigationItem({ href, title, icon, isOpen }: NavigationItemProps) {
    return (
        <li className={classNames("rounded-lg px-2 py-1 hover:bg-primary-400 transition-colors", true && ("bg-primary-400"))}>
            <Link
                href={href}
                className="flex items-center">
                {icon}
                <div className={isOpen ? "ml-2" : "w-0 opacity-0"}>
                    {title}
                </div>
            </Link>
        </li>
    )
}