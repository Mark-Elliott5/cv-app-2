import createRadioForm from '../functions/createRadioForm';
import { v4 as uuid } from 'uuid';

function FontForm() {
  const fonts = [
    { value: 'Baskerville', key: uuid(), name: 'font' },
    { value: 'Bodoni', key: uuid(), name: 'font' },
    { value: 'Caslon', key: uuid(), name: 'font' },
    { value: 'Garamond', key: uuid(), name: 'font' },
    { value: 'Georgia', key: uuid(), name: 'font' },
    { value: 'Times New Roman', key: uuid(), name: 'font' },
    { value: 'Arial', key: uuid(), name: 'font', checked: true },
  ];

  return <>{createRadioForm(fonts)}</>;
}
export default FontForm;
