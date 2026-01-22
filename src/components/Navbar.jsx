import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const isActive = (path) => {
        if (path === '/' && currentPath === '/') return true;
        if (path !== '/' && currentPath.startsWith(path)) return true;
        return false;
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const isHomePage = currentPath === '/';

            if (currentScrollY < 10) {
                // At top, always show
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY) {
                // Scrolling down
                if (isHomePage) {
                    setIsVisible(false);
                } else {
                    setIsVisible(false);
                }
            } else if (currentScrollY < lastScrollY) {
                // Scrolling up
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, currentPath]);

    return (
        <nav className={`navbar ${!isVisible ? 'navbar-hidden' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-left">
                    <Link to="/" className="navbar-logo">
                        <svg viewBox="0 0 65 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="navbar-logo-svg">
                            <path d="M36.165 0L32.7882 9.26001H9.2915V0H36.165Z" fill="currentColor" />
                            <path d="M38.6219 31.74L35.0731 41H0V16.4141L3.24545 11.6884H9.29149V31.74H38.6219Z" fill="currentColor" />
                            <path d="M64.9999 0L50.0769 41H39.3093L54.3233 0H64.9999Z" fill="currentColor" />
                        </svg>
                    </Link>
                    <ul className="navbar-menu">
                        <li>
                            <Link to="/whoareewe" className={`navbar-link ${isActive('/whoareewe') ? 'active' : ''}`}>
                                Who we are
                            </Link>
                        </li>
                        <li>
                            <Link to="/whatwedo" className={`navbar-link ${isActive('/whatwedo') ? 'active' : ''}`}>
                                What we do
                            </Link>
                        </li>
                        <li>
                            <Link to="/insights" className={`navbar-link ${isActive('/insights') ? 'active' : ''}`}>
                                Insights
                            </Link>
                        </li>
                        <li>
                            <Link to="/careers" className={`navbar-link ${isActive('/careers') ? 'active' : ''}`}>
                                Careers
                            </Link>
                        </li>
                        <li>
                            <a href="#contact" className="navbar-link">Contact</a>
                        </li>
                    </ul>
                </div>
                <a href="#" className="navbar-cta">Book a discovery call</a>
                <button className="navbar-mobile-menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;

