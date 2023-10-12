import NormalInput from '../inputs/NormalInput';
import TextAreaInput from '../inputs/TextAreaInput';

function createInputForm(arr, itemNumber = 0) {
  return arr.map((obj) =>
    obj.type === 'textarea' ? (
      <TextAreaInput
        key={obj.key}
        name={itemNumber ? `${obj.name}${itemNumber}` : obj.name}
        field={obj.field}
      />
    ) : (
      <NormalInput
        key={obj.key}
        name={itemNumber ? `${obj.name}${itemNumber}` : obj.name}
        field={obj.field}
        type={obj.type}
      />
    ),
  );
}

export default createInputForm;
