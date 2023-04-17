import "./Collaborator.css"

const Collaborator = ({name, position, image}) => {
    return (
        <div className="container__card">
            <div className="card__header">
                <img src={image} alt={name} />
            </div>
            <div className="card__footer">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Collaborator;
