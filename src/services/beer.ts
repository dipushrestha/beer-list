import customBeerImgUrl from '../assets/custom-beer.png';

type BeerApiRecord = {
  id: number;
  name: string;
  image_url: string;
  description: string;
  ingredients: {
    yeast: string;
    malt: { name: string; amount: { value: number; unit: string } }[];
    hops: { name: string; amount: { value: number; unit: string } }[];
  };
};

export type BeerRecord = {
  id: number;
  name: string;
  genre: string;
  imgUrl: string;
  description: string;
  ingredients: string;
};

const getBeersFromAPI = async (
  count = 10,
  fromPage = 1,
  batchSize = 80,
): Promise<BeerRecord[]> => {
  const beerApiRecords: BeerApiRecord[] = [];
  try {
    for (; beerApiRecords.length < count; fromPage++) {
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?page=${fromPage}&per_page=${batchSize}`,
      );

      const beerApiData: BeerApiRecord[] = await response.json();

      if (beerApiData?.length === 0) break;
      beerApiRecords.push(...beerApiData);
    }
  } catch (error) {
    console.error(error);
  }

  try {
    return beerApiRecords.map(
      ({ id, name, image_url, description, ingredients }) => {
        const maltIngredients = ingredients.malt
          .map((malt) => malt.name)
          .join(', ');

        const hopsIngredients = ingredients.hops
          .map((hops) => hops.name)
          .join(', ');

        return {
          id: id,
          name: name,
          genre: ingredients.yeast,
          imgUrl: image_url,
          description: description,
          ingredients: `Malt(s): ${maltIngredients} | Hops: ${hopsIngredients} | Yeast: ${ingredients.yeast}`,
        };
      },
    );
  } catch (error) {
    console.error(error);
  }

  return [];
};

export const getAllBeers = async (count = 10): Promise<BeerRecord[]> => {
  try {
    const cachedBeers: BeerRecord[] = JSON.parse(
      localStorage.getItem('all-beers') ?? '[]',
    );

    if (cachedBeers.length >= count) {
      return cachedBeers.slice(0, count);
    }

    const remainingToFetch = count - cachedBeers.length;
    const fromPage = Math.floor(cachedBeers.length / 80) + 1;

    const beersFromApi = await getBeersFromAPI(remainingToFetch, fromPage);

    if (beersFromApi.length > 0) {
      localStorage.setItem('all-beers', JSON.stringify(beersFromApi));
      return cachedBeers.concat(beersFromApi).slice(0, count);
    }
  } catch (error) {
    console.error(error);
  }

  return [];
};

export const getMyBeers = (): BeerRecord[] => {
  try {
    return JSON.parse(localStorage.getItem('my-beers') ?? '[]') as BeerRecord[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

type AddMyBeerFields = {
  name: string;
  genre: string;
  description: string;
};

export const addMyBeer = ({
  name,
  genre,
  description,
}: AddMyBeerFields): void => {
  try {
    const myBeers = getMyBeers();
    const newBeer = {
      id: myBeers.length + 1,
      name,
      genre,
      description,
      imgUrl: customBeerImgUrl,
      ingredients: `${name} | ${genre}`,
    };
    myBeers.push(newBeer);
    localStorage.setItem('my-beers', JSON.stringify(myBeers));
  } catch (error) {
    console.error(error);
  }
};
