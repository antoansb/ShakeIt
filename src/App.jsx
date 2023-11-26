import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { About, Cocktail, Error, HomeLayout, Landing, Contact } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'cocktail',
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
