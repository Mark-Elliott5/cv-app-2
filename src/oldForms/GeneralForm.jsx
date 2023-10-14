import { v4 as uuid } from 'uuid';
import createInputForm from '../functions/createInputForm';

function GeneralForm() {
  const general = [
    { field: 'First Name', key: uuid(), name: 'firstName', type: 'text' },
    { field: 'Last Name', key: uuid(), name: 'lastName', type: 'text' },
    { field: 'Phone Number', key: uuid(), name: 'phoneNumber', type: 'tel' },
    { field: 'Email', key: uuid(), name: 'email', type: 'email' },
  ];

  return <>{createInputForm(general)}</>;
}

export default GeneralForm;
