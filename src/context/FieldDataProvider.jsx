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
      email: 'sjobs@apple.com',
      firstName: 'Steve',
      lastName: 'Jobs',
      phoneNumber: '650-859-5627',
      location: 'Palo Alto, California',
    },
    education: {
      university: {
        universityName: 'Reed College',
        universityCity: 'Portland',
        universityState: 'Oregon',
        universityDegree: 'English Literature',
        universityStartDate: '1972-09-01',
        universityEndDate: '1972-12-01',
      },
    },
    career: {
      job: {
        jobEmployer: 'Apple',
        jobEndDate: '2011-08-24',
        jobStartDate: '1997-07-01',
        jobTitle: 'Chairman/CEO',
        jobDescription: 'Managed the day-to-day operations of Apple, Inc.',
      },
    },
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
