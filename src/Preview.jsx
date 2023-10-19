import FieldDataContext from './context/FieldDataContext';
import { useContext } from 'react';

function Preview() {
  const { fieldData } = useContext(FieldDataContext);
  // const fieldData = context[0];
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
        universityDescription,
        uuidKey,
      }) => (
        <div key={uuidKey} className="preview-box">
          <div className="split-detail">
            <p className="split-left bold">{universityName}</p>
            <p className="split-right bold">
              {convertDateFormat(universityStartDate)} -{' '}
              {convertDateFormat(universityEndDate)}
            </p>
          </div>
          <div className="split-detail">
            <p className="split-left italic">{universityDegree}</p>
            <p className="split-right italic">{universityLocation}</p>
          </div>
          <p className="job-description">{universityDescription}</p>
        </div>
      ),
    );
  };

  const generateCareer = () => {
    const fields = Object.keys(fieldData.career).map(
      (key) => fieldData.career[key],
    );

    return fields.map(
      ({
        jobTitle,
        jobEmployer,
        jobLocation,
        jobStartDate,
        jobEndDate,
        jobDescription,
        uuidKey,
      }) => (
        <div key={uuidKey} className="preview-box">
          <div className="split-detail">
            <p className="split-left bold">{jobEmployer}</p>
            <p className="split-right bold">
              {convertDateFormat(jobStartDate)} -{' '}
              {convertDateFormat(jobEndDate)}
            </p>
          </div>
          <div className="split-detail">
            <p className="split-left italic">{jobTitle}</p>
            <p className="split-right italic">{jobLocation}</p>
          </div>
          <p className="job-description">{jobDescription}</p>
        </div>
      ),
    );
  };

  return (
    <div id="preview" style={{ fontFamily: fieldData.settings.font }}>
      <div id="general-details">
        <p id="general-header" className="bold">{`${firstName} ${lastName}`}</p>
        <p id="general-contact">
          {`${email} • ${phoneNumber} • 
          ${location}`}
        </p>
      </div>
      <div id="education-details">
        <p className="sub-header">Education</p>
        {generateEducation()}
      </div>
      <div id="career-details">
        <p className="sub-header">Career</p>
        {generateCareer()}
      </div>
    </div>
  );
}

export default Preview;
