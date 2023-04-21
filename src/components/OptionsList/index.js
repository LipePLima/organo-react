import { Fragment } from "react";
import "./OptionsList.css";

const OptionsList = (props) => {
  return (
    <Fragment>
      <div className="container__select">
        <label className="select__label">{props.label}</label>
        <select
          onChange={(event) => props.changed(event.target.value)}
          required={props.required}
          value={props.value}
          className="content__select"
        >
          {props.itens.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
    </Fragment>
  );
};

export default OptionsList;
