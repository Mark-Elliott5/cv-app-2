import NormalInput from '../inputs/NormalInput';
import TextAreaInput from '../inputs/TextAreaInput';

function createInputForm(arr, objectKey, itemNumber, nestedKey) {
  return arr.map((obj) =>
    obj.type === 'textarea' ? (
      <TextAreaInput
        objectKey={objectKey}
        key={obj.key}
        name={itemNumber ? `${obj.name}${itemNumber}` : obj.name}
        field={obj.field}
        nestedKey={nestedKey}
      />
    ) : (
      <NormalInput
        objectKey={objectKey}
        key={obj.key}
        name={itemNumber ? `${obj.name}${itemNumber}` : obj.name}
        field={obj.field}
        type={obj.type}
        nestedKey={nestedKey}
      />
    ),
  );
}

export default createInputForm;
