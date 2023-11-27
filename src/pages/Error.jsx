import { Link, useRouteError } from 'react-router-dom';

import Wrapper from '../assets/wrappers/Error';

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <h2>404 Error!</h2>
          <p>This page does not exist!</p>
          <Link to="/">back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h2>something went wrong...</h2>;
      </div>
    </Wrapper>
  );
};
export default Error;
