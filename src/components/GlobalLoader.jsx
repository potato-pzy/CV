import React, { useState, useLayoutEffect, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';
import { useLocation } from 'react-router-dom';
import HighVelocityLoader from './HighVelocityLoader';
import { useRouteReady } from '../context/RouteReadyContext';

const MIN_SHOW_MS = 400;
const MAX_SHOW_MS = 4000;
const SKIP_PATH = '/static';

const GlobalLoader = () => {
  const location = useLocation();
  const { readyPathname, clearReady } = useRouteReady();
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const loadStartRef = useRef(Date.now());

  const shouldShowLoader = () => location.pathname !== SKIP_PATH;

  // Show loader immediately on internal link click (before navigation)
  useEffect(() => {
    const handleClick = (e) => {
      const a = e.target.closest('a[href^="/"]');
      if (!a || a.getAttribute('href')?.startsWith('/#')) return;
      const href = (a.getAttribute('href') || '').split('?')[0];
      if (href === SKIP_PATH) return;
      if (a.origin !== window.location.origin) return;
      if (isInitialLoad) return;
      flushSync(() => {
        setIsLoading(true);
        loadStartRef.current = Date.now();
      });
      clearReady();
      document.body.style.overflow = 'hidden';
    };
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [isInitialLoad, clearReady]);

  // Initial page load
  useEffect(() => {
    if (!isInitialLoad) return;
    if (location.pathname === SKIP_PATH) {
      setIsLoading(false);
      setIsInitialLoad(false);
      document.body.style.overflow = 'unset';
      return;
    }
    document.body.style.overflow = 'hidden';
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
        setIsInitialLoad(false);
        document.body.style.overflow = 'unset';
      }, 300);
    };
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [isInitialLoad, location.pathname]);

  // On location change: show loader, clear ready
  useLayoutEffect(() => {
    if (isInitialLoad) return;
    if (shouldShowLoader()) {
      setIsLoading(true);
      clearReady();
      loadStartRef.current = Date.now();
      document.body.style.overflow = 'hidden';
    }
  }, [location.pathname, isInitialLoad, clearReady]);

  // Hide when route ready (pathname matches) past MIN_SHOW_MS, or MAX_SHOW_MS cap
  useEffect(() => {
    if (!isLoading || isInitialLoad) return;

    const hide = () => {
      setIsLoading(false);
      document.body.style.overflow = 'unset';
    };

    const check = () => {
      const elapsed = Date.now() - loadStartRef.current;
      const routeReady = readyPathname === location.pathname;
      if ((routeReady && elapsed >= MIN_SHOW_MS) || elapsed >= MAX_SHOW_MS) {
        hide();
      }
    };

    const interval = setInterval(check, 50);
    const maxT = setTimeout(hide, MAX_SHOW_MS);

    return () => {
      clearInterval(interval);
      clearTimeout(maxT);
    };
  }, [isLoading, isInitialLoad, readyPathname, location.pathname]);

  if (!isLoading || location.pathname === SKIP_PATH) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 20000,
        background: '#020f14',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 1,
        transition: 'opacity 0.3s ease-out',
      }}
    >
      <HighVelocityLoader size={64} />
    </div>
  );
};

export default GlobalLoader;
