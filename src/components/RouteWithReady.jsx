import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRouteReady } from '../context/RouteReadyContext';

export default function RouteWithReady({ children }) {
  const { pathname } = useLocation();
  const { signalReady } = useRouteReady();

  useEffect(() => {
    signalReady(pathname);
  }, [pathname, signalReady]);

  return children;
}
