import { Fragment } from "react";
import "./Button.css";

const Button = (props) => {
    return (
        <Fragment>
            <button className="button">
                {props.children}
            </button>
        </Fragment>
    )
};

export default Button;