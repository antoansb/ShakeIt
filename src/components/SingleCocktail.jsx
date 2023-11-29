import { Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/SingleCocktail';
import { useGlobalContext } from '../context';

const SingleCocktail = ({ id, name, image, info, glass }) => {
  const { isDarkTheme } = useGlobalContext();

  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className={isDarkTheme ? 'footer dark-theme' : 'footer'}>
        <h2>{name}</h2>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/11298`} className="btn">
          details
        </Link>
      </div>
    </Wrapper>
  );
};
export default SingleCocktail;
