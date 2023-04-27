import { Fragment } from "react";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Collaborator.css";

const Collaborator = ({ favorite, color, id, name, position, image, exclude, bookmark }) => {
  const changeFavorite = () => {
    bookmark(id)
  }

  return (
    <Fragment>
      <div className="container__card">
        <AiFillCloseCircle
          size={25}
          className="card__delete"
          onClick={() => exclude(id)}
        />
        <div className="card__header" style={{ backgroundColor: color }}>
          <img src={image} alt={name} />
        </div>
        <div className="card__footer">
          <h4>{name}</h4>
          <h5>{position}</h5>
          <div className="favorite">
            {favorite 
              ? <AiFillHeart onClick={changeFavorite} color="#ff0000"/> 
              : <AiOutlineHeart onClick={changeFavorite} />
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Collaborator;
