import customBeerImgUrl from '../assets/custom-beer.png';
import Button from './common/Button';
import { Form } from 'react-router-dom';
import Input from './common/Input';

type AddNewBeerFormProps = {
  onCancel: () => void;
  onSave: () => void;
};

const AddNewBeerForm = ({ onCancel, onSave }: AddNewBeerFormProps) => {
  return (
    <Form className="flex w-[80vw] flex-col gap-5 sm:w-[500px]" method="post">
      <h3 className="text-3xl font-semibold">Add a New Beer</h3>
      <img
        src={customBeerImgUrl}
        alt="Custom Beer"
        className="h-28 self-start rounded-t border border-zinc-400 px-9 py-3"
      />
      <Input name="name" placeholder="Beer Name*" required />
      <Input name="genre" placeholder="Genre*" required />
      <Input
        name="description"
        type="textarea"
        rows={4}
        placeholder="Description*"
        required
      />
      <section className="flex flex-row justify-end gap-6">
        <Button theme="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" theme="primary" className="px-9" onClick={onSave}>
          Save
        </Button>
      </section>
    </Form>
  );
};

export default AddNewBeerForm;
