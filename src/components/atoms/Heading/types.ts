export type HeadingProps = React.ComponentProps<'h1'> & {
    styleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
    size?: 1 | 2 | 3 | 4 | 5;
}

export type ShortHandHeadingProps = Omit<HeadingProps, 'size' | 'styleAs'>;