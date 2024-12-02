import hexToRgba from "hex-to-rgba";

import "./Team.css";
import Colaborator from "../Colaborator";

const Team = (props) => {
    // Destructuracion
    // const { id, title, primaryColor, secondaryColor } = props.data;
    const { id, title, primaryColor } = props.data;
    const { colaborators, deleteColaborator, updateColor, like } = props;

    const sectionStyle = {
        // backgroundColor: secondaryColor,
        backgroundColor: hexToRgba(primaryColor, 0.57),
    };

    const titleStyle = {
        borderColor: primaryColor,
    };

    return (
        <>
            {
                colaborators.length > 0 && 
                <section className="team" style={sectionStyle}>
                    <input 
                        className="input-color" 
                        type="color" 
                        // value={secondaryColor} 
                        value={primaryColor}
                        onChange={(event) => {
                            updateColor(event.target.value, id);
                        }}
                    />
                    <h3 style={titleStyle}>{title}</h3>
                    <div className="colaborators">
                        {
                            colaborators.map((colaborator, index) => 
                                <Colaborator 
                                    key={index}
                                    data={colaborator}
                                    primaryColor={primaryColor}
                                    deleteColaborator={deleteColaborator}
                                    like={like}
                                />
                            )
                        }
                    </div>
                </section>
            }
        </>
    );
}

export default Team;