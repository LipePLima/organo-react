import "./OptionsList.css";

const OptionsList = (props) => {
  return (
    <div className="container__select">
      <label className="select__label">{props.label}</label>
      <select className="content__select">
        {props.itens.map( item => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default OptionsList;
