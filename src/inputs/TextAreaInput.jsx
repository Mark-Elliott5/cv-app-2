import { useContext } from 'react';
import FieldDataContext from '../context/FieldDataContext';
import PropTypes from 'prop-types';

function TextAreaInput({ objectKey, field, name, nestedKey, increment }) {
  const context = useContext(FieldDataContext);
  const updateFieldDataNestedObject = context[2];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFieldDataNestedObject(objectKey, nestedKey, name, value);
  };

  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={`${name}${increment}`}>
        {field}
      </label>
      <textarea
        placeholder="Optional description of experience here..."
        cols="45"
        rows="10"
        onChange={handleInputChange}
        id={`${name}${increment}`}
        name={name}
      ></textarea>
    </div>
  );
}

TextAreaInput.propTypes = {
  field: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  objectKey: PropTypes.string.isRequired,
  nestedKey: PropTypes.string.isRequired,
  increment: PropTypes.number.isRequired,
};

export default TextAreaInput;
