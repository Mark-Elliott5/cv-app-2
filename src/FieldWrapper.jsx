import PropTypes from 'prop-types';
// import './styles/FormWrapper.scss';

function FieldWrapper({ id, fieldName, children }) {
  return (
    <div id={id} className="field-wrapper">
      <p>{fieldName}</p>
      {children}
    </div>
  );
}

FieldWrapper.propTypes = {
  fieldName: PropTypes.string.isRequired,
  children: PropTypes.node,
  id: PropTypes.string,
};

export default FieldWrapper;
