import { useContext } from 'react';
import FieldDataContext from '../context/FieldDataContext';
import PropTypes from 'prop-types';

function RadioField({ objectKey, value, name, checked }) {
  const context = useContext(FieldDataContext);
  const updateFieldData = context[1];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFieldData(objectKey, name, value);
    // or transmit data to preview window here for live cv preview?
  };

  return (
    <div className="text-area-input">
      <label className="input-label" htmlFor={value}>
        {value}
      </label>
      <input
        type="radio"
        onChange={handleInputChange}
        id={`${value}-font`}
        name={name}
        value={value}
        defaultChecked={checked}
      />
    </div>
  );
}

RadioField.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  objectKey: PropTypes.string.isRequired,
};

export default RadioField;
