import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Root from '.';
import { AllBeers, allBeersLoader } from './AllBeers';
import { MyBeers, addMyBeerAction, myBeersLoader } from './MyBeers';
import ErrorPage from './ErrorPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<Navigate to="/all-beers" />} />
      <Route path="all-beers" element={<AllBeers />} loader={allBeersLoader} />
      <Route
        path="my-beers"
        element={<MyBeers />}
        loader={myBeersLoader}
        action={addMyBeerAction}
      />
    </Route>,
  ),
);
