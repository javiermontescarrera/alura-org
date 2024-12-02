import "./OptionsList.css";

const OptionsList = (props) => {
    
    const changeHandler = (event) => {
        props.setValue(event.target.value);
    }

    return (
        <div className="options-list">
            <label>{props.label}</label>
            <select 
                value={props.value} 
                onChange={changeHandler}
            >
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                {props.teams.map((team, index) => <option key={index}>{team}</option>)}
            </select>
        </div>
    );
};

export default OptionsList;