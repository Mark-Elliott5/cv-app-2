import { useState, useEffect } from 'react';
import FieldDataContext from './FieldDataContext';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

function FieldDataProvider({ children }) {
  const [fieldData, setFieldData] = useState({
    settings: {
      font: 'Georgia',
      layout: 'Top',
      color: 'Cornflower Blue',
    },
    general: {
      email: 'sjobs@apple.com',
      firstName: 'Steve',
      lastName: 'Jobs',
      phoneNumber: '650-788-5627',
      location: 'Palo Alto, California',
    },
    education: {
      university: {
        universityName: 'Reed College',
        universityLocation: 'Portland, Oregon',
        universityDegree: 'English Literature',
        universityStartDate: '1972-09-01',
        universityEndDate: '1972-12-01',
        uuidKey: uuid(),
      },
    },
    career: {
      job: {
        jobEmployer: 'Apple',
        jobEndDate: '2011-08-24',
        jobStartDate: '1997-07-01',
        jobTitle: 'Chairman/CEO',
        jobDescription: 'Managed the day-to-day operations of Apple, Inc.',
        uuidKey: uuid(),
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
        ...(nestedKey in fieldData[objectKey]
          ? {
              [nestedKey]: {
                ...fieldData[objectKey][nestedKey],
                [key]: value,
              },
            }
          : {
              [nestedKey]: {
                [key]: value,
                ['uuidKey']: uuid(),
              },
            }),
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
