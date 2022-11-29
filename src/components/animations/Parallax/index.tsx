import { useState, useRef, ReactNode, useEffect } from 'react'
import { motion, useTransform, useSpring, useReducedMotion, useScroll } from 'framer-motion'

interface Props {
    children: ReactNode;
    offset?: number;
    className?: string;
}

export default function Parallax({ children, offset = 50, className }: Props) {
    const prefersReducedMotion = useReducedMotion();
    const [elementTop, setElementTop] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    const { scrollY } = useScroll();

    const initial = elementTop - clientHeight;
    const final = elementTop + offset;

    const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
    const y = useSpring(yRange, { stiffness: 400, damping: 90 });

    useEffect(()=>{
        const element = ref.current;
        const onResize = () => {
            setElementTop(element!.getBoundingClientRect().top + window.scrollY || window.pageYOffset)
            setClientHeight(window.innerHeight)
        }
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [ref])

    // Don't parallax if the user has "reduced motion" enabled
    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>
    }

    return (
        <motion.div className={className} ref={ref} style={{ y }}>
            {children}
        </motion.div>
    )
}