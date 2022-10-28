import NextLink from "next/link";
import { LinkHTMLAttributes, ReactNode } from "react";

export type LinkProps = LinkHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
    target?: string;
};

export default function Link({
    href,
    children,
    className,
    ...props
}: LinkProps) {
    if (!href) return null;

    const isInternalLink = href && href.startsWith('/');
    const isAnchorLink = href && href.startsWith('#');

    if (isInternalLink) {
        return (
            <NextLink href={href}>
                <a className={className} {...props}>
                    {children}
                </a>
            </NextLink>
        )
    }

    return (
        <a
            className={className}
            href={href}
            {...(!isAnchorLink && { rel: `noopener noreferrer`, target: `_blank` })}
            {...props}
        >
            {children}
        </a>
    )
}