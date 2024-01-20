import { LoaderFunctionArgs } from 'react-router-dom';
import { tryParseInt } from '../../utils/number';
import { getAllBeers } from '../../services/beer';

export const allBeersLoader = async ({ request }: LoaderFunctionArgs) =>
  getAllBeers(tryParseInt(new URL(request.url).searchParams.get('count'), 10));

export { default as AllBeers } from './page';
