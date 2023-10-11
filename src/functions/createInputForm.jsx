import NormalInput from '../inputs/NormalInput';
import TextAreaInput from '../inputs/TextAreaInput';

function createInputForm(arr) {
  return arr.map((obj) =>
    obj.type === 'textarea' ? (
      <TextAreaInput key={obj.key} name={obj.name} field={obj.field} />
    ) : (
      <NormalInput
        key={obj.key}
        name={obj.name}
        field={obj.field}
        type={obj.type}
      />
    ),
  );
}

export default createInputForm;
