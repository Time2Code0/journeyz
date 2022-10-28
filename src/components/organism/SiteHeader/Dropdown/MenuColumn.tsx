import classNames from 'classnames';

import type { ReactNode } from 'react';
import type { CtaLinkProps } from './CtaLink';

import { CtaLink } from './CtaLink';

type MenuColumnProps = {
    title?: string | null;
    ctaLinkProps?: CtaLinkProps;
    className?: string;
    isSidebar?: boolean;
    children: ReactNode;
};

export function MenuColumn({
    title,
    ctaLinkProps,
    className,
    children,
    isSidebar,
}: MenuColumnProps) {
    return (
        <ul
            className={classNames(
                `px-2 nav:flex nav:h-full nav:flex-col nav:p-6`,
                className,
                isSidebar ? `nav:w-[23rem]` : `nav:w-[18rem]`,
                {
                    'hidden space-y-3 border-l border-gray-50 dark:border-gray-800 bg-gray-50 dark:bg-gray-800': isSidebar,
                },
            )}
        >
            {title !== null && (
                <li
                    className={classNames(
                        `text-xs font-medium uppercase leading-none tracking-wider text-gray-900 dark:text-white`,
                        title === undefined ? `h-0 nav:h-auto nav:pb-5` : `pb-5`,
                    )}
                >
                    {title || <span>&nbsp;</span>}
                </li>
            )}

            {children}

            {ctaLinkProps && (
                <li className="mt-auto py-3 nav:py-0">
                    <CtaLink {...ctaLinkProps} />
                </li>
            )}
        </ul>
    );
}
