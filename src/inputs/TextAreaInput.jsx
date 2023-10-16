import { useContext } from 'react';
import FieldDataContext from '../context/FieldDataContext';
import PropTypes from 'prop-types';

function TextAreaInput({ objectKey, field, name, nestedKey }) {
  const context = useContext(FieldDataContext);
  const updateFieldDataNestedObject = context[2];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFieldDataNestedObject(objectKey, nestedKey, name, value);
    // or transmit data to preview window here for live cv preview?
  };

  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={field}>
        {field}
      </label>
      <textarea
        placeholder="Describe your responsibilities and experience here..."
        cols="45"
        rows="10"
        onChange={handleInputChange}
        id={field}
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
};

export default TextAreaInput;
