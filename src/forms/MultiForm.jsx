import { useState, useContext } from 'react';
import createInputForm from '../functions/createInputForm';
import FieldDataContext from '../context/FieldDataContext';
import PropTypes from 'prop-types';

// This component is a means to create a form from a prop, and gives buttons
// to create/remove additional fields (while also removing their data from
// context)

function MultiForm({ form, name }) {
  const [appendedDivs, setAppendedDivs] = useState([createInputForm(form, 1)]);

  const context = useContext(FieldDataContext);
  // A component calling useContext will always re-render
  // when the context value changes
  const deleteKeys = context[2];

  const handleAppendClick = () => {
    const newFormField = createInputForm(form, appendedDivs.length + 1);
    setAppendedDivs([...appendedDivs, newFormField]);
  };

  const handleRemoveClick = () => {
    if (appendedDivs.length === 1) {
      return;
    }
    const keysToBeDeleted = form.map((field) => field.name);
    deleteKeys(keysToBeDeleted, appendedDivs.length);
    const updatedDivs = [...appendedDivs];
    updatedDivs.splice(updatedDivs.length - 1, 1);
    setAppendedDivs(updatedDivs);
  };

  return (
    <>
      <button onClick={handleAppendClick}>Add {name}</button>
      {appendedDivs}
      {appendedDivs.length ? (
        <button onClick={handleRemoveClick}>Remove {name}</button>
      ) : null}
    </>
  );
}

MultiForm.propTypes = {
  form: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default MultiForm;
