import Breadcrumbs from "@components/organism/Breadcrumbs";
import Footer from "@components/organism/Footer";
import SiteHeader from "@components/organism/SiteHeader";
import { ReactNode } from "react";
import BaseLayout from "./Base";

interface DefaultLayoutProps {
    children: ReactNode;
    showStartLearningBanner?: boolean;
    showBreadcrumbs?: boolean;
}

export default function DefaultLayout({ children, showStartLearningBanner = false, showBreadcrumbs = true }: DefaultLayoutProps) {
    return (
        <BaseLayout>
            <SiteHeader />
            {showBreadcrumbs && <Breadcrumbs />}
            {children}
            <Footer showStartLearningBanner={showStartLearningBanner} />
        </BaseLayout>
    )
}