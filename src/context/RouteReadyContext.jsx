import { createContext, useContext, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

const RouteReadyContext = createContext(null);

export function RouteReadyProvider({ children }) {
  const [readyPathname, setReadyPathname] = useState(null);

  const signalReady = useCallback((pathname) => {
    setReadyPathname(pathname);
  }, []);

  const clearReady = useCallback(() => {
    setReadyPathname(null);
  }, []);

  const value = {
    readyPathname,
    signalReady,
    clearReady,
  };

  return (
    <RouteReadyContext.Provider value={value}>
      {children}
    </RouteReadyContext.Provider>
  );
}

export function useRouteReady() {
  const ctx = useContext(RouteReadyContext);
  if (!ctx) throw new Error('useRouteReady must be used within RouteReadyProvider');
  return ctx;
}

