import { useState, useEffect } from 'react';
import FieldDataContext from './FieldDataContext';
import PropTypes from 'prop-types';

function FieldDataProvider({ children }) {
  const [fieldData, setFieldData] = useState({
    font: 'Arial',
    layout: 'Top',
    color: 'Cornflower Blue',
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    university1: '',
    universityCity1: '',
    universityState1: '',
    universityDegree1: '',
    universityStartDate1: '',
    universityEndDate1: '',
    employer1: '',
    employmentEndDate1: '',
    employmentStartDate1: '',
    jobTitle1: '',
    jobDescription1: '',
  });

  const updateFieldData = (key, value) => {
    setFieldData({ ...fieldData, [key]: value });
  };

  useEffect(() => {
    console.log(fieldData);
  });

  return (
    <FieldDataContext.Provider value={[fieldData, updateFieldData]}>
      {children}
    </FieldDataContext.Provider>
  );
}

FieldDataProvider.propTypes = {
  children: PropTypes.node,
};

export default FieldDataProvider;
