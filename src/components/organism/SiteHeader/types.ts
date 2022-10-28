import { ElementType } from "react";

export interface INavItem {
    id: string;
    label: string;
    href?: string;
    content?: ElementType<{ className?: string }>;
}

export interface HeaderProps {
    navItems: INavItem[]; 
}

export type NavigationItemProps = INavItem;