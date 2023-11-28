import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

import { useGlobalContext } from '../context';
import Wrapper from '../assets/wrappers/ThemeToggle';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <Wrapper>
      <div className="toggle-container">
        <button className="btn-toggle" onClick={toggleDarkTheme}>
          {isDarkTheme ? (
            <BsFillSunFill className="toggle-icon" />
          ) : (
            <BsFillMoonFill className="toggle-icon" />
          )}
        </button>
      </div>
    </Wrapper>
  );
};
export default ThemeToggle;
