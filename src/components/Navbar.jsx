import { NavLink } from 'react-router-dom';

import { useGlobalContext } from '../context';
import ThemeToggle from './ThemeToggle';

import Wrapper from '../assets/wrappers/Navbar';

const Navbar = () => {
  const { isDarkTheme } = useGlobalContext();

  return (
    <Wrapper>
      <div className={isDarkTheme ? 'dark-theme' : 'nav-container'}>
        <div className="nav-center">
          <span className="logo">ShakeIt</span>
          <div className="nav-links">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </div>
          <div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
