import PropTypes from 'prop-types';
import RadioField from '../inputs/RadioInput';

// This component is a means to create a radio form from an array prop

function RadioForm({ field, objectKey }) {
  return (
    <>
      {field.map((obj) => (
        <RadioField
          objectKey={objectKey}
          key={obj.key}
          value={obj.value}
          name={obj.name}
          checked={obj.checked}
        />
      ))}
    </>
  );
}

RadioForm.propTypes = {
  field: PropTypes.array.isRequired,
  objectKey: PropTypes.string.isRequired,
};

export default RadioForm;
