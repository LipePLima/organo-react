import "./FieldForm.css";

const FieldForm = (props) => {
  return (
    <fieldset className="container__field">
      <label className="field__label">{props.label}</label>
      <input
        className="field__input"
        type="text"
        placeholder={props.placeholder}
      />
    </fieldset>
  );
};

export default FieldForm;
