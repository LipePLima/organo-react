import "./FieldForm.css";
import { Fragment } from "react";

const FieldForm = (props) => {

  const typed = (event) => {
    props.changed(event.target.value)
    
  };

  return (
    <Fragment>
      <div className="container__field">
        <label className="field__label">{props.label}</label>
        <input
          value={props.value}
          onChange={typed}
          required={props.required}
          className="field__input"
          type="text"
          placeholder={props.placeholder}
        />
      </div>
    </Fragment>
  );
};

export default FieldForm;
