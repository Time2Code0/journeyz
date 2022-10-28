import { useState, KeyboardEvent, useMemo, useRef, useEffect } from 'react';
import classNames from 'classnames';

import { Link } from '@components/atoms';
import { BREAKPOINT } from '@utils/constants';
import { useMediaQuery } from '@hooks/useMediaQuery';
import { useHeaderDispatch, useHeaderState } from './context';

import type { NavigationItemProps } from './types';

import styles from './nav-item.module.css';

export function NavigationItem({ id, label, href, content }: NavigationItemProps) {
    const { activeItemId } = useHeaderState();
    const { dispatch } = useHeaderDispatch();

    const DropdownMenu = content || (() => <></>);
    const isMobile = useMediaQuery(BREAKPOINT.nav);

    const lastActiveItemId = useRef<string | null>(null);

    useEffect(() => {
        lastActiveItemId.current = activeItemId;
    }, [activeItemId]);

    // Handle menu item mouse hover and transitions on desktop view

    const isActive = useMemo(() => id === activeItemId, [id, activeItemId]);
    const [transitionsOn, setTransitionsOn] = useState(false);

    const onMouseEnter = () => {
        if (!isMobile) {
            setTransitionsOn(
                [`partners`, `pricing`, null].includes(lastActiveItemId.current),
            );

            dispatch({ type: `SET_ACTIVE_ITEM_ID`, id });
        }
    };

    const onMouseLeave = () => {
        if (!isMobile) {
            dispatch({ type: `SET_ACTIVE_ITEM_ID`, id: null });
            setTransitionsOn(false);
        }
    };

    // Handle menu item click on mobile

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        if (isMobile) {
            setIsExpanded(!isExpanded);
        }
    };

    // Handle keyboard navigation

    const dropdownButtonRef = useRef<HTMLButtonElement>(null);

    const handleKeyUp = (e: KeyboardEvent) => {
        switch (e.code) {
            case `Enter`:
            case `Space`:
                dispatch({ type: `SET_ACTIVE_ITEM_ID`, id });
                break;
            case `Escape`:
                dispatch({ type: `SET_ACTIVE_ITEM_ID`, id: null });

                if (isActive) {
                    dropdownButtonRef.current?.focus();
                }
                break;
            case `Tab`:
                if (id !== activeItemId) {
                    dispatch({ type: `SET_ACTIVE_ITEM_ID`, id: null });
                }
                break;
        }
    };

    const linkClasses = classNames(
        `main-nav-button inline-flex items-center justify-between w-full nav:w-auto px-2 nav:px-2.5 xl:px-3.5 h-16 nav:h-8 font-medium hover:text-primary-500 transition-colors ease-out duration-250`,
        { 'text-primary-500': isActive || (isExpanded && isMobile) },
    );

    return (
        <li
            className={classNames(`nav-item`, isActive && styles.navItem)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={toggleExpanded}
            onKeyUp={handleKeyUp}
        >
            {href !== undefined ? (
                // Default menu links
                <Link
                    className={linkClasses}
                    href={href}
                    onClick={() =>
                        dispatch({ type: `SET_MOBILE_MENU_STATE`, status: false })
                    }
                >
                    {label}
                </Link>
            ) : (
                // Dropdown menu links
                <>
                    <button
                        className={linkClasses}
                        ref={dropdownButtonRef}
                        aria-haspopup={true}
                        aria-expanded={isActive}
                    >
                        <span>{label}</span>
                        <svg
                            width="13"
                            height="8"
                            viewBox="0 0 13 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-2"
                        >
                            <path
                                d="M1.48047 1.5L6.48047 6.5L11.4805 1.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <DropdownMenu
                        className={classNames(
                            styles.fitContent,
                            `overflow-hidden nav:absolute nav:top-[calc(100%+4px)] nav:left-0 nav:right-0 nav:mx-auto nav:h-auto`,
                            isExpanded ? `h-auto border-b py-4 nav:py-0` : `h-0`,
                            isActive
                                ? `nav:opacity-1 nav:visible nav:translate-y-0`
                                : `nav:invisible nav:-translate-y-2 nav:opacity-0`,
                            {
                                'nav:transition-all nav:delay-200 nav:duration-200':
                                    transitionsOn,
                            },
                        )}
                    />
                </>
            )}
        </li>
    );
}
