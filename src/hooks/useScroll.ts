import { useEffect, useRef, useState } from 'react';

type ScrollPosition = {
    x: number;
    y: number;
};

type ScrollDirection = 'up' | 'down' | null;

export function useScroll(threshold = 0) {
    const [direction, setDirection] = useState<ScrollDirection>(null);

    const [state, setState] = useState<ScrollPosition>({
        x: 0,
        y: 0,
    });

    const prevScrollY = useRef(0);

    useEffect(() => {
        const updateScrollValues = () => {
            setState({
                x: window.scrollX,
                y: window.scrollY,
            });

            setDirection(window.scrollY > prevScrollY.current ? `down` : `up`);

            prevScrollY.current = window.scrollY <= 0 ? 0 : window.scrollY;
        };

        const onScroll = () => {
            if (Math.abs(window.scrollY - prevScrollY.current) > threshold) {
                window.requestAnimationFrame(updateScrollValues);
            }
        };

        window.addEventListener(`scroll`, onScroll);

        return () => window.removeEventListener(`scroll`, onScroll);
    }, [threshold]);

    return {
        x: state.x,
        y: state.y,
        direction,
    };
}