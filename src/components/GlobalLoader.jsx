import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HighVelocityLoader from './HighVelocityLoader';

const GlobalLoader = () => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true); // Start with true for initial page load
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    // Determines if we should show the loader for this path
    // You can exclude paths here if needed, e.g. if specific routes shouldn't trigger it
    const shouldShowLoader = (pathname) => {
        return true;
    };

    // Handle initial page load
    useEffect(() => {
        if (isInitialLoad) {
            // Lock body scroll during initial load
            document.body.style.overflow = 'hidden';

            const handleLoad = () => {
                // Wait a bit for smooth transition after load
                setTimeout(() => {
                    setIsLoading(false);
                    setIsInitialLoad(false);
                    document.body.style.overflow = 'unset';
                }, 300);
            };

            // Check if page is already loaded
            if (document.readyState === 'complete') {
                handleLoad();
            } else {
                window.addEventListener('load', handleLoad);
                return () => window.removeEventListener('load', handleLoad);
            }
        }
    }, [isInitialLoad]);

    // Handle route changes (after initial load)
    useLayoutEffect(() => {
        // Skip if this is the initial load
        if (isInitialLoad) return;

        // Trigger loading state immediately on location change
        if (shouldShowLoader(location.pathname)) {
            setIsLoading(true);

            // Lock body scroll
            document.body.style.overflow = 'hidden';
        }
    }, [location.pathname, isInitialLoad]);

    useEffect(() => {
        // Only handle route change loading (not initial load)
        if (isLoading && !isInitialLoad) {
            // Wait for animation duration (adjust as needed)
            const timer = setTimeout(() => {
                setIsLoading(false);
                // Restore body scroll
                document.body.style.overflow = 'unset';
            }, 800); // 0.8 seconds for a snappy transition

            return () => clearTimeout(timer);
        }
    }, [isLoading, isInitialLoad]);

    if (!isLoading) return null;

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 20000, // Ensure it's strictly on top of everything (Navbar is 10000)
            background: '#020f14',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 1,
            transition: 'opacity 0.3s ease-out'
        }}>
            <HighVelocityLoader size={64} />
        </div>
    );
};

export default GlobalLoader;
