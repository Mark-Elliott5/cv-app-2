import FieldDataProvider from './context/FieldDataProvider';
import FieldWrapper from './FieldWrapper';
import RadioForm from './forms/RadioForm';
import createInputForm from './functions/createInputForm';
import MultiForm from './forms/MultiForm';
import Preview from './Preview';
import html2pdf from 'html2pdf.js';

function App() {
  // const layout = [
  //   { value: 'Top', name: 'layout', checked: true },
  //   { value: 'Left', name: 'layout' },
  //   { value: 'Right', name: 'layout' },
  // ];

  const fonts = [
    { value: 'Arial', name: 'font' },
    { value: 'Tahoma', name: 'font' },
    { value: 'Georgia', name: 'font', checked: true },
    { value: 'Helvetica', name: 'font' },
    { value: 'Times New Roman', name: 'font' },
    { value: 'Verdana', name: 'font' },
  ];

  // const color = [
  //   { value: 'Cornflower Blue', name: 'color', checked: true },
  //   { value: 'Grey', name: 'color' },
  //   { value: 'Navy', name: 'color' },
  //   { value: 'Brown', name: 'color' },
  //   { value: 'Pink', name: 'color' },
  // ];

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
      field: 'Description',
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
  ];

  const handlePDF = () => {
    const element = document.getElementById('preview');
    // newElement.style = 'width: 8.5in; height: 11in';
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
    html2pdf().from(element).set(opt).outputPdf('dataurlnewwindow');
  };

  return (
    <FieldDataProvider>
      <div id="settings">
        {/* <FieldWrapper id="layout" fieldName="Layout">
          <RadioForm field={layout} objectKey="settings" />
        </FieldWrapper> */}
        <FieldWrapper id="font" fieldName="Font">
          <RadioForm field={fonts} objectKey="settings" />
        </FieldWrapper>
        {/* <FieldWrapper id="color" fieldName="Color">
          <RadioForm field={color} objectKey="settings" />
        </FieldWrapper> */}
        <button id="pdf-button" onClick={handlePDF}>
          Save as PDF
        </button>
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
  );
}

export default App;
