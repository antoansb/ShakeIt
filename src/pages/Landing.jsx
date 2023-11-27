import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

import CocktailList from '../components/CocktailList';

const cocktailURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const searchTerm = '';
  const response = await axios.get(`${cocktailURL}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();
  console.log(drinks, searchTerm);
  return (
    <>
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Landing;
