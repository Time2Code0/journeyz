import classNames from 'classnames';
import { Link } from '@components/atoms';
import { useHeaderDispatch } from '../context';

export type CtaLinkProps = {
    href: string;
    title: string;
    className?: string;
};

export function CtaLink({ href, title, className }: CtaLinkProps) {
    const { dispatch } = useHeaderDispatch();

    return (
        <Link
            href={href}
            className={classNames(
                `main-nav-link inline-flex rounded-md text-ssm font-medium text-primary-500 nav:p-1`,
                className,
            )}
            onClick={() => dispatch({ type: `SET_MOBILE_MENU_STATE`, status: false })}
        >
            {title}
            <span className="ml-2 inline-block">&#8594;</span>
        </Link>
    );
}
