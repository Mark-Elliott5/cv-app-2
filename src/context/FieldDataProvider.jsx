import { useState } from 'react';
import FieldDataContext from './FieldDataContext';
import PropTypes from 'prop-types';

function FieldDataProvider({ children }) {
  const [fieldData, setFieldData] = useState({
    font: 'Arial',
    layout: 'Top',
    color: 'Cornflower Blue',
  });

  const updateFieldData = (key, value) => {
    setFieldData({ ...fieldData, [key]: value });
  };

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
