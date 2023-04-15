import "./FieldForm.css";

const FieldForm = (props) => {
  return (
    <div className="container__field">
      <label className="field__label">{props.label}</label>
      <input
        required={props.required}
        className="field__input"
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default FieldForm;
