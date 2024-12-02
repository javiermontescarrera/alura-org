import "./Colaborator.css";
import { 
    IoCloseCircleSharp,
    IoHeartOutline,
    IoHeartSharp
 } from "react-icons/io5";

const Colaborator = (props) => {
    const { id, name, role, photo, fav } = props.data;
    const { primaryColor, deleteColaborator,like  } = props;

    return (
        <div className="colaborator">
            <IoCloseCircleSharp  className="delete-icon" onClick={() => deleteColaborator(id)} />
            <div className="header" style={{ backgroundColor: primaryColor }}>
                <img src={photo} alt={name} />
            </div>
            <div className="info">
                <h4>{name}</h4>
                <h5>{role}</h5>
                { 
                    fav ? 
                    <IoHeartSharp onClick={() => like(id)} color="red"/> 
                    : 
                    <IoHeartOutline onClick={() => like(id)}/> 
                }
            </div>
        </div>
    );
};

export default Colaborator;