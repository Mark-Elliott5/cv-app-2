import { useContext } from 'react';
import PropTypes from 'prop-types';
import FieldDataContext from '../context/FieldDataContext';

function NormalInput({ objectKey, type, field, name, nestedKey, increment }) {
  const context = useContext(FieldDataContext);
  const updateFieldData = context[1];
  const updateFieldDataNestedObject = context[2];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (nestedKey) {
      updateFieldDataNestedObject(objectKey, nestedKey, name, value);
      return;
    }
    updateFieldData(objectKey, name, value);
  };

  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={`${name}${increment}`}>
        {field}
      </label>
      <input
        type={type}
        className={`input-field-${type}`}
        onChange={handleInputChange}
        name={name}
        id={`${name}${increment}`}
      />
    </div>
  );
}

NormalInput.propTypes = {
  type: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  objectKey: PropTypes.string.isRequired,
  nestedKey: PropTypes.string,
  increment: PropTypes.number,
};

export default NormalInput;
