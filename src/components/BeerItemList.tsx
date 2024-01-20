import { BeerRecord } from '../services/beer';
import BeerItem from './BeerItem';

type BeerItemListProps = {
  beers: BeerRecord[];
};

const BeerItemList = ({ beers }: BeerItemListProps) => {
  return (
    <ul className="gap-10 lg:columns-2">
      {beers.map((beer) => (
        <li key={beer.id} className="mb-8">
          <BeerItem {...beer} />
        </li>
      ))}
    </ul>
  );
};

export default BeerItemList;
