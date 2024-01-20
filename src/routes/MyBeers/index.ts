import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { addMyBeer, getMyBeers } from '../../services/beer';

export enum MyBeersAction {
  AddNew = 'add-new',
  View = 'view',
}

export const myBeersLoader = () => getMyBeers();

export const addMyBeerAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const name = formData.get('name')?.toString() ?? '';
  const genre = formData.get('genre')?.toString() ?? '';
  const description = formData.get('description')?.toString() ?? '';
  addMyBeer({ name, genre, description });
  return redirect('/my-beers');
};

export { default as MyBeers } from './page';
