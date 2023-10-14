import { useState, useEffect } from 'react';
import FieldDataContext from './FieldDataContext';
import PropTypes from 'prop-types';

function FieldDataProvider({ children }) {
  const [fieldData, setFieldData] = useState({
    settings: {
      font: 'Arial',
      layout: 'Top',
      color: 'Cornflower Blue',
    },
    general: {
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
    education: {},
    career: {},
  });

  const updateFieldData = (objectKey, key, value) => {
    setFieldData({
      ...fieldData,
      [objectKey]: {
        ...fieldData[objectKey],
        [key]: value,
      },
    });
  };

  const updateFieldDataNestedObject = (objectKey, nestedKey, key, value) => {
    setFieldData({
      ...fieldData,
      [objectKey]: {
        ...fieldData[objectKey],
        [nestedKey]: {
          ...fieldData[objectKey][nestedKey],
          [key]: value,
        },
      },
    });
  };

  const deleteKeys = (keyNameArray, itemNumber) => {
    const newData = { ...fieldData };
    for (let i = 0; i < keyNameArray.length; i += 1) {
      const keyToBeDeleted = `${keyNameArray[i]}${itemNumber}`;
      delete newData[keyToBeDeleted];
    }
    setFieldData(newData);
  };

  useEffect(() => {
    console.log(fieldData);
  });

  return (
    <FieldDataContext.Provider
      value={[
        fieldData,
        updateFieldData,
        updateFieldDataNestedObject,
        deleteKeys,
      ]}
    >
      {children}
    </FieldDataContext.Provider>
  );
}

FieldDataProvider.propTypes = {
  children: PropTypes.node,
};

export default FieldDataProvider;
