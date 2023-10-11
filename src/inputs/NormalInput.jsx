// import './styles/NormalInput.scss';
import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import FieldDataContext from '../context/FieldDataContext';

function NormalInput({ type, field }) {
  const [fieldData, updateFieldData] = useContext(FieldDataContext);

  const handleInputChange = (name, value) => {
    updateFieldData(name, value);
    // or transmit data to preview window here for live cv preview?
  };

  useEffect(() => {
    console.log(fieldData);
  });

  return (
    <div className="input-wrapper">
      <label htmlFor={field}>{field}</label>
      <input
        type={type}
        className={`input-field-${type}`}
        onChange={handleInputChange}
        name={field}
        id={field}
      />
    </div>
  );
}

NormalInput.propTypes = {
  type: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
};

export default NormalInput;
