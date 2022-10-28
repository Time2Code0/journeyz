import { NavigationItem } from './NavigationItem';
import { RemoveScroll } from 'react-remove-scroll';
import { CtaButtons } from './CtaButtons';
import { useHeaderState } from './context';

import type { INavItem } from './types';

type MainNavProps = {
    items: INavItem[];
    className?: string;
};

export function MainNavigation({ items, className }: MainNavProps) {
    const { isMobileMenuOpen } = useHeaderState();

    return (
        <RemoveScroll enabled={isMobileMenuOpen} removeScrollBar={false}>
            <nav className={className}>
                <ul className="overflow-y-auto px-4 md:px-6 nav:flex nav:overflow-y-visible nav:px-0">
                    {items.map((item) => (
                        <NavigationItem
                            id={item.id}
                            key={item.id}
                            label={item.label}
                            href={item.href}
                            content={item.content}
                        />
                    ))}
                </ul>

                <CtaButtons className="flex flex-col gap-3 px-4 py-4 md:px-6 nav:hidden" />
            </nav>
        </RemoveScroll>
    );
}
