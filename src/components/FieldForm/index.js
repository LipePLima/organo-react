import "./FieldForm.css";
import { Fragment } from "react";

const FieldForm = ({ changed, label, value, required, type = 'text', placeholder}) => {

  const typed = (event) => {
    changed(event.target.value)
    
  };

  return (
    <Fragment>
      <div className="container__field">
        <label className="field__label">{label}</label>
        <input
          value={value}
          onChange={typed}
          required={required}
          className={`field__input input__${type}`}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </Fragment>
  );
};

export default FieldForm;
