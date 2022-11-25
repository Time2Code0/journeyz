import Footer from "@components/organism/Footer";
import Logo from "@components/organism/SiteHeader/Logo";
import { ReactNode } from "react";
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