import FieldDataContext from './context/FieldDataContext';
import { useContext } from 'react';

function Preview() {
  const context = useContext(FieldDataContext);
  const fieldData = context[0];

  // const createGeneralDetails = fieldData;
  return (
    <div id="preview" style={{ fontFamily: fieldData.settings.font }}>
      <div id="general-details">
        <p>{`${fieldData.general.firstName} ${fieldData.general.lastName}`}</p>
        <p>
          {`${fieldData.general.email} • ${fieldData.general.phoneNumber} • 
          ${fieldData.general.location}`}
        </p>
      </div>
      <div id="education-details"></div>
      <div id="career-details"></div>
    </div>
  );
}

export default Preview;
