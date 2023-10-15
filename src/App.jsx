import { v4 as uuid } from 'uuid';
import FieldDataProvider from './context/FieldDataProvider';
import FieldWrapper from './FieldWrapper';
import RadioForm from './forms/RadioForm';
import createInputForm from './functions/createInputForm';
import MultiForm from './forms/MultiForm';

function App() {
  const layout = [
    { value: 'Top', key: uuid(), name: 'layout', checked: true },
    { value: 'Left', key: uuid(), name: 'layout' },
    { value: 'Right', key: uuid(), name: 'layout' },
  ];

  const fonts = [
    { value: 'Baskerville', key: uuid(), name: 'font' },
    { value: 'Bodoni', key: uuid(), name: 'font' },
    { value: 'Caslon', key: uuid(), name: 'font' },
    { value: 'Garamond', key: uuid(), name: 'font' },
    { value: 'Georgia', key: uuid(), name: 'font' },
    { value: 'Times New Roman', key: uuid(), name: 'font' },
    { value: 'Arial', key: uuid(), name: 'font', checked: true },
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
    { field: 'Phone Number', key: uuid(), name: 'phoneNumber', type: 'tel' },
    { field: 'Email', key: uuid(), name: 'email', type: 'email' },
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
    { field: 'City', name: 'universityCity', key: uuid(), type: 'text' },
    { field: 'State', name: 'universityState', key: uuid(), type: 'text' },
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
        <FieldWrapper id="general" fieldName="General">
          {createInputForm(general, 'general')}
        </FieldWrapper>
        <FieldWrapper id="education" fieldName="Education">
          <MultiForm
            form={education}
            name="Education"
            objectKey="education"
            nestedKey="university"
          />
        </FieldWrapper>
        <FieldWrapper id="career" fieldName="Career">
          <MultiForm
            form={career}
            name="Job"
            objectKey="career"
            nestedKey="job"
          />
        </FieldWrapper>
      </div>
      <div id="preview">
        {/* component needs to use useEffect to monitor 
        form data changes to 
        then do setState on itself and rerender */}
      </div>
    </FieldDataProvider>
  );
}

export default App;
