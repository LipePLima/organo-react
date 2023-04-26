import Collaborator from "../Collaborator";
import "./Team.css";

const Team = (props, exclude) => {
  return (
    (props.collaborators.length > 0) &&
    <section
      className="container__team"
      style={{ backgroundColor: props.colorPrimary }}
    >
      <input type="color" value={props.colorPrimary} className="team__selectColor"/>
      <h3 className="team__title" style={{ borderBottom: "4px solid" + props.colorSecundary }}>
        {props.title}
      </h3>
      <div className="content__collaborators">
        {props.collaborators.map((collaborator, index) => {

          return <Collaborator
            color={props.colorSecundary}
            key={index}
            name={collaborator.name}
            position={collaborator.position}
            image={collaborator.image}
            exclude={exclude}
          />
        })}
      </div>
    </section>
  );
};

export default Team;
