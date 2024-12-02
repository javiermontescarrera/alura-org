import { useState } from "react";
import "./Form.css";
import Field from "../Field";
import OptionsList from "../OptionsList";
import Button from "../Button";

const Form = (props) => {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [photo, setPhoto] = useState("");
    const [team, setTeam] = useState("");

    const [title, setTitle] = useState("");
    const [color, setColor] = useState("");
    
    const  { recordColaborator, createTeam } = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log("Formulario enviado", event);
        
        const newColaborator = {
            name,
            role,
            photo,
            team
        };
        // console.log(newColaborator);

        recordColaborator(newColaborator);
    }

    const handleTeamSubmit = (event) => {
        event.preventDefault();
        // console.log({ title, color });

        createTeam({ title, primaryColor: color });
    }

    return (
        <section className="form">
            <form onSubmit={handleSubmit}>
                <h2>Rellena el formulario para crear el colaborador</h2>
                <Field 
                    label="Nombre" 
                    placeholder="Ingresar nombre" 
                    required = {true} 
                    value = {name} 
                    setValue = {setName}
                />
                <Field 
                    label="Puesto" 
                    placeholder="Ingresar puesto" 
                    required 
                    value = {role} 
                    setValue = {setRole}
                />
                <Field 
                    label="Foto" 
                    placeholder="Ingresar link de imagen" 
                    required 
                    value = {photo} 
                    setValue = {setPhoto} 
                />
                <OptionsList 
                    label="Equipos" 
                    teams={props.teams}
                    value={team} 
                    setValue={setTeam}
                />
                <Button>Crear</Button>
            </form>
            <form onSubmit={handleTeamSubmit}>
                <h2>Rellena el formulario para crear el equipo</h2>
                <Field 
                    label="Titulo" 
                    placeholder="Ingresar titulo" 
                    required = {true} 
                    value = {title} 
                    setValue = {setTitle}
                />
                <Field 
                    label="Color" 
                    type="color"
                    placeholder="Ingresar color en Hex" 
                    required 
                    value = {color} 
                    setValue = {setColor}
                />
                <Button>Registrar equipo</Button>
            </form>
        </section>
    );
}

export default Form;