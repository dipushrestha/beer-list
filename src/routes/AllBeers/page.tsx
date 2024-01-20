import {
  useLoaderData,
  useSearchParams,
  useNavigation,
} from 'react-router-dom';
import { BeerRecord } from '../../services/beer';
import Button from '../../components/common/Button';
import ChevronDown from '../../components/icons/ChevronDown';
import { tryParseInt } from '../../utils/number';
import Spinner from '../../components/icons/Spinner';
import BeerItemList from '../../components/BeerItemList';

const Loading = () => (
  <>
    Loading...
    <Spinner className="inline h-4 w-4 text-sky-700" />
  </>
);

const LoadMore = () => (
  <>
    Load More
    <ChevronDown className="ml-2 inline h-4 w-4" strokeWidth={4} />
  </>
);

const AllBeers = () => {
  const allBeers = (useLoaderData() ?? []) as BeerRecord[];
  const [, setSearchParams] = useSearchParams();
  const { state } = useNavigation();
  const isLoading = state === 'loading';

  return (
    <section className="flex flex-col">
      <BeerItemList beers={allBeers} />
      <Button
        theme="link"
        className="self-center"
        disabled={isLoading}
        onClick={() =>
          setSearchParams((searchParams) => {
            const count = tryParseInt(searchParams.get('count'), 10) + 10;
            return { ...searchParams, count: String(count) };
          })
        }
      >
        {isLoading ? <Loading /> : <LoadMore />}
      </Button>
    </section>
  );
};

export default AllBeers;
