import Wrapper from '../assets/wrappers/CocktailList';
import SingleCocktail from './SingleCocktail';

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return <h2>No cocktails found...</h2>;
  }
  const formattedDrinks = drinks.map((drink) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });

  return (
    <Wrapper>
      {formattedDrinks.map((cocktail) => {
        return <SingleCocktail key={cocktail.id} {...cocktail} />;
      })}
    </Wrapper>
  );
};
export default CocktailList;
