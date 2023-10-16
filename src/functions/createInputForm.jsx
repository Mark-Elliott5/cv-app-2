import NormalInput from '../inputs/NormalInput';
import TextAreaInput from '../inputs/TextAreaInput';
import { v4 as uuid } from 'uuid';

function createInputForm(arr, objectKey, newNestedKey, name, increment) {
  const capitalizeName = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <div key={uuid()} className="single-form">
      <p className="increment">{`${name ? capitalizeName(name) : ''} ${
        increment ? increment : ''
      }`}</p>
      {arr.map((obj) =>
        obj.type === 'textarea' ? (
          <TextAreaInput
            objectKey={objectKey}
            key={uuid()}
            name={obj.name}
            field={obj.field}
            nestedKey={newNestedKey}
          />
        ) : (
          <NormalInput
            objectKey={objectKey}
            key={uuid()}
            name={obj.name}
            field={obj.field}
            type={obj.type}
            nestedKey={newNestedKey}
          />
        ),
      )}
    </div>
  );
}

export default createInputForm;
