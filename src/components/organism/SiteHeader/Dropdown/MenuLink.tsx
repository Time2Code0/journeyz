import classNames from 'classnames';
import { Link } from '@components/atoms';
import { useHeaderDispatch } from '../context';

import type { SVGProps } from 'react';

interface MenuLinkProps {
    href: string;
    title: string;
    subTitle?: string;
    icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export function MenuLink({ href, title, subTitle, icon: Icon }: MenuLinkProps) {
    const { dispatch } = useHeaderDispatch();
    const hasIcon = typeof Icon === `function`;

    return (
        <Link
            href={href}
            className={classNames(
                `main-nav-link group flex w-full items-center rounded-md py-3 nav:items-start`,
                !subTitle && `!items-center`,
            )}
            onClick={() => dispatch({ type: `SET_MOBILE_MENU_STATE`, status: false })}
        >
            {hasIcon && (
                <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center">
                    <Icon className="h-4 w-4 text-white group-hover:text-primary-500" />
                </div>
            )}

            <div className={classNames(`flex w-full flex-col`, { 'ml-3': hasIcon })}>
                <p className="flex-shrink-0 text-ssm leading-4 text-white group-hover:text-primary-500">
                    {title}
                </p>
                {subTitle && (
                    <p className="mt-1 hidden text-xs font-normal leading-4 text-white nav:inline">
                        {subTitle}
                    </p>
                )}
            </div>
        </Link>
    );
}