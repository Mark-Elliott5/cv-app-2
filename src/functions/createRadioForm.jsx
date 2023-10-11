import RadioField from '../inputs/RadioInput';

function createRadioForm(arr) {
  return arr.map((obj) => (
    <RadioField
      key={obj.key}
      value={obj.value}
      name={obj.name}
      checked={obj.checked}
    />
  ));
}

export default createRadioForm;
