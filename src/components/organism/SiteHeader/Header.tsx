import { Link } from "../../atoms";
import { HeaderProps } from "./types";
import { useHeaderDispatch, useHeaderState } from './context';
import classNames from 'classnames';
import { useEffect } from "react";
import styles from "./site-header.module.css.js";
import { BREAKPOINT } from "@utils/constants";
import { useScroll } from "@hooks/useScroll";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { CtaButtons } from "./CtaButtons";
import { MainNavigation } from "./MainNavigation";
import MenuToggle from "./MenuToggle";
import Logo from "./Logo";

export default function Header({ navItems }: HeaderProps) {
    const { isMobileMenuOpen } = useHeaderState();
    const { dispatch } = useHeaderDispatch();

    // Close the mobile menu on desktop view to avoid stickying
    // the menu permanently

    const isMobile = useMediaQuery(BREAKPOINT.nav);

    useEffect(() => {
        if (!isMobile) {
            dispatch({ type: `SET_MOBILE_MENU_STATE`, status: false });
        }
    }, [isMobile]);

    // We will deduct 16px from height to compensate the 16px
    // top margin of the header that comes from 'translate-y-4'

    // Define variables to show/hide the navigation on scroll

    const { y, direction } = useScroll();

    const headerHeightClasses = `h-16 nav:h-20`;
    const threshold = 160; // ScrollTop position where we fix the header
    const isScrollingDown = direction === `down`;
    const isScrollingUp = direction === `up`;

    return (
        <header>
            <div className={headerHeightClasses}>
                <div
                    className={classNames(
                        `z-50`,
                        headerHeightClasses,
                        isMobileMenuOpen
                            ? styles.isFixed
                            : {
                                [`${styles.isFixed} -translate-y-full`]:
                                    isScrollingDown && y > threshold,
                                [`${styles.transitionsEnabled}`]:
                                    (isScrollingDown && y > threshold + 50) ||
                                    (isScrollingUp && y >= 0),
                                [`${styles.isFixed} translate-y-0 nav:translate-y-4`]:
                                    isScrollingUp && y >= 0,
                            },
                    )}
                >
                    <div
                        className={classNames(
                            `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative flex h-full items-center justify-between nav:rounded`,
                            {
                                'header-fixed bg-white dark:bg-gray-900 shadow-2xl':
                                    isScrollingUp && y > threshold,
                            },
                            { 'mobile-menu-open bg-white dark:bg-gray-900': isMobileMenuOpen },
                        )}
                    >
                        {/* Header left: Logo and nav */}

                        <div className="flex items-center">
                            <Link href="/">
                                <span className="sr-only">Hygraph</span>

                                <Logo
                                    className="flex items-center group cursor-pointer"
                                    onClick={() =>
                                        dispatch({
                                            type: `SET_MOBILE_MENU_STATE`,
                                            status: false,
                                        })
                                    } />
                            </Link>

                            <MainNavigation
                                className={classNames(
                                    `fixed top-16 left-0 right-0 bottom-0 flex flex-col justify-between nav:static nav:left-auto nav:top-auto nav:ml-7 nav:h-full nav:flex-row`,
                                    {
                                        'hidden nav:flex': !isMobileMenuOpen,
                                        'z-50 bg-white dark:bg-gray-900': isMobileMenuOpen,
                                    },
                                )}
                                items={navItems}
                            />
                        </div>

                        {/* Header right: CTAs */}

                        <div className="hidden items-center nav:flex">
                            <CtaButtons className="space-x-2" />
                        </div>

                        <MenuToggle
                            className="-mr-2 lg:-mr-4 nav:hidden"
                            open={isMobileMenuOpen}
                            onClick={() =>
                                dispatch({
                                    type: `SET_MOBILE_MENU_STATE`,
                                    status: !isMobileMenuOpen,
                                })
                            }
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}