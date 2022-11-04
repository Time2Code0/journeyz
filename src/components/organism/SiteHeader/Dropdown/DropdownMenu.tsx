import { ReactNode } from 'react';
import classNames from 'classnames';

type DropdownMenuProps = {
    className?: string;
    children: ReactNode;
};

export function DropdownMenu({ className, children }: DropdownMenuProps) {
    return (
        <ul
            className={classNames(
                `nav-menu z-50 min-w-max rounded-lg bg-gray-900 pl-3 nav:flex nav:pl-0 nav:shadow`,
                className,
            )}
        >
            {children}
        </ul>
    );
}
