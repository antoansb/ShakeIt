import Wrapper from '../assets/wrappers/About';
import { useGlobalContext } from '../context';

const About = () => {
  const { isDarkTheme } = useGlobalContext();

  return (
    <Wrapper>
      <div
        className={
          isDarkTheme ? 'about-container dark-theme' : 'about-container'
        }
      >
        <h2>About Us</h2>
        <p>
          Welcome to <span>"ShakeIt"</span>! You are at a party, having fun,
          want to make a nice cocktail, but suddenly you cannot remember what
          ingredients are needed? Look no further, this is a perfect place for
          you! Choose from our vast catalogue of cocktails and have fun!
        </p>
      </div>
    </Wrapper>
  );
};
export default About;
