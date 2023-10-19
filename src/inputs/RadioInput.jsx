import { useContext } from 'react';
import FieldDataContext from '../context/FieldDataContext';
import PropTypes from 'prop-types';

function RadioField({ objectKey, value, name, checked }) {
  const { updateFieldData } = useContext(FieldDataContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFieldData(objectKey, name, value);
  };

  return (
    <div className="radio-input">
      <label className="input-label" htmlFor={value}>
        {value}
      </label>
      <input
        type="radio"
        onChange={handleInputChange}
        id={value}
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
