import PropTypes from 'prop-types';
import FieldDataContext from './context/FieldDataContext';
import { useContext } from 'react';

function Preview() {
  const context = useContext(FieldDataContext);
  const fieldData = context[0];

  const createGeneralDetails = fieldData;
  return (
    <>
      <div id="general-details"></div>
      <div id="education-details"></div>
      <div id="career-details"></div>
    </>
  );
}
