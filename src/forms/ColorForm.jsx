import createRadioForm from '../functions/createRadioForm';
import { v4 as uuid } from 'uuid';

function ColorForm() {
  const color = [
    { value: 'Cornflower Blue', key: uuid(), name: 'color', checked: true },
    { value: 'Grey', key: uuid(), name: 'color' },
    { value: 'Navy', key: uuid(), name: 'color' },
    { value: 'Brown', key: uuid(), name: 'color' },
    { value: 'Pink', key: uuid(), name: 'color' },
  ];

  return <>{createRadioForm(color)}</>;
}

export default ColorForm;
