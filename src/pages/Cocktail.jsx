import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

import Wrapper from '../assets/wrappers/SingleCocktailPage';

// const singleCocktailURL =
//   'https://www.cocktaildb.com/api/json/v1/1/lookup.php?i=';

// export const loader = async ({ params }) => {
//   const { id } = params;
//   const response = await axios.get(`${singleCocktailURL}${id}`);
//   console.log(response);
//   return null;
// };

const Cocktail = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <header>
        <button onClick={() => navigate(-1)} className="btn">
          back home
        </button>
        <h2>custom cocktail</h2>
      </header>
      <div className="cocktail">
        <img
          src="https://www.herbanfeast.com/wp-content/uploads/Cocktails-HerbanFeast_6-1024x683.jpg"
          alt="custom name"
          className="img"
        />
        <div className="cocktail-info">
          <p>
            <span className="info-row">name:</span>
            name
          </p>
          <p>
            <span className="info-row">category:</span>
            category
          </p>
          <p>
            <span className="info-row">info:</span>
            info
          </p>
          <p>
            <span className="info-row">glass:</span>
            glass
          </p>
          <p>
            <span className="info-row">ingredients:</span>
            ingredient1, ingredient2, ingreient3, ...
          </p>
          <p>
            <span className="info-row">instructions:</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quas.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Cocktail;
