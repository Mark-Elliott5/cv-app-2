import { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import createInputForm from '../functions/createInputForm';
import FieldDataContext from '../context/FieldDataContext';

function CareerForm() {
  const career = [
    { field: 'Title', key: uuid(), name: 'jobTitle', type: 'text' },
    { field: 'Employer', key: uuid(), name: 'jobEmployer', type: 'text' },
    {
      field: 'Employment Start Date',
      name: 'jobStartDate',
      key: uuid(),
      type: 'date',
    },
    {
      field: 'Employment End Date',
      name: 'jobEndDate',
      key: uuid(),
      type: 'date',
    },
    {
      field: 'Description',
      key: uuid(),
      name: 'jobDescription',
      type: 'textarea',
    },
  ];

  const [appendedDivs, setAppendedDivs] = useState([
    createInputForm(career, 1),
  ]);

  const context = useContext(FieldDataContext);
  // A component calling useContext will always re-render when the context value changes
  const deleteKeys = context[2];

  const handleAppendClick = () => {
    const newCareerField = createInputForm(career, appendedDivs.length + 1);
    setAppendedDivs([...appendedDivs, newCareerField]);
  };

  const handleRemoveClick = () => {
    if (appendedDivs.length === 1) {
      return;
    }
    const keysToBeDeleted = career.map((field) => field.name);
    deleteKeys(keysToBeDeleted, appendedDivs.length);
    const updatedDivs = [...appendedDivs];
    updatedDivs.splice(updatedDivs.length - 1, 1);
    setAppendedDivs(updatedDivs);
  };

  return (
    <>
      <button onClick={handleAppendClick}>Add Job</button>
      {appendedDivs}
      {appendedDivs.length ? (
        <button onClick={handleRemoveClick}>Remove Job</button>
      ) : null}
    </>
  );
}

export default CareerForm;
