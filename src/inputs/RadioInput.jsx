import { useContext, useEffect } from 'react';
import FieldDataContext from '../context/FieldDataContext';
import PropTypes from 'prop-types';

function RadioField({ value, name, checked }) {
  const [fieldData, updateFieldData] = useContext(FieldDataContext);

  const handleInputChange = (name, value) => {
    updateFieldData(name, value);
    // or transmit data to preview window here for live cv preview?
  };

  useEffect(() => {
    console.log(fieldData);
  });

  return (
    <div className="text-area-input">
      <label htmlFor={value}>{value}</label>
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
};

export default RadioField;
