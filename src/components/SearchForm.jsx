import { Form, useNavigation } from 'react-router-dom';

import { useGlobalContext } from '../context';

import Wrapper from '../assets/wrappers/SearchForm';

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const { isDarkTheme } = useGlobalContext();

  return (
    <Wrapper>
      <div
        className={isDarkTheme ? 'form-container dark-theme' : 'form-container'}
      >
        <Form className="form">
          <input
            type="search"
            name="search"
            className="form-input"
            placeholder="e.g. vodka"
            defaultValue={searchTerm}
          />
          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting ? 'searching...' : 'search'}
          </button>
        </Form>
      </div>
    </Wrapper>
  );
};
export default SearchForm;
