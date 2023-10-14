import { useContext } from 'react';
import FieldDataContext from '../context/FieldDataContext';
import PropTypes from 'prop-types';

function TextAreaInput({ objectKey, field, name }) {
  const context = useContext(FieldDataContext);
  const updateFieldData = context[1];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFieldData(objectKey, name, value);
    // or transmit data to preview window here for live cv preview?
  };

  return (
    <div className="text-area-input">
      <label htmlFor={field}>{field}</label>
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
};

export default TextAreaInput;
