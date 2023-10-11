import { useContext } from 'react';
import PropTypes from 'prop-types';
import FieldDataContext from '../context/FieldDataContext';

function NormalInput({ type, field, name }) {
  const [fieldData, updateFieldData] = useContext(FieldDataContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFieldData(name, value);
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
};

export default NormalInput;
