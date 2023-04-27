import hexToRgba from 'hex-to-rgba';
import Collaborator from "../Collaborator";
import "./Team.css";

const Team = (props) => {
  return (
    (props.collaborators.length > 0) &&
    <section
      className="container__team"
      style={{ backgroundColor: hexToRgba(props.color, '0.6') }}
    >
      <input onChange={ event => props.changeColor(event.target.value, props.idTeam)} type="color" value={props.color} className="team__selectColor"/>
      <h3 className="team__title" style={{ borderBottom: "4px solid" + props.color }}>
        {props.title}
      </h3>
      <div className="content__collaborators">
        {props.collaborators.map((collaborator, index) => {

          return <Collaborator
            color={props.color}
            key={index}
            id={collaborator.id}
            name={collaborator.name}
            position={collaborator.position}
            image={collaborator.image}
            exclude={props.exclude}
            favorite={collaborator.favorite}
            bookmark={props.bookmark}
          />
        })}
      </div>
    </section>
  );
};

export default Team;
