import { useState, useContext } from 'react';
import createInputForm from '../functions/createInputForm';
import FieldDataContext from '../context/FieldDataContext';
import PropTypes from 'prop-types';

// This component is a means to create a form from a prop, and gives buttons
// to create/remove additional fields (while also removing their data from
// context)

function MultiForm({ form, objectKey, name, nestedKey, id, fieldName }) {
  const [appendedDivs, setAppendedDivs] = useState([
    createInputForm(form, objectKey, nestedKey),
  ]);

  const context = useContext(FieldDataContext);
  // A component calling useContext will always re-render
  // when the context value changes
  const deleteKeys = context[3];

  const handleAppendClick = () => {
    const newNestedKey = `${nestedKey}${appendedDivs.length + 1}`;
    const newFormField = createInputForm(form, objectKey, newNestedKey);
    setAppendedDivs([...appendedDivs, newFormField]);
  };

  const handleRemoveClick = () => {
    if (appendedDivs.length === 1) {
      return;
    }
    const keyToDelete = `${nestedKey}${appendedDivs.length}`;
    deleteKeys(keyToDelete, objectKey);
    const updatedDivs = [...appendedDivs];
    updatedDivs.splice(updatedDivs.length - 1, 1);
    setAppendedDivs(updatedDivs);
  };

  return (
    <div id={id} className="field-wrapper">
      <div className="field-header">
        <p>{fieldName}</p>
        <button onClick={handleAppendClick}>Add {name}</button>
      </div>
      {appendedDivs}
      {appendedDivs.length ? (
        <button className="remove-button" onClick={handleRemoveClick}>
          Remove {name}
        </button>
      ) : null}
    </div>
  );
}

MultiForm.propTypes = {
  form: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  objectKey: PropTypes.string.isRequired,
  nestedKey: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default MultiForm;
