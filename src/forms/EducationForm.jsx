import { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import createInputForm from '../functions/createInputForm';
import FieldDataContext from '../context/FieldDataContext';

function EducationForm() {
  const education = [
    { field: 'University', name: 'university', key: uuid(), type: 'text' },
    { field: 'City', name: 'universityCity', key: uuid(), type: 'text' },
    { field: 'State', name: 'universityState', key: uuid(), type: 'text' },
    { field: 'Degree', name: 'universityDegree', key: uuid(), type: 'text' },
    {
      field: 'Start Year',
      name: 'universityStartDate',
      key: uuid(),
      type: 'date',
    },
    {
      field: 'End Year',
      name: 'universityEndDate',
      key: uuid(),
      type: 'date',
    },
  ];

  const [appendedDivs, setAppendedDivs] = useState([
    createInputForm(education, 1),
  ]);

  const context = useContext(FieldDataContext);
  // A component calling useContext will always re-render when the context value changes
  const deleteKeys = context[2];

  const handleAppendClick = () => {
    const newEduField = createInputForm(education, appendedDivs.length + 1);
    setAppendedDivs([...appendedDivs, newEduField]);
  };

  const handleRemoveClick = () => {
    if (appendedDivs.length === 1) {
      return;
    }
    const keysToBeDeleted = education.map((field) => field.name);
    deleteKeys(keysToBeDeleted, appendedDivs.length);
    const updatedDivs = [...appendedDivs];
    updatedDivs.splice(updatedDivs.length - 1, 1);
    setAppendedDivs(updatedDivs);
  };

  return (
    <>
      <button onClick={handleAppendClick}>Add Education</button>
      {appendedDivs}
      {appendedDivs.length ? (
        <button onClick={handleRemoveClick}>Remove Field</button>
      ) : null}
    </>
  );
}

export default EducationForm;
