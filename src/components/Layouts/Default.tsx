import Footer from "@components/organism/Footer";
import SiteHeader from "@components/organism/SiteHeader";
import { ReactNode } from "react";
import BaseLayout from "./Base";

interface DefaultLayoutProps {
    children: ReactNode;
    showStartLearningBanner?: boolean;
}

export default function DefaultLayout({ children, showStartLearningBanner = false }: DefaultLayoutProps) {
    return (
        <BaseLayout>
            <SiteHeader />
            {children}
            <Footer showStartLearningBanner={showStartLearningBanner} />
        </BaseLayout>
    )
}