import { useContext } from 'react';
import PropTypes from 'prop-types';
import FieldDataContext from '../context/FieldDataContext';

function NormalInput({ objectKey, type, field, name, nestedKey }) {
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
    // or transmit data to preview window here for live cv preview?
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={field}>{field}</label>
      <input
        type={type}
        className={`input-field-${type}`}
        onChange={handleInputChange}
        name={name}
        id={field}
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
};

export default NormalInput;
