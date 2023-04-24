import { Fragment } from "react";
import { AiFillCloseCircle } from 'react-icons/ai';
import "./Collaborator.css"

const Collaborator = ({color, name, position, image, exclude}) => {
    return (
        <Fragment>
            <div className="container__card">
                <AiFillCloseCircle size={25} className="card__delete" onClick={exclude} />
                <div className="card__header" style={{ backgroundColor: color}}>
                    <img src={image} alt={name} />
                </div>
                <div className="card__footer">
                    <h4>{name}</h4>
                    <h5>{position}</h5>
                </div>
            </div>
        </Fragment> 
    )
}

export default Collaborator;
