import "./Field.css";

const Field = (props) => {
    // console.log(`props: ${JSON.stringify(props)}`);
    const { label, placeholder, required, value, type = "text" } = props;

    const modifiedPlaceHolder = `${placeholder}...`;


    const changeHandler = (event) => {
        // console.log(event.target.value);
        props.setValue(event.target.value);
    }

    return (
        <div className={`field ${type}-field`}>
            <label>{label}</label>
            <input 
                placeholder={modifiedPlaceHolder} 
                required={required} 
                value={value}
                onChange={changeHandler} 
                type={type}
            />
        </div>
    );
};

export default Field;