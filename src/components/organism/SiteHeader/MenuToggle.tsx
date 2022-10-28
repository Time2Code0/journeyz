import { DOMAttributes } from 'react';
import classnames from 'classnames';
import { Menu, X } from 'react-feather';

interface MenuToogleProps {
    className?: string;
    open: boolean;
    onClick: DOMAttributes<HTMLButtonElement>['onClick'];
}

export default function MenuToggle({
    className = `text-white`,
    onClick,
    open,
}: MenuToogleProps) {
    const buttonClass = classnames(
        `appearance-none focus:outline-none w-12 h-12 flex items-center justify-center`,
        className,
    );

    const svgClass = `h-5 fill-current w-5`;

    return (
        <button type="button" className={buttonClass} onClick={onClick}>
            {open ? (
                <X className={svgClass} />
            ) : (
                <Menu className={svgClass} />
            )}
            {` `}
            <span className="sr-only">{open ? `Close menu` : `Menu`}</span>
        </button>
    );
}