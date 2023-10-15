import NormalInput from '../inputs/NormalInput';
import TextAreaInput from '../inputs/TextAreaInput';

function createInputForm(arr, objectKey, nestedKey) {
  return arr.map((obj) =>
    obj.type === 'textarea' ? (
      <TextAreaInput
        objectKey={objectKey}
        key={obj.key}
        name={obj.name}
        field={obj.field}
        nestedKey={nestedKey}
      />
    ) : (
      <NormalInput
        objectKey={objectKey}
        key={obj.key}
        name={obj.name}
        field={obj.field}
        type={obj.type}
        nestedKey={nestedKey}
      />
    ),
  );
}

export default createInputForm;
