import Footer from "@components/organism/Footer";
import Logo from "@components/organism/SiteHeader/Logo";
import { ReactNode } from "react";
import { Search } from "react-feather";
import BaseLayout from "./Base";

interface Props {
    children: ReactNode;
    showStartLearningBanner?: boolean;
}

export default function DashboardLayout({ children, showStartLearningBanner = true }: Props) {
    return (
        <BaseLayout>
            {/* TOP Navigation */}
            <div className="flex">
                <Logo />

                <button className="flex h-8 cursor-text items-center rounded-md border px-2 text-sm border-gray-800 bg-gray-900 hover:border-gray-700 hover:bg-gray-800">
                    <span>
                        <Search />
                    </span>
                    <span className="mr-8 text-slate-500">
                        Search...
                    </span>
                    <span className="inline-block whitespace-nowrap rounded px-1.5 align-middle font-medium leading-4 tracking-wide [font-size:10px] border border-slate-600 text-slate-400">
                        ⌘K
                    </span>
                </button>
            </div>

            <div className="flex">
                {/* SIDE Navigation */}
                <div className="bg-gray-800 rounded-2xl">

                </div>

                {children}
            </div>

            <Footer showStartLearningBanner={showStartLearningBanner} />
        </BaseLayout>
    )
}