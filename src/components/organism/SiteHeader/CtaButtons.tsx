import Button from '@components/molecules/Button';
import { useHeaderDispatch } from './context';

type CtaButtonsProps = {
    className?: string;
};

export function CtaButtons({ className }: CtaButtonsProps) {
    const { dispatch } = useHeaderDispatch();

    const hideMobileMenu = () => {
        dispatch({
            type: `SET_MOBILE_MENU_STATE`,
            status: false,
        });
    };

    return (
        <div className={className}>
            <Button
                className="justify-center"
                color="primary"
                href="/contact"
                onClick={hideMobileMenu}
            >
                Login
            </Button>

            <Button
                className="justify-center"
                color="primary"
                href="/signup"
                onClick={hideMobileMenu}
            >
                Join
            </Button>
        </div>
    );
}
