import { useLoaderData, useSearchParams } from 'react-router-dom';
import Modal from '../../components/common/Modal';
import AddNewBeerForm from '../../components/AddNewBeerForm';
import { BeerRecord } from '../../services/beer';
import { MyBeersAction } from '.';
import Button from '../../components/common/Button';
import BeerItemList from '../../components/BeerItemList';

const MyBeers = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const myBeers = (useLoaderData() ?? []) as BeerRecord[];

  const openModal = () => setSearchParams({ action: MyBeersAction.AddNew });
  const closeModal = () => setSearchParams({ action: MyBeersAction.View });

  return (
    <>
      {!myBeers.length && (
        <div className="flex h-[90dvh] flex-col">
          <div className="flex-1 bg-zinc-50">
            <p className="mt-32 text-center text-stone-500">
              Nothing to see yet. <br />
              <Button theme="link" onClick={openModal} className="px-1">
                Click here
              </Button>
              &nbsp;to add your first beer!
            </p>
          </div>
        </div>
      )}
      {myBeers.length > 0 && <BeerItemList beers={myBeers} />}
      <Modal
        open={searchParams.get('action') === MyBeersAction.AddNew}
        onClose={closeModal}
      >
        <AddNewBeerForm onCancel={closeModal} onSave={() => {}} />
      </Modal>
    </>
  );
};

export default MyBeers;
