import Collaborator from "../collaborator";
import "./Team.css";

const Team = (props) => {
  return (
    (props.collaborators.length > 0) &&
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
        <div className="content__collaborators">
          {props.collaborators.map((collaborator) => (
            <Collaborator
              name={collaborator.name}
              position={collaborator.position}
              image={collaborator.image}
            />
          ))}
        </div>
      </section>

  );
};

export default Team;
