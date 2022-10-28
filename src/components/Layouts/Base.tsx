import { ReactNode } from "react"
import dynamic from 'next/dynamic';
// import { useApplicationState } from '@/contexts/application';

interface BaseLayoutProps {
    children: ReactNode;
}

const DynamicCookieNotice = dynamic(() => import(`../organism/CookieNotice`));

export default function BaseLayout({ children }: BaseLayoutProps) {
    // const { acceptedCookies } = useApplicationState();

    const acceptedCookies = true;

    return (
        <div>
            {children}

            {!acceptedCookies && <DynamicCookieNotice />}
        </div>
    )
}