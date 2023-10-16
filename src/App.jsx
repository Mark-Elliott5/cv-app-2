import { v4 as uuid } from 'uuid';
import FieldDataProvider from './context/FieldDataProvider';
import FieldWrapper from './FieldWrapper';
import RadioForm from './forms/RadioForm';
import createInputForm from './functions/createInputForm';
import MultiForm from './forms/MultiForm';
import Preview from './Preview';

function App() {
  const layout = [
    { value: 'Top', key: uuid(), name: 'layout', checked: true },
    { value: 'Left', key: uuid(), name: 'layout' },
    { value: 'Right', key: uuid(), name: 'layout' },
  ];

  const fonts = [
    { value: 'Arial', key: uuid(), name: 'font' },
    { value: 'Tahoma', key: uuid(), name: 'font' },
    { value: 'Georgia', key: uuid(), name: 'font', checked: true },
    { value: 'Helvetica', key: uuid(), name: 'font' },
    { value: 'Times New Roman', key: uuid(), name: 'font' },
    { value: 'Verdana', key: uuid(), name: 'font' },
  ];

  const color = [
    { value: 'Cornflower Blue', key: uuid(), name: 'color', checked: true },
    { value: 'Grey', key: uuid(), name: 'color' },
    { value: 'Navy', key: uuid(), name: 'color' },
    { value: 'Brown', key: uuid(), name: 'color' },
    { value: 'Pink', key: uuid(), name: 'color' },
  ];

  const general = [
    { field: 'First Name', key: uuid(), name: 'firstName', type: 'text' },
    { field: 'Last Name', key: uuid(), name: 'lastName', type: 'text' },
    { field: 'Email', key: uuid(), name: 'email', type: 'email' },
    { field: 'Phone Number', key: uuid(), name: 'phoneNumber', type: 'tel' },
    { field: 'Location', key: uuid(), name: 'location', type: 'text' },
  ];

  const career = [
    { field: 'Title', key: uuid(), name: 'jobTitle', type: 'text' },
    { field: 'Employer', key: uuid(), name: 'jobEmployer', type: 'text' },
    {
      field: 'Employment Start Date',
      name: 'jobStartDate',
      key: uuid(),
      type: 'date',
    },
    {
      field: 'Employment End Date',
      name: 'jobEndDate',
      key: uuid(),
      type: 'date',
    },
    {
      field: 'Description',
      key: uuid(),
      name: 'jobDescription',
      type: 'textarea',
    },
  ];

  const education = [
    { field: 'University', name: 'universityName', key: uuid(), type: 'text' },
    {
      field: 'Location',
      name: 'universityLocation',
      key: uuid(),
      type: 'text',
    },
    { field: 'Degree', name: 'universityDegree', key: uuid(), type: 'text' },
    {
      field: 'Start Year',
      name: 'universityStartDate',
      key: uuid(),
      type: 'date',
    },
    {
      field: 'End Year',
      name: 'universityEndDate',
      key: uuid(),
      type: 'date',
    },
  ];

  return (
    <FieldDataProvider>
      <div id="settings">
        <FieldWrapper id="layout" fieldName="Layout">
          <RadioForm field={layout} objectKey="settings" />
        </FieldWrapper>
        <FieldWrapper id="font" fieldName="Font">
          <RadioForm field={fonts} objectKey="settings" />
        </FieldWrapper>
        <FieldWrapper id="color" fieldName="Color">
          <RadioForm field={color} objectKey="settings" />
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
  );
}

export default App;
