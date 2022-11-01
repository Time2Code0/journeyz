import { H2, H3, Link } from "@components/atoms";
import { Button } from "@components/molecules";
import classNames from "classnames";
import { ReactNode } from "react"
import { Mail } from "react-feather";

interface FooterProps {
    showStartLearningBanner: boolean;
}

export default function Footer({ showStartLearningBanner }: FooterProps) {
    return (
        <footer>
            {showStartLearningBanner && (
                <div className="relative mt-16">
                    <div className="absolute bottom-0 left-0 w-full h-[100px] rounded-t-2xl bg-gray-50 dark:bg-gray-800" />

                    <div className="relative block lg:flex justify-between items-center px-12 lg:px-24 py-8 lg:py-16 mx-4 lg:mx-auto max-w-7xl text-center lg:text-left bg-primary-500 rounded-3xl">
                        <div>
                            <H2 className="mb-4">
                                Start learning now
                            </H2>
                            <H3>
                                <span className="opacity-60">Only </span>
                                <strong>$69</strong>
                                <span className="opacity-60"> for </span>
                                <strong>all courses</strong>
                            </H3>
                        </div>

                        <div className="flex flex-col items-center mt-6 lg:mt-0">
                            <Button
                                size="large"
                                color="grey"
                                href="/signup">
                                Start learning now
                            </Button>

                            <Link href="/gift" className="pt-3 px-10 hover:underline">
                                It's a gift
                            </Link>
                        </div>

                        <img
                            src="https://threejs-journey.com/assets/images/illustration-student@2x.webp"
                            className="absolute -top-[50px] lg:-top-5 left-[8%]"
                            width={120}
                            height={94} />
                    </div>
                </div>
            )}

            <div className="bg-gray-50 dark:bg-gray-800">
                <div className="flex justify-between mx-auto px-4 lg:px-6 py-12 text-center flex-wrap lg:flex-nowrap flex-col lg:flex-row max-w-6xl">
                    <Column>
                        <Link href="/" className="relative flex items-start w-[220px] h-[38px]">
                            <div className="inline-block w-[34px] h-[38px]">
                                <svg
                                    version="1.1"
                                    id="Calque_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 58.5 66.6"
                                    className="fill-current"
                                >
                                    <path
                                        className="face-1"
                                        d="M23.1,55.7l16.1-9.3c0,0,0,0,0,0c1.1-0.7,1.8-1.9,1.8-3.1l0.1-19.1L23.1,34.4V55.7z" />
                                    <path
                                        className="face-2"
                                        d="M21.3,10L2.9,20.5l18,10.2l18.4-10.5c0,0,0,0-0.1,0l-17.4-10C21.7,10.1,21.5,10.1,21.3,10z" />
                                    <path
                                        className="face-3"
                                        d="M1.8,46.7L18,56.6c0,0,0,0,0,0c0.3,0.2,0.5,0.3,0.8,0.3V34.5L0,23.8v19.7C0,44.9,0.7,46.1,1.8,46.7z" />
                                    <path
                                        className="triangle-1"
                                        d="M56.8,30.4l-11.4-6.6l-0.1,19.2l11.5-6.7c1-0.6,1.7-1.7,1.7-2.9C58.5,32.1,57.9,31,56.8,30.4z" />
                                    <path
                                        className="triangle-2"
                                        d="M0,50.7v12.6c0,1.2,0.6,2.3,1.7,2.9c0.5,0.3,1.1,0.5,1.7,0.5c0.6,0,1.2-0.2,1.7-0.5l10.4-6L0,50.7z" />
                                    <path
                                        className="triangle-3"
                                        d="M16.4,7L5.1,0.5c-1-0.6-2.3-0.6-3.4,0C0.6,1.1,0,2.2,0,3.4v13.2L16.4,7z" />
                                </svg>
                            </div>

                            <div className="inline-block ml-[6px] text-2xl">
                                <span>JourneyZ</span>
                            </div>

                            <span className="absolute top-8 left-10 text-xs">© 2022. All rights reserved.</span>
                        </Link>
                    </Column>

                    <Column>
                        <div>
                            <div className="mb-4 font-bold text-lg">Navigation</div>
                            <ul>
                                <li>
                                    <Link href="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/login">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/signup">
                                        Join
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/gift">
                                        Gift the course
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Column>

                    <Column>
                        <div>
                            <div className="mb-4 font-bold text-lg">Contact</div>
                            <ul>
                                <li>
                                    <Link href="mailto:info@journeyz.io">
                                        <span className="relative inline-block mr-1 top-[3px]">
                                            <Mail size={14} />
                                        </span>

                                        info@journeyz.io
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://discord.com/invite/PLACEHOLDER">
                                        <span className="relative inline-block mr-1 top-[2px] w-[14px] h-[14px]">
                                            <svg
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 175 200"
                                                className="fill-current"
                                            >
                                                <path d="M69.4,83.9c-5.7,0-10.2,5-10.2,11.1s4.6,11.1,10.2,11.1c5.7,0,10.2-5,10.2-11.1C79.7,88.9,75.1,83.9,69.4,83.9z M105.9,83.9c-5.7,0-10.2,5-10.2,11.1s4.6,11.1,10.2,11.1c5.7,0,10.2-5,10.2-11.1S111.6,83.9,105.9,83.9z" />
                                                <path d="M154.5,0h-134C9.2,0,0,9.2,0,20.6v135.2c0,11.4,9.2,20.6,20.5,20.6h113.4l-5.3-18.5l12.8,11.9l12.1,11.2l21.5,19V20.6C175,9.2,165.8,0,154.5,0z M115.9,130.6c0,0-3.6-4.3-6.6-8.1c13.1-3.7,18.1-11.9,18.1-11.9c-4.1,2.7-8,4.6-11.5,5.9c-5,2.1-9.8,3.5-14.5,4.3c-9.6,1.8-18.4,1.3-25.9-0.1c-5.7-1.1-10.6-2.7-14.7-4.3c-2.3-0.9-4.8-2-7.3-3.4c-0.3-0.2-0.6-0.3-0.9-0.5c-0.2-0.1-0.3-0.2-0.4-0.3c-1.8-1-2.8-1.7-2.8-1.7s4.8,8,17.5,11.8c-3,3.8-6.7,8.3-6.7,8.3c-22.1-0.7-30.5-15.2-30.5-15.2c0-32.2,14.4-58.3,14.4-58.3c14.4-10.8,28.1-10.5,28.1-10.5l1,1.2c-18,5.2-26.3,13.1-26.3,13.1s2.2-1.2,5.9-2.9c10.7-4.7,19.2-6,22.7-6.3c0.6-0.1,1.1-0.2,1.7-0.2c6.1-0.8,13-1,20.2-0.2c9.5,1.1,19.7,3.9,30.1,9.6c0,0-7.9-7.5-24.9-12.7l1.4-1.6c0,0,13.7-0.3,28.1,10.5c0,0,14.4,26.1,14.4,58.3C146.5,115.4,138,129.9,115.9,130.6z" />
                                            </svg>
                                        </span>

                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Column>

                    <Column className="mr-0">
                        <div>
                            <div className="mb-4 font-bold text-lg">Legal</div>
                            <ul>
                                <li>
                                    <Link href="/legal-notice">
                                        Legal notice
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/general-conditions">
                                        General Conditions of Sale and Use
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Column>
                </div>
            </div>
        </footer>
    )
}

interface ColumnProps {
    children: ReactNode;
    className?: string;
}

function Column({ children, className }: ColumnProps) {
    return (
        <div className={classNames("text-left mb-8 lg:mb-0 mr-4 lg:mr-16", className)}>
            {children}
        </div>
    )
}