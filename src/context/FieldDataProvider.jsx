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

  const deleteKeys = (keyName, category) => {
    const newData = { ...fieldData };
    delete newData[category][keyName];
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
