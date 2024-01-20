import { BeerRecord } from '../services/beer';

type BeerItemProps = Omit<BeerRecord, 'id'>;

const BeerItem = ({
  name,
  genre,
  description,
  imgUrl,
  ingredients,
}: BeerItemProps) => {
  return (
    <article className="flex cursor-pointer rounded-lg bg-white p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-sky-50 sm:p-10">
      <img
        className="sm:h- mr-6 h-32 w-10 object-contain sm:ml-3 sm:mr-12 sm:h-36 sm:w-12"
        src={imgUrl}
        alt={name}
        title={`Ingredients: ${ingredients}`}
      />
      <section className="flex flex-row flex-wrap content-around">
        <h2 className="w-full text-2xl font-semibold text-neutral-800 sm:text-3xl">
          {name}
        </h2>
        <h3 className="w-full font-semibold text-orange-400">{genre}</h3>
        <p className="line-clamp-2 w-full overflow-hidden text-ellipsis">
          {description}
        </p>
      </section>
    </article>
  );
};

export default BeerItem;
