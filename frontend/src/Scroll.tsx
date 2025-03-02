import React, { useEffect, useRef, useCallback, ReactNode } from 'react';
import "./Scroll.css";

interface MegaScrollPageProps {
    children: ReactNode;
    onActive?: () => void;
    threshold?: number;
}

const ScrollPage: React.FC<MegaScrollPageProps> = ({ children, onActive, threshold = 0.5 }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    const onScroll = useCallback((entries: IntersectionObserverEntry[]) => {
        if (!document.fullscreenElement) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    onActive?.();
                }
            });
        }
    }, [onActive]);

    useEffect(() => {
        if (ref.current && onActive) {
            observerRef.current = new IntersectionObserver(onScroll, { threshold });
            observerRef.current.observe(ref.current);
        }
        return () => observerRef.current?.disconnect();
    }, [onScroll, threshold]);

    return (
        <div ref={ref} className="ms-item">
            {children}
        </div>
    );
};

interface MegaScrollProps {
    children?: ReactNode;
    onChange?: (index: number) => void;
    noFocus?: boolean;
    threshold?: number;
}

const Scroll: React.FC<MegaScrollProps> = ({ children, onChange, noFocus = false, threshold }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const sections = React.Children.toArray(children);

    useEffect(() => {
        if (!noFocus) {
            ref.current?.focus();
        }
    }, [noFocus]);

    return (
        <div ref={ref} className="ms-container" tabIndex={-1}>
            {sections.map((child, i) => (
                <ScrollPage key={i} threshold={threshold} onActive={() => onChange?.(i)}>
                    {child}
                </ScrollPage>
            ))}
        </div>
    );
};

export default Scroll;
