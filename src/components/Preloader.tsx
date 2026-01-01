import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Preloader.css';

interface PreloaderProps {
    onLoadingComplete: () => void;
}

export function Preloader({ onLoadingComplete }: PreloaderProps) {
    const [progress, setProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => setIsLoaded(true);

        if (document.readyState === 'complete') {
            setIsLoaded(true);
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, []);

    useEffect(() => {
        let interval: number;

        if (isLoaded) {
            setProgress(100);
        } else {
            interval = setInterval(() => {
                setProgress((prev) => {
                    // Slow down as it gets closer to 90%
                    const remaining = 90 - prev;
                    if (remaining <= 0) return 90;

                    const increment = Math.max(0.1, remaining * 0.05); // Decelerating increment
                    return prev + increment;
                });
            }, 50);
        }

        return () => clearInterval(interval);
    }, [isLoaded]);

    useEffect(() => {
        if (progress >= 100) {
            // Small delay to ensure the user sees 100%
            const timer = setTimeout(() => {
                onLoadingComplete();
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [progress, onLoadingComplete]);

    return (
        <motion.div
            className="preloader-container"
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <div className="preloader-content">
                <motion.div
                    className="preloader-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Arcbyte
                </motion.div>

                <motion.div
                    className="preloader-subtext"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Portfolio
                </motion.div>

                <div className="progress-bar-container">
                    <motion.div
                        className="progress-bar"
                        style={{ width: `${progress}%` }}
                        layoutId="progress"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-2 text-xs text-neutral-500 font-mono"
                >
                    {Math.round(progress)}%
                </motion.div>
            </div>
        </motion.div>
    );
}
