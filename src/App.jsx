import FieldDataProvider from './context/FieldDataProvider';
import FieldWrapper from './FieldWrapper';
function App() {
  return (
    <FormDataProvider>
      <div id="settings">
        <FieldWrapper id="layout" fieldName="Layout">
          <LayoutForm />
        </FieldWrapper>
        <FieldWrapper id="font" fieldName="Font">
          <FontForm />
        </FieldWrapper>
        <FieldWrapper id="color" fieldName="Color">
          <ColorForm />
        </FieldWrapper>
      </div>
      <div id="details">
        <FieldWrapper id="general" fieldName="General">
          <GeneralForm />
        </FieldWrapper>
        <FieldWrapper id="education" fieldName="Education">
          <EducationForm />
        </FieldWrapper>
        <FieldWrapper id="career" fieldName="Career">
          <CareerForm />
        </FieldWrapper>
      </div>
    </FormDataProvider>
  );
}

export default App;
