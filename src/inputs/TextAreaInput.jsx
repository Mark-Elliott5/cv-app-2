import { useContext, useEffect } from 'react';
import FieldDataContext from '../context/FieldDataContext';
import PropTypes from 'prop-types';

function TextAreaInput({ field }) {
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
      <label htmlFor={field}>{field}</label>
      <textarea
        placeholder="Describe your responsibilities and experience here..."
        cols="45"
        rows="10"
        onChange={handleInputChange}
        id={field}
        name={field}
      ></textarea>
    </div>
  );
}

TextAreaInput.propTypes = {
  field: PropTypes.string.isRequired,
};

export default TextAreaInput;
