import createRadioForm from '../functions/createRadioForm';
import { v4 as uuid } from 'uuid';

function LayoutForm() {
  const layout = [
    { value: 'Top', key: uuid(), name: 'layout', checked: true },
    { value: 'Left', key: uuid(), name: 'layout' },
    { value: 'Right', key: uuid(), name: 'layout' },
  ];

  return <>{createRadioForm(layout)}</>;
}

export default LayoutForm;
