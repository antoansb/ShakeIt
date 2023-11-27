import { Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/SingleCocktail';

const SingleCocktail = ({ id, name, image, info, glass }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="footer">
        <h2>{name}</h2>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn">
          details
        </Link>
      </div>
    </Wrapper>
  );
};
export default SingleCocktail;
