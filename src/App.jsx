import FieldDataProvider from './context/FieldDataProvider';
import FieldWrapper from './FieldWrapper';
import RadioForm from './forms/RadioForm';
import createInputForm from './functions/createInputForm';
import MultiForm from './forms/MultiForm';
import Preview from './Preview';
import html2pdf from 'html2pdf.js';
import githubMark from './assets/github-mark-white.png';

function App() {
  const fonts = [
    { value: 'Arial', name: 'font' },
    { value: 'Tahoma', name: 'font' },
    { value: 'Georgia', name: 'font', checked: true },
    { value: 'Helvetica', name: 'font' },
    { value: 'Times New Roman', name: 'font' },
    { value: 'Verdana', name: 'font' },
  ];

  const general = [
    { field: 'First Name', name: 'firstName', type: 'text' },
    { field: 'Last Name', name: 'lastName', type: 'text' },
    { field: 'Email', name: 'email', type: 'email' },
    { field: 'Phone Number', name: 'phoneNumber', type: 'tel' },
    { field: 'Location', name: 'location', type: 'text' },
  ];

  const career = [
    { field: 'Employer', name: 'jobEmployer', type: 'text' },
    { field: 'Title', name: 'jobTitle', type: 'text' },
    {
      field: 'Employment Start Date',
      name: 'jobStartDate',
      type: 'date',
    },
    {
      field: 'Employment End Date',
      name: 'jobEndDate',
      type: 'date',
    },
    { field: 'Location', name: 'jobLocation', type: 'text' },
    {
      field: 'Job Description',
      name: 'jobDescription',
      type: 'textarea',
    },
  ];

  const education = [
    { field: 'University', name: 'universityName', type: 'text' },

    { field: 'Degree', name: 'universityDegree', type: 'text' },
    {
      field: 'Start Year',
      name: 'universityStartDate',
      type: 'date',
    },
    {
      field: 'End Year',
      name: 'universityEndDate',
      type: 'date',
    },
    {
      field: 'Location',
      name: 'universityLocation',
      type: 'text',
    },
    {
      field: 'Description',
      name: 'universityDescription',
      type: 'textarea',
    },
  ];

  const handlePDF = () => {
    const element = document.getElementById('preview');
    const opt = {
      margin: 0,
      filename: 'myfile.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: {
        scale: 12,
        letterRendering: true,
        useCORS: true,
      },
      jsPDF: {
        unit: 'px',
        format: [element.offsetWidth, element.offsetHeight],
        orientation: 'portrait',
      },
    };
    html2pdf(element, opt);
  };

  return (
    <>
      <header>Resumé App</header>
      <div id="app">
        <FieldDataProvider>
          <div id="settings">
            <FieldWrapper id="font" fieldName="Font">
              <RadioForm field={fonts} objectKey="settings" />
              <button id="pdf-button" onClick={handlePDF}>
                Save as PDF
              </button>
            </FieldWrapper>
          </div>
          <div id="details">
            <div id="general" className="field-wrapper">
              <p className="input-header">General</p>
              {createInputForm(general, 'general')}
            </div>
            <MultiForm
              form={education}
              name="Education"
              objectKey="education"
              nestedKey="university"
              id="education"
              fieldName="Education"
            />
            <MultiForm
              form={career}
              name="Job"
              objectKey="career"
              nestedKey="job"
              id="career"
              fieldName="Career"
            />
          </div>
          <Preview />
        </FieldDataProvider>
      </div>
      <footer>
        Designed by Mark Elliott{' '}
        <a href="https://github.com/Mark-Elliott5">
          <img className="github-link" src={githubMark} />
        </a>
      </footer>
    </>
  );
}

export default App;
