import classNames from "classnames";
import { HeadingProps, ShortHandHeadingProps } from "./types";

const variants = {
    1: `text-3xl md:text-4xl lg:text-5xl tracking-tight`,
    2: `text-2xl md:text-3xl lg:text-4xl tracking-tight`,
    3: `text-xl md:text-2xl lg:text-3xl`,
    4: `text-lg md:text-xl lg:text-2xl`,
    5: `text-base md:text-lg lg:text-xl`,
};

const keys = {
    h1: 1,
    h2: 2,
    h3: 3,
    h4: 4,
    h5: 5,
} as const;

export default function Heading({
    children,
    className,
    styleAs = "h1",
    size,
    ...props
}: HeadingProps) {
    const headingClassName = classNames(variants[size ? size : keys[styleAs]], "font-bold leading-snug", className);

    if (styleAs == "h1") {
        return (
            <h1 className={headingClassName} {...props}>
                {children}
            </h1>
        )
    }
    else if (styleAs == "h2") {
        return (
            <h2 className={headingClassName} {...props}>
                {children}
            </h2>
        )
    }
    else if (styleAs == "h3") {
        return (
            <h3 className={headingClassName} {...props}>
                {children}
            </h3>
        )
    }
    else if (styleAs == "h4") {
        return (
            <h4 className={headingClassName} {...props}>
                {children}
            </h4>
        )
    }
    else if (styleAs == "h5") {
        return (
            <h5 className={headingClassName} {...props}>
                {children}
            </h5>
        )
    }

    return null;
}

export function H1(props: ShortHandHeadingProps) {
    return <Heading {...props} styleAs="h1" size={1} />
}

export function H2(props: ShortHandHeadingProps) {
    return <Heading {...props} styleAs="h2" size={2} />
}

export function H3(props: ShortHandHeadingProps) {
    return <Heading {...props} styleAs="h3" size={3} />
}

export function H4(props: ShortHandHeadingProps) {
    return <Heading {...props} styleAs="h4" size={4} />
}

export function H5(props: ShortHandHeadingProps) {
    return <Heading {...props} styleAs="h5" size={5} />
}