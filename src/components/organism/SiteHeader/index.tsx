import Courses from './Content/Courses';
import Tutorials from './Content/Tutorials';
import { HeaderProvider } from './context';
import Header from './Header';
import { INavItem } from './types';

const navItems: INavItem[] = [
    // {
    //     id: `courses`,
    //     label: `Courses`,
    //     content: Courses,
    // },
    {
        id: `courses`,
        label: `Courses`,
        href: "/all-courses"
    },
    {
        id: `tutorials`,
        label: `Tutorials`,
        content: Tutorials,
    },
];

export default function SiteHeader() {
    return (
        <HeaderProvider>
            <Header navItems={navItems} />
        </HeaderProvider>
    )
}