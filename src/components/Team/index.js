import Collaborator from "../collaborator";
import "./Team.css";

const Team = (props) => {
  return (
    <section
      className="container__team"
      style={{ backgroundColor: props.colorPrimary }}
    >
      <h3
        className="team__title"
        style={{ borderBottom: "4px solid" + props.colorSecundary }}
      >
        {props.title}
      </h3>
      <Collaborator />
    </section>
  );
};

export default Team;
