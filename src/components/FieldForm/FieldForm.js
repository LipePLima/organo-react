import "./FieldForm.css";

const FieldForm = (props) => {
  let value = '';

  const typed = (event) => {
    value = event.target.value
    console.log(value)

  }

  return (
    <div className="container__field">
      <label className="field__label">{props.label}</label>
      <input
        onChange={typed}
        required={props.required}
        className="field__input"
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default FieldForm;
