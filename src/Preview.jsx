import FieldDataContext from './context/FieldDataContext';
import { useContext } from 'react';

function Preview() {
  const context = useContext(FieldDataContext);
  const fieldData = context[0];
  const { firstName, lastName, email, phoneNumber, location } =
    fieldData.general;

  const convertDateFormat = (inputDate) => {
    if (!inputDate) {
      return;
    }
    const [year, month, day] = inputDate.split('-');
    const dateObj = new Date(year, month - 1, day);
    return dateObj.toLocaleString('default', {
      month: 'long',
      year: 'numeric',
    });
  };

  const generateEducation = () => {
    const fields = Object.keys(fieldData.education).map(
      (key) => fieldData.education[key],
    );

    return fields.map(
      ({
        universityName,
        universityLocation,
        universityStartDate,
        universityEndDate,
        universityDegree,
        uuidKey,
      }) => (
        <div key={uuidKey} className="education-box">
          <div className="education-split-detail">
            <p className="education-name">{universityName}</p>
            <p className="education-date">
              {convertDateFormat(universityStartDate)} -{' '}
              {convertDateFormat(universityEndDate)}
            </p>
          </div>
          <div className="education-split-detail">
            <p className="education-degree">{universityDegree}</p>
            <p className="education-location">{universityLocation}</p>
          </div>
        </div>
      ),
    );
  };

  return (
    <div id="preview" style={{ fontFamily: fieldData.settings.font }}>
      <div id="general-details">
        <p id="general-header">{`${firstName} ${lastName}`}</p>
        <p id="general-contact">
          {`${email} • ${phoneNumber} • 
          ${location}`}
        </p>
      </div>
      <div id="education-details">{generateEducation()}</div>
      <div id="career-details"></div>
    </div>
  );
}

export default Preview;
