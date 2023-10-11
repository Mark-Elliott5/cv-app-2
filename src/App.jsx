import FieldDataProvider from './context/FieldDataProvider';
import FieldWrapper from './FieldWrapper';
import LayoutForm from './forms/LayoutForm';
import FontForm from './forms/FontForm';
import ColorForm from './forms/ColorForm';
import GeneralForm from './forms/GeneralForm';
import EducationForm from './forms/EducationForm';
import CareerForm from './forms/CareerForm';

function App() {
  return (
    <FieldDataProvider>
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
      <div id="preview">
        {/* component needs to use useEffect to monitor 
        form data changes to 
        then do setState on itself and rerender */}
      </div>
    </FieldDataProvider>
  );
}

export default App;
