import classnames from 'classnames';
import { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import { Link } from '../../atoms';
import { LinkProps } from '../../atoms/Link';

type HTMLButtonProps = Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'size' | 'onClick'
>;

type Size = 'small' | 'large' | 'regular';
type Appearance = 'minimal' | 'outline' | 'regular';
type Color = 'primary' | 'grey';

export interface ButtonProps extends HTMLButtonProps {
    size?: Size;
    appearance?: Appearance;
    hover?: Appearance;
    color?: Color;
    block?: boolean;
    href?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}

export default function Button({
    block = false,
    children,
    className,
    color = `primary`,
    disabled = false,
    href,
    hover,
    onClick,
    size = `regular`,
    appearance = `regular`,
    ...rest
}: ButtonProps) {
    const hoverColor = hover || color;

    const hoverClass = {
        regular: {
            primary: `hover:bg-primary-400`,
            grey: `hover:bg-gray-100 dark:hover:bg-gray-700`,
        },
        minimal: {
            primary: ``,
            grey: ``,
        },
        outline: {
            primary: `hover:bg-primary-400 hover:text-white`,
            grey: `hover:bg-gray-50`,
        },
    };

    const styleClass = {
        regular: {
            primary: `bg-primary-500 border-transparent text-white`,
            grey: `bg-gray-50 dark:bg-gray-800 border-transparent text-primary-500`,
        },
        minimal: {
            primary: `bg-transparent border-transparent`,
            grey: `bg-transparent border-transparent text-primary-500`,
        },
        outline: {
            primary: `bg-transparent border-primary-500 text-primary-500`,
            grey: `bg-transparent border-gray-50 text-primary-500`,
        },
    };

    const appearanceVal = (appearanceParam: Appearance) => {
        switch (appearance) {
            case `minimal`:
            case `outline`:
            case `regular`:
                return appearanceParam;
            default:
                return `regular`;
        }
    };

    const colourVal = (colourParam: Color) => {
        switch (colourParam) {
            case `primary`:
            case `grey`:
                return colourParam;
            default:
                return `grey`;
        }
    };

    const sizeClass = (sizeParam: Size) => {
        switch (sizeParam) {
            case `small`:
                return `px-2 py-1 text-xs md:text-sm`;
            case `large`:
                return `px-6 py-4 text-base md:text-lg leading-normal`;
            case `regular`:
            default:
                return `px-4 py-2 text-sm md:text-base`;
        }
    };

    const buttonClass = classnames(
        `border font-medium inline-block rounded-lg text-center transition-all`,
        sizeClass(size),
        styleClass[appearanceVal(appearance)][colourVal(color)],
        hoverClass[appearanceVal(appearance)][colourVal(hoverColor as Color)],
        className,
        {
            'cursor-not-allowed opacity-50': disabled,
            'w-full': block,
            // 'inline-flex items-center': withArrow,
        },
    );

    if (href) {
        return (
            <Link
                href={href}
                className={buttonClass}
                onClick={onClick}
                {...(rest as LinkProps)}>
                {children}
            </Link>
        )
    }

    return (
        <button
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
            type="submit"
            {...(rest as ButtonProps)}>
            {children}
        </button>
    )
}